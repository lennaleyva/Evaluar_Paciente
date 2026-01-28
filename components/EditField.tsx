"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

interface EditFieldProps {
  label: string;
  value: string;
  type?: "text" | "date" | "select";
  selectOptions?: string[];
  handleChange: (value: string) => void;
}

export default function EditField({
  label,
  value,
  type = "text",
  selectOptions = [],
  handleChange,
}: EditFieldProps) {
  return (
    <Box sx={{ mb: 1, display: "flex", flexDirection: "column" }}>
      {type === "select" ? (
        <FormControl variant="outlined" size="small" fullWidth sx={{ mt: 2 }}>
          <InputLabel id={`${label}-label`}>{label}</InputLabel>
          <Select
            labelId={`${label}-label`}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            label={label}
            sx={{ height: 28 }}
          >
            {selectOptions.map((option) => (
              <MenuItem key={option} value={option} sx={{ fontSize: 11 }}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <>
          <Typography
            variant="caption"
            display="block"
            sx={{ mb: 0.5, fontWeight: "bold" }}
          >
            {label}:
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            type={type}
            fullWidth
          />
        </>
      )}
    </Box>
  );
}

