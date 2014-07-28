var _ =  require('lodash')

function existy(x){
	return x != null
}

existy(null) // false
existy(undefined) // false
existy({}) // true
existy({}.madeUp) // false
existy(function(){}) // true
existy(function(){}()) // false
existy(0) // true
existy(false) // true

// OR

var testExisty = _.map([null, undefined, {}, {}.madeUp, function(){}, function(){}(), 0, false], existy)
console.log(testExisty)

function truthy(x){
	return (x !== false) && existy(x)
}

truthy(false) // false
truthy(undefined) // false
truthy(0) // true
truthy('') // true
truthy(true) // true

var testTruthy = _.map([false, undefined, 0, '', true], truthy)
console.log(testTruthy)