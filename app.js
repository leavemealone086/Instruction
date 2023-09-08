const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.port ||3300
const morgan = require('morgan');

let users = require('./user.json');
const { json } = require('express')

app.use(bodyParser.json());
app.use(morgan('dev')); 
app.use(cors()); 

app.get('/',(req,res)=>{
    res.send("Hello world")
    res.end()
})
app.post('/user',(req,res)=>{
    res.send(JSON.stringify(users))
    res.end()
})
app.listen(port,()=>{
    console.log('you listen on port '+port)

})