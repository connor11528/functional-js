function Spy(target, method){
	var originalFunction = target[method];
	var result = {
		count: 0
	};

	// completely redefine the method we're spying on
	target[method] = function(){
		result.count++
		
		// execute the method (invoke original function)
		return originalFunction.apply(target, arguments)
	}

	return result
}

// spy on console.error
// var spy = Spy(console, 'error')

// console.error('error 1')
// console.error('error 2')
// console.error('error 3')

// console.log(spy.count)

module.exports = Spy