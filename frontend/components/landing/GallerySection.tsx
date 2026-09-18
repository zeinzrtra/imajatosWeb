import Image from "next/image";
import { Camera, Play } from "lucide-react";
import { gallery } from "@/data/site";

export function GallerySection() {
  return <section id="galeri" className="landing-section" aria-labelledby="galeri-title">
    <div className="section shell"><div className="landing-intro-row gallery-heading"><div><span className="mini-label">Galeri & Dokumentasi</span><h2 id="galeri-title">Perjalanan yang dapat dilihat, bukan hanya diceritakan.</h2><p>Dokumentasi membantu anggota, kampus, sponsor, dan mitra melihat kegiatan IMAJATOS secara nyata.</p></div><span className="section-number" aria-hidden="true">05</span></div><p className="content-note">Foto di halaman ini masih berupa stok visual. Ganti dengan dokumentasi asli IMAJATOS yang sudah memiliki izin penggunaan sebelum peluncuran.</p><div className="gallery-summary"><div><Camera size={24} /><strong>Dokumentasi Kegiatan</strong></div><p>Area untuk foto pilihan dari program dan perjalanan IMAJATOS.</p></div><div className="gallery-grid">{gallery.map((item, index) => <figure className={index === 0 || index === 5 ? "wide" : ""} key={item.title}><Image src={item.image} alt={`Foto stok ilustrasi: ${item.title}`} fill sizes={index === 0 || index === 5 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} /><figcaption><span>{item.tag} · contoh visual</span><h3>{item.title}</h3></figcaption></figure>)}</div><div className="video-banner"><div className="play-button"><Play fill="currentColor" /></div><div><span>Video Cerita</span><h2>Melihat lebih dekat perjalanan kami.</h2><p>Ruang untuk dokumentasi video resmi IMAJATOS.</p></div></div></div>
  </section>;
}
