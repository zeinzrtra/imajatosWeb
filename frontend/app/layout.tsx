import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "IMAJATOS — Bersama Memberi Dampak",
  description: "Organisasi pemuda yang bergerak bersama masyarakat untuk pendidikan, sosial, lingkungan, dan pemberdayaan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><a className="skip-link" href="#konten-utama">Lewati ke konten utama</a><Header /><main id="konten-utama">{children}</main><Footer /></body></html>;
}
