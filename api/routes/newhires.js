const express = require('express');
const router = express.Router();
const Newhire = require("../models/Newhire");

// Newhire Route Model

// anything with /api/newhires
router.get("/", (req, res, next) => {
    Newhire.find()
      .select("-__v")
        
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });

// route to create new newhire
router.post('/newhires', (req, res) => {
    const newhire = new NewHire({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        UIN: req.body.UIN,
        supervisorName: req.body.supervisorName,
        status: req.body.status
    })

    try {
        const newHire = newhires.save()
        res.status(201).json(newHire)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// route to get all newhires
router.get('/newhires', (req, res) => {
    res.json(newhires);
    
    try {
        const newhired = newhires.find()
        res.json(newhired)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// route to delete newhire
router.delete('/newhires/:id', (req, res) => {
    const newhireId = Number(req.param.id);
    const newNewhires = newhires.filter((newhires) => newhire.id != newhireId );

    if (!newNewhires) {
        res.status(500).send('Account not found.');
    } else {
        newhires = newNewhires;
        res.send(newhires);
    }
})

// route to update newhire
router.put('/newhires/:id', (req, res) => {
    const newhireId = Number(req.params.id);
    const body = req.body;
    const newhire = newhires.find((newhire) => newhire.id === newhireId );
    const index = newhires.indexOf(newhire);

    if (!newhire) {
        res.status(500).send('Newhire not found.');
    } else {
        const updatedNewhire = {...newhire, ...body };
        newhires[index] = updatedNewhire;
        res.send(updatedNewhire);
    }
});

// route to get one newhire
router.get('/newhires/:id', (req, res) => {
    const newhireId = Number(req.params.id);
    const getNewhire = newhires.find((newhire) => newhire.id === newhireId)

    if (!getNewhire) {
        res.status(500).send('Newhire not found.')
    } else {
        res.json(getNewhire);
    }
});

module.exports = router;