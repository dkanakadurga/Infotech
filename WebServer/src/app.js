const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const fs = require('fs');
const cors = require('cors');
const User = require('./models/user');
const router = new express.Router()
const userRouter = require('./routers/user');
const loginRouter = require('./routers/login');


const jwt = require('jsonwebtoken');
const _ = require('underscore');



const app= express()
const publicDirectoryPath = path.join(__dirname, '../public')
// app.use(_);
app.use(cors());
app.use(express.static(publicDirectoryPath))
app.use(express.json());



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(userRouter)
app.use(loginRouter)



// const token =   jwt.sign({ _id: 'abc123'}, 'thisismynewcourse')

// const auth = async(req, res, next) => {
    
//     try {
        
//         const token = req.header('Authorization').replace('Bearer ', '')
//        // console.log(token);
//         const decoded = jwt.verify(token, 'thisismynewcourse')
//         console.log(decoded);
//         decodedId = JSON.stringify(decoded._id)
//         //console.log(decodedId);
        
//         const usersraw = await fs.readFileSync(__dirname + "/" + "users.json" );
        
//         const users = JSON.parse(usersraw);
//         // console.log(users);
//         const user = _.find(users, (obj) => {
             
//            return obj.id === 'abc1234' && obj.token === token
//         })
//          console.log(user)
        
//         if(!user) {
//             throw new Error()
//         }
//         req.user = user
//         next()
    
//     } catch (e) {
//         res.status(401).send({error: 'Please authenticate.'})
//     }
//  }



// app.post('/login',async (req, res) => {
   
//      const _id = 'abc123';
//      const token =  await jwt.sign({_id: _id}, 'thisismynewcourse')
//       const data =  await jwt.verify(token, 'thisismynewcourse'); 

//       const usersraw = await fs.readFileSync(__dirname + "/" + "users.json" );
//      const users = JSON.parse(usersraw); 
//      console.log(users.user1.token);

     
//       res.send({ email: req.body.email,
//       password: req.body.password,
//       token:token,
//       _id: _id
//     }
//       );
//  });

//  app.get('/login', auth,  async (req, res) => {
//      try {
//         const usersraw = await fs.readFileSync(__dirname + "/" + "users.json" );
//         const users = JSON.parse(usersraw);
//         // console.log(users);
//          res.send(users)
//      }catch(e) {
//          res.status(500).send()
//      }
         
// })

        
// app.post('/contact', (req, res) => {

//    if(!req.body.firstname){
//        res.json({"sucess" : false,
//     "errorMsg" : "Firstname is missing"})
        
//     }else if(!req.body.lastname) {
//         res.json({"sucess" : false,
//         "errorMsg" : "Lastname is missing"})

//     }else if(!req.body.dob === undefined) {
//         res.json({"sucess" : false,
//     "errorMsg" : "Dob is missing"})
//     }else {
       
//     res.send(`you have sent ${req.body.firstname}
//     you have sent ${req.body.lastname} 
//     you have sent ${req.body.dob}` )
//      }
// });





app.listen(3000, () => console.log(`Example app listening on port 3000!`))

 
