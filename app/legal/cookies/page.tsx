"use client";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

export default function CookiePolicy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}>
      {/* Cookie Policy Content */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Cookie Policy
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
            Please read this Cookie Policy carefully (“Cookie Policy”, “Policy”)
            before using the site http://www.argentatek.com which is operated by
            ARGENTA 3D TEKNOLOJI OTOMOTIV YATIRIM ULUSLARARASI TICARET LIMITED
            SIRKETI (hereinafter “we”, “our”).
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ px: isMobile ? 0 : 25 }}>
            What are cookies?
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            Cookies are simple text files that are stored on your computer or
            mobile device by a website server. Each cookie is unique to your web
            browser. It will contain some anonymous information, such as a
            unique identifier, the website's domain name, and some numbers.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ px: isMobile ? 0 : 25 }}>
            What types of cookies do we use?
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
            Essential cookies
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
            Essential cookies allow us to provide you with the best possible
            experience when accessing and navigating through our website and
            using its features. For example, these cookies let us recognize that
            you have created an account and have logged into that account.
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
            Functionality cookies
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
            Functionality cookies let us operate the site in accordance with the
            choices you make. For example, we will recognize your username and
            remember how you customized the site during future visits.
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            Analytical cookies
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            These cookies enable us and third-party services to collect
            aggregated data for statistical purposes on how our visitors use the
            website. These cookies do not contain personal information such as
            names and email addresses and are used to help us improve your user
            experience of the website.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ px: isMobile ? 0 : 25 }}>
            How to delete cookies?
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            If you want to restrict or block the cookies that are set by our
            website, you can do so through your browser setting. Alternatively,
            you can visit http://www.argentatek.com/, which contains
            comprehensive information on how to do this on a wide variety of
            browsers and devices. You will find general information about
            cookies and details on how to delete cookies from your device.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ px: isMobile ? 0 : 25 }}>
            Contacting us
          </Typography>
          <Typography
            paragraph
            align="justify"
            fontSize={14}
            sx={{ mb: 6, px: isMobile ? 0 : 25 }}>
            If you have any questions about this policy or our use of cookies,
            please contact us.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
