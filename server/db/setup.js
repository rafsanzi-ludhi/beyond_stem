require('dotenv').config()
const fs = require ('fs')

const db = require('./connect')
const { clearScreenDown } = require('readline')


const sql = fs.readFileSync("./server/db/database.sql").toString()


db.query(sql)
    .then(data => {
        db.end
        console.log('Setup Complete')
    })
    .catch(error => console.log(error))
