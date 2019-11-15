const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Newhire = require('./routes/api/newhires');
const Users = require('./routes/api/users');

const app = express();

app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
    .connect(db,{ useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/newhires', Newhire);
app.use('/api/users' , Users)

const port = process.env.PORT || 3000;

app.get('/models/Users', (req,res) => {
    res.send("helloo");
});

app.post('models/Users')

app.listen(port, () => console.log(`Server started on port ${port}`));
