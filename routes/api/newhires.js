const express = require('express');
const router = express.Router();

// Newhire Model
const Newhire = require('../../models/Newhire');

// // @route GET api/newhires // RECEIVING
// // @desc Get All newhires
// // @access Public
// router.get('/getNewHire', (req, res) => {
//     Newhire.find()
//         .sort({ date: -1})
//         .then(newhires => res.json(newhires))
// });

// // @route POST api/newhires // SENDING
// // @desc Create A newhire
// // @access Public
// router.post('/putNewHire', (req, res) => {
//     const newNewhire = new Newhire({
//         name: req.body.name,
//         email: req.body.email,
//         UIN: req.body.UIN,
//         supervisorName: req.body.supervisorName
//     });

//     newNewhire.save().then(newhire => res.json(newhire));
// });

// // @route DELETE api/newhires/:id // DELETING
// // @desc Delete A newhire
// // @access Public
// router
//     .delete('deleteNewHire/:id', (req, res) => {
//         Newhire.findById(req.params.id)
//         .then(newhire => newhire.remove().then(() => res.json({success: true})))
//         .catch(err => res.status(404).json({ success: false }));
//     });

// // @route PUT api/newhires/:id // UPDATE
// // @desc Update A newhire
// // @access Public
// router
//     .patch('updateNewHire/:id', (req, res) => {
//         Newhire.findOneAndUpdate(
//             { _id: req.params.id },
//             { $set: {name: req.body.name }},
//             { new: true },
//             function(err, documents){
//                 res.send({error: err, affected: documents });
//             }
//         );
//     });
// route to create new user
router.post('/', (req, res) => {

})

// route to get one user
router.get('/:id', (req, res) => {

})

// route to create new newhire
router.post('/', (req, res) => {

})

// route to get all newhires
router.get('/', (req, res) => {
    res.send('Hello World')
})

// route to delete newhire
router.delete('/:id', (req, res) => {

})

// route to update newhire
router.patch('/:id', (req, res) => {

})

// route to get one newhire
router.get('/:id', (req, res) => {

})

module.exports = router;