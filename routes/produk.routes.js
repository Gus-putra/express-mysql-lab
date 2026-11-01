const express = require('express'); 
const router = express.Router(); 
const produkController = require('../controllers/produk.controller');
const ProdukModel = require('../models/produk.model'); // Untuk eksperimen keamanan

router.get('/produk', produkController.getDaftarProduk);
router.get('/produk/tambah', produkController.getFormTambah);
router.post('/produk/tambah', produkController.postTambahProduk);

router.get('/produk/edit/:id', produkController.getFormEdit);
router.post('/produk/edit/:id', produkController.postUpdateProduk);

router.post('/produk/hapus/:id', produkController.postHapusProduk);

module.exports = router;