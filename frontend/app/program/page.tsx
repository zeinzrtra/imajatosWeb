"use client";

import { CalendarDays, CheckCircle2, ChevronDown, ClipboardList, PlayCircle, Search, UsersRound } from "lucide-react";
import { useMemo, useState } from "react";
import { programs } from "@/data/site";

const stages = [
  { icon: ClipboardList, title: "Direncanakan", text: "Tujuan, sasaran, jadwal, dan kebutuhan program disiapkan." },
  { icon: PlayCircle, title: "Berjalan", text: "Pelaksanaan dan informasi partisipasi diperbarui secara berkala." },
  { icon: CheckCircle2, title: "Selesai", text: "Hasil kegiatan dan dokumentasi dirangkum untuk evaluasi." },
];

export default function ProgramPage() {
  const [query, setQuery] = useState("");
  const [unitType, setUnitType] = useState("Semua");
  const unitTypes = ["Semua", "Biro", "Departemen"];
  const filtered = useMemo(() => programs.filter((program) => {
    const matchesUnit = unitType === "Semua" || program.unitType === unitType;
    const searchable = `${program.title} ${program.unit} ${program.summary}`.toLowerCase();
    return matchesUnit && searchable.includes(query.trim().toLowerCase());
  }), [query, unitType]);

  return <>
    <section className="page-hero compact program-hero"><div className="shell"><span>Program Kerja</span><h1>Rencana yang jelas,<br />progres yang terbaca.</h1><p>Temukan program kerja IMAJATOS berdasarkan unit pengelola, lalu lihat tujuan, sasaran, jadwal, dan tahap pelaksanaannya.</p></div></section>

    <section className="program-flow shell" aria-labelledby="program-flow-title">
      <div className="program-flow-heading"><span className="mini-label">Alur Program</span><h2 id="program-flow-title">Dari rencana hingga evaluasi.</h2></div>
      <ol>{stages.map(({ icon: Icon, title, text }, index) => <li key={title}><span className="program-stage-number">0{index + 1}</span><Icon aria-hidden="true" /><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol>
    </section>

    <section className="section shell program-directory" aria-labelledby="program-directory-title">
      <div className="section-heading-row"><div><span className="mini-label">Direktori Program</span><h2 id="program-directory-title">Program berdasarkan unit.</h2></div><p>Periode kepengurusan dan seluruh data program menunggu dokumen resmi IMAJATOS.</p></div>
      <p className="content-note">Kartu berikut merupakan struktur contoh, bukan program resmi. Nama, status, waktu, sasaran, dan penanggung jawab harus diganti menggunakan data terverifikasi sebelum website diluncurkan.</p>

      <div className="filter-bar program-filter"><label><Search size={20} aria-hidden="true" /><span className="sr-only">Cari program</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama program atau unit..." /></label><div className="category-tabs" aria-label="Filter unit program">{unitTypes.map((item) => <button type="button" aria-pressed={item === unitType} className={item === unitType ? "active" : ""} onClick={() => setUnitType(item)} key={item}>{item}</button>)}</div></div>

      <div className="program-grid">{filtered.map((program, index) => <article id={program.slug} className="program-card" key={program.slug}><div className="program-card-top"><span className="program-index">{String(index + 1).padStart(2, "0")}</span><span className="content-status">Contoh konten</span></div><div className="program-owner"><span>{program.unitType}</span><strong>{program.unit}</strong></div><h3>{program.title}</h3><p>{program.summary}</p><div className="program-meta"><span><CalendarDays size={17} aria-hidden="true" />{program.schedule}</span><span><UsersRound size={17} aria-hidden="true" />{program.audience}</span></div><details><summary>Lihat format detail <ChevronDown size={17} aria-hidden="true" /></summary><div className="program-detail"><div><span>Status</span><strong>{program.status}</strong></div><div><span>Penanggung jawab</span><strong>Nama PIC menunggu data resmi</strong></div><div><span>Dokumentasi</span><strong>Akan ditautkan setelah program terlaksana</strong></div></div></details></article>)}</div>
      {filtered.length === 0 && <div className="empty-state"><Search size={32} /><h3>Program tidak ditemukan</h3><p>Coba gunakan kata kunci atau kelompok unit lain.</p></div>}
    </section>
  </>;
}
