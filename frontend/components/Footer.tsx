import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid shell">
        <div>
          <div className="brand footer-brand"><span className="brand-mark"><span>I</span></span><span className="brand-copy"><strong>IMAJATOS</strong><small>IPB University</small></span></div>
          <p>Organisasi mahasiswa IPB University yang mewadahi para mahasiswa jalur Ketua OSIS dengan struktur kepengurusan internal.</p>
          <span className="social-button"><Instagram size={18} /> Akun resmi akan ditambahkan</span>
        </div>
        <div>
          <h4>Navigasi</h4>
          <Link href="/#tentang">Tentang Kami</Link><Link href="/#program">Program Kerja</Link><Link href="/#galeri">Galeri Kegiatan</Link><Link href="/#kontak">Kontak</Link>
        </div>
        <div>
          <h4>Hubungi Kami</h4>
          <p className="contact-line"><MapPin size={18} /> Alamat menunggu verifikasi</p>
          <p className="contact-line"><Mail size={18} /> Email resmi akan ditambahkan</p>
        </div>
      </div>
      <div className="copyright shell">© 2026 IMAJATOS. Semua hak dilindungi.</div>
    </footer>
  );
}
