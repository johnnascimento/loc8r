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
                    coords: { 
                        lat: 51.455041,
                        lng: -0.9690884 
                    },
                },
                {
                    name: 'Cafe Hero',
                    address: 'B 125 High Street, Reading, RG6 1PS',
                    rating: 4,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    coords: { 
                        lat: 51.455041,
                        lng: -0.9690884 
                    },
                },
                {
                    name: 'Burger Queen',
                    address: 'C 125 High Street, Reading, RG6 1PS',
                    rating: 2,
                    facilities: ['Food', 'Premium wifi'],
                    coords: { 
                        lat: 51.455041,
                        lng: -0.9690884 
                    },
                },
                {
                    name: 'Burger Queen',
                    address: 'C 125 High Street, Reading, RG6 1PS',
                    rating: 0,
                    facilities: ['Food', 'Premium wifi'],
                    coords: { 
                        lat: 51.455041,
                        lng: -0.9690884 
                    },
                },
                {
                    name: 'Burger Joker',
                    address: 'C 125 Broadway Avenue, Reading, RG6 5PS',
                    rating: 4,
                    facilities: ['Food', 'Premium wifi'],
                    coords: { 
                        lat: 51.455041,
                        lng: -0.9690884 
                    },
                }
            ],
            sidebar: {
                content: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for.'
            }
        });
    },

    // Get locationInfo page
    locationInfo: function(req, res, next) {
        res.render('location-info', {
            title: 'Location Info page',
            location: {
                name: 'Starcups',
                address: 'A 125 Hight street, Reading, RG6 1PS',
                rating: 3,
                facilities: {
                    title: 'Facilities',
                    items: ['Breakfast', 'Food', 'Premium wi-fi'],
                },
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884 
                },
                workingHoursBlock: {
                    title: 'Opening hours',
                    timeSheet: [
                        'Monday - Friday : 7:00am - 7:00pm',
                        'Saturday : 8:00am - 5:00pm',
                        'Sunday : closed'
                    ]
                },
                map: {
                    title: 'Location map'
                },
                customerService: {
                    title: 'Customer reviews',
                    btnAddReview: 'Add review',
                    reviewsStack: [
                        {
                            reviewerName: 'Simon Holmes',
                            rating: 1,
                            date: '16 July 2013',
                            comment: `What a great place. I can't say enough good things about it.`
                        },
                        {
                            reviewerName: 'Charlie Chaplin',
                            rating: 3,
                            date: '16 September 2020',
                            comment: `What a great place. I can't say enough good things about it.`
                        },
                        {
                            reviewerName: 'Kratos the God of War',
                            rating: 2,
                            date: '25 June 2019',
                            comment: `What a great place. I can't say enough good things about it.`
                        },
                        {
                            reviewerName: 'Zeus',
                            rating: 5,
                            date: '01 February 1991',
                            comment: `What a great place. I can't say enough good things about it.`
                        },
                    ]
                },
                sidebar: {
                    content: {
                        lead: `Simon\'s cafe is on Loc8r because it has accessible wifi and space
                                to sit down with your laptop and get some work done.`,
                        regular: `If you\'ve been and you like it - or if you don't - please leave a
                                    review to help other people just like you.`
                    }
                }
            }
        });
    },

    // Get add review page
    addReview: function(req, res, next) {
        res.render('location-review-form', {
            title: 'Review Starcups',
            form: {
                inputName: 'Name',
                inputRating: 'Rating',
                inputReview: 'Review',
                btnAddReview: 'Add my review',
                selectOptions: [
                    'Choose',
                    1,
                    2,
                    3,
                    4,
                    5,
                ]
            }
        });
    }
}