function repeat(operation, num) {
  if (num <= 0) return
  operation()

  // every 10 iterations
  if(num % 10 === 0){
  	// allow previously registered handlers to run
  	// (releases control of the event loop)
  	setTimeout(function(){
  		repeat(operation, --num)
  	}, 0)
  } else {
  	repeat(operation, --num)
  }
}

module.exports = repeat
