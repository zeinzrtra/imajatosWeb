# IMAJATOS Frontend

Frontend website organisasi IMAJATOS yang dibuat dengan Next.js App Router dan TypeScript.

## Menjalankan project

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000` di browser.

## Halaman

- `/` — beranda, hero, fokus layanan, dan berita terbaru
- `/tentang` — sejarah, visi/misi, nilai, dan struktur organisasi
- `/berita` — arsip berita dengan pencarian dan filter kategori
- `/galeri` — dokumentasi foto/video
- `/kontak` — informasi kontak, form pengaduan, dan peta

## Integrasi backend

Saat ini seluruh konten masih berupa data frontend pada `data/site.ts`. Form kontak juga masih berupa demo interaktif dan belum melakukan request ke server. Integrasi API dapat ditambahkan tanpa mengubah struktur tampilan.
