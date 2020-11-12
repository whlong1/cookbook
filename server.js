const express = require('express');
const AppRouter = require('./routes/AppRouter');
const db = require('./db/index')
const logger = require('morgan')

const PORT = process.env.PORT || 3000;
const app = express();

//Middleware
app.use(logger('dev'))
// app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
//Middleware
app.get('/', (request, response) => response.send('Root test'))

app.use('/home', AppRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))