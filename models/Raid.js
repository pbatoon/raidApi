const mongoose = require('mongoose');

const raidSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    raidTier: {
        type: String,
        required: true
    },
    questline: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: false
    },
    minCharLvl: {
        type: Number,
        required: true
    },
    minILvl: {
        type: Number,
        required: true
    },
    numTanks: {
        type: Number,
        required: true
    },
    numHealers: {
        type: Number,
        required: true
    },
    numDps: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Raid', raidSchema);