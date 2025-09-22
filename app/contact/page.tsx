"use client";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
// import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // const searchParams = useSearchParams();
  const topic: string = "";
  const [formData, setFormData] = useState({
    service: topic,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: topic
      ? `Interested in ${topic.charAt(0).toUpperCase() + topic.slice(1)}`
      : "",
    agree: false,
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Stub: Send to /api/contact (configure with your email/SMTP later)
    alert("Form submitted! Check console for demo.");
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}>
      {/* Contact Content */}
      <Container sx={{ py: 4 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Typography variant="h3" align="center" sx={{ mb: 5 }} gutterBottom>
            Contact Us
          </Typography>
          <Grid width={"100%"} container>
            <Grid
              sx={{ display: isMobile ? "none" : "block" }}
              width={isMobile ? 2 / 2 : 1 / 2}>
              <Typography paragraph>
                Address: 1 Nolu, Bostanci Mahallesi Nasip 2 Nolu Sokak No: 17
                Ortahisar / Trabzon, Turkey
              </Typography>
              <Typography paragraph>Phone: +90(538)4439685</Typography>
              <Typography paragraph>Email: office@argentatek.com</Typography>
            </Grid>
            <Grid width={isMobile ? 2 / 2 : 1 / 2}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  label="Service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                    />
                  }
                  label="I confirm I am over 18 and agree to terms"
                />
                <Button type="submit" variant="contained">
                  Send Message
                </Button>
              </Box>
            </Grid>
            <Grid
              sx={{ display: isMobile ? "block" : "none", mt: 5 }}
              width={isMobile ? 2 / 2 : 1 / 2}>
              <Typography paragraph>
                Address: 1 Nolu, Bostanci Mahallesi Nasip 2 Nolu Sokak No: 17
                Ortahisar / Trabzon, Turkey
              </Typography>
              <Typography paragraph>Phone: +90(538)4439685</Typography>
              <Typography paragraph>Email: office@argentatek.com</Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
