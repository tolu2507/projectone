"use client";
import {
  Container,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Hero images array (Unsplash placeholders for equipment and services)
const HERO_IMAGES = [
  "/argenta/v1/images/equipments.png",
  "/argenta/v1/images/sparepart.jpg",
  "/argenta/v1/images/rental.jpg",
  "/argenta/v1/images/logistics.jpg",
  "/argenta/v1/images/engines.jpg",
  "/argenta/v1/images/turbines.jpg",
  "/argenta/v1/images/compressor.jpg",
  "/argenta/v1/images/dryer.jpg",
  "/argenta/v1/images/industrialpump.jpg",
  "/argenta/v1/images/aboutus.jpg",
];
// Typing animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Faster on mobile
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Typing text component
const TypingText = ({
  text,
  variant,
}: {
  text: string;
  variant: "h2" | "h5" | "h6";
}) => (
  <Typography
    variant={variant}
    component={motion.div}
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    sx={{ mb: variant === "h2" ? 2 : 1, flexWrap: "wrap" }}>
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={childVariants}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </Typography>
);

// Hero section component
export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", sm: "70vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "primary.main",
        }}>
        <Image
          src={HERO_IMAGES[currentImageIndex]}
          alt="Industrial Equipment"
          fill
          style={{ objectFit: "cover", opacity: 0.5, filter: "blur(5px)" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <Container
          sx={{
            textAlign: "center",
            color: "white",
            position: "relative",
            zIndex: 1,
            px: { xs: 2, sm: 4, md: 8 },
            flexWrap: "wrap",
            overflowWrap: "break-word",
          }}>
          <TypingText
            text="Argenta 3D Teknoloji"
            variant={isMobile ? "h5" : "h2"}
          />
          <TypingText
            text="Your trusted partner for industrial equipment and spare parts, delivering efficiency worldwide."
            variant={isMobile ? "h6" : "h5"}
          />
          <Button
            sx={{ width: { xs: 150, sm: 200 }, mt: 2 }}
            variant="contained"
            component={Link}
            href="/contact">
            Contact Us
          </Button>
        </Container>
      </Box>
    </motion.div>
  );
};
