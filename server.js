const express = require('express');
const routes = require('./routes/RecipeRouter');
const db = require('./db');

const PORT = process.env.PORT || 3000;
const app = express();

//Middleware
// app.use(logger('dev'))
// app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
//Middleware

app.use('/browse', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))