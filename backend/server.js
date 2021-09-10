const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const restRoutes = express.Router();
const PORT = 4000;
let Rest = require('./rest.model');


app.use(cors());
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;
const { Router } = require('express');

//rests is name of db
mongoose.connect(db);
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


//1st end point
restRoutes.route('/').get(function(req, res) {
    Rest.find(function(err, rests) {
        if(err) {
            console.log(err);
        } else {
            res.json(rests);
        }
    });
});

//2nd end point
restRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Rest.findById(id, function(err, rest){
        res.json(rest);
    });
});


restRoutes.route('/add').post(function(req, res) {
    let rest = new Rest(req.body);
    rest.save()
        .then(rest => {
            res.status(200).json({'rest': 'rest added succesfully'});
        })
        .catch(err => {
            res.status(400).send('adding new rest failed');
        });
});

restRoutes.route('/update/:id').post(function(req, res) {
    Rest.findById(req.params.id, function(err, rest) {
        if(!rest)
            res.status(404).send('data is not found');
        else
            rest.rest_name = req.body.rest_name;
            rest.rest_cuisine = req.body.rest_cuisine;
            rest.rest_cost = req.body.rest_cost;
            rest.rest_rating = req.body.rest_rating;
            rest.rest_menu = req.body.rest_menu;
            rest.rest_dir = req.body.rest_dir;
            rest.rest_lat = req.body.rest_lat;
            rest.rest_long = req.body.rest_long;
            rest.rest_file = req.body.rest_file;
            rest.save().then(rest => {
                res.json('Rest updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//menu
restRoutes.route('/menu/:id').post(function(req, res) {
    Rest.findById(req.params.id, function(err, rest) {
        if(!rest)
            res.status(404).send('data is not found');
        if(err) {
            console.log(err);
        } else {
            res.json(Rest);
        }
    });
});

//dir
restRoutes.route('/dir/:id').post(function(req, res) {
    Rest.findById(req.params.id, function(err, rest) {
        if(!rest)
            res.status(404).send('data is not found');
        if(err) {
            console.log(err);
        } else {
            res.json(Rest);
        }
    });
});

app.use('/rests', restRoutes);


app.listen(PORT, function() {
    console.log("Server running on Port: " + PORT);



});