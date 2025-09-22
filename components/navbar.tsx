"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Stack, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "../constants";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/app/theme-provider";

interface Props {
  window?: () => Window;
}

const LOGO_IMAGE = "/images/logo.png";

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const title = "Argenta 3D Teknoloji";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { toggleTheme } = React.useContext(ThemeContext);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const toggleDrawer = (open: boolean) => () => setMobileOpen(open);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor:
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        height: "100%",
      }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ my: 2, mx: 2 }}>
        <Avatar
          alt="Argenta 3D Teknoloji"
          src="/globe.svg"
          sx={{ width: 36, height: 36 }}
        />
        <Typography variant="h6" sx={{ my: 2, textAlign: "start" }}>
          {title}
        </Typography>
      </Stack>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              component={Link}
              href={item.route}
              sx={{ textAlign: "start" }}>
              <Avatar
                sx={{ width: 20, height: 20, mr: 1 }}
                alt={item.title}
                src="/globe.svg"
              />
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor:
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        border: "0px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        color: theme.palette.text.primary,
      }}>
      <Toolbar>
        <Image
          src={LOGO_IMAGE}
          alt="Argenta 3D Teknoloji"
          width={50}
          height={50}
          style={{ cursor: "pointer", borderRadius: "800px" }}
          onClick={() => router.push("/")}
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={toggleTheme} sx={{ mr: 2, color: "white" }}>
          {theme.palette.mode === "light" ? "🌙" : "☀️"}
        </IconButton>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <span>☰</span>
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={toggleDrawer(false)}>
              {drawer}
            </Drawer>
          </>
        ) : (
          navItems.slice(1).map((item) => (
            <Button
              key={item.title}
              color="inherit"
              component={Link}
              href={item.route}
              sx={{
                mx: 1,
                bgcolor:
                  theme.palette.mode === "light"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                borderRadius: 1,
                "&:hover": {
                  bgcolor:
                    theme.palette.mode === "light"
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(0, 0, 0, 0.3)",
                },
              }}>
              {item.title}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}
