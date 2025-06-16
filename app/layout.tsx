import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
// import { LangSelect } from "@/components/lang-select";

import "./globals.css";

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
      <body className={`bg-noise antialiased scroll-smooth`}>
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <div className="hidden md:flex fixed top-5 right-5 z-50 gap-6">
            <ThemeSwitcher />
            {/* <LangSelect /> */}
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
