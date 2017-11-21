const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send(['001', { a: 'A', b: 'B'}, false]);
  });

  app.post('/signup', Authentication.signup);
}
