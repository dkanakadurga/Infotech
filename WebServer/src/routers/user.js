const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const jwt = require('jsonwebtoken');

const auth = async(req, res, next) => {
    
   try {
        
         const token = req.headers.authorization;
         const tokenstr =   JSON.stringify(token);
          console.log(tokenstr);
         const decoded = jwt.verify(token, 'thisismynewcourse')
          console.log(decoded);
          const user = await User.findOne({_id:decoded._id, 'tokens.token': token})
            //  if(!user) {
            //    throw new Error()
            //    }
               console.log(user.email); 
               res.send(user.email)
      
         next()
   } catch (e) {
            res.status(401).send({error: 'Please authenticate.'})
        }
}



router.post('/createUser', async(req, res) => {
    const user = new User(req.body)
    try {
      await user.save()
      res.status(201).send(user)
    } catch(error) {
        res.status(400).send('Username already in use')
    }

})

router.post('/users/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        
        const token = await user.generateAuthToken()
        console.log(token)
        
        res.send({user, token})
    } catch (e) {
        res.status(400).send('Invali Username/Password')
    }
})


router.get('/users/login/data', auth,  (req, res) => {
      res.send('request received')
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
})

module.exports = router
