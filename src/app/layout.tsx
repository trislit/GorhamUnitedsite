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
  title: "Gorham United | Thoughtful Development, Strong Community, Stable Taxes",
  description:
    "Gorham United is a group of Gorham, Maine residents committed to promoting responsible development, government transparency, and amplifying residents' voices in town decisions about major projects like the proposed last-mile distribution facility.",
  openGraph: {
    title: "Gorham United",
    description:
      "Promoting responsible, transparent development in Gorham, Maine. Learn about the proposed last-mile warehouse project and how to get informed.",
    type: "website",
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
