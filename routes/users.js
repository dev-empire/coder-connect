const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
  User.find()
    .sort()
    .then((users) => res.json(users))
})

router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    password: req.body.password,
  })
  try {
    await user.save().then((user) => res.json(user))
    // res.setHeader('Content-Type', 'appliction/json')
    // res.json(user)
    // res.json(req.body).status(200)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
