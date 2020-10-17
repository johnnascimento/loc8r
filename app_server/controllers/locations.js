module.exports = {
    // Get Homepage page
    homelist: function(req, res, next) {
        res.render('locations-list', {
            title: 'Loc8r - find a place to work with wifi',
            pageHeader: {
                title: 'Loc8r',
                strapline: 'Find places to work with wifi near you!'
            },
            locations: [
                {
                    name: 'Starcups',
                    address: 'A 125 Hight street, Reading, RG6 1PS',
                    rating: 3,
                    facilities: ['Breakfast', 'Food', 'Premium wi-fi'],
                    distance: '100m'
                },
                {
                    name: 'Cafe Hero',
                    address: 'B 125 High Street, Reading, RG6 1PS',
                    rating: 4,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    distance: '200m'
                },
                {
                    name: 'Burger Queen',
                    address: 'C 125 High Street, Reading, RG6 1PS',
                    rating: 2,
                    facilities: ['Food', 'Premium wifi'],
                    distance: '250m'
                },
                {
                    name: 'Burger Queen',
                    address: 'C 125 High Street, Reading, RG6 1PS',
                    rating: 0,
                    facilities: ['Food', 'Premium wifi'],
                    distance: '250m'
                }
            ]
        });
    },

    // Get locationInfo page
    locationInfo: function(req, res, next) {
        res.render('location-info', {
            title: 'Location Info page'
        });
    },

    // Get add review page
    addReview: function(req, res, next) {
        res.render('location-review-form', {
            title: 'Review page'
        });
    }
}