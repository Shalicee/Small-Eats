
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Rest = new Schema({
    rest_name: {
        type: String
    },
    rest_cuisine: {
        type: String
    },
    rest_rating: {
        type: Number
    },
    rest_menu: {
        type: String
    },
    rest_cost: {
        type: String
    },
    rest_dir: {
        type: String
    },
    rest_pdf: {
        type: String
    },
    rest_lat: {
        type: String
    },
    rest_long: {
        type: String
    },
    rest_file: {
        type: String
    }

});

module.exports = mongoose.model('Rest', Rest);