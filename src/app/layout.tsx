import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3D Designer",
  description: "Web-based 3D design playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <header className="fixed top-0 left-0 right-0 z-10 h-12 flex items-center justify-between px-4 border-b border-black/10 bg-background/80 backdrop-blur">
          <div className="text-sm font-semibold">3D Designer</div>
          <nav className="text-xs text-black/60 flex items-center gap-3">
            <a href="/" className="hover:underline">
              Home
            </a>
          </nav>
        </header>
        <main className="pt-12 h-dvh w-full overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
