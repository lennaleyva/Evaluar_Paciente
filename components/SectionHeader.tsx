"use client";

import { Box, Typography } from "@mui/material";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState, ReactNode, useEffect } from "react";

interface SectionHeaderProps {
  title: string;
  showArrows?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  actionComponent?: ReactNode;
}

export default function SectionHeader({
  title,
  showArrows = false,
  isOpen = true,
  onToggle,
  actionComponent,
}: SectionHeaderProps) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    if (showArrows) {
      setOpen(!open);
      if (onToggle) {
        onToggle();
      }
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #666666 0%, #333333 100%)",
        color: "white",
        px: 1,
        py: 0.5,
        mt: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "2px",
        cursor: showArrows ? "pointer" : "default",
      }}
      onClick={handleClick}
    >
      <Typography variant="caption" fontWeight="bold">
        {title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {actionComponent}
        {showArrows && (
          open ? <ChevronDown size={14} style={{ marginLeft: 8 }} /> : <ChevronRight size={14} style={{ marginLeft: 8 }} />
        )}
      </Box>
    </Box>
  );
}

