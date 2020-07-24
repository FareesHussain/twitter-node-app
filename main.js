require('dotenv').config();

const port = "3003"
var app = require('./app/server')

app.listen(port,function(){
    console.log(`server is running at http://localhost:${port}`)
})