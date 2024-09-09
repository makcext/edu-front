// pages/index.js
"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// Компонент Header
function Header() {
  return (
    <AppBar position="static">
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
    <Typography variant="body1">
    This is a simple application using React and Material-UI.
    </Typography>
    <Button variant="contained" color="primary">
    Get Started
    </Button>
    </Container>
    </>
  );
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


function Hero() {
  return (
    <>
    <Box minHeight={700}  sx={{ background: "grey" }}>
    <Grid container spacing={2} columns={14}>
        <Grid size={7} >
          <Item>size=7</Item>
        </Grid>
        <Grid size={7} >
          <Item>size=7</Item>
        </Grid>
      </Grid>

    </Box>
    
    <Box minHeight={400}  sx={{ background: "white" }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={4}>
          <Item>1</Item>
        </Grid>
        <Grid size={4}>
          <Item>2</Item>
        </Grid>
        <Grid size={4}>
          <Item>3</Item>
        </Grid>
        <Grid size={4}>
          <Item>4</Item>
        </Grid>
        <Grid size={4}>
          <Item>5</Item>
        </Grid>
        <Grid size={4}>
          <Item>6</Item>
        </Grid>

      </Grid>
    </Box>
    
    <Box minHeight={500}  sx={{ background: "grey" }}>
    <Grid container rowSpacing={1} columnSpacing={1} columns={16}>
        <Grid size={4}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
    
    <Box minHeight={700}  sx={{ background: "white" }}>
    
    </Box>
    <Box minHeight={700}  sx={{ background: "grey" }}>
    
    </Box>
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
    <Hero />
    <Content />
    <Footer />
    </Box>
  );
}
