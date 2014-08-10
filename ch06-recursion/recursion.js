var _ = require('lodash')

function myLength(arr){
	if(_.isEmpty(arr))
		return 0
	else
		return 1 + myLength(_.rest(arr))
}

var length = myLength([1,2,3,4,5])

console.log(length)

// =================

function cycle(times, arr){
	if(times <= 0)
		return []
	else
		return cat(arr, cycle(times -1, arr))
}

// ==================

// influencer to influenced
var influences = [
	['Lisp', 'Smalltalk'],
	['Lisp', 'Scheme'],
	['Smalltalk', 'Self'],
	['Scheme', 'Javascript'],
	['Scheme', 'Lua'],
	['Self', 'Lua'],
	['Self', 'Javascript']
];

function nexts(graph, node){
	if(_.isEmpty(graph)) return [];

	var pair = _.first(graph);
	var from = _.first(pair);
	var to = pair[1];
	var more = _.rest(graph);

	if(_.isEqual(node, from))
		return construct(to, nexts(more, node))
	else
		return nexts(more, node)
}

nexts(influences, 'Lisp')
