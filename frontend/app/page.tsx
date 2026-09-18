import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HandHeart, Leaf, Megaphone, Users } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { news } from "@/data/site";

const focus = [
  { icon: BookOpen, title: "Pendidikan", text: "Membuka akses belajar dan meningkatkan literasi generasi muda." },
  { icon: HandHeart, title: "Sosial Kemanusiaan", text: "Hadir cepat, tepat, dan hangat untuk masyarakat yang membutuhkan." },
  { icon: Leaf, title: "Lingkungan", text: "Menumbuhkan kesadaran dan aksi nyata untuk bumi yang berkelanjutan." },
  { icon: Users, title: "Pemberdayaan", text: "Menguatkan potensi lokal agar masyarakat tumbuh lebih mandiri." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="/hero-community.png" alt="Relawan IMAJATOS berkolaborasi dalam kegiatan sosial" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <div className="hero-kicker"><span /> Bareng-bareng sejak 2022</div>
          <h1>Mulai dari Peduli,<br />Lanjut Jadi <em>Aksi.</em></h1>
          <p>Hal baik nggak harus dimulai dari sesuatu yang besar. Yang penting, kita mulai dan bergerak bareng untuk masyarakat dan lingkungan.</p>
          <div className="hero-actions">
            <Link href="/berita" className="button button-primary">Lihat Aksi Kami <ArrowRight size={18} /></Link>
            <Link href="/tentang" className="button button-ghost">Kenalan Yuk</Link>
          </div>
          <div className="hero-stats">
            <div><strong>2.500+</strong><span>Penerima Manfaat</span></div><div><strong>45+</strong><span>Program Tuntas</span></div><div><strong>120+</strong><span>Relawan Aktif</span></div>
          </div>
        </div>
      </section>

      <section className="intro section shell">
        <div className="intro-copy">
          <SectionTitle eyebrow="Kenalan Dulu" title="Ruang buat ide baik tumbuh bareng." />
          <p>IMAJATOS mempertemukan anak muda, ide, dan semangat kolaborasi untuk menjawab kebutuhan nyata di sekitar kita.</p>
          <Link href="/tentang" className="text-link">Cerita lengkapnya <ArrowRight size={17} /></Link>
        </div>
        <div className="quote-card"><div className="quote-mark">“</div><blockquote>Masyarakat bukan hanya penerima manfaat, tetapi mitra utama dalam setiap perubahan.</blockquote><span>— Prinsip kerja IMAJATOS</span></div>
      </section>

      <section className="focus-section section">
        <div className="shell">
          <SectionTitle eyebrow="Yang Kami Kerjakan" title="Empat cara kami bikin dampak." text="Kami bergerak di berbagai bidang, sambil tetap dekat dengan kebutuhan masyarakat." centered />
          <div className="focus-grid">{focus.map(({ icon: Icon, title, text }, i) => <article className="focus-card" key={title}><span className="focus-number">0{i + 1}</span><div className="focus-icon"><Icon size={26} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading-row"><SectionTitle eyebrow="Kabar Terkini" title="Cerita dari lapangan." /><Link href="/berita" className="text-link">Lihat semua berita <ArrowRight size={17} /></Link></div>
        <div className="news-grid">{news.slice(0, 3).map((item, i) => <article className={`news-card ${i === 0 ? "featured" : ""}`} key={item.slug}><div className="news-image"><Image src={item.image} alt="" fill sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"} /><span>{item.category}</span></div><div className="news-content"><time>{item.date}</time><h3>{item.title}</h3><p>{item.excerpt}</p><Link href={`/berita#${item.slug}`} aria-label={`Baca ${item.title}`}>Baca selengkapnya <ArrowRight size={16} /></Link></div></article>)}</div>
      </section>

      <section className="cta-section"><div className="shell cta-inner"><div><span className="cta-kicker"><Megaphone size={18} /> Terbuka untuk kolaborasi</span><h2>Mari ciptakan dampak bersama.</h2><p>Punya ide program, peluang sponsorship, atau rencana partnership? Kami terbuka untuk bekerja sama.</p></div><Link href="/kontak#pengaduan" className="button button-light">Hubungi Kami <ArrowRight size={18} /></Link></div></section>
    </>
  );
}
