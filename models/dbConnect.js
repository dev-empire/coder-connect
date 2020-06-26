const mongoose = require('mongoose')

const connetToDB = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/code-chat', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
      console.log('Mongoose connected...')
  } catch (error) {
    console.error(error)
  }
}

module.exports = connetToDB
