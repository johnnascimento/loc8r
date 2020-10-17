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
                    subTitle: 'About us description',
                    content: [
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis
                        sed felis eget bibendum. Nullam quis erat leo. Proin condimentum mi risus, nec
                        pretium mi feugiat ac. Integer tincidunt ipsum a risus interdum, vel varius felis luctus.
                        Nunc elementum velit porta eleifend scelerisque. Suspendisse pellentesque a tellus sed scelerisque.
                        Vestibulum sapien turpis, malesuada quis erat non, venenatis viverra ex. Ut rutrum felis eu ante viverra,
                        hendrerit fermentum nibh cursus.`,
                        `Aliquam pellentesque velit libero, vestibulum faucibus odio interdum nec. Sed vel porta urna,
                        non laoreet ex. In quis vestibulum ligula. Suspendisse potenti. Etiam euismod turpis ac ex luctus
                        imperdiet. Sed posuere cursus nisi, eu egestas augue scelerisque sit amet. Donec volutpat nunc et
                        augue interdum, tincidunt fermentum dolor consectetur. Nullam auctor ullamcorper varius. Praesent
                        ultricies sem non arcu dignissim, eget auctor elit malesuada. Cras nibh neque, vulputate vitae purus
                        et, iaculis ultrices risus. Sed libero tortor, pulvinar ut tellus nec, auctor convallis erat. Nullam
                        elementum lacus non elit ullamcorper mattis. Ut eu consectetur nisi. Nam ut iaculis felis, eget sagittis
                        nisi. Cras volutpat malesuada est, a luctus magna consequat quis.`,
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis
                        sed felis eget bibendum. Nullam quis erat leo. Proin condimentum mi risus, nec
                        pretium mi feugiat ac. Integer tincidunt ipsum a risus interdum, vel varius felis luctus.
                        Nunc elementum velit porta eleifend scelerisque. Suspendisse pellentesque a tellus sed scelerisque.
                        Vestibulum sapien turpis, malesuada quis erat non, venenatis viverra ex. Ut rutrum felis eu ante viverra,
                        hendrerit fermentum nibh cursus.`,
                        `Aliquam pellentesque velit libero, vestibulum faucibus odio interdum nec. Sed vel porta urna,
                        non laoreet ex. In quis vestibulum ligula. Suspendisse potenti. Etiam euismod turpis ac ex luctus
                        imperdiet. Sed posuere cursus nisi, eu egestas augue scelerisque sit amet. Donec volutpat nunc et
                        augue interdum, tincidunt fermentum dolor consectetur. Nullam auctor ullamcorper varius. Praesent
                        ultricies sem non arcu dignissim, eget auctor elit malesuada. Cras nibh neque, vulputate vitae purus
                        et, iaculis ultrices risus. Sed libero tortor, pulvinar ut tellus nec, auctor convallis erat. Nullam
                        elementum lacus non elit ullamcorper mattis. Ut eu consectetur nisi. Nam ut iaculis felis, eget sagittis
                        nisi. Cras volutpat malesuada est, a luctus magna consequat quis.`
                    ]
                },
                termsAndConditions: {
                    title: 'Terms and conditions page',
                    subTitle: 'terms and conditions description',
                    content: [
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis
                        sed felis eget bibendum. Nullam quis erat leo. Proin condimentum mi risus, nec
                        pretium mi feugiat ac. Integer tincidunt ipsum a risus interdum, vel varius felis luctus.
                        Nunc elementum velit porta eleifend scelerisque. Suspendisse pellentesque a tellus sed scelerisque.
                        Vestibulum sapien turpis, malesuada quis erat non, venenatis viverra ex. Ut rutrum felis eu ante viverra,
                        hendrerit fermentum nibh cursus.`,
                        `Aliquam pellentesque velit libero, vestibulum faucibus odio interdum nec. Sed vel porta urna,
                        non laoreet ex. In quis vestibulum ligula. Suspendisse potenti. Etiam euismod turpis ac ex luctus
                        imperdiet. Sed posuere cursus nisi, eu egestas augue scelerisque sit amet. Donec volutpat nunc et
                        augue interdum, tincidunt fermentum dolor consectetur. Nullam auctor ullamcorper varius. Praesent
                        ultricies sem non arcu dignissim, eget auctor elit malesuada. Cras nibh neque, vulputate vitae purus
                        et, iaculis ultrices risus. Sed libero tortor, pulvinar ut tellus nec, auctor convallis erat. Nullam
                        elementum lacus non elit ullamcorper mattis. Ut eu consectetur nisi. Nam ut iaculis felis, eget sagittis
                        nisi. Cras volutpat malesuada est, a luctus magna consequat quis.`
                    ]
                },
                error: {
                    title: 'Internal Page not found'
                }
            }
        });
    }
}