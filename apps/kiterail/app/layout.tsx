import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kiterail — Building the Future",
  description:
    "Kiterail builds modern digital solutions that help businesses grow. Web development, design systems, and scalable technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontHeading.variable}`}>
      <body className="min-h-screen bg-white font-[family-name:var(--font-sans)] text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
