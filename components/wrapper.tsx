"use client";
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}>
      {children}
    </Box>
  );
}
