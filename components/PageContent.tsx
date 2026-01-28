"use client";

import { Box } from "@mui/material";
import { useRef } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import ContentArea, { ContentAreaRef } from "./ContentArea";
import { PatientRecord } from "../services/patientService";

interface PageContentProps {
  patients: PatientRecord[];
}

export default function PageContent({ patients }: PageContentProps) {
  const contentAreaRef = useRef<ContentAreaRef>(null);

  const handleNavigateToList = () => {
    contentAreaRef.current?.navigateToList();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffffff",
      }}
    >
      <TopBar />
      <Box sx={{ display: "flex", flexGrow: 1, p: 2 }}>
        <Sidebar onNavigateToList={handleNavigateToList} />
        <ContentArea ref={contentAreaRef} patients={patients} />
      </Box>
    </Box>
  );
}

