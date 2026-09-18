export const programs = [
  ...Array.from({ length: 3 }, (_, index) => ({
    slug: `contoh-program-biro-${index + 1}`,
    title: `Nama Program Biro ${String(index + 1).padStart(2, "0")}`,
    unitType: "Biro",
    unit: `Nama Biro ${index + 1}`,
    status: "Status belum diperbarui",
    schedule: "Waktu pelaksanaan menunggu data resmi",
    audience: "Sasaran program menunggu data resmi",
    summary: "Ringkasan tujuan, bentuk kegiatan, dan manfaat program akan ditampilkan setelah informasi resmi diterima.",
    isPlaceholder: true,
  })),
  ...Array.from({ length: 4 }, (_, index) => ({
    slug: `contoh-program-departemen-${index + 1}`,
    title: `Nama Program Departemen ${String(index + 1).padStart(2, "0")}`,
    unitType: "Departemen",
    unit: `Nama Departemen ${index + 1}`,
    status: "Status belum diperbarui",
    schedule: "Waktu pelaksanaan menunggu data resmi",
    audience: "Sasaran program menunggu data resmi",
    summary: "Ringkasan tujuan, bentuk kegiatan, dan manfaat program akan ditampilkan setelah informasi resmi diterima.",
    isPlaceholder: true,
  })),
];

export const gallery = [
  { title: "Distribusi bantuan warga", tag: "Sosial", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=85" },
  { title: "Belajar bersama anak desa", tag: "Pendidikan", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85" },
  { title: "Aksi hijau komunitas", tag: "Lingkungan", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85" },
  { title: "Diskusi relawan muda", tag: "Komunitas", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85" },
  { title: "Pemberdayaan usaha lokal", tag: "Ekonomi", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85" },
  { title: "Kerja bakti lingkungan", tag: "Aksi", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85" },
];
