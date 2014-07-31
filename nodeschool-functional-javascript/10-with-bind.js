
function logger(namespace){
	// creates a function
	return console.log.bind(this, namespace)


	// 'this' could be changed to 'console'
}

// var infoMessage = logger('INFO:')
// infoMessage('Here is some information', 'plus this')

module.exports = logger