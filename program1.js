//funcion que te dice si es un palindrome
var ask = require('readline-sync');
var number = ask.question("Enter a number to check if it is a palindrome: ");

console.log(checkPalindrome(number));

function checkPalindrome (palindrome) {
	var splited = palindrome.split('');
	length = splited.length;
	var unchanged = [];
	for (var test in splited) {
		unchanged.push(splited[test]);
	}
	//^^^var unchanged =  splited;
	//console.log(unchanged);
	//console.log(splited);
	var position = length - 1;
	var count = 0;
	for (var word in splited) {
		splited.push(splited[position]);
		//console.log(word + " word");
		//console.log(splited);
		
		position --;
		count ++;
		//	console.log(count + " count");
	}
	splited.splice(0, length);
	unchanged = unchanged.join("");
	splited = splited.join("");

	//console.log(splited);
	//console.log(unchanged);

	if (unchanged != splited) {
		return "false";
	}else return "true";
}

