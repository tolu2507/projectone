import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ResponsiveAppBar from "@/components/navbar";

import CustomThemeProvider from "./theme-provider";
import { Box, useTheme } from "@mui/material";
import Footer from "@/components/footer";
import ThemeWrapper from "@/components/wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Argenta 3D Teknoloji",
  description: "Your trusted partner for industrial equipment and spare parts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CustomThemeProvider>
          <AppRouterCacheProvider>
            <ThemeWrapper>
              <ResponsiveAppBar />
              <Box
                sx={{
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                }}>
                {children}
              </Box>
              <Footer />
            </ThemeWrapper>
          </AppRouterCacheProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
