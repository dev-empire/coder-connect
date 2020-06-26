const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
  User.find()
    .sort()
    .then((users) => res.json(users))
})

router.post('/', async (req, res) => {
  const { name, email, password, phone, age } = req.body

  /* check if all fields are filled*/

  if (!name || !email || !password || !age || !phone) {
    res.status(400).json({ msg: 'Please Enter All Fields' })
  }

  /* VALIDATE USER'S REGISTRATION */

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: 'User  Already Exits' })

    const newUser = new User({
      name,
      email,
      phone,
      age,
      password,
    })
    /* HASH PASSWORD */

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser.save().then((user) => {
          res.json({
            name: user.name,
            email: user.email,
            phone: user.phone,
            age: user.age,
            password: user.password,
          })
        })
      })
    })
  })
  try {
    await newUser.save().then((user) => res.json(user))
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
