"use client";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}>
      {/* About Content */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Typography variant="h3" align="center" gutterBottom>
            About PrimeTech Solutions
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 6, px: isMobile ? 0 : 25 }}>
            We specialize in providing high-quality spare parts and equipment
            for industrial needs, including generators and turbines. Partnering
            with renowned manufacturers like Caterpillar, Cummins, and Atlas
            Copco, we serve over 100 countries with turnkey procurement and
            custom selection.
          </Typography>
          <Typography variant="h3" align="center" gutterBottom>
            Mission
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 6, px: isMobile ? 0 : 25 }}>
            Our mission is to empower businesses with reliable, cost-effective
            solutions. From sourcing top-tier equipment to delivering genuine
            spare parts and offering flexible rentals, we ensure your operations
            run smoothly. Our experienced team provides diagnostics, after-sales
            support, and global logistics to meet your unique needs.
          </Typography>
          <Typography variant="h3" align="center" gutterBottom>
            Vision
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 6, px: isMobile ? 0 : 25 }}>
            To be the global leader in industrial equipment solutions,
            innovating the supply of spare parts for generators, turbines, and
            more, with seamless turnkey delivery and tailored selections that
            drive efficiency and sustainability worldwide.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
