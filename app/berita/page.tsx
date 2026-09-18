"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { news } from "@/data/site";

export default function BeritaPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const categories = ["Semua", ...Array.from(new Set(news.map((item) => item.category)))];
  const filtered = useMemo(() => news.filter((item) => (category === "Semua" || item.category === category) && `${item.title} ${item.excerpt}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <>
    <section className="page-hero compact"><div className="shell"><span>Berita & Publikasi</span><h1>Kabar, cerita, dan<br />catatan perjalanan.</h1><p>Ikuti perkembangan program, pengumuman, dan berbagai cerita baik dari lapangan.</p></div></section>
    <section className="section shell">
      <div className="filter-bar"><label><Search size={20} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari berita..." /></label><div className="category-tabs">{categories.map((item) => <button className={item === category ? "active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div>
      <div className="archive-grid">{filtered.map((item) => <article id={item.slug} className="archive-card" key={item.slug}><div className="archive-image"><Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" /></div><div><span>{item.category}</span><time>{item.date}</time><h2>{item.title}</h2><p>{item.excerpt}</p><button className="text-button">Baca selengkapnya →</button></div></article>)}</div>
      {filtered.length === 0 && <div className="empty-state"><Search size={32} /><h3>Berita tidak ditemukan</h3><p>Coba kata kunci atau kategori lain.</p></div>}
    </section>
  </>;
}
