import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan — Full Stack Developer",
    template: "%s | Alex Morgan",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. Building beautiful, performant, and accessible web experiences.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Alex Morgan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    creator: "@alexmorgan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
