var _ = require('lodash')

var people = [
	{ name: 'fred', age: 103 },
	{ name: 'Lucy', age: 23 }
]

// find maximum property in array of objects
var oldestPerson = _.max(people, function(p){ return p.age })
oldestPerson // { name: 'fred', age: 103 }

// ===============
// p71
finder(_.identity, Math.max, [1,2,3,4,5]) // 5

var oldestPerson = finder(plucker('age'), Math.max, people)
console.log(oldestPerson)	// { name: 'fred', age: 103 }

function finder(valueFn, bestFn, collection){
	return _.reduce(collection, function(best, current){
		var bestValue = valueFn(best)
		var currentValue = valueFn(current)

		return (bestValue === bestFn(bestValue, currentValue)) ? best : current;
	})
}

function plucker(field){
	return function(obj){
		return (obj && obj[field])
	}
}
