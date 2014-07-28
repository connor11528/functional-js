// takes an array of objects with .message properties
// and prints any message that's less than 50 characters
// returns array of messages


module.exports = function getShortMessages(messages){
	var results = [];
	messages.map(function(m){
		return m.message;
	})
		.filter(function(m){
			if (m.length < 50){
				results.push(m);
				};
			});
			
	return results;
};

/* OFFICIAL

  module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
      return item.message.length < 50
    }).map(function(item) {
      return item.message
    })
  }
  
*/

