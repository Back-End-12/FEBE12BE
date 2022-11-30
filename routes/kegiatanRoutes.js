const { Router } = require('express');
const kegiatanController = require('../controllers/kegiatanController');
const {isAuthenticated} = require("../middleware/auth");
const router = Router();

router.get('/kegiatan', kegiatanController.getAllKegiatan);
router.get('/kegiatan/:id', kegiatanController.getKegiatanByID);
router.post('/postKegiatan', isAuthenticated, kegiatanController.uploadKegiatan);
router.delete('/kegiatan/delete/:id', isAuthenticated, kegiatanController.deleteKegiatanByID);
router.patch("/kegiatan/edit/:id", isAuthenticated, kegiatanController.updateKegiatanByID);

module.exports = router;
