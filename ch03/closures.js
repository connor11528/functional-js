var _ = require('lodash')

var averageSq =  averageDamp(function(n){
	return n * n
})

console.log(averageSq(10)) 		// 55

function averageDamp(cb){
	return function(n){
		console.log(n)			// 10
		console.log(cb(n))		// 100
		return average([n, cb(n)])
	}
}

function average(array){
	var sum = _.reduce(array, function(a, b){ return a + b });
	return sum/ array.length
}

// =============================
// captured variables as private data

var pingpong = (function(){
	var privateVar = 1;
	return {
		inc: function(n){
			return privateVar += n
		},
		dec: function(n){
			return privateVar -= n
		}
	}
})()

pingpong.dec(5) // -4
pingpong.inc(4) // 0
pingpong.inc(2) // 2

// privateVar cannot be accessed by any means 
// except for calling the above methods

// even this won't work:
pingpong.tryAndAccess = function(){
	return privateVar
}
// pingpong.tryAndAccess()	// Error: privateVar is not defined
// =============================
function plucker(field){
	return function(obj){
		return (obj && obj[field])
	}
}
var getTitle = plucker('title')

var book = { title: 'Infinite Jest', author: 'DFW' }

getTitle(book)	// Infinite Jest

// also works with arrays
var books = [
	{ title: 'Harry Potter', author: 'JKR' },
	{ title: 'Animorphs', author: 'KAA' }
]

var getSecond = plucker(1)
getSecond(books) // { title: 'Animorphs', author: 'KAA' }
