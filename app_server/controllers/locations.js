module.exports = {
    // Get Homepage page
    homelist: function(req, res, next) {
        var requisition = req;

        res.render('locations-list', {
            title: 'Locations list page',
            breadcrumb: {
                home: 'Home',
                path: '/'
            },
            reqObj: requisition
        });
    },

    // Get locationInfo page
    locationInfo: function(req, res, next) {
        var requisition = req;

        res.render('locations-list', {
            title: 'Location Info page',
            breadcrumb: {
                home: 'Location list',
                path: '/location'
            },
            reqObj: requisition
        });
    },

    // Get add review page
    addReview: function(req, res, next) {
        var requisition = req;

        res.render('locations-list', {
            title: 'Review page',
            breadcrumb: {
                home: 'Review page',
                path: '/location/review/new'
            },
            reqObj: requisition
        });
    }
}