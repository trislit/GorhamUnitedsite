import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gorham United",
  description:
    "Gorham United is a group of Gorham, Maine residents working for responsible development, stable taxes, and a transparent public process around major projects like the proposed Amazon warehouse.",
  openGraph: {
    title: "Gorham United",
    description:
      "Learn about Gorham United, our mission, and how residents can get informed and speak up about the proposed Amazon land sale and other major decisions.",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 768,
        height: 768,
        alt: "Gorham United logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorham United",
    description:
      "Gorham United is a resident-led group focused on responsible development, stable taxes, and transparent decision-making in Gorham, Maine.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
