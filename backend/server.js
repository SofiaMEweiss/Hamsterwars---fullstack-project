const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
// const hamsters = require('./routes/hamsters.js')
// const matches = require('./routes/matches.js')
// const matchWinners = require('./routes/matchWinners.js')
// const winners = require('./routes/winners.js')
// const losers = require('./routes/losers.js')
 
//Heroku - Om PORT är ett värde/number så kommer vi använda den, annars 1337
const PORT = process.env.PORT || 1337

const buildFolder = path.join(__dirname, '../build')
// const buildImgFolder = path.join(__dirname, 'img')

//Middleware
//logger som skriver ut info om varje request i terminalen
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.params);
    next()
})

app.use( express.json() )
app.use( cors() )
app.use( express.static(buildFolder) )
// app.use( '/img', express.static(staticImgFolder))

// Routes
app.get('/', (req, res) => {
	// syns inte på grund av express.statics
    res.send('Hello from server')
})

//test
const hamsters = ['hamstrar', 'hamstertest']

app.get('/hamsters', (req, res) => {
	res.send(hamsters)
})

//Viktigt att denna ligger sist för den fångar alla övriga request (som /i frontend).
// För att frontend routing ska fungera.
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})
 
//startar servern
app.listen(PORT, () => {
    console.log('Server is listening on port' + PORT);
})