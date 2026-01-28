"use client";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Users, FileText, ChevronLeft } from "lucide-react";

interface SidebarProps {
  onNavigateToList?: () => void;
}

export default function Sidebar({ onNavigateToList }: SidebarProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 250,
        height: "calc(100vh - 120px)",
        borderRadius: 2,
        overflow: "hidden",
        mr: 2,
        display: { xs: "none", md: "block" },
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(to bottom, #666666 0%, #000000 100%)",
          color: "white",
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold">
          Menú
        </Typography>
        <ChevronLeft size={16} />
      </Box>

      <List component="nav" dense disablePadding>
        <ListItemButton sx={{ borderBottom: "1px solid #eee" }}>
          <ListItemIcon sx={{ minWidth: 30, color: "#ffa000" }}>★</ListItemIcon>
          <ListItemText primary="Marcadores" />
        </ListItemButton>

        <ListItemButton
          sx={{
            borderBottom: "1px solid #eee",
            bgcolor: "#f5f5f5",
          }}
        >
          <ListItemIcon sx={{ minWidth: 30 }}>
            <Users size={16} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body2" fontWeight="bold">
                Gestionar hoja frontal
              </Typography>
            }
          />
          <ChevronLeft size={14} style={{ transform: "rotate(-90deg)" }} />
        </ListItemButton>

        <ListItemButton 
          sx={{ pl: 4 }}
          onClick={onNavigateToList}
        >
          <ListItemIcon sx={{ minWidth: 30 }}>
            <FileText size={16} />
          </ListItemIcon>
          <ListItemText primary="Listado de hojas fron..." />
        </ListItemButton>
      </List>
    </Paper>
  );
}

