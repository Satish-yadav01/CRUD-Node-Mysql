const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const connection = require('./config/database');

dotenv.config({path : './config/config.env'})

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';


// setting up database connection
// connection();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// setting up router
app.use('/api/v1',require('./routes/blogs'))

app.get('*',(req,res)=>{
    res.status(404).json({
        status : false,
        message : 'Page not Found,please use /api/v1/blogs'
    })
})


app.listen(port,()=>{console.log(`server running at port 3000`)})