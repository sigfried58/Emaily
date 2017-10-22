//Verificamos en que ambiente nos encontramos
if (process.env.NODE_ENV === 'production') {
	// We are in production
	module.exports = require('./prod');
} else {
	// we are development
	module.exports = require('./dev');
}
