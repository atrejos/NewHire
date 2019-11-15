const express = require('express');
const router = express.Router();

// User Routes
const Users = 

// route to create new user
router.post('/users', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        auth: req.body.auth, 
    })

    try {
        const newUser = user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// route to get one user

router.get('/users', (req, res) => {
    res.send('You have requested a user')
});

router.get('/users/:id', (req, res) => {

    const usernameId = Number(req.params.id)
    const getUsername = user.find((username) => username.id === usernameId );

    if (!getUsername) {
        res.status(500).send('user not found.')
    } else {
        res.json(getUsername);
    }
});

module.exports = router;