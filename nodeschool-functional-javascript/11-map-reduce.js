function map(arr, cb){
	var mapped = []
	arr.reduce(function(prev, curr, index, originalArray){
		mapped.push(cb(curr))
	}, 0)	// start from beginning of array
	return mapped
}

// var nums = [1,2,3,4,5]
// var output = map(nums, function(n){
// 	return n*2
// })
// console.log(output)

module.exports = map