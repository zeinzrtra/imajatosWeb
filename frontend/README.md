# IMAJATOS Frontend

Frontend website organisasi IMAJATOS yang dibuat dengan Next.js App Router dan TypeScript.

## Menjalankan project

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000` di browser.

## Halaman

- `/` — beranda, identitas organisasi, dan ringkasan program kerja
- `/tentang` — sejarah, visi/misi, nilai, dan struktur organisasi
- `/program` — direktori program kerja dengan pencarian, filter unit, status, dan format detail
- `/berita` — mengalihkan tautan lama ke halaman program kerja
- `/galeri` — dokumentasi foto/video
- `/kontak` — informasi kontak, form pengaduan, dan peta

## Integrasi backend

Saat ini seluruh konten masih berupa data frontend pada `data/site.ts`. Form kontak juga masih berupa demo interaktif dan belum melakukan request ke server. Integrasi API dapat ditambahkan tanpa mengubah struktur tampilan.
