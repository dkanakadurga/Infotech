const {MongoClient, ObjectID} = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'users-data'
const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
       return console.log('Unable to connect to data base')
    } 

    const db = client.db(databaseName)
    // db.collection('users').insertMany({
    //     name: 'Durga',
    //     age: 27
    // },  (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    db.collection('users').insertMany([
        {
        name: 'Jen',
        age: 27
    }, { 
        name: 'Gunther',
        age: 27

    }], (error, result) => {
        if(error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })
})