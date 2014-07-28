var _ = require('lodash'),
	nums = [1,2,3,4,5,6];

weirdAdd(42, function(){ return 42 }) // 84

doubleAll(nums)
average(nums)
allEvens(nums)

// object to array of arrays using map
var mapAnObject = _.map({ a: 1, b: 2 }, function(value, key, obj){
	return [key, value, obj]
})
// [ [ 'a', 1, { a: 1, b: 2 } ], [ 'b', 2, { a: 1, b: 2 } ] ]

// find - returns first element where cb is truthy
var firstString = _.find([{}, 1, 'hello world', 'another'], _.isString) // 'hello world'

// reject - eliminates value when cb returns true
var withoutStrings = _.reject([1, '2', 3, '45', 6], _.isString) // [1, 3, 6]

// all - checks every element matches a condition
var areAllNumbers = _.all(nums, _.isNumber) // true

// any - true if one element matches condition
var containsAString = _.any(nums.concat('7'), _.isString) // true


// "Applicative" programming
// =========================
// map
function doubleAll(array){
	return _.map(array, function(n){ return n * 2 })
}

// reduce
function average(array){
	var sum = _.reduce(array, function(a, b){ return a + b });
	return sum/ _.size(array) // same as array.length..
}

// _.reduceRight will reduce but from right to left

// filter
function allEvens(array){
	return _.filter(array, function(n){
		// insert in the returned collection if true
		return (n % 2) === 0	// 3===D
	})
}

// functions are first class objects
// anywhere a number can go a function can be
function weirdAdd(n, f){
	return n + f()
}