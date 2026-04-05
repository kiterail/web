import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const fontHeading = Newsreader({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kite & Rail",
  description: "A small studio making thoughtful things for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontHeading.variable}`}>
      <body className="min-h-screen bg-[var(--color-surface)] font-[family-name:var(--font-sans)] font-light text-[var(--color-text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
