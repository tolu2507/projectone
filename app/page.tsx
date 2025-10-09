"use client";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroSection } from "@/components/hero";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80";
const LOGO_IMAGE =
  "https://images.unsplash.com/photo-1617142232998-9b43e24e2977?auto=format&fit=crop&w=150&h=50";

// Service data with images
const SERVICES = [
  {
    title: "Equipment Supplies",
    desc: "Comprehensive solutions for your industrial needs.",
    img: "/argenta/appone/images/equipmentsupply.jpg",
  },
  {
    title: "Spare Parts",
    desc: "Comprehensive solutions for your industrial needs.",
    img: "/argenta/appone/images/sparepart.jpg",
  },
  {
    title: "Used Equipment",
    desc: "Comprehensive solutions for your industrial needs.",
    img: "/argenta/appone/images/equipments.png",
  },
  {
    title: "Rental",
    desc: "Comprehensive solutions for your industrial needs.",
    img: "/argenta/appone/images/rental.jpg",
  },
  {
    title: "Logistics",
    desc: "Multimodal transport by sea, road or air, route optimisation, insurance and preparation of export import paperwork. Full tracking until delivery to the client’s site.",
    img: "/argenta/appone/images/logistics.jpg",
  },
];

// Expanded equipment data
const EQUIPMENT = [
  {
    title: "Generators",
    img: "/argenta/appone/images/generators.jpg",
  },
  {
    title: "Turbines",
    img: "/argenta/appone/images/turbines.jpg", // Turbine
  },
  {
    title: "Engines",
    img: "/argenta/appone/images/engines.jpg",
  },
  {
    title: "Compressors",
    img: "/argenta/appone/images/compressor.jpg",
  },
  {
    title: "Dryers",
    img: "/argenta/appone/images/dryer.jpg",
  },
  {
    title: "Industrial Pumps",
    img: "/argenta/appone/images/industrialpump.jpg",
  },
  {
    title: "Spare Parts Kits",
    img: "/argenta/appone/images/sparepart.jpg",
  },
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero */}
      <HeroSection />

      {/* About Summary */}
      <Container sx={{ py: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <Typography variant="h4" align="center" gutterBottom>
            About Us
          </Typography>
          <Grid sx={{ mt: 5 }} container spacing={2}>
            <Grid
              sx={{ display: isMobile ? "block" : "none" }}
              width={isMobile ? 6 / 6 : 2 / 6}>
              <Typography paragraph align="justify">
                Since 2007, Argenta 3D Teknoloji has built a strong reputation
                in international trade of industrial equipment and logistics.
                Over 15 years, we've expanded to operate in 30+ jurisdictions,
                with distributors in six countries and over 10,000 completed
                projects. Our expertise in cross-border trade ensures sourcing
                to exact specifications, quality control, and legal clarity,
                partnering with top manufacturers worldwide. Our
                multidisciplinary team—procurement experts, lawyers, brokers,
                and compliance specialists—delivers comprehensive, ready-to-use
                solutions with transparent pricing and timely delivery.
              </Typography>
            </Grid>
            <Grid width={isMobile ? 6 / 6 : 3 / 6}>
              <Image
                src={"/argenta/appone/images/aboutus.jpg"}
                alt={"title"}
                width={isMobile ? 500 : 300}
                height={200}
                style={{ width: "100%", height: "auto" }}
              />
              <Button
                variant="outlined"
                component={Link}
                href="/contact?topic=about"
                sx={{ display: "block", mx: "auto", mt: 2 }}>
                Contact for More Info
              </Button>
            </Grid>
            <Grid
              sx={{ display: !isMobile ? "block" : "none" }}
              width={isMobile ? 6 / 6 : 2 / 6}>
              <Typography paragraph align="justify">
                Since 2007, Argenta 3D Teknoloji has built a strong reputation
                in international trade of industrial equipment and logistics.
                Over 15 years, we've expanded to operate in 30+ jurisdictions,
                with distributors in six countries and over 10,000 completed
                projects. Our expertise in cross-border trade ensures sourcing
                to exact specifications, quality control, and legal clarity,
                partnering with top manufacturers worldwide. Our
                multidisciplinary team—procurement experts, lawyers, brokers,
                and compliance specialists—delivers comprehensive, ready-to-use
                solutions with transparent pricing and timely delivery.
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Services Summary */}
      <Container sx={{ py: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Services
          </Typography>
          <Grid sx={{ mt: 5 }} container spacing={2}>
            {SERVICES.map((service, i) => (
              <Grid key={i}>
                <Link href="/service" passHref>
                  <Card
                    sx={{
                      bgcolor: theme.palette.background.paper,
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                      // maxWidth: 300,
                    }}>
                    <Box
                      sx={{ height: { xs: 150, sm: 200 }, overflow: "hidden" }}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={300}
                        height={200}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography variant="h6">{service.title}</Typography>
                      <Typography variant="body2" maxWidth={320}>{service.desc}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="outlined"
            component={Link}
            href="/contact?topic=services"
            sx={{ display: "block", mx: "auto", mt: 2 }}>
            Contact for Services
          </Button>
        </motion.div>
      </Container>

      <Container sx={{ py: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <Typography variant="h4" align="center" gutterBottom>
            Equipments
          </Typography>
          <Typography sx={{ my: 3 }} paragraph align="center">
            Generators, turbines, engines, compressors, and more from trusted
            global brands.
          </Typography>
          <Slider {...sliderSettings}>
            {EQUIPMENT.map((equip, i) => (
              <Box key={i} sx={{ px: 1 }}>
                <Link href="/equipment" passHref>
                  <Card
                    sx={{
                      bgcolor: theme.palette.background.paper,
                      cursor: "pointer",
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}>
                    <Box
                      sx={{ height: { xs: 150, sm: 200 }, overflow: "hidden" }}>
                      <Image
                        src={equip.img}
                        alt={equip.title}
                        width={300}
                        height={200}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography variant="h6" align="center">
                        {equip.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Box>
            ))}
          </Slider>
          <Button
            variant="outlined"
            component={Link}
            href="/contact?topic=equipment"
            sx={{ display: "block", mx: "auto", mt: 5 }}>
            Contact for Equipments
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
