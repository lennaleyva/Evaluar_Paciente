"use client";

import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface DataFieldProps {
  label: string;
  value: string | ReactNode;
}

export default function DataField({ label, value }: DataFieldProps) {
  return (
    <Box sx={{ mb: 0.5 }}>
      <Typography
        component="span"
        variant="caption"
        sx={{
          fontWeight: "bold",
          color: "#333",
          minWidth: 100,
          display: "inline-block",
        }}
      >
        {label}:
      </Typography>
      <Typography component="span" variant="caption" sx={{ color: "#555", ml: 1 }}>
        {value}
      </Typography>
    </Box>
  );
}

