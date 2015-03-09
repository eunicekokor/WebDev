function repeat(thing, times){
	var repeatString = "";
	for (var i = 0; i < times; i++){
		repeatString += thing;
	}
	return repeatString;
}

function join(array, delim){
	var arrString = "";
	var lengthArr = array.length;
	for (var i = 0; i < lengthArr; i++){
		if (delim && i>0){
			arrString += delim;
		}
	arrString += array[i];
	}

	return arrString;
}

function sum(array){
	var result = 0;
	var arrlength = array.length;

	for (var i = 0; i<arrlength; i++){
		result += array[i];
	}

	return result;
}

function paramify(object){
	var parameters = [];
	for (var key in object){
		if (object.hasOwnProperty(key)){
			parameters.push(key + "=" + object[key]);
		}
	}
	parameters.sort();
	return join(parameters, "&");
}

function factorial(n){
	var product = 1;
	for (var i =1; i<=n; i++){
		product *=i;
	}
	return product;
}

function concat_string(){
	return join(arguments, "");
}
