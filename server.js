const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const newhireRoutes = require('./api/routes/newhires');
const userRoutes = require('./api/routes/users');

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

//const routes = require('./api/routes')
// Newhire(app);
// Users(app);

app.use('/api/newhires', newhireRoutes);
app.use('/api/users' , userRoutes);

// handle request that get past the two above as error
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    // forwards our original request as an error
    next(error);
  });
  // handles error requests from anywhere
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });

const port = process.env.PORT || 4000;

app.get('/api/models/Users', (req,res) => {
    res.send("helloo");
});

app.get('api/routes/users')

app.post('models/Users')

app.listen(port, () => console.log(`Server started on port ${port}`));
