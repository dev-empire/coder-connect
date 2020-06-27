const express = require('express')
const dbConnect = require('./models/dbConnect')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

dbConnect()

app.get('/', (req, res) => {
  res.status(200).send('Hello World...')
})

app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))

app.listen(4000, () => console.log('Server started...'))
