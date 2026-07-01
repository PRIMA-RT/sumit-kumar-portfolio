import type { Metadata } from "next";
import "./globals.css";
import { Archivo, JetBrains_Mono } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumit Kumar - Mobile Engineer",
  description:
    "Portfolio of Sumit Kumar, a mobile engineer specializing in Android, iOS, Kotlin, Swift, native UI, scalable architecture, and AI integration.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Sumit Kumar - Mobile Engineer",
    description:
      "Android and iOS native engineering, AI integration, mobile architecture, and high-performance product delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${jetbrainsMono.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
