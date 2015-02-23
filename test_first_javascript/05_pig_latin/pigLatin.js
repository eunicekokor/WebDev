function translate(word){
	var vowels = "aeiou";
	var index = 0;
	var initArray = word.split(" ");
	var pigArray =[];

	initArray.forEach(function(getWord){
		for (var i = 0; i <getWord.length;i++){
			if (vowel.search(getWord[i] !== -1){
				if (getWord[i] !== "u" || (getWord[i] === "u" && getWord[i-1] != "q")){
					index = i;
					break;
				}
			}
		}
		pigArray.push(getWord.substring(index, getWord.length) + getWord.substring(0,index) + 'ay');
	});

return pigArray.join(" ");
}
