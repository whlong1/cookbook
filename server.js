const express = require('express');
const AppRouter = require('./routes/AppRouter');
const db = require('./db/index')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Middleware

app.get('/', (request, response) => response.send('Root test'))

app.use('/home', AppRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))