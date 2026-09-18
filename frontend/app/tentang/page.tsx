import { GitBranch, GraduationCap } from "lucide-react";
import { OrganizationStructure } from "@/components/OrganizationStructure";
import { SectionTitle } from "@/components/SectionTitle";

export default function TentangPage() {
  return <>
    <section className="page-hero"><div className="shell"><span>Tentang Kami</span><h1>Mengenal IMAJATOS<br />lebih dekat.</h1><p>IMAJATOS adalah organisasi mahasiswa IPB University yang mewadahi para mahasiswa jalur Ketua OSIS dan memiliki struktur kepengurusan internal.</p></div></section>
    <section className="section shell story-grid"><div><SectionTitle eyebrow="Cerita Kami" title="Cerita yang akan ditulis dari perjalanan nyata." /><p>Bagian ini disiapkan untuk sejarah resmi IMAJATOS: alasan organisasi dibentuk, siapa yang memulai, dan peristiwa penting yang membentuk arah geraknya.</p><p>Konten final perlu disusun dari dokumen atau wawancara resmi agar kisah yang tampil akurat dan benar-benar terasa milik IMAJATOS.</p></div><div className="timeline-card timeline-placeholder"><span>01</span><strong>Tahun dan latar belakang berdiri</strong><span>02</span><strong>Program atau tonggak awal</strong><span>03</span><strong>Perkembangan organisasi</strong><span>04</span><strong>Pencapaian terbaru yang terverifikasi</strong></div></section>
    <section className="values-section section"><div className="shell"><SectionTitle eyebrow="Identitas Organisasi" title="Cara IMAJATOS berjalan." text="Informasi berikut berasal dari penjelasan langsung pemilik proyek. Visi, misi, serta program kerja resmi akan ditambahkan dari dokumen organisasi." centered /><div className="vision-grid"><article><GraduationCap /><span>Keanggotaan</span><h3>Mahasiswa IPB jalur Ketua OSIS.</h3><p>IMAJATOS menjadi wadah bagi para mahasiswa IPB University yang diterima melalui jalur Ketua OSIS.</p></article><article><GitBranch /><span>Kepengurusan</span><h3>Dikelola melalui struktur internal.</h3><p>Pengurus inti bekerja bersama biro dan departemen untuk menjalankan organisasi.</p></article></div></div></section>
    <section className="section shell"><SectionTitle eyebrow="Struktur Organisasi" title="Susunan kepengurusan IMAJATOS." text="Arahkan kursor atau klik kartu Ketua untuk melihat profil. Nama pengurus serta nama setiap biro dan departemen akan ditambahkan setelah data resminya tersedia." centered /><OrganizationStructure /></section>
  </>;
}
