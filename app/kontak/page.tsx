"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Clock3, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function KontakPage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return <>
    <section className="page-hero compact"><div className="shell"><span>Kontak & Pengaduan</span><h1>Mari mulai percakapan<br />yang berarti.</h1><p>Punya pertanyaan, ide kolaborasi, atau hal yang ingin disampaikan? Kami siap mendengarkan.</p></div></section>
    <section className="section shell contact-layout"><aside><span className="mini-label">Hubungi Kami</span><h2>Kami senang mendengar dari Anda.</h2><p>Tim kami akan merespons pesan dalam 1–2 hari kerja.</p><div className="contact-list"><div><Mail /><span><small>Email</small><strong>halo@imajatos.org</strong></span></div><div><Phone /><span><small>Telepon / WhatsApp</small><strong>+62 812 3456 7890</strong></span></div><div><MapPin /><span><small>Sekretariat</small><strong>Bogor, Jawa Barat</strong></span></div><div><Clock3 /><span><small>Jam layanan</small><strong>Senin–Jumat, 09.00–17.00</strong></span></div></div><a className="instagram-card" href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram /><span><small>Ikuti aktivitas kami</small><strong>@imajatos</strong></span></a></aside>
      <div id="pengaduan" className="form-card">{sent ? <div className="success-message"><CheckCircle2 /><h2>Pesan berhasil disiapkan!</h2><p>Ini masih demo frontend. Saat API backend tersedia, formulir ini tinggal dihubungkan ke endpoint pengiriman.</p><button onClick={() => setSent(false)} className="button button-primary">Kirim pesan lain</button></div> : <><span className="mini-label">Kirim Pesan</span><h2>Apa yang bisa kami bantu?</h2><form onSubmit={submit}><div className="form-row"><label>Nama lengkap<input required placeholder="Nama Anda" /></label><label>Email<input required type="email" placeholder="nama@email.com" /></label></div><label>Topik<select defaultValue=""><option value="" disabled>Pilih topik</option><option>Kolaborasi</option><option>Program & Kegiatan</option><option>Pengaduan</option><option>Lainnya</option></select></label><label>Pesan<textarea required rows={6} placeholder="Ceritakan kebutuhan atau pesan Anda..." /></label><button className="button button-primary" type="submit">Kirim Pesan</button><small className="form-note">Dengan mengirim formulir ini, Anda menyetujui kebijakan privasi kami.</small></form></>}</div>
    </section>
    <section className="map-section"><iframe title="Lokasi sekretariat IMAJATOS" src="https://www.google.com/maps?q=Bogor%2C%20Jawa%20Barat&output=embed" loading="lazy" /></section>
  </>;
}
