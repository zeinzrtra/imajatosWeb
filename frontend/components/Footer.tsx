import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid shell">
        <div>
          <div className="brand footer-brand"><span className="brand-mark"><span>I</span></span><span className="brand-copy"><strong>IMAJATOS</strong><small>Bersama Memberi Dampak</small></span></div>
          <p>Wadah kolaborasi pemuda untuk menciptakan perubahan yang nyata, inklusif, dan berkelanjutan.</p>
          <a className="social-button" href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={18} /> @imajatos</a>
        </div>
        <div>
          <h4>Navigasi</h4>
          <Link href="/tentang">Tentang Kami</Link><Link href="/berita">Berita & Publikasi</Link><Link href="/galeri">Galeri Kegiatan</Link><Link href="/kontak">Kontak</Link>
        </div>
        <div>
          <h4>Hubungi Kami</h4>
          <p className="contact-line"><MapPin size={18} /> Bogor, Jawa Barat, Indonesia</p>
          <p className="contact-line"><Mail size={18} /> halo@imajatos.org</p>
          <p className="contact-line"><Phone size={18} /> +62 812 3456 7890</p>
        </div>
      </div>
      <div className="copyright shell">© 2026 IMAJATOS. Semua hak dilindungi.</div>
    </footer>
  );
}
