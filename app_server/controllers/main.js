module.exports.index = function(req, res, next) {
    res.render('index', { title: 'Express 2020', description: 'Studying express, Mongo DB, Angular and Node lika a pro' });
}