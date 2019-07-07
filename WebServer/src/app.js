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

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

 
