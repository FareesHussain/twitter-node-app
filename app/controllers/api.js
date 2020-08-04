var db = require('../util/db')
var client = require('../util/twitter')



// exports.results = function(req,res){
//     var query = req.query.q;
//     if(query){
//         db.getCollection('searches').insert({term : query})
//         db.saveDatabase()

//         client.get('search/tweets',{q: query},function(err,tweets,res){
//             res.json(tweets)
//         })
//     }else{
//         res.send("Error")
//     }
// }

exports.results = function(req, res){
    var query = req.query.q;
    if(query){
        db.getCollection('searches').insert({term: query});
        db.saveDatabase();

        client.get('search/tweets', {q:query}, function(error, tweets, response){
            res.render('results', {query: query, tweets: tweets.statuses});
        })
    } else {
        res.send('Error');
    }
}