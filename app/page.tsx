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
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";

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
      <Box minHeight={400} sx={{ background: "white" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          {/* <Grid size={4}>
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
      </Grid> */}
        </Grid>
      </Box>

      <Box minHeight={500} sx={{ background: "grey" }}>
        <Grid container rowSpacing={1} columnSpacing={1} columns={16}>
          {/* <Grid size={4}>
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
        </Grid> */}
        </Grid>
      </Box>

      <Box minHeight={700} sx={{ background: "white" }}></Box>
      <Box minHeight={700} sx={{ background: "grey" }}></Box>
    </>
  );
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

function Hero() {
  return (
    <>
      <Box minHeight={700} sx={{ paddingTop: 10 }}>
        <Grid container spacing={4} columns={12} paddingInline={4}>
          <Grid size={6}>
            <Box paddingTop={0}>
              {/* <Item > */}
              <Typography variant="h4" align="left">
                Без проблемная доставка купленных вещей из США, Европы, Азии в
                Россию.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary" }}
                align="left"
                paddingBottom={2}
                paddingTop={2}
              >
                Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш
                сервис позволяет вам легко и удобно заказывать товары со всего
                мира и получать их в России
              </Typography>
              <CardMedia
                sx={{ height: 402, width: "100%" }}
                image="/hero.jpg"
                title="Hero"
              />
              
            </Box>
          </Grid>
          <Grid size={6}>
           
            <Paper elevation={6}>
              <Typography variant="h4" align="center" paddingTop={4}>
                Калькулятор доставки
              </Typography>
              <Typography align="center" paddingBottom={2}>
                Посчитайте, сколько будет стоить перевозка покупки из зарубежа
              </Typography>
              <Box paddingInline={12}>
                <Box sx={{ display: "flex", width: "100%" }}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Имя"
                    id="Имя"
                    helperText="От 3 до 15 символов"
                    sx={{ margin: 1 }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="Почта"
                    id="Почта"
                    helperText="..."
                    sx={{ margin: 1 }}
                  ></TextField>

                  <TextField
                    size="small"
                    fullWidth
                    id="Телефон"
                    placeholder="Телефон"
                    helperText="10 символов"
                    sx={{ margin: 1 }}
                  ></TextField>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="Общая площадь"
                    id="Общая площадь"
                    helperText="..."
                    sx={{ margin: 1 }}
                  ></TextField>

                  <TextField
                    size="small"
                    fullWidth
                    id="Вес"
                    placeholder="Вес"
                    helperText="10 символов"
                    sx={{ margin: 1 }}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="Страна покупки"
                    id="Страна покупки"
                    helperText="..."
                    sx={{ margin: 1 }}
                  ></TextField>

                  <TextField
                    size="small"
                    fullWidth
                    id="Город покупки"
                    placeholder="Город покупки"
                    helperText="10 символов"
                    sx={{ margin: 1 }}
                  ></TextField>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <TextField
                    size="small"
                    fullWidth
                    placeholder="Оласть доставки"
                    id="Область доставки"
                    helperText="..."
                    sx={{ margin: 1 }}
                  ></TextField>

                  <TextField
                    size="small"
                    fullWidth
                    id="Город доставки"
                    placeholder="Город доставки"
                    helperText="10 символов"
                    sx={{ margin: 1 }}
                  ></TextField>
                </Box>
                <Box paddingBottom={2}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ width: "100%", margin: 0}}
                >
                  Заказать расчет
                </Button>
              </Box>
              </Box>
              
            </Paper>
            
          </Grid>
        </Grid>
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
