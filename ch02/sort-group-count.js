var _ = require('lodash'),
	people = [{ name: 'Connor', age: 25 }, { name: 'Mary', age: 30 }, { name: 'Sean', age: 16 }],
	albums = [
		{ title: 'Sabbath Bloody', genre: 'Metal' },
		{ title: 'Take Off Your Pants and Jacket', genre: 'Alternative' },
		{ title: 'International Superhits', genre: 'Alternative' },
		{ title: 'Led Zepplin', genre: 'Rock' },
		{ title: '40oz to Freedom', smokeWeedEveryday: true}
	];

var sortedPeople = _.sortBy(people, function(person){ 
	return person.age 
})

var albumsByGenre = _.groupBy(albums, function(album){
	var genre = album.genre
	if(album.genre === undefined){
		// this would change original object
		// album.genre = 'Not Specified'
		genre = 'Not Specified'
	}
	return genre
})

var countGenres =  _.countBy(albums, function(a){ return a.genre })
console.log(countGenres)