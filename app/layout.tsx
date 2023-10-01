import "./globals.css";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { Rajdhani } from "next/font/google";
import { Aldrich } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const primaryFont = Orbitron({ subsets: ["latin"], variable: "--primary" });
const secondaryFont = Rajdhani({
  subsets: ["latin"],
  weight: "400",
  variable: "--secondary",
});
const tertiaryFont = Aldrich({
  subsets: ["latin"],
  weight: "400",
  variable: "--tertiary",
});
const logoFont = Dancing_Script({ subsets: ["latin"], variable: "--logo" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My frontend portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} ${tertiaryFont.variable} ${logoFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
