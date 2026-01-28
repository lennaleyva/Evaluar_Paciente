import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#333333",
      contrastText: "#fff",
    },
    background: {
      default: "#f0f2f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Verdana", "Arial", sans-serif',
    fontSize: 11,
    h6: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "11px",
    },
    body2: {
      fontSize: "11px",
    },
    caption: {
      fontSize: "10px",
    },
    button: {
      textTransform: "none",
      fontSize: "11px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: "4px 12px",
          boxShadow: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "4px 8px",
          borderRight: "1px solid #e0e0e0",
          fontSize: "11px",
        },
        head: {
          backgroundColor: "#e0e0e0",
          fontWeight: "bold",
          borderBottom: "2px solid #000000",
          color: "#000",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          height: 28,
          backgroundColor: "#fff",
        },
        input: {
          padding: "4px 8px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          height: "28px !important",
          minHeight: "28px !important",
          padding: "4px 8px !important",
        },
        outlined: {
          height: "28px !important",
          minHeight: "28px !important",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 11,
          transform: "translate(14px, 6px) scale(1)",
        },
        shrink: {
          transform: "translate(14px, -9px) scale(0.75)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "11px",
          minHeight: "28px",
          padding: "4px 12px",
          textTransform: "none",
          color: "#333",
          "&.Mui-selected": {
            color: "#000000",
            fontWeight: "bold",
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
  },
});

export default theme;
