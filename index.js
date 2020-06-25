const express = require('express')
const dbConnect = require('./models/dbConnect')
const cors = require('cors')

const app = express()

app.use(cors())

dbConnect()

app.get('/', (req, res) => {
  res.status(200).send('Hello World...')
})

app.listen(4000, () => console.log('Server started...'))
