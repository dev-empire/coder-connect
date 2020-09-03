const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')

router.get('/users', async (req, res) => {
  const result = await User.find({})
  res.status(200).json(result)
})

router.post('/', async (req, res) => {
  const { name, email, password, phone, age } = req.body

  /* check if all fields are filled*/

  if (!name || !email || !password || !age || !phone) {
    res.status(400).json({ msg: 'Please Enter All Fields' })
  }

  /* VALIDATE USER'S REGISTRATION */

  User.findOne({ email: req.body.email }).then((user) => {
    if (user)
      return res
        .status(400)
        .json({ msg: 'User  Already Exits' })

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
          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            (err, token) => {
              if (err) throw err
              res.json({
                token,
                name: user.name,
                email: user.email,
                phone: user.phone,
                age: user.age,
                password: user.password,
              })
            }
          )
        })
      })
    })
  })
})
router.get('/user', auth, (req, res) => {
  User.findById(req.body.id)
    .select('-password')
    .then((user) => res.json(user))
})

module.exports = router
