import Image from "next/image";
import { Camera, Play } from "lucide-react";
import { gallery } from "@/data/site";

export default function GaleriPage() {
  return <>
    <section className="page-hero gallery-hero"><div className="shell"><span>Galeri & Dokumentasi</span><h1>Kumpulan momen<br />yang bikin kami semangat.</h1><p>Potongan cerita dari setiap langkah, senyum, dan kerja baik yang kami lakukan bareng.</p></div></section>
    <section className="section shell"><p className="content-note">Foto di halaman ini masih berupa stok visual. Ganti dengan dokumentasi asli IMAJATOS yang sudah memiliki izin penggunaan sebelum peluncuran.</p><div className="gallery-summary"><div><Camera size={24} /><strong>Dokumentasi Kegiatan</strong></div><p>Area untuk foto pilihan dari program dan perjalanan IMAJATOS.</p></div><div className="gallery-grid">{gallery.map((item, i) => <figure className={i === 0 || i === 5 ? "wide" : ""} key={item.title}><Image src={item.image} alt={`Foto stok ilustrasi: ${item.title}`} fill sizes={i === 0 || i === 5 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"} /><figcaption><span>{item.tag} · contoh visual</span><h3>{item.title}</h3></figcaption></figure>)}</div><div className="video-banner"><div className="play-button"><Play fill="currentColor" /></div><div><span>Video Cerita</span><h2>Melihat lebih dekat perjalanan kami.</h2><p>Ruang untuk dokumentasi video resmi IMAJATOS.</p></div></div></section>
  </>;
}
