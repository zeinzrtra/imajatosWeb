"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Clock3, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function KontakPage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return <>
    <section className="page-hero compact"><div className="shell"><span>Kontak & Pengaduan</span><h1>Hubungi kami untuk<br />mulai berkolaborasi.</h1><p>Punya pertanyaan, peluang sponsorship, ide partnership, atau pengaduan? Tim kami siap membantu.</p></div></section>
    <section className="section shell contact-layout"><aside><span className="mini-label">Kontak Kami</span><h2>Kami terbuka untuk berbagai bentuk kolaborasi.</h2><p>Informasi kontak resmi akan ditampilkan setelah diverifikasi oleh IMAJATOS.</p><div className="contact-list"><div><Mail /><span><small>Email</small><strong>Menunggu data resmi</strong></span></div><div><Phone /><span><small>Telepon / WhatsApp</small><strong>Menunggu data resmi</strong></span></div><div><MapPin /><span><small>Sekretariat</small><strong>Menunggu data resmi</strong></span></div><div><Clock3 /><span><small>Jam layanan</small><strong>Menunggu data resmi</strong></span></div></div><div className="instagram-card"><Instagram /><span><small>Media sosial</small><strong>Menunggu akun resmi</strong></span></div></aside>
      <div id="pengaduan" className="form-card">{sent ? <div className="success-message"><CheckCircle2 /><h2>Pesan berhasil disiapkan!</h2><p>Ini masih demo frontend. Begitu API backend tersedia, formulir ini tinggal disambungkan ke endpoint pengiriman.</p><button onClick={() => setSent(false)} className="button button-primary">Kirim pesan lain</button></div> : <><span className="mini-label">Kirim Pesan</span><h2>Apa yang bisa kami bantu?</h2><form onSubmit={submit}><div className="form-row"><label>Nama lengkap<input required placeholder="Nama Anda" /></label><label>Email<input required type="email" placeholder="nama@email.com" /></label></div><label>Topik<select defaultValue=""><option value="" disabled>Pilih topik</option><option>Sponsorship</option><option>Partnership / Kolaborasi</option><option>Program & Kegiatan</option><option>Pengaduan</option><option>Lainnya</option></select></label><label>Pesan<textarea required rows={6} placeholder="Ceritakan kebutuhan atau rencana Anda..." /></label><button className="button button-primary" type="submit">Kirim Pesan</button><small className="form-note">Dengan mengirim formulir ini, Anda menyetujui kebijakan privasi kami.</small></form></>}</div>
    </section>
    <section className="location-placeholder" aria-label="Lokasi sekretariat belum tersedia"><MapPin /><div><strong>Lokasi sekretariat akan ditampilkan di sini</strong><p>Peta akan diaktifkan setelah alamat resmi IMAJATOS dikonfirmasi.</p></div></section>
  </>;
}
