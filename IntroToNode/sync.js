console.log("Node starting...");

//var greeter = require('./greeter');

//greeter.greet('eunice');
//greeter.shout('EVAAAAAAAAAAAAN');

var fs = require('fs');
//console.log(fs);
console.log(fs.readFileSync('./file1.txt', function(err, data){
	console.log(data);
	console.log(data.toString());
});
