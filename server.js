const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Newhire = require('./api/routes/api/newhires');
const Users = require('./api/routes/users');

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
app.use('/routes/api/newhires', Newhire);
app.use('/routes/api/users' , Users)

const port = process.env.PORT || 4000;

app.get('/models/Users', (req,res) => {
    res.send("helloo");
});

app.get('routes/api/users')

app.post('models/Users')

app.listen(port, () => console.log(`Server started on port ${port}`));
