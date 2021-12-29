const express = require('express');
const router = express.Router();
const Raid = require('../models/Raid');

//Get all
router.get('/', async (req, res) => {
    try {
        const raids = await Raid.find();
        return res.json(raids);
    } catch {
        return res.status(500).json({ message: err.message });
    }
});

//Get raid by id
// localhost:3000/raids/id/<id>
router.get('/id/:id', async (req, res) => {
    //res.send(req.params.id);
    let raids;
    try {
        if(req.params.id == null) {
            return res.status(404).json({ message: "Raid not found"});
        }
        raids = await Raid.findById(req.params.id);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }

    res.json(raids);
});

// Get raid by shortName
// localhost:3000/raids/<shortName>
router.get('/:shortName', async (req, res) => {
    let raids;

    try {
        if(req.params.shortName == null) {
            return res.status(404).json({ message: "Raid not found"});
        }
        raids = await Raid.find({ shortName: req.params.shortName }).exec();
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }

    res.json(raids);
});

//Create

router.post('/', async (req, res) => {
    let raid = new Raid({
        name: req.body.name,
        raidTier: req.body.raidTier,
        questline: req.body.questline,
        shortName: req.body.shortName,
        minCharLvl: req.body.minCharLvl,
        minILvl: req.body.minILvl,
        numTanks: req.body.numTanks,
        numHealers: req.body.numHealers,
        numDps: req.body.numDps
    });

    try {
        const newRaid = await raid.save();
        return res.status(201).json(newRaid);
    } catch(err) {
        return res.status(400).json({ message: err.message });
    }
});

//Update
router.put('/id/:id', async (req, res) => {

    let raid;  

    try {
        let update = req.body;

        if(req.params.id == null) {
            return res.status(404).json({ message: "Raid not found"});
        }

        raid = await Raid.findOneAndUpdate(req.params.id, update);
        
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.json(raid);
});


//Delete
router.delete('/id/:id', async (req, res) => {
    let raid;

    try {
        raid = await Raid.findByIdAndDelete(req.params.id);

        if(req.params.id == null) {
            return res.status(404).json({ message: "Raid not found"});
        }

    } catch(err) {
        return res.status(500).json({ message: err.message });
    }

    res.json({ message: "Raid deleted.", raid});
})

module.exports = router