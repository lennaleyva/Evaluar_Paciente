"use client";

import {
  Box,
  Button,
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
import {
  Search,
  ChevronDown,
  Eye,
  Edit,
  X,
  ChevronLeft,
} from "lucide-react";
import { PatientRecord } from "../services/patientService";
import SectionHeader from "./SectionHeader";

interface PatientListProps {
  patients: PatientRecord[];
  onNavigate: (patientId: string) => void;
  onNavigateToEdit?: (patientId: string) => void;
}

export default function PatientList({
  patients,
  onNavigate,
  onNavigateToEdit,
}: PatientListProps) {
  return (
    <>
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
          Gestionar hoja frontal
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

      <Paper variant="outlined" sx={{ mb: 2, borderRadius: 1, overflow: "hidden" }}>
        <SectionHeader title="Criterios de búsqueda" />
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography variant="caption" display="block" sx={{ mb: 0.5 }}>
              No. HC:
            </Typography>
            <TextField size="small" variant="outlined" sx={{ width: 150 }} />
          </Box>
          <Box sx={{ mt: 2.5, display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              color="success"
              size="small"
              startIcon={<Search size={14} />}
              sx={{ bgcolor: "#333333" }}
            >
              Buscar
            </Button>
            <Button
              variant="contained"
              color="inherit"
              size="small"
              startIcon={<X size={14} />}
              sx={{ bgcolor: "#777", color: "white" }}
            >
              Cancelar
            </Button>
          </Box>
          <Box sx={{ mt: 2.5, ml: 1 }}>
            <Link
              href="#"
              variant="caption"
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#1b5e20",
                gap: 0.5,
              }}
            >
              <Search size={12} /> Búsqueda avanzada
            </Link>
          </Box>
        </Box>
      </Paper>

      <Paper variant="outlined" sx={{ borderRadius: 1, overflow: "hidden" }}>
        <Box
          sx={{
            background: "linear-gradient(to bottom, #666666 0%, #333333 100%)",
            color: "white",
            px: 2,
            py: 0.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" fontWeight="bold">
            Listado de Historias Clínicas
          </Typography>
          <ChevronLeft
            size={14}
            style={{ transform: "rotate(-90deg)" }}
            color="#ccc"
          />
        </Box>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell width={40}>Foto</TableCell>
                <TableCell>
                  No. HC <ChevronDown size={10} />
                </TableCell>
                <TableCell>
                  Nombre (s) <ChevronDown size={10} />
                </TableCell>
                <TableCell>
                  Primer apellido <ChevronDown size={10} />
                </TableCell>
                <TableCell>
                  Segundo apellido <ChevronDown size={10} />
                </TableCell>
                <TableCell>
                  No. identidad <ChevronDown size={10} />
                </TableCell>
                <TableCell>
                  Fecha de nacimiento <ChevronDown size={10} />
                </TableCell>
                <TableCell>Sexo</TableCell>
                <TableCell width={60}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <TableCell>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        bgcolor: "#ccc",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: 12,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        U
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.primerApellido}</TableCell>
                  <TableCell>{row.segundoApellido}</TableCell>
                  <TableCell>{row.identidad}</TableCell>
                  <TableCell>{row.nacimiento}</TableCell>
                  <TableCell>{row.sexo}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: 0.5 }}>
                      <IconButton
                        size="small"
                        onClick={() => onNavigate(row.id)}
                        sx={{ padding: 0 }}
                      >
                        <Eye size={16} color="#666" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => onNavigateToEdit?.(row.id)}
                        sx={{ padding: 0 }}
                      >
                        <Edit size={16} color="#666" />
                      </IconButton>
                    </Box>
                  </TableCell>
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
          <Box sx={{ display: "flex", gap: 1 }}>
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
          <Typography variant="caption" fontWeight="bold">
          </Typography>
        </Box>
      </Paper>
    </>
  );
}

