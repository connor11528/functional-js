// Fuction#call allows us to invoke any function with an altered this value
// first arg to call becomes 'this' value
// rest of args get passed to the function

// returns # of args passed to it which have 
// 'quack' property defined on them

function duckCount() {
	// create array from arguments (an "array like object")
	return Array.prototype.slice.call(arguments, 0).filter(function(obj){
		// creates new array with all objects that pass the test
		
		// obj has hasOwnProperty method and also 'quack'
		return Object.prototype.hasOwnProperty.call(obj, 'quack')	// boolean
	}).length

}

module.exports = duckCount
