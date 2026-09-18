import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "IMAJATOS IPB — Mahasiswa Jalur Ketua OSIS",
  description: "Organisasi mahasiswa IPB University yang mewadahi para mahasiswa jalur Ketua OSIS dan dikelola melalui struktur kepengurusan internal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><a className="skip-link" href="#konten-utama">Lewati ke konten utama</a><Header /><main id="konten-utama">{children}</main><Footer /></body></html>;
}
