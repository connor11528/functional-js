/*
  Greetings, algorithmics!  Today, your task is to practice functional programming with some basic exercises.
*/


/* --------------------- */
/* BASIC BUILDING BLOCKS */
/* --------------------- */

// run function on each elem of array, return new array
var map = function(input, iterator) {
	var newArr = []
	input.forEach(function(x, i){
		newArr.push(iterator(x, i))
	})
	return newArr
};

// test condition for every array elem. If true add to returned array
var filter = function(input, iterator) {
	var newArr = []
	input.forEach(function(x, i){
		if (iterator(x, i)) newArr.push(x)
	})
	return newArr
};

// reduce collection to a single value.
// result of running each elem through
var reduce = function(input, iterator, initialValue) {
	var reducedValue;

	// begin with initialValue or first array elem
	(typeof(initialValue) === 'undefined') ? reducedValue = input[0] : reducedValue = initialValue

	input.forEach(function(x, i){
		reducedValue = iterator(reducedValue, x)		
	})

	return reducedValue
};

/* ---------------- */
/* APPLIED PROBLEMS */
/* ---------------- */

// Find the sum of the numbers in the input. 
var sumOfArray = function(input) {
	return reduce(input, function(total, elem){
		return total + elem
	}, 0)
};

// Return only the numbers that are the same as their position in the input.
// That is, [0, 2, 1, 3] returns [0, 3]
var positionMatch = function(input) {
	return filter(input, function(x, i){
		return x === i
	})
};

// Given a list of names, find the number of unique first names in the list.
// (hint: string.split(" ") will turn the string into an array.  the first element is the first name.)
var uniqueFirstNames = function(input) {
	var firsts = map(input, function(x, i){
		return x.split(" ")[0]
	})
	
	return filter(firsts, function(x, i){
		return x
	})
};

var result = uniqueFirstNames(["John Bonham", "Roger Waters", "John Lennon", "Nick Moon", "Roger Daltry", "Nick Cave", "Jimmy Hendrix", "Jimmy Buffet", "Jimmy Page", "Frank Zappa"]);
console.log(result)

// Return only the numbers in the input that are palindromes (i.e. 4884 or 1234321)
var palindromeNumbers = function(input) {

};

// Given a list of strings, return an array that indexes the list by length.
// That is, result = indexByLength(["you", "are", "me"])
// result[2] is ["me"]; result[3] is ["you", "are"]
var indexByLength = function(input) {

};

// given a list of objects with properties `name` (a string), `age` (a number),
// and `children` (an array), return the names of everyone who is over 65 
// or has at least two children.
var olderOrWithChildren = function(input) {

};


/* -------------------------- */
/* MORE SPECIALIZED FUNCTIONS */
/* -------------------------- */

// Given an iterator that returns true or false, return true
// if every input element passes the test and false if at least one fails.
var every = function(input, iterator) {
	var passing = true; 
	var iter = 0;	// dunno how "functional" this is
	while(passing && iter < input.length){
		passing = iterator(input[iter])
		iter++
	}

	return passing
};

// Given an iterator that returns true or false, return true
// if at least one input element passes the test and false if all of them fail.
var some = function(input, iterator) {
	// tricky 'every': http://stackoverflow.com/questions/6260756/how-to-stop-javascript-foreach
	var notPass = input.every(function(x){
		var passes = false;

		if(iterator(x))
			passes = true
		
		if (passes)
			return false
		else
			return true
	})

	return !notPass
};

// Returns an array with duplicate elements in the input removed.
var unique = function(input) {
	var noDoubles = []
	input.forEach(function(x, i){
		if(noDoubles.indexOf(x) === -1)
			noDoubles.push(x)
	})

	return noDoubles
};

// un-nests an array.  that is, flatten([[1, 2], [3], [[4]]])
// becomes [1, 2, 3, 4]
var flatten = function(input) {

};

// var result = flatten([1, 2, [3, [4]]]);
// console.log(result)

// returns true if the input contains the target, and false if not.
var contains = function(input, target) {
	var notContains = input.every(function(x){
		var contains = false;

		if (x === target){
			contains = true;
		}

		if (contains){
			return false
		} else {
			return true
		}
	})

	return !notContains
};

