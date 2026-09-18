import { OrganizationStructure } from "@/components/OrganizationStructure";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutSection() {
  return <section id="tentang" className="landing-section" aria-labelledby="tentang-title">
    <div className="section shell about-editorial">
      <div><span className="section-number" aria-hidden="true">02</span><SectionTitle eyebrow="Tentang Kami" title="Organisasi yang tumbuh dari jalur dan pengalaman yang sama." /><p>IMAJATOS menjadi ruang bersama bagi mahasiswa IPB University yang diterima melalui jalur Ketua OSIS. Di dalamnya, pengurus inti bekerja bersama biro dan departemen untuk menjalankan organisasi.</p><p>Sejarah, visi, misi, dan tonggak perjalanan akan ditambahkan dari dokumen atau wawancara resmi agar cerita yang tampil tetap akurat.</p></div>
      <aside className="quote-card"><span className="content-status">Integritas informasi</span><div className="quote-mark">“</div><blockquote>Yang belum terverifikasi tidak digantikan dengan cerita rekaan.</blockquote><span>Nama pengurus, unit, dan program akan diperbarui dari data resmi IMAJATOS.</span></aside>
    </div>
    <div id="struktur" className="section structure-section landing-anchor"><div className="shell"><div className="landing-intro-row"><SectionTitle eyebrow="Struktur Organisasi" title="Kenali orang-orang di balik IMAJATOS." text="Arahkan kursor atau klik kartu Ketua, Sekretaris, atau Bendahara untuk melihat profil. Mekanisme biro dan departemen akan dikembangkan setelah konsepnya ditentukan." /><span className="section-number" aria-hidden="true">03</span></div><OrganizationStructure /></div></div>
  </section>;
}
