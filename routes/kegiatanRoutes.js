const express = require('express');
const router = express.Router();
const { createKegiatan, getAllKegiatan, deleteKegiatan, updateKegiatan } = require("../controllers/kegiatanController")
const { isAuthenticated, isAdmin } = require("../middleware/auth");


//router.post('/Kegiatan/create', isAuthenticated, isAdmin, createKegiatan);
router.post('/Kegiatan/create', createKegiatan);
router.get("/AllKegiatan", getAllKegiatan);
//router.delete('/Kegiatan/delete/:id', isAuthenticated, isAdmin, deleteKegiatan);
router.delete('/Kegiatan/delete/:id', deleteKegiatan);
//router.put('/Kegiatan/update/:id', isAuthenticated, isAdmin, updateKegiatan);
router.put('/Kegiatan/update/:id', updateKegiatan);

module.exports = router;
