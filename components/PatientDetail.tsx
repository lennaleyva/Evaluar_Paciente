"use client";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { Search } from "lucide-react";
import { PatientDetailData } from "../services/patientService";
import SectionHeader from "./SectionHeader";
import DataField from "./DataField";

interface PatientDetailProps {
  detailData: PatientDetailData;
  onBack: () => void;
}

export default function PatientDetail({
  detailData,
  onBack,
}: PatientDetailProps) {
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
          Ver hoja frontal
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
        <SectionHeader title="Datos de la persona" />
        <Box sx={{ p: 1.5 }}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <DataField label="Nombre (s)" value={detailData.nombre} />
              <DataField label="No. identidad" value={detailData.identidad} />
              <DataField label="Estado civil" value={detailData.estadoCivil} />
            </Grid>
            <Grid item xs={4}>
              <DataField
                label="Primer apellido"
                value={detailData.primerApellido}
              />
              <DataField label="Fecha de nacimiento" value={detailData.nacimiento} />
              <DataField label="Sexo" value={detailData.sexo} />
            </Grid>
            <Grid item xs={4}>
              <DataField
                label="Segundo apellido"
                value={detailData.segundoApellido}
              />
              <DataField label="Color de piel" value={detailData.colorPiel} />
              <DataField label="Nación" value={detailData.nacion} />
            </Grid>
          </Grid>
        </Box>

        <SectionHeader title="Datos adicionales" />
        <Box sx={{ p: 1.5 }}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <DataField
                label="No. HC"
                value={<span style={{ color: "#666" }}>{detailData.hc}</span>}
              />
              <DataField label="Tipo de HC" value={detailData.tipoHc} />
            </Grid>
            <Grid item xs={4}>
              <DataField
                label="Nivel educacional"
                value={detailData.nivelEducacional}
              />
              <DataField
                label="Tipo de paciente"
                value={detailData.tipoPaciente}
              />
            </Grid>
            <Grid item xs={4}>
              <DataField label="ABO/Rh" value={detailData.aboRh} />
            </Grid>
          </Grid>
        </Box>

        <SectionHeader title="Listado de ocupaciones seleccionadas" />
        <Box sx={{ p: 1.5, borderBottom: "1px solid #eee" }}>
          <Typography variant="caption">
            No existe información a mostrar.
          </Typography>
        </Box>

        <SectionHeader title="Antecedentes de riesgos o condiciones" showArrows={true} isOpen={false} />
        <Box sx={{ p: 1.5, display: "none" }}>
          <Typography variant="caption">
            No existe información a mostrar.
          </Typography>
        </Box>

        <SectionHeader
          title="Antecedentes de discapacidades y minusvalías"
          showArrows={true}
          isOpen={false}
        />
        <Box sx={{ p: 1.5, display: "none" }}>
          <Typography variant="caption">
            No existe información a mostrar.
          </Typography>
        </Box>

        <SectionHeader title="Antecedentes alérgicos" showArrows={true} isOpen={false} />
        <SectionHeader
          title="Antecedentes patológicos personales"
          showArrows={true}
          isOpen={false}
        />
        <SectionHeader
          title="Listado de antecedentes familiares"
          showArrows={true}
          isOpen={false}
        />
        <SectionHeader
          title="Listado de antecedentes quirúrgicos"
          showArrows={true}
          isOpen={false}
        />

        <SectionHeader title="Grupo dispensarial" />
        <Box sx={{ p: 1.5 }}>
          <DataField
            label="Grupo dispensarial"
            value={detailData.grupoDispensarial}
          />
        </Box>

        <Box
          sx={{
            p: 1,
            display: "flex",
            justifyContent: "flex-end",
            borderTop: "1px solid #ccc",
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={onBack}
            sx={{ bgcolor: "#333333", minWidth: 80 }}
          >
            Salir
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

