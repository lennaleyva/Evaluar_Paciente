"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
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
import { ChevronDown, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import AntecedenteManagementView from "../AntecedenteManagementView";
import SectionHeader from "../SectionHeader";
import EditField from "../EditField";
import PaginationControls from "../PaginationControls";
import { mockAntecedentes, AntecedenteDiscapacidad } from "../../services/antecedentesData";
import { PatientDetailData } from "../../services/patientService";

// Extender AntecedenteDiscapacidad para incluir fecha, observacion y rcie
interface DiscapacidadWithDetails extends AntecedenteDiscapacidad {
  fecha?: string;
  observacion?: string;
  rcie?: string;
}

interface DiscapacidadesManagementViewProps {
  onBack: () => void;
  patientData?: PatientDetailData;
}

export default function DiscapacidadesManagementView({
  onBack,
  patientData,
}: DiscapacidadesManagementViewProps) {
  const [discapacidades, setDiscapacidades] = useState<DiscapacidadWithDetails[]>(
    mockAntecedentes.discapacidades.map(disc => ({ ...disc, fecha: "", observacion: "", rcie: "<Seleccione>" }))
  );

  const handleDiscapacidadToggle = (id: number) => {
    setDiscapacidades((prev) =>
      prev.map((disc) =>
        disc.id === id ? { ...disc, selected: !disc.selected, fecha: disc.selected ? disc.fecha : "", observacion: disc.selected ? disc.observacion : "", rcie: disc.selected ? disc.rcie : "<Seleccione>" } : disc
      )
    );
  };

  const handleDiscapacidadFechaChange = (id: number, value: string) => {
    setDiscapacidades((prev) =>
      prev.map((disc) =>
        disc.id === id ? { ...disc, fecha: value } : disc
      )
    );
  };

  const handleDiscapacidadObservacionChange = (id: number, value: string) => {
    setDiscapacidades((prev) =>
      prev.map((disc) =>
        disc.id === id ? { ...disc, observacion: value } : disc
      )
    );
  };

  const handleDiscapacidadRcieChange = (id: number, value: string) => {
    setDiscapacidades((prev) =>
      prev.map((disc) =>
        disc.id === id ? { ...disc, rcie: value } : disc
      )
    );
  };

  const handleRemoveDiscapacidad = (id: number) => {
    setDiscapacidades((prev) =>
      prev.map((disc) =>
        disc.id === id ? { ...disc, selected: false, fecha: "", observacion: "", rcie: "<Seleccione>" } : disc
      )
    );
  };

  const clearAllDiscapacidades = () => {
    setDiscapacidades((prev) => prev.map((disc) => ({ ...disc, selected: false, fecha: "", observacion: "", rcie: "<Seleccione>" })));
  };

  return (
    <AntecedenteManagementView
      title="Gestionar antecedentes de discapacidades y minusvalías"
      onBack={onBack}
      patientData={patientData}
    >
      <SectionHeader title="Listado de antecedentes de discapacidades y minusvalías" />
      <Box sx={{ p: 1.5, borderBottom: "1px solid #eee" }}>
        <Typography variant="caption">
          No existen antecedentes de discapacidades y minusvalías registrados.
        </Typography>
      </Box>

      <SectionHeader title="Nuevos antecedentes de discapacidades y minusvalías" />
      <Box sx={{ p: 1.5, borderBottom: "1px solid #eee" }}>
        <Grid container spacing={2} alignItems="flex-end">
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
              label="Subgrupo"
              value="<Seleccione>"
              type="select"
              selectOptions={[
                "<Seleccione>",
                "Afasias",
                "Ausencia de miembros o parte de su estructura (malformaciones congénitas o amputación)",
                "Baja visión",
                "Ceguera",
                "Disartrias",
                "Disfonías",
                "Hiperrinolalias",
                "Hipoacúsicos",
                "Laringectomías",
                "Marcadas deformaciones de la columna vertebral",
                "Otras Discapacidades",
                "Otras discapacidades del Sistema Nervioso",
                "Parálisis y paresias de miembros inferiores",
                "Parálisis y paresias de miembros superiores",
                "Retraso del desarrollo del lenguaje",
                "Sordoceguera con deficiencia auditiva congénita y pérdida de la visión adquirida",
                "Sordoceguera congénita",
                "Sordoceguera con una deficiencia visual congénita y pérdida auditiva adquirida",
                "Sordoceguera con una deficiencia visual y pérdida auditiva adquiridas",
                "Sordos",
                "Tartamudez",
                "Trastornos de la coordinación de movimientos y/o tono muscular"
              ]}
              handleChange={() => {}}
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", gap: 1 }}>
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

      <SectionHeader title="Listado de discapacidades y minusvalías" />
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" width={30}></TableCell>
              <TableCell>
                Nombre <ChevronDown size={10} />
              </TableCell>
              <TableCell>
                Descripción <ChevronDown size={10} />
              </TableCell>
              <TableCell>
                Subgrupo <ChevronDown size={10} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {discapacidades.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox 
                    size="small" 
                    checked={row.selected}
                    onChange={() => handleDiscapacidadToggle(row.id)}
                  />
                </TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.subgrupo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <PaginationControls />
        <Typography variant="caption" fontWeight="bold">
  
        </Typography>
      </Box>

      <SectionHeader title="Listado de discapacidades y minusvalías seleccionadas" />
      <Box sx={{ borderBottom: "1px solid #eee" }}>
        {discapacidades.filter((d) => d.selected).length > 0 ? (
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
                onClick={clearAllDiscapacidades}
                sx={{ fontSize: "10px", color: "white", minHeight: "auto", py: 0 }}
              >
                Eliminar todas
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Nombre | Subgrupo</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>RCie discapacidad</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Fecha</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Observación</TableCell>
                    <TableCell width={50}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {discapacidades
                    .filter((d) => d.selected)
                    .map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                          "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                      >
                        <TableCell sx={{ fontSize: "11px" }}>
                          {row.nombre} | {row.subgrupo}
                        </TableCell>
                        <TableCell>
                          <EditField
                            label=""
                            value={row.rcie || "<Seleccione>"}
                            type="select"
                            selectOptions={["<Seleccione>", "RCie 1", "RCie 2", "RCie 3"]}
                            handleChange={(v) => handleDiscapacidadRcieChange(row.id, v)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            size="small"
                            type="date"
                            value={row.fecha || ""}
                            onChange={(e) => handleDiscapacidadFechaChange(row.id, e.target.value)}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            sx={{ 
                              "& .MuiInputBase-root": { 
                                height: "28px",
                                fontSize: "11px"
                              },
                              width: "100%"
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            size="small"
                            variant="outlined"
                            value={row.observacion || ""}
                            onChange={(e) => handleDiscapacidadObservacionChange(row.id, e.target.value)}
                            placeholder="Ingrese observación"
                            multiline
                            rows={1}
                            sx={{ 
                              "& .MuiInputBase-root": { 
                                fontSize: "11px"
                              },
                              width: "100%"
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton
                            size="small"
                            onClick={() => handleRemoveDiscapacidad(row.id)}
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
              No existen discapacidades y minusvalías seleccionadas.
            </Typography>
          </Box>
        )}
      </Box>
    </AntecedenteManagementView>
  );
}

