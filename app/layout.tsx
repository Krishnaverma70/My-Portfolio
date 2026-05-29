import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Krishna Verma Portfolio",
  description: "Scrollytelling portfolio showcasing digital experiences and video editing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#09090b] text-zinc-100 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
