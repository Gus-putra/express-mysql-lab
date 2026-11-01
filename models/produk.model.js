const db = require('../config/database');

const ProdukModel = {
    // Mengambil seluruh data produk
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM produk');
        return rows;
    },

    // Menyimpan produk baru menggunakan Prepared Statement
    create: async (data) => {
        const sql = `
            INSERT INTO produk (nama_produk, kategori, harga, stok)
            VALUES (?, ?, ?, ?)
        `;

        const [result] = await db.query(sql, [
            data.nama_produk,
            data.kategori,
            data.harga,
            data.stok
        ]);

        return result;
    },

    // Mengambil satu produk berdasarkan ID
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM produk WHERE id = ?',[id]);
        return rows[0]; // Mengembalikan objek tunggal atau undefined 
    },

    // Memperbarui data produk berdasarkan ID
    update: async (id, data) => {
        const sql = `
            UPDATE produk
            SET nama_produk = ?, kategori = ?, harga = ?, stok = ?
            WHERE id = ?
        `;
        const [result] = await db.query(sql, [
            data.nama_produk,
            data.kategori,
            data.harga,
            data.stok,
            id
        ]);

        return result;
    },

    // Menghapus data produk berdasarkan id
    delete: async (id) => {
        const sql = 'DELETE FROM produk WHERE id = ?';
        const [result] = await db.query(sql, [id]);
        return result;
    }
};

module.exports = ProdukModel;