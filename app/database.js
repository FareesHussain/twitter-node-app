var loki = require('lokijs')

//in memory database it's like a no sql database where we 
// use collections instead of tables 
var db = new loki('db.json')

db.addCollection('top').insert([
    {term:'JavaScript'      , style :'warning' },
    {term:'Angular 2'       , style :'danger'  },
    {term:'NodeJS'          , style :'success' },
    {term:'Golang'          , style :'info'    },
    {term:'iOS'             , style :'default' },
    {term:'ReactJS'         , style :'warning' },
    {term:'Ionic'           , style :'info'    },
    {term:'REST'            , style :'primary' },
    {term:'Authentication'  , style :'default' },
    {term:'Android'         , style :'success'}
])

db.addCollection('searches')
db.saveDatabase() 