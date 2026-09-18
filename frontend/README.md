# IMAJATOS Frontend

Frontend website organisasi IMAJATOS yang dibuat dengan Next.js App Router dan TypeScript.

## Menjalankan project

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000` di browser.

## Struktur landing page

- `/` — satu landing page yang memuat hero, profil, struktur organisasi, program kerja, galeri, sponsor/partnership, kontak, formulir pengaduan, dan lokasi.
- Navigasi utama menggunakan anchor `#tentang`, `#program`, `#galeri`, dan `#kontak`.
- `/tentang`, `/program`, `/galeri`, dan `/kontak` mengalihkan tautan lama ke bagian terkait pada landing page.
- `/berita` mengalihkan tautan lama ke bagian program kerja.

## Integrasi backend

Saat ini seluruh konten masih berupa data frontend pada `data/site.ts`. Form kontak juga masih berupa demo interaktif dan belum melakukan request ke server. Integrasi API dapat ditambahkan tanpa mengubah struktur tampilan.
