import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
// import { LangSelect } from "@/components/lang-select";

import "./globals.css";
import { cn } from "@/lib/utils";
import ReactLenis from "lenis/react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camilo Davila",
  description: "Camilo Davila, Fullstack developer porfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-noise antialiased scroll-smooth",
          geistMono.className,
        )}
      >
        <ReactLenis root>
          <ThemeProvider enableSystem attribute="class" defaultTheme="system">
            <div className="hidden md:flex fixed top-5 right-5 z-50 gap-6">
              <ThemeSwitcher />
              {/* <LangSelect /> */}
            </div>
            {children}
          </ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
