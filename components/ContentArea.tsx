"use client";

import { Box, Typography } from "@mui/material";
import { useState, useImperativeHandle, forwardRef } from "react";
import { PatientRecord, PatientDetailData, patientService } from "../services/patientService";
import PatientList from "./PatientList";
import PatientDetail from "./PatientDetail";
import PatientEdit from "./PatientEdit";
import RiesgosManagementView from "./antecedentes/RiesgosManagementView";
import DiscapacidadesManagementView from "./antecedentes/DiscapacidadesManagementView";
import PatologicosManagementView from "./antecedentes/PatologicosManagementView";
import FamiliaresManagementView from "./antecedentes/FamiliaresManagementView";
import QuirurgicosManagementView from "./antecedentes/QuirurgicosManagementView";
import AlergicosManagementView from "./antecedentes/AlergicosManagementView";

interface ContentAreaProps {
  patients: PatientRecord[];
}

export interface ContentAreaRef {
  navigateToList: () => void;
}

const ContentArea = forwardRef<ContentAreaRef, ContentAreaProps>(({ patients }, ref) => {
  const [view, setView] = useState<
    | "list"
    | "detail"
    | "edit"
    | "riesgos-management"
    | "discapacidades-management"
    | "patologicos-management"
    | "familiares-management"
    | "quirurgicos-management"
    | "alergicos-management"
  >("list");
  const [detailData, setDetailData] = useState<PatientDetailData | null>(null);

  const handleNavigate = async (patientId: string) => {
    try {
      const data = await patientService.getDetail(patientId);
      if (data) {
        setDetailData(data);
        setView("detail");
      }
    } catch (error) {
      console.error("Error loading patient detail:", error);
    }
  };

  const handleNavigateToEdit = async (patientId: string) => {
    try {
      const data = await patientService.getDetail(patientId);
      if (data) {
        setDetailData(data);
        setView("edit");
      }
    } catch (error) {
      console.error("Error loading patient detail:", error);
    }
  };

  const handleNavigateToManagement = (viewKey: string) => {
    setView(viewKey as typeof view);
  };

  const handleBack = () => {
    setView("list");
    setDetailData(null);
  };

  const navigateToList = () => {
    setView("list");
    setDetailData(null);
  };

  useImperativeHandle(ref, () => ({
    navigateToList,
  }));

  const handleBackToEdit = () => {
    setView("edit");
  };

  const getManagementView = () => {
    if (!detailData) return null;

    switch (view) {
      case "riesgos-management":
        return (
          <RiesgosManagementView
            onBack={handleBackToEdit}
            patientData={detailData}
          />
        );
      case "discapacidades-management":
        return (
          <DiscapacidadesManagementView
            onBack={handleBackToEdit}
            patientData={detailData}
          />
        );
      case "patologicos-management":
        return (
          <PatologicosManagementView
            onBack={handleBackToEdit}
            patientData={detailData}
          />
        );
      case "familiares-management":
        return (
          <FamiliaresManagementView
            onBack={handleBackToEdit}
            patientData={detailData}
          />
        );
      case "quirurgicos-management":
        return (
          <QuirurgicosManagementView
            onBack={handleBackToEdit}
            patientData={detailData}
          />
        );
      case "alergicos-management":
        return (
          <AlergicosManagementView
            onBack={handleBackToEdit}
            patientData={detailData}
          />
        );
      default:
        return null;
    }
  };

  const isManagementView = view.endsWith("-management");

  return (
    <Box sx={{ flexGrow: 1 }}>
      {view === "list" ? (
        <PatientList
          patients={patients}
          onNavigate={handleNavigate}
          onNavigateToEdit={handleNavigateToEdit}
        />
      ) : view === "detail" && detailData ? (
        <PatientDetail detailData={detailData} onBack={handleBack} />
      ) : view === "edit" && detailData ? (
        <PatientEdit
          detailData={detailData}
          onBack={handleBack}
          onNavigateToManagement={handleNavigateToManagement}
        />
      ) : isManagementView ? (
        getManagementView()
      ) : (
        <Box sx={{ p: 2 }}>
          <Typography>Cargando...</Typography>
        </Box>
      )}

      <Box sx={{ textAlign: "center", mt: 4, mb: 2 }}>
        <Typography variant="caption" color="text.secondary">
          © Universidad de las Ciencias Informáticas, 2025
        </Typography>
      </Box>
    </Box>
  );
});

ContentArea.displayName = "ContentArea";

export default ContentArea;

