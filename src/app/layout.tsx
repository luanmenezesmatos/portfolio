import type { Metadata } from "next";
import { Inter as FontSans, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";

import { Navbar } from "@/components/global/navbar";
import { SidebarNav } from "@/components/global/sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Luan Menezes - Desenvolvedor Full-Stack",
  description:
    "Meu nome é Luan Menezes, sou um desenvolvedor full-stack de 17 anos apaixonado por tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDMSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="grid h-screen w-full pl-[56px]">
            <Navbar />
            <SidebarNav />

            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
