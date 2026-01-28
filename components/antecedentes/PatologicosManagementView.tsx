"use client";

import {
  Box,
  Button,
  Checkbox,
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
import { ChevronDown, Search } from "lucide-react";
import AntecedenteManagementView from "../AntecedenteManagementView";
import SectionHeader from "../SectionHeader";
import EditField from "../EditField";
import PaginationControls from "../PaginationControls";
import { mockAntecedentes } from "../../services/antecedentesData";
import { PatientDetailData } from "../../services/patientService";

interface PatologicosManagementViewProps {
  onBack: () => void;
  patientData?: PatientDetailData;
}

export default function PatologicosManagementView({
  onBack,
  patientData,
}: PatologicosManagementViewProps) {
  const mockData = mockAntecedentes.patologicos;

  return (
    <AntecedenteManagementView
      title="Gestionar antecedentes patológicos personales"
      onBack={onBack}
      patientData={patientData}
    >
      <SectionHeader title="Listado de antecedentes patológicos personales" />
      <Box sx={{ p: 1.5, borderBottom: "1px solid #eee" }}>
        <Typography variant="caption">
          No existen antecedentes patológicos personales registrados.
        </Typography>
      </Box>

      <SectionHeader title="Nuevos antecedentes patológicos personales" />
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
              selectOptions={["<Seleccione>", "Diabetes Mellitus", "Hipertensión"]}
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

      <SectionHeader title="Listado de enfermedades" />
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
            {mockData.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox size="small" />
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
    </AntecedenteManagementView>
  );
}

