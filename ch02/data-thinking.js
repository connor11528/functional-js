var _ = require('lodash'),
	zombie = { name: 'Bub', film: 'Day of the Dead' },
	books = [
		{ title: 'Harry Potter', author: 'JK Rowling' },
		{ title: 'Grapes of Wrath', author: 'John Steinbeck' },
		{ title: 'Hunger Games', author: 'Suzanne Collins' },
		{ title: 'The Bible', author: undefined },
		{ title: 'My Little Pony' }
	]

var zombieKeys = _.keys(zombie)
var zombieValues = _.values(zombie)

var allAuthors = _.pluck(books, 'author') // [ 'JK Rowling', 'John Steinbeck', 'Suzanne Collins' ]
var allTitles = _.pluck(books, 'title') // [ 'Harry Potter', 'Grapes of Wrath', 'Hunger Games' ]

// creates 2-dimensional array
var arrayOfArrays = _.pairs(zombie) // [ [ 'name', 'Bub' ], [ 'film', 'Day of the Dead' ] ]

// turn it back into an object
var zombieRedux = _.object(arrayOfArrays)

// _.invert - makes object into { value: key }. keys must be strings

// populates unknown fields
var allObjectsHaveAuthorKey = _.map(books, function(book){
	// sets property if it is undefined (not there)
	return _.defaults(book, { author: 'Unknown'})
})

var bookKeys = _.countBy(books, function(book){
	return book.author
})

// omit
var person = { name: 'Joe', token: 'dsfdsf43sdf32d', password: 'baseball' }
var info = _.omit(person, 'token', 'password') // { name: 'Joe' }
var creds = _.pick(person, 'token', 'password') // { token: 'dsfdsf43sdf32d', password: 'baseball' }

// _.findWhere
var library = [
	{title: "SICP", isbn: "0262010771", ed: 1},
	{title: "SICP", isbn: "0262510871", ed: 2},
	{title: "SICP", isbn: "69", ed: 2},
	{title: "Joy of Clojure", isbn: "1935182641", ed: 1}
];
// gets first match
var bookIWant = _.find(library, {title: "SICP", ed: 2});

// gets all matches
var matchingBooks = _.where(library, { title: 'SICP' })
console.log(matchingBooks)