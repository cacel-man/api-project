let express = require('express');
let bodyParser = require('body-parser');
let port = process.env.PORT || 8000;
let app = express();
let knex = require('./db/knex');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/artists/', (req, res) => {
    knex.select().from('artists').then(function(artist){
            res.send(artist);
        })
})

app.get('/artists/:id', (req, res) => {
    console.log(req.params.id);
    knex.select().from('artists').where('id', req.params.id)
        .then(function(artist){
            res.send(artist);
        })
})

app.post('/artists/', (req, res) => {
    knex('artists').insert({
        name: 'Lil Xan',
        countryOfOrigin: 'USA',
        famousSong: 'Color Blind'
    })
    .then(function(){
        knex.select()
            .from('artists')
            .then(function(artist){
                res.send(artist);
            })
    })
})

app.listen(port, function(){
    console.log("Listening on port: ", port);
})