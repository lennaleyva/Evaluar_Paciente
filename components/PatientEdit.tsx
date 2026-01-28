"use client";

import {
  Box,
  Button,
  Checkbox,
  Collapse,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { PatientDetailData } from "../services/patientService";
import { selectOptions, occupationsData, Occupation } from "../services/formOptions";
import SectionHeader from "./SectionHeader";
import EditField from "./EditField";

// Extender Occupation para incluir centroTrabajo
interface OccupationWithCentro extends Occupation {
  centroTrabajo?: string;
}

interface PatientEditProps {
  detailData: PatientDetailData;
  onBack: () => void;
  onNavigateToManagement?: (viewKey: string) => void;
}

export default function PatientEdit({
  detailData,
  onBack,
  onNavigateToManagement,
}: PatientEditProps) {
  // Asegurar que aboRh tenga un valor válido que coincida con las opciones
  const initialAboRh = 
    selectOptions.aboRh.includes(detailData.aboRh) 
      ? detailData.aboRh 
      : "<Seleccione>";
  
  const [formData, setFormData] = useState<PatientDetailData>({
    ...detailData,
    aboRh: initialAboRh,
  });
  const [openSections, setOpenSections] = useState({
    riesgos: false,
    discapacidades: false,
    alergicos: false,
    personales: false,
    familiares: false,
    quirurgicos: false,
  });
  const [occupations, setOccupations] = useState<OccupationWithCentro[]>(
    occupationsData.map(occ => ({ ...occ, centroTrabajo: "" }))
  );
  const [selectedCategoria, setSelectedCategoria] = useState<string>("<Seleccione>");
  
  // Obtener categorías únicas de las ocupaciones
  const categoriasUnicas = [
    "<Seleccione>",
    ...Array.from(new Set(occupationsData.map((occ) => occ.categoria))),
  ];

  const handleFormChange = (key: keyof PatientDetailData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggle = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleOccupationToggle = (id: string) => {
    setOccupations((prev) =>
      prev.map((occ) =>
        occ.id === id ? { ...occ, selected: !occ.selected, centroTrabajo: occ.selected ? occ.centroTrabajo : "" } : occ
      )
    );
  };

  const handleCentroTrabajoChange = (id: string, value: string) => {
    setOccupations((prev) =>
      prev.map((occ) =>
        occ.id === id ? { ...occ, centroTrabajo: value } : occ
      )
    );
  };

  const handleRemoveOccupation = (id: string) => {
    setOccupations((prev) =>
      prev.map((occ) =>
        occ.id === id ? { ...occ, selected: false, centroTrabajo: "" } : occ
      )
    );
  };

  const clearAllOccupations = () => {
    setOccupations((prev) => prev.map((occ) => ({ ...occ, selected: false, centroTrabajo: "" })));
  };

  const GestionLink = (text: string, viewKey: string) => (
    <Link
      href="#"
      variant="caption"
      sx={{ color: "white", display: "flex", alignItems: "center" }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onNavigateToManagement?.(viewKey);
      }}
    >
      <Edit size={12} style={{ marginRight: 4 }} /> {text}
    </Link>
  );

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
          borderBottom: "1px solid #ccc",
          pb: 1,
          background: "linear-gradient(to bottom, #fff 0%, #f2f2f2 100%)",
          px: 2,
          borderRadius: 1,
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold" color="primary">
          <Edit size={14} style={{ marginRight: 4 }} /> Modificar hoja frontal
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            variant="outlined"
            placeholder="Buscar"
            size="small"
            InputProps={{
              endAdornment: <Search size={14} color="gray" />,
            }}
            sx={{ width: 180 }}
          />
        </Box>
      </Box>

      <Paper variant="outlined" sx={{ p: 0, borderRadius: 1 }}>
        <SectionHeader title="Datos de la persona" />
        <Box sx={{ p: 1.5 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <EditField
                label="Nombre (s)"
                value={formData.nombre}
                handleChange={(v) => handleFormChange("nombre", v)}
              />
              <EditField
                label="No. identidad"
                value={formData.identidad}
                handleChange={(v) => handleFormChange("identidad", v)}
              />
              <EditField
                label="Estado civil"
                value={formData.estadoCivil}
                type="select"
                selectOptions={selectOptions.estadoCivil}
                handleChange={(v) => handleFormChange("estadoCivil", v)}
              />
            </Grid>
            <Grid item xs={4}>
              <EditField
                label="Primer apellido"
                value={formData.primerApellido}
                handleChange={(v) => handleFormChange("primerApellido", v)}
              />
              <EditField
                label="Fecha de nacimiento"
                value={formData.nacimiento}
                type="date"
                handleChange={(v) => handleFormChange("nacimiento", v)}
              />
              <EditField
                label="Sexo"
                value={formData.sexo}
                handleChange={(v) => handleFormChange("sexo", v)}
              />
            </Grid>
            <Grid item xs={4}>
              <EditField
                label="Segundo apellido"
                value={formData.segundoApellido}
                handleChange={(v) => handleFormChange("segundoApellido", v)}
              />
              <EditField
                label="Color de piel"
                value={formData.colorPiel}
                type="select"
                selectOptions={selectOptions.colorPiel}
                handleChange={(v) => handleFormChange("colorPiel", v)}
              />
              <EditField
                label="Nación"
                value={formData.nacion}
                type="select"
                selectOptions={selectOptions.nacion}
                handleChange={(v) => handleFormChange("nacion", v)}
              />
            </Grid>
          </Grid>
        </Box>

        <SectionHeader title="Datos adicionales" />
        <Box sx={{ p: 1.5 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <EditField
                label="No. HC"
                value={formData.hc}
                handleChange={(v) => handleFormChange("hc", v)}
              />
              <EditField
                label="Tipo de HC"
                value={formData.tipoHc}
                type="select"
                selectOptions={selectOptions.tipoHc}
                handleChange={(v) => handleFormChange("tipoHc", v)}
              />
            </Grid>
            <Grid item xs={4}>
              <EditField
                label="Nivel educacional"
                value={formData.nivelEducacional}
                type="select"
                selectOptions={selectOptions.nivelEducacional}
                handleChange={(v) => handleFormChange("nivelEducacional", v)}
              />
              <EditField
                label="Tipo de paciente"
                value={formData.tipoPaciente}
                type="select"
                selectOptions={selectOptions.tipoPaciente}
                handleChange={(v) => handleFormChange("tipoPaciente", v)}
              />
            </Grid>
            <Grid item xs={4}>
              <EditField
                label="ABO/Rh"
                value={formData.aboRh}
                type="select"
                selectOptions={selectOptions.aboRh}
                handleChange={(v) => handleFormChange("aboRh", v)}
              />
            </Grid>
          </Grid>
        </Box>

        <SectionHeader title="Seleccionar ocupaciones" />
        <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
          <Grid container alignItems="flex-end" spacing={2}>
            <Grid item xs={4}>
              <Typography
                variant="caption"
                display="block"
                sx={{ mb: 0.5, fontWeight: "bold" }}
              >
                Nombre:
              </Typography>
              <TextField size="small" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <EditField
                label="Categoría"
                value={selectedCategoria}
                type="select"
                selectOptions={categoriasUnicas}
                handleChange={(v) => setSelectedCategoria(v)}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="success"
                size="small"
                startIcon={<Search size={14} />}
                sx={{ bgcolor: "#333333", mt: 1 }}
              >
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ p: 0, borderBottom: "1px solid #eee" }}>
          <Box
            sx={{
              background:
                "linear-gradient(to bottom, #666666 0%, #333333 100%)",
              color: "white",
              px: 2,
              py: 0.5,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="caption" fontWeight="bold">
              Listado de ocupaciones
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="caption" sx={{ mr: 1 }}>
                Seleccionar todas
              </Typography>
              <Checkbox
                size="small"
                sx={{
                  color: "white",
                  "&.Mui-checked": { color: "white" },
                }}
              />
            </Box>
          </Box>
          <TableContainer sx={{ maxHeight: 250 }}>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox" width={30}></TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Categoría</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {occupations.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                      "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                  >
                    <TableCell padding="checkbox" width={30}>
                      <Checkbox
                        size="small"
                        checked={row.selected}
                        onChange={() => handleOccupationToggle(row.id)}
                      />
                    </TableCell>
                    <TableCell>{row.nombre}</TableCell>
                    <TableCell>{row.categoria}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "1px solid #e0e0e0",
              gap: 1,
            }}
          >
            <Typography variant="caption" sx={{ color: "#b0b0b0" }}>
              |◀
            </Typography>
            <Typography variant="caption" sx={{ color: "#b0b0b0" }}>
              ◀
            </Typography>
            <Typography variant="caption" sx={{ color: "#b0b0b0" }}>
              ▶
            </Typography>
            <Typography variant="caption" sx={{ color: "#b0b0b0" }}>
              ▶|
            </Typography>
          </Box>
        </Box>

        <SectionHeader title="Listado de ocupaciones seleccionadas" />
        <Box sx={{ borderBottom: "1px solid #eee" }}>
          {occupations.filter((o) => o.selected).length > 0 ? (
            <>
              <Box
                sx={{
                  background: "linear-gradient(to bottom, #666666 0%, #333333 100%)",
                  color: "white",
                  px: 2,
                  py: 0.5,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="text"
                  size="small"
                  onClick={clearAllOccupations}
                  sx={{ fontSize: "10px", color: "white", minHeight: "auto", py: 0 }}
                >
                  Eliminar todas
                </Button>
              </Box>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Nombre</TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Categoría</TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Nombre del centro de trabajo</TableCell>
                      <TableCell width={50}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {occupations
                      .filter((o) => o.selected)
                      .map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          <TableCell sx={{ fontSize: "11px" }}>{row.nombre}</TableCell>
                          <TableCell sx={{ fontSize: "11px" }}>{row.categoria}</TableCell>
                          <TableCell>
                            <TextField
                              size="small"
                              variant="outlined"
                              value={row.centroTrabajo || ""}
                              onChange={(e) => handleCentroTrabajoChange(row.id, e.target.value)}
                              placeholder="Ingrese el centro de trabajo"
                              sx={{ 
                                "& .MuiInputBase-root": { 
                                  height: "28px",
                                  fontSize: "11px"
                                }
                              }}
                              fullWidth
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton
                              size="small"
                              onClick={() => handleRemoveOccupation(row.id)}
                              sx={{ color: "#888", "&:hover": { color: "#d32f2f" } }}
                            >
                              <Trash2 size={14} />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <Box
              sx={{
                p: 1.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">
                No existe información a mostrar.
              </Typography>
            </Box>
          )}
        </Box>

        <SectionHeader
          title="Antecedentes de riesgos o condiciones"
          showArrows={true}
          isOpen={openSections.riesgos}
          onToggle={() => handleToggle("riesgos")}
          actionComponent={GestionLink(
            "Gestionar antecedentes de riesgos y condiciones",
            "riesgos-management"
          )}
        />
        <Collapse in={openSections.riesgos}>
          <Box sx={{ p: 1.5 }}>
            <Typography variant="caption">
              No existen antecedentes de riesgos o condiciones registrados.
            </Typography>
          </Box>
        </Collapse>

        <SectionHeader
          title="Antecedentes de discapacidades y minusvalías"
          showArrows={true}
          isOpen={openSections.discapacidades}
          onToggle={() => handleToggle("discapacidades")}
          actionComponent={GestionLink(
            "Gestionar antecedentes de discapacidades y minusvalías",
            "discapacidades-management"
          )}
        />
        <Collapse in={openSections.discapacidades}>
          <Box sx={{ p: 1.5 }}>
            <Typography variant="caption">
              No existen antecedentes de discapacidades y minusvalías
              registrados.
            </Typography>
          </Box>
        </Collapse>

        <SectionHeader
          title="Antecedentes alérgicos"
          showArrows={true}
          isOpen={openSections.alergicos}
          onToggle={() => handleToggle("alergicos")}
          actionComponent={GestionLink(
            "Gestionar antecedentes alérgicos",
            "alergicos-management"
          )}
        />
        <Collapse in={openSections.alergicos}>
          <Box sx={{ p: 1.5 }}>
            <Typography variant="caption">
              No existen antecedentes alérgicos registrados.
            </Typography>
          </Box>
        </Collapse>

        <SectionHeader
          title="Antecedentes patológicos personales"
          showArrows={true}
          isOpen={openSections.personales}
          onToggle={() => handleToggle("personales")}
          actionComponent={GestionLink(
            "Gestionar antecedentes patológicos personales",
            "patologicos-management"
          )}
        />
        <Collapse in={openSections.personales}>
          <Box sx={{ p: 1.5 }}>
            <Typography variant="caption">
              No existe información a mostrar.
            </Typography>
          </Box>
        </Collapse>

        <SectionHeader
          title="Listado de antecedentes familiares"
          showArrows={true}
          isOpen={openSections.familiares}
          onToggle={() => handleToggle("familiares")}
          actionComponent={GestionLink(
            "Gestionar listado de antecedentes familiares",
            "familiares-management"
          )}
        />
        <Collapse in={openSections.familiares}>
          <Box sx={{ p: 1.5 }}>
            <Typography variant="caption">
              No existe información a mostrar.
            </Typography>
          </Box>
        </Collapse>

        <SectionHeader
          title="Listado de antecedentes quirúrgicos"
          showArrows={true}
          isOpen={openSections.quirurgicos}
          onToggle={() => handleToggle("quirurgicos")}
          actionComponent={GestionLink(
            "Gestionar listado de antecedentes quirúrgicos",
            "quirurgicos-management"
          )}
        />
        <Collapse in={openSections.quirurgicos}>
          <Box sx={{ p: 1.5 }}>
            <Typography variant="caption">
              No existe información a mostrar.
            </Typography>
          </Box>
        </Collapse>

        <SectionHeader title="Grupo dispensarial" />
        <Box sx={{ p: 1.5 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <EditField
                label="Grupo dispensarial"
                value={formData.grupoDispensarial}
                type="select"
                selectOptions={selectOptions.grupoDispensarial}
                handleChange={(v) => handleFormChange("grupoDispensarial", v)}
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            p: 1,
            display: "flex",
            justifyContent: "flex-end",
            borderTop: "1px solid #ccc",
            mt: 2,
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            color="success"
            size="small"
            sx={{ bgcolor: "#333333", minWidth: 80 }}
          >
            Aceptar
          </Button>
          <Button
            variant="contained"
            color="inherit"
            size="small"
            onClick={onBack}
            sx={{ bgcolor: "#777", color: "white", minWidth: 80 }}
          >
            Cancelar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

