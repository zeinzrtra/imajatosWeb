"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["beranda", "Beranda"],
  ["tentang", "Tentang Kami"],
  ["program", "Program Kerja"],
  ["galeri", "Galeri"],
  ["kontak", "Kontak"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const sections = links.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-28% 0px -62%", threshold: [0, 0.1, 0.3] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/#beranda" className="brand" aria-label="IMAJATOS Beranda" onClick={() => setActive("beranda")}>
          <span className="brand-mark"><span>I</span></span>
          <span className="brand-copy"><strong>IMAJATOS</strong><small>IPB University</small></span>
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navigasi utama">
          {links.map(([id, label]) => (
            <Link key={id} href={`/#${id}`} onClick={() => { setOpen(false); setActive(id); }} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined}>
              {label}
            </Link>
          ))}
          <Link href="/#pengaduan" className="nav-cta" onClick={() => { setOpen(false); setActive("kontak"); }}>Hubungi Kami</Link>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Buka menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
