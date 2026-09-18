import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Megaphone, Network, Users } from "lucide-react";
import { AboutSection } from "@/components/landing/AboutSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { GallerySection } from "@/components/landing/GallerySection";
import { ProgramSection } from "@/components/landing/ProgramSection";
import { SectionTitle } from "@/components/SectionTitle";
import { programs } from "@/data/site";

const identity = [
  { icon: GraduationCap, title: "Wadah Mahasiswa IPB", text: "Mewadahi para mahasiswa IPB University yang diterima melalui jalur Ketua OSIS." },
  { icon: Network, title: "Kepengurusan Internal", text: "Berjalan dengan struktur kepengurusan IMAJATOS sendiri." },
];

export default function Home() {
  return (
    <>
      <section id="beranda" className="hero landing-anchor">
        <Image src="/hero-community.png" alt="Ilustrasi mahasiswa berdiskusi dan berkolaborasi" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <div className="hero-kicker"><span /> Organisasi Mahasiswa IPB University</div>
          <h1>Satu Jalur,<br />Tumbuh dalam <em>Satu Wadah.</em></h1>
          <p>IMAJATOS mewadahi mahasiswa IPB University jalur Ketua OSIS dan berjalan melalui struktur kepengurusan internalnya sendiri.</p>
          <div className="hero-actions">
            <Link href="#tentang" className="button button-primary">Kenali IMAJATOS <ArrowRight size={18} /></Link>
            <Link href="#program" className="button button-ghost">Lihat Program</Link>
          </div>
          <div className="hero-stats hero-principles">
            <div><GraduationCap size={20} /><span>Mahasiswa jalur Ketua OSIS</span></div><div><Users size={20} /><span>Kepengurusan mandiri</span></div><div><Building2 size={20} /><span>Terbuka untuk kolaborasi</span></div>
          </div>
        </div>
      </section>

      <section className="intro section shell">
        <div className="intro-copy">
          <SectionTitle eyebrow="Tentang IMAJATOS" title="Wadah mahasiswa dengan kepengurusan sendiri." />
          <p>IMAJATOS menjadi ruang bersama bagi mahasiswa IPB University jalur Ketua OSIS. Organisasi ini dikelola melalui kepengurusan internalnya sendiri.</p>
          <Link href="#tentang" className="text-link">Lihat profil organisasi <ArrowRight size={17} /></Link>
        </div>
        <div className="quote-card"><span className="content-status">Data organisasi</span><div className="quote-mark">“</div><blockquote>Sejarah, visi, misi, nama unit, serta nama pengurus akan dilengkapi dari dokumen resmi IMAJATOS.</blockquote><span>Informasi yang belum diterima tidak digantikan dengan konten rekaan.</span></div>
      </section>

      <section className="partner-section shell" aria-labelledby="partner-title">
        <div><span className="mini-label">Untuk Sponsor & Mitra</span><h2 id="partner-title">Kolaborasi yang jelas sejak awal.</h2><p>Kami menyiapkan jalur komunikasi khusus untuk membahas tujuan, bentuk dukungan, dan kebutuhan program bersama calon sponsor maupun partner.</p></div>
        <ol className="partner-steps"><li><span>01</span><strong>Sampaikan kebutuhan</strong><p>Ceritakan tujuan dan bentuk kolaborasi yang diharapkan.</p></li><li><span>02</span><strong>Diskusi bersama tim</strong><p>Kami menyelaraskan kebutuhan dengan ruang lingkup program.</p></li><li><span>03</span><strong>Susun langkah lanjut</strong><p>Rencana dan tanggung jawab disepakati secara transparan.</p></li></ol>
        <Link href="#pengaduan" className="text-link">Bahas peluang kolaborasi <ArrowRight size={17} /></Link>
      </section>

      <section className="focus-section section">
        <div className="shell">
          <SectionTitle eyebrow="Identitas Organisasi" title="Satu wadah, dengan kepengurusan sendiri." text="Dua hal ini menjadi dasar untuk menjelaskan posisi IMAJATOS secara jelas kepada anggota, kampus, sponsor, dan mitra." centered />
          <div className="focus-grid">{identity.map(({ icon: Icon, title, text }, i) => <article className="focus-card" key={title}><span className="focus-number">0{i + 1}</span><div className="focus-icon"><Icon size={26} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <AboutSection />

      <section className="section shell">
        <div className="section-heading-row"><SectionTitle eyebrow="Program Kerja" title="Rencana yang bisa diikuti." /><Link href="#program" className="text-link">Lihat semua program <ArrowRight size={17} /></Link></div>
        <p className="content-note">Nama dan informasi program berikut masih berupa struktur contoh. Konten final akan menggunakan program resmi IMAJATOS.</p>
        <div className="program-preview-grid">{programs.slice(0, 3).map((program, index) => <article className="program-preview-card" key={program.slug}><span className="program-index">0{index + 1}</span><small>{program.unitType}</small><h3>{program.title}</h3><p>{program.summary}</p><Link href={`#${program.slug}`}>Lihat format program <ArrowRight size={16} /></Link></article>)}</div>
      </section>

      <ProgramSection />
      <GallerySection />

      <section className="cta-section"><div className="shell cta-inner"><div><span className="cta-kicker"><Megaphone size={18} /> Terbuka untuk kolaborasi</span><h2>Mari ciptakan dampak bersama.</h2><p>Punya ide program, peluang sponsorship, atau rencana partnership? Kami terbuka untuk bekerja sama.</p></div><Link href="#pengaduan" className="button button-light">Hubungi Kami <ArrowRight size={18} /></Link></div></section>

      <ContactSection />
    </>
  );
}
