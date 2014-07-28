var _ = require('lodash')

console.log(createSong(99, 0, lyricSegment))

// create lyric segment
function lyricSegment(n){
	return _.chain([])	// creates lodash object, that we do things to
		.push(n + ' bottles of beer on the wall')
		.push(n + ' bottles of beer')
		.push('Take one down, pass it around')
		// enters ('taps') into a method chain to modify the result
		.tap(function(lyrics){
			if (n > 1)
				lyrics.push((n - 1) + ' bottles of beer on the wall.')
			else
				lyrics.push('No more bottles of beer on the wall')
		})
		.value()
}

function createSong(start, end, lyricGen){
	// reduce = returns value from an array. 6 === _.reduce([1, 2, 3], function(sum, num) { return sum + num; });
	// range = creates an array of numbers. Takes start, end, valueToIncrementBy
	return _.reduce(_.range(start, end, -1),
		function(accumulated, num){
			return accumulated.concat(lyricGen(num))
		}, [])
}

