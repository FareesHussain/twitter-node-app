require('dotenv').config();
const port = "8080"
var app = require('./app/server')

app.listen(port,function(){
    console.log(`server is running at http://localhost:${port}`)
})

//!run using nodemon main.js --ignore db.json