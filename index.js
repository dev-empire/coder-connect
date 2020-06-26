const express = require('express')
const dbConnect = require('./models/dbConnect')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())

app.use(bodyParser.json())

dbConnect()

app.get('/', (req, res) => {
  res.status(200).send('Hello World...')
})

const usersRoute = require('./routes/users')
app.use('/users', usersRoute)

app.listen(4000, () => console.log('Server started...'))
