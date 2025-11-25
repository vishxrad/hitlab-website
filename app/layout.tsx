'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import I18nextProviderWrapper from "@/components/I18nextProvider";
import FloatingContactButton from "@/components/FloatingContactButton";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-blue-50`}>
        <I18nextProviderWrapper>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <FloatingContactButton />
          <Footer />
        </I18nextProviderWrapper>
      </body>
    </html>
  );
}
