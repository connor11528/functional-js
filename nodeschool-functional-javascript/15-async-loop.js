// * userIds: an Array of numeric user ids.
// * load: a Function used to load user objects. Expects a numeric id and a callback. The callback will be called with the
//   result of loading the user with the specified id (either a user object or null).
// * done: a Function that expects an Array of user objects (as retrieved from `load`).


// function loadUsers(userIds, load, done) {
//   var usersLoaded = 0
//   var users = []
//   userIds.forEach(function(id, index){
//   	load(id, function(user){
//   		users[index] = user
//   		if (++usersLoaded === userIds.length) return done(users)
//   	})
//   })
// }

// module.exports = loadUsers

// something wrong (official solution does not pass)
function loadUsers(userIds, load, done) {
  var completed = 0
  var users = []
  userIds.forEach(function(id, index) {
    load(id, function(user) {
    	console.log(user)
      users[index] = user
      if (++completed === userIds.length) return done(users)
    })
  })
}

module.exports = loadUsers