'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import I18nextProviderWrapper from "@/components/I18nextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        <I18nextProviderWrapper>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nextProviderWrapper>
      </body>
    </html>
  );
}
