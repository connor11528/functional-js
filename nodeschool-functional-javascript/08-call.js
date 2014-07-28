/* 
Write a function `duckCount` that returns the number of arguments passed to it which
have a property 'quack' defined directly on them. Do not match values inherited
from prototypes. 

*/


function duckCount() {

}

var notDuck = Object.create({quack: true})
var duck = {quack: true}

console.log(
duckCount(duck, notDuck) // 1
);

module.exports = duckCount
