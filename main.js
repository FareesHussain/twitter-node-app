require('dotenv').config();

const port = "8810"
var app = require('./app/server')

app.listen(port,function(){
    console.log(`server is running at http://localhost:${port}`)
})