import type { Metadata } from "next";
import {Inter} from "next/font/google" 
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";


const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-foreground ${inter.className} dark antialiased`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
