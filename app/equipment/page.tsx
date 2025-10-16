"use client";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const EQUIPMENT = [
  {
    title: "Generators",
    items: [
      "Diesel Generators",
      "Natural Gas Generators",
      "Gas Generators",
      "Propane Generators",
    ],
    img: "/argenta/v1/images/generators.jpg",
  },
  {
    title: "Turbines",
    desc: "High-efficiency industrial turbines for power generation, including gas and steam models, with turnkey procurement and custom spare parts selection.",
    img: "/argenta/v1/images/turbines.jpg",
  },
  {
    title: "Engines",
    desc: "Industrial engines running on diesel, natural gas, or alternative fuels, designed for heavy-duty applications with reliable spare parts support.",
    img: "/argenta/v1/images/engines.jpg",
  },
  {
    title: "Compressors",
    desc: "Oil-injected and oil-free stationary air compressors with pressure up to 20 bar and drive power up to 500 kW.",
    img: "/argenta/v1/images/compressor.jpg",
  },
  {
    title: "Dryers",
    desc: "Refrigerant and adsorption dryers, air and water cooled, with up to 20 bar pressure for efficient industrial use.",
    img: "/argenta/v1/images/dryer.jpg",
  },
  {
    title: "Industrial Pumps",
    desc: "Pumps for water and chemical liquids, suitable for heavy and light industrial applications with custom spare parts.",
    img: "/argenta/v1/images/industrialpump.jpg",
  },
  {
    title: "Spare Parts Kits",
    desc: "Pre-packaged kits for generators, turbines, engines, and compressors, ensuring quick maintenance and lifecycle support.",
    img: "/argenta/v1/images/sparepart.jpg",
  },
];

export default function Equipment() {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}>
      {/* Equipment Content */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Our Equipment
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 6, px: isMobile ? 0 : 35 }}>
            Generators, compressor units, pumping and drying systems, spare
            parts and consumables from leading global brands. Each item is
            inspected and accompanied by full quality documentation.
          </Typography>
        </motion.div>
        <Grid container spacing={4}>
          {EQUIPMENT.map((equip, i) => (
            <Grid key={i}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}>
                <Card
                  onClick={() => router.push("/contact?topic=" + equip.title)}
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                    maxWidth: isMobile ? 500 : 350,
                  }}>
                  <Box
                    sx={{ height: { xs: 150, sm: 200 }, overflow: "hidden" }}>
                    <Image
                      src={equip.img}
                      alt={equip.title}
                      width={isMobile ? 500 : 350}
                      height={isMobile ? 500 : 350}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {equip.title}
                    </Typography>
                    {equip.items ? (
                      <ul>
                        {equip.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <Typography>{equip.desc}</Typography>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
