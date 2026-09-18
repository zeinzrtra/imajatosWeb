import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Kerja — IMAJATOS IPB",
  description: "Direktori program kerja IMAJATOS IPB berdasarkan biro dan departemen, lengkap dengan tujuan, sasaran, jadwal, serta status pelaksanaan.",
};

export default function ProgramLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
