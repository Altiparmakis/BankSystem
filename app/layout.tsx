import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-ibm-plex-serif'
})

const inter = Inter({subsets: ['latin'], variable: '--fonst-inter'});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for eeveryone",
  icons:{
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
