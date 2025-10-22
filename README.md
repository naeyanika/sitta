# SITTA - Sistem Informasi Tracking & Transaksi Bahan Ajar
## Universitas Terbuka

Aplikasi website sederhana untuk pemesanan Bahan Ajar di Universitas Terbuka yang dilakukan oleh UT-Daerah.

## Fitur Aplikasi

### 1. Halaman Login (index.html)
- **Input**: Email dan Password
- **Tombol Login**: Validasi kredensial pengguna
- **Validasi**: Menampilkan alert jika email/password salah
- **Modal "Lupa Password"**: Form untuk reset password
- **Modal "Daftar"**: Form pendaftaran akun baru

### 2. Dashboard Menu (dashboard.html)
- **Greeting Dinamis**: Menampilkan salam berdasarkan waktu lokal (Pagi/Siang/Sore/Malam)
- **Menu Navigasi**:
  - Informasi Bahan Ajar
  - Tracking Pengiriman
  - Laporan (dengan sub-menu):
    - Monitoring Progress DO Bahan Ajar
    - Rekap Bahan Ajar
  - Histori Transaksi Bahan Ajar

### 3. Tracking Pengiriman (tracking.html)
- **Input**: Nomor Delivery Order (DO)
- **Fitur**: Lacak status pengiriman secara real-time
- **Tampilan**: Timeline perjalanan paket
- **Informasi**: Detail ekspedisi, tanggal kirim, status, dll

### 4. Informasi Stok Bahan Ajar (stok.html)
- **Tampilan Dinamis**: Data dari `dataBahanAjar` di data.js
- **Tabel Informasi**: Menampilkan semua bahan ajar dengan detail lengkap
- **Fitur Tambah**: Menambahkan baris stok baru menggunakan JavaScript DOM
- **Indikator Status**: 
  - Hijau (Stok Aman): > 300
  - Orange (Stok Sedang): 100-300
  - Merah (Stok Rendah): < 100
- **Summary**: Total jenis dan total stok keseluruhan

## Struktur File

```
sitta-praktik/
│
├── index.html              # Halaman Login
├── dashboard.html          # Dashboard Menu
├── tracking.html           # Tracking Pengiriman
├── stok.html              # Informasi Stok Bahan Ajar
│
├── css/
│   └── style.css          # File CSS untuk styling
│
├── js/
│   ├── data.js            # Data dummy (pengguna, bahan ajar, tracking)
│   └── script.js          # JavaScript untuk functionality
│
└── assets/
    └── img/               # Folder untuk gambar
```

## Cara Menggunakan

### 1. Membuka Aplikasi
- Buka file `index.html` di browser
- Atau gunakan Live Server di VS Code

### 2. Login
Gunakan salah satu kredensial berikut:

| Email | Password | Nama | Role |
|-------|----------|------|------|
| rina@ut.ac.id | rina123 | Rina Wulandari | UPBJJ-UT |
| agus@ut.ac.id | agus123 | Agus Pranoto | UPBJJ-UT |
| siti@ut.ac.id | siti123 | Siti Marlina | Puslaba |
| doni@ut.ac.id | doni123 | Doni Setiawan | Fakultas |
| admin@ut.ac.id | admin123 | Admin SITTA | Administrator |

### 3. Navigasi Dashboard
Setelah login berhasil, Anda akan diarahkan ke Dashboard yang menampilkan:
- Greeting berdasarkan waktu
- 4 menu utama dalam bentuk card

### 4. Tracking Pengiriman
- Klik menu "Tracking Pengiriman"
- Masukkan nomor DO yang tersedia:
  - `2023001234` - Status: Dalam Perjalanan
  - `2023005678` - Status: Dikirim
- Klik "Lacak" untuk melihat detail

### 5. Informasi Stok Bahan Ajar
- Klik menu "Informasi Bahan Ajar"
- Lihat tabel stok bahan ajar
- Klik tombol "+ Tambah Bahan Ajar Baru" untuk menambah data
- Isi form dan klik "Simpan"
- Data baru akan muncul di tabel

## Teknologi yang Digunakan

- **HTML5**: Struktur halaman
- **CSS3**: Styling dan layout responsif
- **JavaScript (Vanilla)**: Functionality dan DOM manipulation
- **SessionStorage**: Menyimpan data login pengguna

## Fitur Teknis

### Session Management
- Menggunakan `sessionStorage` untuk menyimpan data user yang login
- Auto redirect ke halaman login jika belum login
- Logout akan menghapus session

### Dynamic Greeting
- Otomatis mendeteksi waktu lokal
- Menampilkan greeting yang sesuai:
  - Pagi: 05:00 - 10:59
  - Siang: 11:00 - 14:59
  - Sore: 15:00 - 17:59
  - Malam: 18:00 - 04:59

### Form Validation
- HTML5 validation untuk input required
- JavaScript validation untuk kredensial login
- Alert notification untuk feedback

### DOM Manipulation
- Menampilkan data dari array JavaScript secara dinamis
- Menambahkan row baru ke tabel tanpa reload halaman
- Update summary otomatis saat data berubah

## Catatan Penting

1. **Data Dummy**: Semua data berasal dari `js/data.js` dan disimpan di memory. Data akan hilang saat refresh halaman.

2. **No Backend**: Aplikasi ini murni Front-End. Tidak ada koneksi ke database atau server.

3. **Browser Compatibility**: Aplikasi ini menggunakan fitur modern JavaScript. Gunakan browser terbaru untuk pengalaman terbaik.

4. **Responsive Design**: Website sudah responsif dan dapat diakses dari berbagai ukuran layar.

## Pengembangan Selanjutnya

Untuk pengembangan lebih lanjut, dapat ditambahkan:
- Backend dengan REST API
- Database untuk penyimpanan data permanen
- Authentication yang lebih secure (JWT)
- Upload gambar untuk cover bahan ajar
- Export data ke Excel/PDF
- Notifikasi real-time
- Chart dan grafik untuk laporan

## Lisensi

Tugas Praktik - Pemrograman Berbasis Web
Universitas Terbuka - 2025

---

Dibuat oleh: Sitta
Tanggal: Oktober 2025
