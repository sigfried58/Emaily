const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'] //información a requerir
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));
};
