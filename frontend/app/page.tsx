import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Network, Users } from "lucide-react";
import { AboutSection } from "@/components/landing/AboutSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { GallerySection } from "@/components/landing/GallerySection";
import { ProgramSection } from "@/components/landing/ProgramSection";
import { SectionTitle } from "@/components/SectionTitle";

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

      <section className="focus-section section" aria-label="Sekilas IMAJATOS">
        <div className="shell">
          <div className="landing-intro-row"><SectionTitle eyebrow="Sekilas IMAJATOS" title="Satu identitas, dua hal yang perlu langsung dipahami." text="IMAJATOS adalah wadah mahasiswa IPB University jalur Ketua OSIS yang berjalan dengan kepengurusan internalnya sendiri." /></div>
          <div className="focus-grid">{identity.map(({ icon: Icon, title, text }, i) => <article className="focus-card" key={title}><span className="focus-number">0{i + 1}</span><div className="focus-icon"><Icon size={26} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <AboutSection />
      <ProgramSection />
      <GallerySection />

      <section className="collaboration-section" aria-labelledby="partner-title">
        <div className="shell collaboration-layout">
          <div className="collaboration-copy"><span className="mini-label">Untuk Sponsor & Mitra</span><h2 id="partner-title">Dari perkenalan menuju kolaborasi yang jelas.</h2><p>Punya ide program, peluang sponsorship, atau rencana partnership? Sampaikan kebutuhannya dan tim IMAJATOS akan membantu menyusun langkah lanjut.</p><Link href="#pengaduan" className="button button-light">Hubungi Kami <ArrowRight size={18} /></Link></div>
          <ol className="partner-steps"><li><span>01</span><strong>Sampaikan kebutuhan</strong><p>Ceritakan tujuan dan bentuk kolaborasi yang diharapkan.</p></li><li><span>02</span><strong>Diskusi bersama tim</strong><p>Selaraskan kebutuhan dengan ruang lingkup program.</p></li><li><span>03</span><strong>Susun langkah lanjut</strong><p>Sepakati rencana dan tanggung jawab secara transparan.</p></li></ol>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
