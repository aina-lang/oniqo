import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oniqo - Réinventer l'écosystème du voyage",
  description: "Groupe startup fédérant plusieurs entreprises commerciales à vocation internationale formant un écosystème intégré et innovant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-900`}
      >
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
            <main className="grow">
              {children}
            </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

