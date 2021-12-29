const express = require('express');
const router = express.Router();
const Raid = require('../models/Raid');

//Get all
router.get('/', async (req, res) => {
    try {
        const raids = await Raid.find();
        res.json(raids);
    } catch {
        res.status(500).json({ message: err.message });
    }
});

//Get raid by id
// localhost:3000/raids/id/<id>

router.get('/id/:id', async function (req, res){
    //res.send(req.params.id);
    let raids = await Raid.findById(req.params.id);

    res.json(raids);
});

// Get raid by shortName
// localhost:3000/raids/<shortName>

router.get('/:shortName', async function (req, res){
    let raidsByName = await Raid.find({ shortName: req.params.shortName }).exec();

    res.json(raidsByName);
});

//Create

router.post('/', async (req, res) => {
    const raid = new Raid({
        name: req.body.name,
        raidTier: req.body.raidTier,
        shortName: req.body.shortName,
        minCharLvl: req.body.minCharLvl,
        minILvl: req.body.minILvl,
        numTanks: req.body.numTanks,
        numHealers: req.body.numTanks,
        numDps: req.body.numTanks
    });

    try {
        const newRaid = await raid.save();
        res.status(201).json(newRaid);
    } catch {
        res.status(400).json({ message: err.message });
    }
});

//Update

//Delete


module.exports = router