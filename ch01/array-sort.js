// semicolons matter here

[2, 3, -6, 0, -108, 42].sort();	// works

[0, -1, -2].sort();	// doesn't work
[2, 3, -1, -6, 0, -108, 42, 10].sort(); // doesn't work

// when given no arguments, Array#sort does string comparison
// To sort the above arrays properly:

[2, 3, -1, -6, 0, -108, 42, 10].sort(function(x, y){
	if(x < y) return -1;
	if(y < x) return 1;
	return 0;
})

// can abstract:
function compareLessThanOrEqual(x, y){
	return x <= y
}

console.log([0, 3, -100, -2, 0].sort(compareLessThanOrEqual))	// works
