const mongoose = require('mongoose');

const KegiatanSchema = new mongoose.Schema({
    judul_kegiatan: {
        type: String,
        required: true
    },
    tgl_kegiatan: {
      type: Date
    },
    lokasi_kegiatan: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    }
});

const Kegiatan = mongoose.model('kegiatan', KegiatanSchema);

module.exports = Kegiatan;
