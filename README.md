#  Bijak Sampah - Website Edukasi Pengelolaan Sampah

> **Proyek Ujian Tengah Semester (UTS) Pemrograman Web**  
> Website Edukasi Masyarakat Bertema SDGs (SDG 11 & SDG 12)

---

##  Anggota Kelompok & Pembagian Tugas

| No | Nama Anggota | NIM | Pembagian Tugas / Kontribusi |
| :---: | :--- | :---: | :--- |
| **1** | **I Komang Yogi Sai Rama Putra** | 2515091127 | Perancangan Struktur Semantik HTML5, Penataan Beranda & Edukasi |
| **2** | **Gede Alit Putrawan** | 2515091081 | Penyusunan Layout CSS (Flexbox/Grid) & Skema Warna |
| **3** | **Gede Juniarta** | 2515091102 | Penerapan *Responsive Web Design* (Media Queries Tablet & Mobile) |
| **4** | **Gusti Agung Widhyamerta** | 2515091085 | Pembuatan Fitur Interaktif Navigasi & Integrasi JavaScript (`script.js`) |
| **5** | **Putu Angga Agusta Parama Sandhi** | 2515091115 | Riset Konten Edukasi SDGs, Pengumpulan Aset & Dokumentasi `README.md` |

---

## Deskripsi Website

- **Tema Utama SDGs**: `SDG 11` (Kota dan Komunitas yang Berkelanjutan) dan `SDG 12` (Konsumsi dan Produksi yang Bertanggung Jawab).
- **Sasaran Pengguna**: Masyarakat umum, khususnya skala rumah tangga, pelajar, dan komunitas peduli lingkungan.
- **Tujuan**: Meningkatkan kesadaran masyarakat untuk memilah sampah dari rumah, mengurangi penggunaan limbah plastik sekali pakai, mengolah sampah organik secara mandiri, serta memberikan pemahaman mengenai fasilitas pengolahan sampah seperti TPS3R dan Bank Sampah.
- **Manfaat**: Membantu mengurangi volume sampah yang bermuara di Tempat Pemrosesan Akhir (TPA), mencegah banjir, serta mengurangi pencemaran tanah dan air akibat limbah berbahaya.

---

## Halaman Website

Website **Bijak Sampah** dirancang secara responsif dengan menyajikan 6 bagian utama yang terinterkoneksi secara mulus melalui navigasi *smooth scrolling*:

1. **Beranda (`#halaman1`)**: Menampilkan *Hero Section* dengan latar belakang visual menarik, judul utama, slogan, dan pengantar pesan pengelolaan sampah.
2. **Edukasi (`#halaman2`)**: Menjelaskan 4 kategori utama sampah rumah tangga (Organik, Anorganik, B3, dan Residu) beserta deskripsi, contoh, dan estimasi waktu terurai.
3. **Dampak (`#halaman3`)**: Menggambarkan bahaya nyata jika sampah tidak dikelola, seperti banjir, sarang penyakit, pencemaran tanah, dan kerusakan ekosistem laut.
4. **Solusi (`#halaman4`)**: Menyediakan panduan praktis pengelolaan mandiri melalui metode Komposting, 3R & Upcycling, penanganan B3, residu, dan link tutorial daur ulang.
5. **Artikel (`#halaman5`)**: Mengedukasi masyarakat tentang alur pengolahan sampah, peran fasilitas **TPS3R**, dan nilai luhur **Gotong Royong**.
6. **Tentang (`#halaman6`)**: Menyajikan latar belakang tujuan platform, profil anggota kelompok pengembang, serta daftar rujukan ilmiah.

---

## Teknologi yang Digunakan

- **HTML5**: Menggunakan tag semantik modern (`<header>`, `<nav>`, `<section>`, `<article>`, `<main>`, `<footer>`).
- **CSS3**: Menggunakan *CSS Custom Properties*, *Flexbox*, *CSS Grid*, dan *Media Queries*.
- **FontAwesome (v6.7.2)**: Penyedia ikon vektor responsif untuk antarmuka pengguna (UI).
- **Google Fonts**: Menggunakan *font family* `'Poppins'` untuk keterbacaan tipografi.
- **JavaScript (Vanilla JS)**: Mengontrol interaktivitas menu navigasi *hamburger* pada perangkat *mobile*.

---

## Penjelasan Implementasi

### 1. Navigasi

Navbar memakai tag `<nav>` dan berada di bagian atas header. Tombol *hamburger* disiapkan untuk tampilan *mobile*, dan navigasi berpindah section menggunakan *anchor link* (`#halamanX`).

```html
<header class="site-bar">
  <nav class="nav-bar">
    <img src="Photos/Logo Sampah.png" alt="logo" class="logo" />
    <div class="hamburger" id="hamburger-btn">
      <i class="fa-solid fa-bars"></i>
    </div>
    <div class="nav-menu" id="nav-menu">
      <div id="icon">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div id="menu">
        <a href="#halaman1" class="brand">Beranda</a>
        <a href="#halaman2">Edukasi</a>
        <a href="#halaman3">Dampak</a>
        <a href="#halaman4">Solusi</a>
        <a href="#halaman5">Artikel</a>
        <a href="#halaman6">Tentang</a>
      </div>
    </div>
  </nav>
</header>
```
**FUNGSI**
- `<a href="#halamanX">` memindahkan pengunjung langsung ke bagian section tertentu tanpa perlu reload, memanfaatkan smooth scroll.

- `<div class="hamburger" id="hamburger-btn">` berfungsi sebagai tombol pembuka menu saat website dibuka dari layar HP/smartphone.

- `<div id="icon">` berisi ikon silang (fa-xmark) yang digunakan untuk menutup kembali menu mobile yang sedang terbuka.


### 2. STICKY NAVBAR
Navbar dikunci di bagian atas halaman menggunakan CSS agar tetap terlihat saat pengguna menggeser (scroll) layar ke bawah.
```CSS
.site-bar {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  width: 100%;
}
```
##FUNGSI##
- `position: sticky` dan `top: 0` membuat navbar tetap melayang dan menempel di bagian paling atas layar saat di-scroll.

- `z-index: 999` menjaganya berada di lapisan paling atas agar tidak tertutup oleh elemen gambar atau teks lain.

- `box-shadow` memberikan bayangan lembut di bawah navbar sebagai pemisah visual dengan konten halaman.


## 3. Efek Garis Meluncur Saat Menu Di-hove
Garis indikator di bawah teks menu navigasi dibuat menggunakan pseudo-element CSS `::after` agar memberikan respons visual yang halus saat kursor mengarah ke menu.
```CSS
.site-bar a {
  position: relative;
  text-decoration: none;
  color: var(--text-green);
  font-weight: 700;
  transition: color 0.2s ease;
}

.site-bar a::after {
  content: "";    
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 3px;
  background-color: var(--backrgound);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.site-bar a:hover::after {
  transform: scaleX(1);
}
```
##FUNGSI##
- `position: relative` dipasang pada tag `<a>` sebagai acuan posisi elemen garis.
- Garis dibuat dari pseudo-element `::after` yang awalnya berukuran nol ( `scaleX(0)` ).
-Saat di-hover, garis membesar meluncur dari kiri ke kanan ( `scaleX(1)` ). `transition` membuat gerakannya halus.


## 4. Layout Galeri Foto Kategori Sampah
Bagian Edukasi (`#halaman2`) menampilkan 4 foto kategori sampah (Organik, Anorganik, B3, Residu) secara sejajar menggunakan CSS Grid.
```CSS
#image-sampah {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;
  column-gap: 15px;
}

#image-sampah img {
  width: 390px;
  height: 250px;
  object-fit: cover;
}
```
##FUNGSI:##
- `display: grid` membagi kontainer foto menjadi grid dua dimensi.
- `grid-template-columns: repeat(4, 1fr)` membagi area secara otomatis menjadi 4 kolom sejajar berukuran sama.
- `object-fit: cover` memastikan gambar terpotong rapi menyesuaikan ukuran tanpa merusak aspek rasio atau membuat gambar gepeng.


## 5. Layout Kartu Solusi
Kartu pada bagian Solusi (`#halaman4` ) menggunakan Flexbox untuk menata teks dan gambar agar berjejer secara rapi dalam satu baris.
```CSS
.solusi1, .solusi2, .solusi3, .solusi4 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  gap: 20px;
  height: 250px;
  padding: 20px;
}
```
##FUNGSI:##
- `display: flex` merapikan teks deskripsi dan gambar agar berjejer secara horizontal dalam satu kartu.
- `flex: 1` membagi lebar setiap kartu secara merata di dalam kontainer utama.
- `align-items: center` memposisikan teks dan gambar secara presisi di tengah secara vertikal.


##6. Adaptasi Layar Mobile 
Aturan `@media query` digunakan untuk menyesuaikan tampilan halaman ketika dibuka dari layar smartphone ($\le 768\text{px}$).
```CSS
@media screen and (max-width: 768px) {
  .materi1 {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 16px;
  }

  .hamburger {
    display: flex;
    font-size: 26px;
    cursor: pointer;
  }

  .nav-menu.active {
    display: flex;
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--backrgound);
    flex-direction: column;
    z-index: 99999;
  }
}
```
##FUNGSI:##
- `@media screen and (max-width: 768px)` mendeteksi jika lebar layar browser berada pada ukuran smartphone.

- `grid-template-columns: 1fr` mengubah tampilan 4 kolom desktop menjadi 1 kolom vertikal agar teks nyaman dibaca tanpa horizontal scroll.

- `.nav-menu.active` mengubah menu navigasi menjadi layar penuh (fullscreen overlay) saat tombol hamburger diklik.


##7. Interaktivitas Menu Mobile
```JavaScript 
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const closeBtn = document.querySelector("#icon i");
  const menuLinks = document.querySelectorAll("#menu a");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.add("active");
    });
  }

  if (closeBtn && navMenu) {
    closeBtn.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});
```
##FUNGSI:##
- `DOMContentLoaded` memastikan skrip dieksekusi setelah seluruh dokumen HTML selesai dimuat.
- `classList.add("active")` memunculkan menu navigasi layar penuh saat ikon hamburger diklik.
- `classList.remove("active")` menyembunyikan menu kembali saat ikon 'X' atau salah satu tautan menu diklik.

## STRUKTUR FOLDER PROYEK
```
bijak-sampah/
├── index.html              # Halaman utama aplikasi (berisi 6 section semantik)
├── style.css               # File CSS utama (layouting, variabel, media queries)
├── script.js              # Script pendukung interaktivitas navigasi mobile
├── README.md               # Dokumentasi lengkap proyek UTS
└── Photos/                 # Direktori penyimpan aset gambar & ilustrasi
    ├── Logo Sampah.png     # Logo utama pada navbar
    ├── sampah.jpg          # Foto latar belakang Hero Section (Section 1)
    ├── organik.jpg         # Gambar kategori sampah organik
    ├── anorganik.jpg       # Gambar kategori sampah anorganik
    ├── sampah b3.jpg       # Gambar kategori sampah B3
    ├── residu.jpeg         # Gambar kategori sampah residu
    ├── banjir.jpg          # Visual dampak banjir 1
    ├── banjir2.jpg         # Visual dampak banjir 2
    ├── Covid.jpg           # Visual dampak sarang penyakit
    ├── pencemaran tanah.jpg# Visual dampak pencemaran tanah
    ├── pencemaran air.jpg  # Visual dampak kerusakan ekosistem
    ├── LINK pot.png        # Thumbnail tutorial daur ulang pot
    ├── Link YT citato.jpeg # Thumbnail tutorial kotak pensil
    ├── kompos.jpg          # Gambar solusi pengomposan
    ├── daur ulang.jpg      # Gambar solusi 3R & upcycling
    ├── kumpulan b3.jpg     # Gambar penanganan sampah B3
    ├── kumpulan residu.jpg # Gambar penanganan sampah residu
    ├── Alur.jpg.jpeg       # Infografis alur pengelolaan sampah
    ├── TPS3RR.jpg.jpeg     # Foto operasional TPS3R
    └── Gotong Royong.jpg.jpeg # Foto kegiatan gotong royong masyarakat
```
## ALAMAT WEBSITE REPOSTORY

## REFERENSI KONTEN DAN SUMBER ASET
- KPBU Kementerian Keuangan Republik Indonesia: Penguatan Pengelolaan Sampah melalui Pendekatan Reduce, Reuse, Recycle (3R) Menuju Indonesia Bersih. 🔗 https://kpbu.kemenkeu.go.id/
- WWF Plastic Smart Cities: Bank Sampah: Konsep dan Peran dalam Pengelolaan Lingkungan. 🔗 https://plasticsmartcities.wwf.id/
- Jurnal Administrasi Publik dan Bisnis (JAPB): Evaluasi Efektivitas Program Pengelolaan Sampah Berbasis Komunitas. 🔗 [suspicious link removed]
- Jurnal Perkotaan Universitas Katolik Indonesia Atma Jaya: Kajian Implementasi Fasilitas TPS3R dalam Penanganan Residu Perkotaan. 🔗 https://ejournal.atmajaya.ac.id/

## REFERENSI ASET MEDIA DAN SOSIAL











