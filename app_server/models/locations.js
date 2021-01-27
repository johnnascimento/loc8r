var mongoose = require('mongoose'),
    sideBarContentSchema = new mongoose.Schema({
        lead: String,
        regular: String
    }),

    reviewSchema = new mongoose.Schema({
        author: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5
        },
        reviewText: String,
        createdOn: {
            type: Date,
            'default': Date.now 
        } // Could be a Date.now, String or calculation such as (7h x 60min) + 30min = 450
    }),

    customerServiceSchema = new mongoose.Schema({
        title: String,
        btnAddReview: String,
        reviewsStack: [reviewSchema]
    }),

    openingTimeSchema = new mongoose.Schema({
        days: {
            type: String,
            required: true
        },
        opening: String,
        closing: String,
        closed: {
            type: Boolean,
            required: true
        }
    }),

    locationSchema = new mongoose.Schema({
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
        },
        openingTimesTitle: String,
        openingTimes: [openingTimeSchema],
        map: String,
        customerService: customerServiceSchema,
        sidebar: sideBarContentSchema
    });

// mongoose.model('Location', locationSchema);