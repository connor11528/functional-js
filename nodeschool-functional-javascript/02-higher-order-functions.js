// Implement a higher-order function that takes a function and calls it 'n' times.

// higher-order-function: 

// operation: A Function, takes no arguments, returns no useful value.
// num: the number of times to call `operation`
function repeat(operation, num){
	if (num <= 0) return // num must be positive
	operation(); // call function
	return repeat(operation, --num); // repeat call
}

module.exports = repeat;
