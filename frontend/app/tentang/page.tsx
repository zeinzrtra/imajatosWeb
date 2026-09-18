import { GitBranch, GraduationCap } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const executiveStructure = [
  { count: 3, role: "Ketua" },
  { count: 2, role: "Sekretaris" },
  { count: 2, role: "Bendahara" },
];

const unitStructure = [
  { count: 3, role: "Biro" },
  { count: 4, role: "Departemen" },
];

export default function TentangPage() {
  return <>
    <section className="page-hero"><div className="shell"><span>Tentang Kami</span><h1>Mengenal IMAJATOS<br />lebih dekat.</h1><p>IMAJATOS adalah organisasi mahasiswa IPB University yang mewadahi para mahasiswa jalur Ketua OSIS dan memiliki struktur kepengurusan internal.</p></div></section>
    <section className="section shell story-grid"><div><SectionTitle eyebrow="Cerita Kami" title="Cerita yang akan ditulis dari perjalanan nyata." /><p>Bagian ini disiapkan untuk sejarah resmi IMAJATOS: alasan organisasi dibentuk, siapa yang memulai, dan peristiwa penting yang membentuk arah geraknya.</p><p>Konten final perlu disusun dari dokumen atau wawancara resmi agar kisah yang tampil akurat dan benar-benar terasa milik IMAJATOS.</p></div><div className="timeline-card timeline-placeholder"><span>01</span><strong>Tahun dan latar belakang berdiri</strong><span>02</span><strong>Program atau tonggak awal</strong><span>03</span><strong>Perkembangan organisasi</strong><span>04</span><strong>Pencapaian terbaru yang terverifikasi</strong></div></section>
    <section className="values-section section"><div className="shell"><SectionTitle eyebrow="Identitas Organisasi" title="Cara IMAJATOS berjalan." text="Informasi berikut berasal dari penjelasan langsung pemilik proyek. Visi, misi, serta program kerja resmi akan ditambahkan dari dokumen organisasi." centered /><div className="vision-grid"><article><GraduationCap /><span>Keanggotaan</span><h3>Mahasiswa IPB jalur Ketua OSIS.</h3><p>IMAJATOS menjadi wadah bagi para mahasiswa IPB University yang diterima melalui jalur Ketua OSIS.</p></article><article><GitBranch /><span>Kepengurusan</span><h3>Dikelola melalui struktur internal.</h3><p>Pengurus inti bekerja bersama biro dan departemen untuk menjalankan organisasi.</p></article></div></div></section>
    <section className="section shell"><SectionTitle eyebrow="Struktur Organisasi" title="Susunan kepengurusan IMAJATOS." text="Struktur berikut menampilkan komposisi yang sudah dikonfirmasi. Nama pengurus serta nama setiap biro dan departemen akan ditambahkan setelah data resminya tersedia." centered /><div className="structure-chart"><div className="structure-group"><span className="structure-label">Pengurus Inti</span><div className="structure-cards">{executiveStructure.map((item) => <article className="structure-card" key={item.role}><strong>{item.count}</strong><h3>{item.role}</h3><p>orang</p></article>)}</div></div><div className="structure-connector" aria-hidden="true" /><div className="structure-group"><span className="structure-label">Unit Organisasi</span><div className="structure-cards structure-cards-units">{unitStructure.map((item) => <article className="structure-card structure-card-unit" key={item.role}><strong>{item.count}</strong><h3>{item.role}</h3><p>nama unit menunggu data resmi</p></article>)}</div></div></div></section>
  </>;
}
