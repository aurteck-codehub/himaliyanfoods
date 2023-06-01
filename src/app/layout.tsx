"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ChakraWrapper from "@/layout/chakraWrapper";
// import "@/styles/banner.css";
// import "@/styles/globals.css";
// import "@/styles/neon.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraWrapper>
          <Navbar />
          {children}
          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  );
}
