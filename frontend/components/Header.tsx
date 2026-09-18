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
