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
import { mockAntecedentes } from "../../services/antecedentesData";
type QuirurgicoWithDetails = (typeof mockAntecedentes)["quirurgicos"][number] & { fecha?: string; observacion?: string };
import { PatientDetailData } from "../../services/patientService";

interface QuirurgicosManagementViewProps {
  onBack: () => void;
  patientData?: PatientDetailData;
}

export default function QuirurgicosManagementView({
  onBack,
  patientData,
}: QuirurgicosManagementViewProps) {
  const [quirurgicos, setQuirurgicos] = useState<QuirurgicoWithDetails[]>(
    mockAntecedentes.quirurgicos.map((q) => ({ ...q, fecha: "", observacion: "" }))
  );

  const handleToggle = (id: number) => {
    setQuirurgicos((prev) => prev.map((q) => (q.id === id ? { ...q, selected: !q.selected } : q)));
  };

  const handleFechaChange = (id: number, value: string) => {
    setQuirurgicos((prev) => prev.map((q) => (q.id === id ? { ...q, fecha: value } : q)));
  };

  const handleObservacionChange = (id: number, value: string) => {
    setQuirurgicos((prev) => prev.map((q) => (q.id === id ? { ...q, observacion: value } : q)));
  };

  const handleRemove = (id: number) => {
    setQuirurgicos((prev) => prev.map((q) => (q.id === id ? { ...q, selected: false, fecha: "", observacion: "" } : q)));
  };

  const clearAll = () => {
    setQuirurgicos((prev) => prev.map((q) => ({ ...q, selected: false, fecha: "", observacion: "" })));
  };

  return (
    <AntecedenteManagementView
      title="Gestionar antecedentes quirúrgicos"
      onBack={onBack}
      patientData={patientData}
    >
      <SectionHeader title="Listado de antecedentes quirúrgicos" />
      <Box sx={{ p: 1.5, borderBottom: "1px solid #eee" }}>
        <Typography variant="caption">
          No existen antecedentes quirúrgicos registrados.
        </Typography>
      </Box>

      <SectionHeader title="Nuevos antecedentes quirúrgicos" />
      <Box sx={{ p: 1.5, borderBottom: "1px solid #eee" }}>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={3}>
            <EditField
              label="Capítulo"
              value="<Seleccione>"
              type="select"
              selectOptions={["<Seleccione>", "01", "02"]}
              handleChange={() => {}}
            />
          </Grid>
          <Grid item xs={3}>
            <EditField
              label="Grupo"
              value="<Seleccione>"
              type="select"
              selectOptions={["<Seleccione>", "01.0", "02.0"]}
              handleChange={() => {}}
            />
          </Grid>
          <Grid item xs={3}>
            <EditField
              label="Categoría"
              value="<Seleccione>"
              type="select"
              selectOptions={["<Seleccione>", "Función craneal", "Craneoplastia"]}
              handleChange={() => {}}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="caption"
              display="block"
              sx={{ mb: 0.5, fontWeight: "bold" }}
            >
              Código:
            </Typography>
            <TextField size="small" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="caption"
              display="block"
              sx={{ mb: 0.5, fontWeight: "bold" }}
            >
              Descripción:
            </Typography>
            <TextField size="small" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: 1, justifyContent: "flex-start" }}>
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

      <SectionHeader title="Listado de procedimientos quirúrgicos" />
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" width={30}></TableCell>
              <TableCell>
                Código <ChevronDown size={10} />
              </TableCell>
              <TableCell>
                Procedimientos quirúrgicos <ChevronDown size={10} />
              </TableCell>
              <TableCell>
                Categoría <ChevronDown size={10} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quirurgicos.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox size="small" checked={row.selected} onChange={() => handleToggle(row.id)} />
                </TableCell>
                <TableCell>{row.codigo}</TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.categoria}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SectionHeader title="Listado de procedimientos quirúrgicos seleccionados" />
      <Box sx={{ borderBottom: "1px solid #eee" }}>
        {quirurgicos.filter((q) => q.selected).length > 0 ? (
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
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Procedimiento | Categoría</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Fecha de intervención</TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "11px" }}>Observación</TableCell>
                    <TableCell width={50}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {quirurgicos.filter((q) => q.selected).map((row) => (
                    <TableRow key={row.id} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" }, "&:hover": { backgroundColor: "#f5f5f5" } }}>
                      <TableCell sx={{ fontSize: "11px" }}>{row.nombre} | {row.categoria}</TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          type="date"
                          value={row.fecha || ""}
                          onChange={(e) => handleFechaChange(row.id, e.target.value)}
                          InputLabelProps={{ shrink: true }}
                          sx={{
                            "& .MuiInputBase-root": { height: "28px", fontSize: "11px" },
                            width: "100%",
                          }}
                        />
                      </TableCell>
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
            <Typography variant="caption">No existen procedimientos quirúrgicos seleccionados.</Typography>
          </Box>
        )}
      </Box>
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
    </AntecedenteManagementView>
  );
}

