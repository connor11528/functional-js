var _ = require('lodash');

var peopleTable = lameCSV('name,age,hair\nMerble,35,red\nBob,64,blonde');

// array of arrays for CSV data
console.log(peopleTable)

var names = selectNames(peopleTable)
var ages = selectAges(peopleTable)
var hairColors = selectHairColor(peopleTable)

var rebuiltPeopleTable = _.zip(names, ages, hairColors)

// logs table without the first element, built from parts
console.log(rebuiltPeopleTable)


// _.reduce(collection, cb) - turn array into single value by running each element through cb.
//		each successive cb receives the return value of previous execution
// _.map(collection, cb) - creates a new array by running each value through cb
function lameCSV(str){
	return _.reduce(str.split('\n'), function(table, row){
		table.push(_.map(row.split(','), function(c){ 
			return c.trim()
		}))
		return table;
	}, [])
}

function selectNames(table){
	// _.rest(array) - get all but the first element of array
	// _.first(array) - fn to get first element of array
	return _.rest(_.map(table, _.first))
}

// new array of everyone's age
function selectAges(table){
	return _.rest(_.map(table, function(person){
		return person[1]	// not purely functional, could use 'nth' fn
	}))
}

function selectHairColor(table){
	return _.rest(_.map(table, function(row){
		return row[2]
	}))
}

