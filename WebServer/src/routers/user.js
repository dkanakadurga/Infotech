const express = require('express')
const User = require('../models/user')
const router = new express.Router()


router.post('/createUser', async(req, res) => {
    const user = new User(req.body)
    try {
      await user.save()
      res.status(201).send(user)
    } catch(error) {
        res.status(400).send(error)
    }

})

router.post('/users/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        
        const token = await user.generateAuthToken()
        console.log(user);
        res.send({user, token})
    } catch (e) {
        res.status(400).send()
    }
})


router.get('/users', async(req, res) => {
    try {
        const users = await  User.find({})
        res.status(201).send(users)
    } catch(e) {
        res.status(500).send()
    }
router.get('/users/:id', async(req, res) => {
    const _id = req.params.id
 try {
     const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
    res.send(user)
    }catch(e) {
            res.status(500).send()
    }
    })

   console.log( req.params);
})

module.exports = router
