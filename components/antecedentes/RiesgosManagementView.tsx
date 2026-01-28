"use client";

import {
  Box,
  Button,
  Checkbox,
  IconButton,
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
import { mockAntecedentes, AntecedenteRiesgo } from "../../services/antecedentesData";
import { PatientDetailData } from "../../services/patientService";

// Extender AntecedenteRiesgo para incluir fecha y observacion
interface RiesgoWithDetails extends AntecedenteRiesgo {
  fecha?: string;
  observacion?: string;
}

interface RiesgosManagementViewProps {
  onBack: () => void;
  patientData?: PatientDetailData;
}

export default function RiesgosManagementView({
  onBack,
  patientData,
}: RiesgosManagementViewProps) {
  const [riesgos, setRiesgos] = useState<RiesgoWithDetails[]>(
    mockAntecedentes.riesgos.map(riesgo => ({ ...riesgo, fecha: "", observacion: "" }))
  );

  const handleRiesgoToggle = (id: number) => {
    setRiesgos((prev) =>
      prev.map((riesgo) =>
        riesgo.id === id ? { ...riesgo, selected: !riesgo.selected, fecha: riesgo.selected ? riesgo.fecha : "", observacion: riesgo.selected ? riesgo.observacion : "" } : riesgo
      )
    );
  };

  const handleRiesgoFechaChange = (id: number, value: string) => {
    setRiesgos((prev) =>
      prev.map((riesgo) =>
        riesgo.id === id ? { ...riesgo, fecha: value } : riesgo
      )
    );
  };

  const handleRiesgoObservacionChange = (id: number, value: string) => {
    setRiesgos((prev) =>
      prev.map((riesgo) =>
        riesgo.id === id ? { ...riesgo, observacion: value } : riesgo
      )
    );
  };

  const handleRemoveRiesgo = (id: number) => {
    setRiesgos((prev) =>
      prev.map((riesgo) =>
        riesgo.id === id ? { ...riesgo, selected: false, fecha: "", observacion: "" } : riesgo
      )
    );
  };

  const clearAllRiesgos = () => {
    setRiesgos((prev) => prev.map((riesgo) => ({ ...riesgo, selected: false, fecha: "", observacion: "" })));
  };

  return (
    <AntecedenteManagementView
      title="Gestionar antecedentes de riesgos y condiciones"
      onBack={onBack}
      patientData={patientData}
    >
      <SectionHeader title="Listado de antecedentes de riesgos o condiciones" />
      <Box sx={{ p: 1.5, borderBottom: "1px solid #eee" }}>
        <Typography variant="caption">
          No existen antecedentes de riesgos o condiciones registrados.
        </Typography>
      </Box>

      <SectionHeader title="Nuevos antecedentes de riesgos o condiciones" />
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
              label="Grupo"
              value="<Seleccione>"
              type="select"
              selectOptions={["<Seleccione>", "Riesgos en el Recién Nacido", "Embarazo",
"Otros factores de riesgo",
"Puerperio",
"Riesgo laboral",
"Riesgo materno perinatal",
"Riesgo por hábito de fumar",
"Riesgo Preconcepcional",
"Riesgos en el lactante",
"Riesgos en el Recién Nacido",
"Riesgos por contacto de enfermedades transmisibles",
"Riesgos sociales"]}
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

      <SectionHeader title="Listado de riesgos o condiciones" />
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
                Grupo <ChevronDown size={10} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {riesgos.map((row) => (
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
                    onChange={() => handleRiesgoToggle(row.id)}
                  />
                </TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.grupo}</TableCell>
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

      <SectionHeader title="Listado de riesgos o condiciones seleccionados" />
      <Box sx={{ borderBottom: "1px solid #eee" }}>
        {riesgos.filter((r) => r.selected).length > 0 ? (
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
                onClick={clearAllRiesgos}
                sx={{ fontSize: "10px", color: "white", minHeight: "auto", py: 0 }}
              >
                Eliminar todas
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Nombre | Grupo</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Fecha</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Observación</TableCell>
                    <TableCell width={50}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {riesgos
                    .filter((r) => r.selected)
                    .map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                          "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                      >
                        <TableCell sx={{ fontSize: "11px" }}>
                          {row.nombre} | {row.grupo}
                        </TableCell>
                        <TableCell>
                          <TextField
                            size="small"
                            type="date"
                            value={row.fecha || ""}
                            onChange={(e) => handleRiesgoFechaChange(row.id, e.target.value)}
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
                            onChange={(e) => handleRiesgoObservacionChange(row.id, e.target.value)}
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
                            onClick={() => handleRemoveRiesgo(row.id)}
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
              No existen riesgos o condiciones seleccionados.
            </Typography>
          </Box>
        )}
      </Box>
    </AntecedenteManagementView>
  );
}

