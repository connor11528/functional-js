// instead of:
// myArray[n]

// we can be functional:
// nth(myArray, n)
var _ = require('lodash'),
	letters = ['a', 'b', 'c', 'd']

function nth(a, index){
	if(!_.isNumber(index)) fail('Expected a number as index')
	if(!isIndexed(a)) fail('Not supported for non-indexed types')
		if((index < 0) || (index > a.length - 1))
			fail('Index value is too large')
		return a[index];
}

nth(letters, 1)	// b
nth({}, 2)	// error
nth('abcd', 0)	// a
nth(letters, 100)	// error
nth(letters, 'aaaaa')	// error

// helpers
function isIndexed(data){
	return _.isArray(data) || _.isString(data)
}

function fail(thing){
	throw new Error(thing)
}

function warn(thing){
	console.log(['WARNING:', thing].join(' '))
}

function note(thing){
	console.log(['NOTE:', thing].join(' '))
}