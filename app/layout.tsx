import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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
        <main className="pt-20 min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
