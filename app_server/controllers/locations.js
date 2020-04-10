module.exports = {
    // Get Homepage page
    homelist: function(req, res, next) {
        res.render('locations-list', {
            title: 'Locations list page'
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