import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GraphNote - Local-First Knowledge Workspace",
  description:
    "A local-first knowledge workspace with visual version control and graph-based history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={`${inter.variable} bg-background-dark text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
