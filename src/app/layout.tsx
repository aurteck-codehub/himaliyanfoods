import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ChakraWrapper from "@/layout/chakraWrapper";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Himalyan Elements",
  description: "...",
};

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
          <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
            <Footer />
          </Suspense>
        </ChakraWrapper>
      </body>
    </html>
  );
}
