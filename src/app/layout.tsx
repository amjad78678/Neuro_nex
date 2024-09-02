import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import ClientProvider from "@/components/Common/ClientProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuroNex",
  description: "Created by Amjad Ali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <main className="min-h-screen">
            <Navbar />
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </ClientProvider>
      </body>
    </html>
  );
}
