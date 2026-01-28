"use client";

import { Box, Typography } from "@mui/material";

export default function PaginationControls() {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
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
  );
}

