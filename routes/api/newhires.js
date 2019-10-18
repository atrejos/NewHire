const express = require('express');
const router = express.Router();

// Newhire Model
const Newhire = require('../../models/Newhire');

// @route GET api/newhires // HOW NEWHIRES ARE RECEIVED
// @desc Get All newhires
// @access Public
router.get('/', (req, res) => {
    Newhire.find()
        .sort({ date: -1})
        .then(newhires => res.json(newhires))
});

// @route POST api/newhires // HOW NEWHIRES ARE SENT
// @desc Create A newhire
// @access Public
router.post('/', (req, res) => {
    const newNewhire = new Newhire({
        name: req.body.name,
        email: req.body.email,
        UIN: req.body.UIN,
        supervisorName: req.body.supervisorName
    });

    newNewhire.save().then(newhire => res.json(newhire));
});

// @route DELETE api/newhires/:id // HOW NEWHIRES ARE DELETED
// @desc Delete A newhire
// @access Public
router
    .delete('/:id', (req, res) => {
        Newhire.findById(req.params.id)
        .then(newhire => newhire.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({ success: false }));
    });
module.exports = router;