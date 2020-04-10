module.exports = {
    genericPages: function(req, res, next) {
        var currentUrl = (res.req.aborted === false) ? res.req.url + '.jade' : '/error.jade';
        currentUrl = currentUrl.substring(1, currentUrl.length);

        res.render('generic-text', {
            title: 'Internal page',
            template: {
                url: currentUrl,
                aboutUs: {
                    title: 'About us page',
                },
                termsAndConditions: {
                    title: 'Terms and conditions page',
                },
            }
        });
    }
}