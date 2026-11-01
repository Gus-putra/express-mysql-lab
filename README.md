# Express MySQL Lab

Aplikasi web sederhana untuk mengelola data produk menggunakan Node.js, Express.js, dan MySQL. Proyek ini dibuat sebagai bagian dari kegiatan praktikum Pemrograman Web dengan menerapkan konsep CRUD (Create, Read, Update, Delete).

## Fitur Aplikasi

- Menampilkan daftar produk dari database MySQL.
- Menambahkan produk baru.
- Mengedit data produk.
- Menghapus produk.
- Menghubungkan aplikasi dengan database MySQL.
- Menggunakan Express.js untuk menangani routing dan request.

## Teknologi yang Digunakan

- Node.js
- Express.js
- MySQL
- MySQL2
- EJS
- dotenv

## Struktur Proyek

```text
express-mysql-lab/
├── config/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── .env.example
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Instalasi dan Menjalankan Aplikasi

1. Clone repository:

   `git clone https://github.com/Gus-putra/express-mysql-lab.git`

2. Masuk ke folder proyek:

   `cd express-mysql-lab`

3. Instal seluruh dependency:

   `npm install`

4. Buat database MySQL sesuai konfigurasi proyek.

5. Salin `.env.example` menjadi `.env`.

6. Sesuaikan konfigurasi database pada file `.env`.

7. Jalankan aplikasi:

   `npm start`

8. Buka aplikasi melalui browser di:

   `http://localhost:3000`

## Konfigurasi Environment

Aplikasi menggunakan file `.env` untuk menyimpan konfigurasi koneksi database.

Contoh konfigurasi pada `.env.example`:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=nama_database
DB_PORT=3306
```

Sesuaikan `DB_NAME` dengan nama database yang digunakan pada proyek.

## Keamanan

- Kredensial database disimpan dalam file `.env`.
- File `.env` tidak diunggah ke repository GitHub.
- File `.env.example` disediakan sebagai contoh konfigurasi.
- Folder `node_modules` tidak disertakan dalam repositor.
