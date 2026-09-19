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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
      const readingLine = headerHeight + Math.min(window.innerHeight * 0.24, 180);
      let current = links[0][0];

      for (const [id] of links) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= readingLine) current = id;
        else break;
      }

      setScrolled(window.scrollY > 24);
      setActive((previous) => previous === current ? previous : current);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="header-inner">
        <Link href="/#beranda" className="brand" aria-label="IMAJATOS Beranda" onClick={() => setActive("beranda")}>
          <span className="brand-mark"><span>I</span></span>
          <span className="brand-copy"><strong>IMAJATOS</strong><small>IPB University</small></span>
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navigasi utama">
          <div className="nav-links">
            {links.map(([id, label]) => (
              <Link key={id} href={`/#${id}`} onClick={() => { setOpen(false); setActive(id); }} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined}>
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <Link href="/#pengaduan" className="nav-cta" onClick={() => { setOpen(false); setActive("kontak"); }}>Hubungi Kami</Link>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
