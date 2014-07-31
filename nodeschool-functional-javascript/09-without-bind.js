function logger(str){
	// return a function that prints messages with str prepended
	return function(){

		// turn 'arguments' into array
		var toLog = Array.prototype.slice.call(arguments, 0)

		// str is what gets prepended
		toLog.unshift(str)
		return console.log.apply(null, toLog)
	}
}

// var infoMessage = logger('INFO:')
// infoMessage('Here is some information')

module.exports = logger