import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Camino Dorado Stays",
  description: "Camino Dorado Stays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} antialiased`}>
        <Header />
        <main className="pt-29 min-h-screen flex flex-col items-center">
          {children}
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#fff",
              color: "#333",
            },
          }}
        />
      </body>
    </html>
  );
}
