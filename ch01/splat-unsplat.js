// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// all js functions have an apply method that allows you to call the function with an array
// as if the array elements were the arguments to the function itself.
var _ = require('lodash')

function splat(fun){
	return function(array){
		return fun.apply(null, array)
	}
}

function unsplat(fun){
	return function(){
		// all javascript has access to 'arguments' - values function was called with
		return fun.call(null, _.toArray(arguments))
	}
}

var addArrayElements = splat(function(x, y){
	return x + y;
})

var joinElements = unsplat(function(array){
	return array.join(' ')
})

console.log(addArrayElements([1,2]))
console.log(joinElements(1,2))