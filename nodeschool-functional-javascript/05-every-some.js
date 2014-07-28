// Return a function that takes a list of valid users, and returns a function that returns true
// if all of the supplied users exist in the original list of users.
// You only need to check that the ids match.

module.exports = function checkUsersValid(goodUsers){
	return function(submittedUsers){
		// every user passed to submittedUsers exists in goodUsers
		
		//  every executes the provided callback function once for each 
		// element present in the array until it finds one where callback 
		// returns a falsy value
		var checkall = submittedUsers.every(function(subU){
			// some executes the callback function once for each element present in the array until it finds one where callback returns a true value
			var something = goodUsers.some(function(gu){
				if (gu.id == subU.id){
					return true;
				} else {
					return false;
				}
			});
			
			if (something){
				//exists in array
				return true;
			} else {
				//doesn't exist in array
				return false;
			}
		});
		
		
		if (checkall)
		{
			// every callback is true
			return true;
		}
		else
		{
			// every callback returned a false
			return false;
		}
		
	};
}
/*
OFFICIAL SOLUTION (way cleaner..)

  module.exports = function checkUsersValid(users) {
    return function(submittedUsers) {
      return submittedUsers.every(function(submittedUser) {
        return users.some(function(user) {
          return user.id === submittedUser.id
        })
      })
    }
  }


*/
