module.exports = {
    // Get Homepage page
    homelist: function(req, res, next) {
        res.render('index', {
            title: 'Home page',
            description: 'Studying express, Mongo DB, Angular and Node lika a pro'
        });
    },

    // Get locationInfo page
    locationInfo: function(req, res, next) {
        res.render('index', {
            title: 'Location page',
            description: 'Location page\'s description'
        });
    },

    // Get add review page
    addReview: function(req, res, next) {
        res.render('index', {
            title: 'Review page',
            description: 'Review page\'s description'
        });
    }
}