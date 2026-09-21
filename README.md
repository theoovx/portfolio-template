# Portfolio Template

Template website portofolio pribadi — dark theme, responsif, dan bisa langsung
dipakai lewat GitHub Pages (gratis, tanpa perlu server sendiri).

Fitur yang sudah ada:
- Halaman welcome/splash sebelum masuk ke portofolio
- Navbar melayang yang otomatis rapi di HP maupun desktop
- Section: Hero, Tentang, Pengalaman (timeline), Tools/Skill, Karya (dengan
  filter kategori & modal galeri foto/video), Sertifikat (bisa dibuka, di-zoom,
  dan diputar), Kontak
- Mini music player (opsional, bisa dihapus kalau tidak perlu)
- Semua sudah HTML + CSS + JavaScript murni — tidak perlu install apa-apa,
  tidak perlu `npm install`, bisa diedit langsung dari HP (misal pakai Acode)

---

## Cara Pakai

### 1. Siapkan file asetmu
Buat folder `assets` dengan struktur ini, isi dengan filemu sendiri:

```
assets/
├── photos/
│   └── foto-profil.jpg
├── logo/
│   ├── logo1.png
│   ├── logo2.png
│   └── logo3.png
├── projects/
│   ├── project-1-a.jpg
│   ├── project-1-b.jpg
│   ├── project-2-a.jpg
│   └── project-3-video.mp4
├── certificates/
│   ├── sertifikat-1.jpg
│   └── sertifikat-2.jpg
├── music/
│   ├── cover-lagu.jpg
│   └── lagu.mp3
└── CV/
    └── CV-Anda.pdf
```

Boleh tambah/kurangi jumlah file sesuai kebutuhan — tinggal sesuaikan juga di
`index.html` (untuk foto, logo, sertifikat) dan `script.js` (untuk project,
lihat bagian 3).

### 2. Edit teks di `index.html`
Cari dan ganti semua teks yang ditandai kurung siku, contoh:
`[Nama Lengkap Anda]`, atau teks contoh seperti "Nama Sekolah / Institusi",
"Tag 1", dsb. Semua tempat yang perlu diisi sudah diberi contoh placeholder
yang jelas — tinggal cari section-nya lewat komentar HTML
(`<!-- ABOUT -->`, `<!-- CONTACT -->`, dst).

Bagian yang wajib dicek satu-satu:
- `<title>` dan `<meta name="description">` di paling atas
- Section **Welcome**: nama & tagline
- Section **Hero**: kalimat pembuka dan foto
- Section **Tentang**: bio + 4 kartu fakta singkat
- Section **Pengalaman**: 4 kartu timeline (boleh dikurangi/ditambah dengan
  copy-paste blok `<article class="experience-item">`)
- Section **Karya**: nama kategori filter (`Kategori1`, `Kategori2` — ganti
  sesuai kebutuhanmu, harus sama persis dengan `category` di `script.js`)
- Section **Sertifikat**: 2 kartu sertifikat (boleh ditambah, copy-paste blok
  `<article class="certificate-card">`)
- Section **Kontak**: link WhatsApp, Instagram, GitHub, Email, dan CV
- **Music player**: judul lagu, atau hapus seluruh blok
  `<!-- MUSIC PLAYER -->` di `index.html` kalau tidak mau pakai fitur ini

### 3. Edit daftar project di `script.js`
Project di section Karya diatur lewat satu array di awal `script.js`
(cari `const projects = [`). Setiap project punya:

```js
{
  id: "id-unik",              // bebas, asal tidak sama antar project
  category: "Kategori1",      // harus sama dengan data-filter di index.html
  title: "Judul Project",
  description: "Deskripsi singkat.",
  media: [
    { type: "image", src: "assets/projects/nama-file.jpg", label: "Keterangan" },
    { type: "video", src: "assets/projects/nama-file.mp4", label: "Keterangan" }
  ]
}
```

Tambah/hapus object di dalam array sesuai jumlah project yang kamu punya.

### 4. Warna & font (opsional)
Semua warna diatur lewat CSS variable di paling atas `style.css`
(cari `:root {`). Ganti nilai `--blue` kalau mau ganti warna aksen ke warna
lain — otomatis berubah di semua tombol, ikon, dan highlight teks.

### 5. Publikasikan lewat GitHub Pages
1. Buat repository baru di GitHub, set **Public**
2. Upload semua file (`index.html`, `style.css`, `script.js`, folder `assets`)
   lewat "Add file → Upload files" di web GitHub (bisa dari HP)
3. Buka tab **Settings → Pages**
4. Di bagian "Branch", pilih `main` → Save
5. Tunggu 1-2 menit, situsmu bisa diakses di
   `https://USERNAME.github.io/NAMA-REPO/`

---

## Struktur File

```
index.html   → semua konten & struktur halaman
style.css    → semua tampilan visual (warna, layout, animasi)
script.js    → interaksi (menu, filter project, modal, viewer foto, musik)
assets/      → gambar, video, musik, CV milikmu sendiri
```

## Catatan
- Desain ini pakai palet warna biru gelap "glass" — kalau mau tema warna lain,
  cukup ubah CSS variable di `style.css`, tidak perlu sentuh HTML/JS
- File gambar sertifikat sebaiknya diputar dulu ke posisi tegak sebelum
  di-upload, supaya tidak perlu diputar manual tiap kali dibuka pengunjung
- Ukuran file di GitHub web upload dibatasi 25MB per file — kompres dulu kalau
  video/gambar terlalu besar
