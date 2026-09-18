"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["/", "Beranda"],
  ["/tentang", "Tentang Kami"],
  ["/berita", "Berita"],
  ["/galeri", "Galeri"],
  ["/kontak", "Kontak"],
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="IMAJATOS Beranda">
          <span className="brand-mark"><span>I</span></span>
          <span className="brand-copy"><strong>IMAJATOS</strong><small>Bersama Memberi Dampak</small></span>
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navigasi utama">
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          ))}
          <Link href="/kontak#pengaduan" className="nav-cta" onClick={() => setOpen(false)}>Hubungi Kami</Link>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Buka menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
