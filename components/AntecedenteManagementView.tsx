"use client";

import { Box, Button, Paper, Tab, Tabs, TextField, Typography } from "@mui/material";
import { Edit, Search } from "lucide-react";
import { ReactNode, useState } from "react";
import PatientGeneralData from "./PatientGeneralData";
import { PatientDetailData } from "../services/patientService";

interface AntecedenteManagementViewProps {
  title: string;
  onBack: () => void;
  children: ReactNode;
  patientData?: PatientDetailData;
}

export default function AntecedenteManagementView({
  title,
  onBack,
  children,
  patientData,
}: AntecedenteManagementViewProps) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
          <Edit size={14} style={{ marginRight: 4 }} /> {title}
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

      <Paper variant="outlined" sx={{ p: 0, borderRadius: 1, minHeight: 400 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "#e0e0e0" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="datos del paciente tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Datos generales del paciente" />
            <Tab label="Datos laborales del paciente" />
          </Tabs>
        </Box>

        {tabValue === 0 && patientData && <PatientGeneralData data={patientData} />}

        {children}

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

