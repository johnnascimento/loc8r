module.exports = {
    // Get Homepage page
    homelist: function(req, res, next) {
        res.render('locations-list', {
            title: 'Loc8r - find a place to work with wi-fi',
            pageHeader: {
                title: 'Loc8r',
                strapline: 'Find places to work with wi-fi near you!'
            }
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