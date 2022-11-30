const { Router } = require('express');
const kegiatanController = require('../controllers/kegiatanController');
const {isAuthenticated, isAdmin} = require("../middleware/auth");
const router = Router();

router.get('/kegiatan', kegiatanController.getAllKegiatan);
router.get('/kegiatan/:id', kegiatanController.getKegiatanByID);
router.post('/postKegiatan', [isAuthenticated, isAdmin], kegiatanController.uploadKegiatan);
router.delete('/kegiatan/delete/:id', [isAuthenticated, isAdmin], kegiatanController.deleteKegiatanByID);
router.patch('/kegiatan/edit/:id', [isAuthenticated, isAdmin], kegiatanController.updateKegiatanByID);

module.exports = router;
