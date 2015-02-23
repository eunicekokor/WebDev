console.log(module);

var greet = function(name){
	console.log("Hello, " + name);
};

var shout = function(name){
	console.log("HELLO " + name + '!');
}

module.exports = {
	greet: greet,
	shout: shout
};

//Could have defined as module.exports.grett = function()....

console.log(module);
