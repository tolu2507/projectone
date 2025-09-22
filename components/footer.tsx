"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

export default function Footer() {
  const theme = useTheme();

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
                src="/images/logo.jpg"
                alt="PrimeTech Solutions"
                width={70}
                height={70}
                className="rounded-full"
              />
            </Grid>
            <Grid>
              <Grid container spacing={2} justifyContent="flex-end">
                {["Service", "Equipment", "Contact"].map((item) => (
                  <Grid key={item}>
                    <Button
                      key={item}
                      color="inherit"
                      href={`/${item.toLowerCase()}`}>
                      {item}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ mt: 2 }}>
            © 2025 PrimeTech Solutions. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
