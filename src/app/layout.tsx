import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/Common/ClientProvider";
import Footer from "@/components/Common/Footer";
import DynamicNavbar from "@/components/Common/DynamicNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeuroNex",
  description: "Created by Amjad Ali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <DynamicNavbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
