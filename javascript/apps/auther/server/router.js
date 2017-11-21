const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send(['Hi there!']);
  });

  app.get('/authed', requireAuth, function(req, res, next) {
    res.send(['001', { a: 'A', b: 'B'}, false]);
  });

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
