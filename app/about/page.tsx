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
            About Argenta 3D Teknoloji
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            Since 2007 the company has been building its reputation as a
            specialist in international trade of industrial equipment and
            logistics. Over fifteen years it has grown from simply arranging
            shipments to creating a resilient system that operates across more
            than 30 jurisdictions, relies on a network of distributors in six
            countries and has successfully completed over 10,000 projects.
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            Its real strength lies in deep knowledge of cross border trade. This
            expertise makes it possible to source equipment and components
            according to a client’s technical specifications, take into account
            industry standards, control quality at every stage and ensure legal
            clarity of each transaction. The partner network includes leading
            manufacturers from the United States, Germany, Poland, China, Turkey
            and other countries, guaranteeing authenticity and consistent
            product quality.
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 6, px: isMobile ? 0 : 25 }}>
            The team brings together not only procurement and logistics
            professionals but also lawyers, brokers and specialists in
            international compliance. This means every client receives more than
            just a shipment. They receive a fully prepared solution, carefully
            selected, quality checked, delivered on time with clear paperwork
            and transparent pricing.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
