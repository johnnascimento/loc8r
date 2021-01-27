var mongoose = require('mongoose');
var locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: { 
        type: [Number], // To meet the GeoJSON specification, a coordinate air must be entered into the array in the correct order: Longitude then latitude
        index: '2dsphere'
    }
});