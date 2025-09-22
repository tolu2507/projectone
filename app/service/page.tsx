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

// Placeholder images from Unsplash
const SERVICES = [
  {
    title: "Equipment Supplies",
    desc: "We provide top-quality industrial equipment from trusted brands like Caterpillar, Cummins, and Atlas Copco. Tailored to your specifications with turnkey delivery and custom selection for generators, turbines, and more to enhance your operational efficiency.",
    img: "/images/equipments.png",
  },
  {
    title: "Supply of Spare Parts",
    desc: "High-quality spare parts and consumables for generators, turbines, engines, and compressors at every lifecycle stage. We ensure quick availability, genuine components, and support for maintenance to keep your operations running smoothly.",
    img: "/images/sparepart.jpg",
  },
  {
    title: "Purchase of Used Equipment",
    desc: "We procure high-quality used and surplus industrial equipment, including generators and turbines, offering cost savings without compromising on quality. Our team assesses condition and provides fair offers for your decommissioned assets.",
    img: "/images/equipments.png",
  },
  {
    title: "Equipment Rental Service",
    desc: "Flexible rental options for power equipment, generators, and turbines with comprehensive support. Ideal for short-term projects or emergencies—handle maintenance yourself or opt for our service agreements, always with genuine spare parts.",
    img: "/images/rental.jpg",
  },
  {
    title: "Logistics Service",
    desc: "Expert international logistics for industrial equipment via road, sea, and air. Our experienced team finds efficient, cost-effective solutions for global delivery, ensuring safe and timely arrival for your spare parts and machinery.",
    img: "/images/logistics.jpg",
  },
];

export default function Services() {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, minHeight: "100vh" }}>
      {/* Services Content */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Typography
            sx={{ color: theme.palette.text.primary }}
            variant="h3"
            align="center"
            gutterBottom>
            Our Services
          </Typography>
          <Typography
            align="center"
            sx={{
              mb: 6,
              color: theme.palette.text.secondary,
              px: isMobile ? 0 : 35,
            }}>
            Comprehensive solutions for your industrial equipment needs,
            specializing in spare parts for generators and turbines with turnkey
            procurement and custom selection.
          </Typography>
        </motion.div>
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}>
            <Box
              onClick={() => router.push("/contact?topic=" + service.title)}
              sx={{ mb: 8 }}>
              <Grid
                container
                spacing={isMobile ? 0 : 4}
                direction={index % 2 === 0 ? "row" : "row-reverse"}
                alignItems="center">
                <Grid width={isMobile ? 6 / 6 : 3 / 6}>
                  <Box
                    sx={{ height: { xs: 150, sm: 400 }, overflow: "hidden" }}>
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={600}
                      height={400}
                      style={{
                        borderRadius: theme.shape.borderRadius,
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid width={isMobile ? 6 / 6 : 2 / 6}>
                  <Card
                    elevation={0}
                    sx={{ bgcolor: theme.palette.background.paper }}>
                    <CardContent>
                      <Typography variant="h4" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="body1">{service.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
}
