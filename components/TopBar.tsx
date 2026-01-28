"use client";

import { Box, Stack, Typography, Avatar } from "@mui/material";
import {
  Home,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  User,
} from "lucide-react";

export default function TopBar() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #ffffff 0%, #dcdcdc 100%)",
          height: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "4px solid #000000",
          px: 3,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontStyle: "italic",
              boxShadow: 1,
              fontSize: 14,
            }}
          >
            eVitae
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "#000000", fontWeight: "bold", lineHeight: 1 }}
            >
              eVitae
            </Typography>
            <Typography variant="caption" color="text.secondary">
            
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ textAlign: "right" }}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="flex-end"
            sx={{ mb: 1 }}
          >
            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  backgroundColor: "#000000",
                  px: 1,
                  borderRadius: 1,
                }}
              >
                Médico APS
              </Typography>
              <Typography variant="caption" display="block">
                Policlínico_UCI_La_Habana
              </Typography>
              <Typography variant="caption" display="block">
                La Habana
              </Typography>
            </Box>
            <Avatar sx={{ width: 40, height: 40, bgcolor: "#444" }}>
              <User size={20} />
            </Avatar>
          </Stack>

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            {[
              { icon: <Home size={14} />, label: "Inicio" },
              { icon: <Settings size={14} />, label: "Preferencias" },
              { icon: <Bell size={14} />, label: "Notificaciones ( 0 )" },
              { icon: <HelpCircle size={14} />, label: "Ayuda" },
              { icon: <LogOut size={14} />, label: "Salir", color: "#b71c1c" },
            ].map((item) => (
              <Stack
                key={item.label}
                direction="row"
                spacing={0.5}
                alignItems="center"
                sx={{
                  fontSize: 11,
                  fontWeight: "bold",
                  color: item.color || "#333",
                  cursor: "pointer",
                  "&:hover": { color: "#000000" },
                }}
              >
                {item.icon}
                <Typography variant="caption" sx={{ fontWeight: "inherit" }}>
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#d4e4d4",
          py: 0.5,
          px: 3,
          borderBottom: "1px solid #aaa",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Home size={14} color="#000000" />
        <Typography
          variant="body2"
          sx={{ color: "#5e2e30ff", fontWeight: "bold" }}
        >
          Atención primaria de salud
        </Typography>
      </Box>
    </Box>
  );
}

