"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const theme = useTheme();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* Footer */}
      <Box
        sx={{
          py: 4,
          bgcolor:
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : theme.palette.primary.dark,
          color: theme.palette.text.primary,
          textAlign: "center",
        }}>
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            alignItems="center">
            <Grid>
              <Image
                src="/argenta/v1/images/logo.png"
                alt="Argenta 3D Teknoloji"
                width={70}
                height={70}
                className="rounded-full"
                onClick={() => router.push("/")}
              />
            </Grid>
            <Grid>
              <Grid container spacing={2} justifyContent="flex-end">
                {["Service", "Equipment", "Contact"].map((item) => (
                  <Grid key={item}>
                    <Button
                      component={Link}
                      color="inherit"
                      href={`/${item.toLowerCase()}`}>
                      {item + "s"}
                    </Button>
                  </Grid>
                ))}
                <Grid>
                  <Box sx={{ position: "relative" }}>
                    <Button
                      color="inherit"
                      onMouseEnter={handleOpen}
                      onMouseLeave={handleClose}
                      aria-controls={open ? "legal-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}>
                      Legals
                    </Button>
                    <Menu
                      id="legal-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      onMouseEnter={handleOpen}
                      onMouseLeave={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "legal-button",
                      }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}>
                      <MenuItem
                        component={Link}
                        href="/legal/privacy-policy"
                        onClick={handleClose}>
                        Privacy Policy
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        href="/legal/cookies"
                        onClick={handleClose}>
                        Cookies
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        href="/legal/user-agreement"
                        onClick={handleClose}>
                        User Agreement
                      </MenuItem>
                    </Menu>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ mt: 2 }}>
            © 2025 Argenta 3D Teknoloji. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
