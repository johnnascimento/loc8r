module.exports = {
    about: function(req, res, next) {
        res.render('locations-list', {
            title: 'About us page',
            breadcrumb: {
                home: 'About us',
                path: '/about'
            }
        });
    }
}