// Task: Given an Array of strings, use Array#reduce to create an object that
// contains the number of times each string occured in the array. Return the
// object directly

function countWords(inputWords){
	var obj = {};
	
	inputWords.reduce(function(a, word){
		if (!obj[a] && a != undefined){
			obj[a] = 1;
		}
		
		if (!obj[word]){
			obj[word] = 1;
		} else {
			obj[word] += 1;
		}
	});
	
	return obj;
}

module.exports = countWords;

/*
OFFICIAL SOLUTION

  function countWords(arr) {
    return arr.reduce(function(prev, curr) {
      prev[curr] = ++prev[curr] || 1
      return prev
    }, {})
  }
  
  module.exports = countWords
  
*/
