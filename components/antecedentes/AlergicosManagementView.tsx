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
import { useState } from "react";
import Grid from "@mui/material/GridLegacy";
import { ChevronDown, Search, Trash2 } from "lucide-react";
import AntecedenteManagementView from "../AntecedenteManagementView";
import SectionHeader from "../SectionHeader";
import EditField from "../EditField";
import PaginationControls from "../PaginationControls";
import { mockAntecedentes } from "../../services/antecedentesData";
import { PatientDetailData } from "../../services/patientService";

interface AlergicosManagementViewProps {
  onBack: () => void;
  patientData?: PatientDetailData;
}

export default function AlergicosManagementView({
  onBack,
  patientData,
}: AlergicosManagementViewProps) {
  const [alergicos, setAlergicos] = useState(
    mockAntecedentes.alergicos.map((a) => ({ ...a, observacion: "" }))
  );

  const handleToggle = (id: number) => {
    setAlergicos((prev) => prev.map((a) => (a.id === id ? { ...a, selected: !a.selected } : a)));
  };

  const handleObservacionChange = (id: number, value: string) => {
    setAlergicos((prev) => prev.map((a) => (a.id === id ? { ...a, observacion: value } : a)));
  };

  const handleRemove = (id: number) => {
    setAlergicos((prev) => prev.map((a) => (a.id === id ? { ...a, selected: false, observacion: "" } : a)));
  };

  const clearAll = () => {
    setAlergicos((prev) => prev.map((a) => ({ ...a, selected: false, observacion: "" })));
  };

  return (
    <AntecedenteManagementView
      title="Gestionar antecedentes alérgicos"
      onBack={onBack}
      patientData={patientData}
    >
      <SectionHeader title="Listado de antecedentes alérgicos" />
      <Box sx={{ p: 1.5, borderBottom: "1px solid #eee" }}>
        <Typography variant="caption">
          No existen antecedentes alérgicos registrados.
        </Typography>
      </Box>

      <SectionHeader title="Nuevos antecedentes alérgicos" />
      <Box sx={{ p: 1.5, borderBottom: "1px solid #eee" }}>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={3}>
            <Typography
              variant="caption"
              display="block"
              sx={{ mb: 0.5, fontWeight: "bold" }}
            >
              Nombre:
            </Typography>
            <TextField size="small" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="caption"
              display="block"
              sx={{ mb: 0.5, fontWeight: "bold" }}
            >
              Descripción:
            </Typography>
            <TextField size="small" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <EditField
              label="Clasificación"
              value="<Seleccione>"
              type="select"
              selectOptions={["<Seleccione>", "Alimentos", "Medicamentos", "Polen"]}
              handleChange={() => {}}
            />
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              color="success"
              size="small"
              startIcon={<Search size={14} />}
              sx={{ bgcolor: "#000000", mt: 1, color: 'white' }}
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Box>

      <SectionHeader title="Listado de alergias" />
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
                Clasificación <ChevronDown size={10} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alergicos.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox size="small" checked={row.selected} onChange={() => handleToggle(row.id)} />
                </TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.clasificacion}</TableCell>
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

      <SectionHeader title="Listado de alergias seleccionadas" />
      <Box sx={{ borderBottom: "1px solid #eee" }}>
        {alergicos.filter((a) => a.selected).length > 0 ? (
          <>
            <Box
              sx={{
                background: "linear-gradient(to bottom, #000000 0%, #000000 100%)",
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
                onClick={clearAll}
                sx={{ fontSize: "10px", color: "white", minHeight: "auto", py: 0 }}
              >
                Eliminar todas
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Nombre | Clasificación</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Observación</TableCell>
                    <TableCell width={50}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {alergicos.filter((a) => a.selected).map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                        "&:hover": { backgroundColor: "#f5f5f5" },
                      }}
                    >
                      <TableCell sx={{ fontSize: "11px" }}>{row.nombre} | {row.clasificacion}</TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          variant="outlined"
                          value={row.observacion || ""}
                          onChange={(e) => handleObservacionChange(row.id, e.target.value)}
                          placeholder="Ingrese observación"
                          multiline
                          rows={1}
                          sx={{ "& .MuiInputBase-root": { fontSize: "11px" }, width: "100%" }}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton size="small" onClick={() => handleRemove(row.id)} sx={{ color: "#888", "&:hover": { color: "#d32f2f" } }}>
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
          <Box sx={{ p: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="caption">No existen alergias seleccionadas.</Typography>
          </Box>
        )}
      </Box>
    </AntecedenteManagementView>
  );
}

