"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext({ toggleTheme: () => {} });

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#8B6F47", // Light brown
            dark: "#5A4A31", // Darker brown for footer
          },
          secondary: {
            main: "#FFFFFF", // White
          },
          background: {
            default: mode === "light" ? "#F5F5F5" : "#121212",
            paper: mode === "light" ? "#FFFFFF" : "#1E1E1E",
          },
          text: {
            primary: mode === "light" ? "#333333" : "#FFFFFF",
            secondary: mode === "light" ? "#666666" : "#BBBBBB",
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
