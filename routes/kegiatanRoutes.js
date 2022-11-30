const express = require("express");
const router = express.Router();

const {
    uploadKegiatan,
    getAllKegiatan,
    getKegiatanByID,
    deleteKegiatanByID,
    updateKegiatanByID
} = require("../controllers/kegiatanController");

router.post("/postKegiatan", uploadKegiatan)
router.get("/AllKegiatan", getAllKegiatan);
router.get("/:id", getKegiatanByID);
router.delete("/:id", deleteKegiatanByID);
router.patch("/:id", updateKegiatanByID);

module.exports = router;