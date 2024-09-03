// pages/index.js
"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Container, Button, Box } from "@mui/material";

// Компонент Header
function Header() {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6">My Application</Typography>
      </Toolbar>
    </AppBar>
  );
}

// Компонент Content
function Content() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" gutterBottom>
          Welcome to My Application!
        </Typography>
        <Typography variant="body1">This is a simple application using React and Material-UI.</Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Container>
    </>
  );
}

// Компонент Footer
function Footer() {
  return (
    <Box>
      <Typography variant="body1">My footer can be found here.</Typography>
      <Typography variant="body2" color="text.secondary">
        © 2024 My Application
      </Typography>
    </Box>
  );
}

// Основной компонент страницы
export default function Home() {
  return (
    <Box>
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}
