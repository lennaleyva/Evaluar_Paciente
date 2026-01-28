"use client";

import { Box, Grid, Link, Typography } from "@mui/material";
import { User } from "lucide-react";
import { PatientDetailData } from "../services/patientService";
import SectionHeader from "./SectionHeader";
import DataField from "./DataField";

interface PatientGeneralDataProps {
  data: PatientDetailData;
}

export default function PatientGeneralData({ data }: PatientGeneralDataProps) {
  return (
    <Box>
      <SectionHeader title="Datos generales del paciente" />
      <Box sx={{ p: 1.5, display: "flex", borderBottom: "1px solid #ccc" }}>
        <Box sx={{ mr: 2, textAlign: "center" }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              bgcolor: "#ccc",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 0.5,
            }}
          >
            <User size={40} color="white" />
          </Box>
          <Typography variant="caption" sx={{ fontWeight: "bold" }}>
            {data.nombre}
          </Typography>
        </Box>
        <Grid container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid size={3}>
            <DataField label="Nombre" value={data.nombre} />
            <DataField label="Sexo" value={data.sexo === "M" ? "Masculino" : "Femenino"} />
            <DataField label="ABO/Rh" value={data.aboRh} />
          </Grid>
          <Grid size={3}>
            <DataField label="Primer apellido" value={data.primerApellido} />
            <DataField label="Tipo de paciente" value={data.tipoPaciente} />
            <DataField label="Provincia" value={data.provincia || "-"} />
            <DataField label="Teléfono fijo" value={data.telefonoFijo || "-"} />
          </Grid>
          <Grid size={3}>
            <DataField label="Segundo apellido" value={data.segundoApellido} />
            <DataField label="Nacional" value={data.nacion} />
            <DataField label="Municipio" value={data.municipio || "-"} />
            <DataField label="Teléfono celular" value={data.telefonoCelular || "-"} />
          </Grid>
          <Grid size={3}>
            <DataField label="No. HC" value={data.hc} />
            <DataField label="Edad" value={data.edad || "-"} />
            <DataField label="Dirección" value={data.direccion || "-"} />
            <DataField label="Correo electrónico" value={data.correoElectronico || "-"} />
            <Link
              href="#"
              variant="caption"
              sx={{ color: "#000000", fontWeight: "bold" }}
            >
              Documentos clínicos
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

