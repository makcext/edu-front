"use client";
import React, { useState, ReactNode, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import ThemeContext from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body::-webkit-scrollbar {
            display: none;
          }
          body {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    spacing: 8,
    palette: {
      background: {
        // default: darkMode ? "#2b373f" : "#f4f0ec",
      },
      mode: darkMode ? "dark" : "light",
    },
  });

  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXlScreen = useMediaQuery(theme.breakpoints.up("xl"));

  const [currentMediaQuery, setCurrentMediaQuery] = useState(() => {
    if (isXsScreen) {
      return "xs";
    } else if (isSmScreen) {
      return "sm";
    } else if (isMdScreen) {
      return "md";
    } else if (isLgScreen) {
      return "lg";
    } else if (isXlScreen) {
      return "xl";
    } else {
      return "";
    }
  });

  useEffect(() => {
    if (isXsScreen) {
      setCurrentMediaQuery("xs");
    } else if (isSmScreen) {
      setCurrentMediaQuery("sm");
    } else if (isMdScreen) {
      setCurrentMediaQuery("md");
    } else if (isLgScreen) {
      setCurrentMediaQuery("lg");
    } else if (isXlScreen) {
      setCurrentMediaQuery("xl");
    }
  }, [isXsScreen, isSmScreen, isMdScreen, isLgScreen, isXlScreen]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, currentMediaQuery }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;