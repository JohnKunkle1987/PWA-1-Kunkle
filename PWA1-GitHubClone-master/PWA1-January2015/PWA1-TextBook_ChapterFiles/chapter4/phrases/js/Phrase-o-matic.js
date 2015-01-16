
function makePhrases(){

	var words1 = {
		key1:"24/7",
		key2:"multi-tier",
		key3:"30,000 foot",
		key4:"B-to-B",
		key5:"win-win"
	};

	console.log(words1);

	var words2 = {
		key1:"empowered",
		key2:"value-added",
		key3:"oriented",
		key4:"focused",
		key5:"aligned"
	};

	console.log(words2);

	var words3 = {
		key1:"process",
		key2:"solution",
		key3:"tipping-point",
		key4:"strategy",
		key5:"vision"
	};

	console.log(words3);

	var rand1 = Math.floor ( Math.random () * Object.keys(words1).length ) + 1;
	var rand2 = Math.floor ( Math.random () * Object.keys(words2).length ) + 1;
	var rand3 = Math.floor ( Math.random () * Object.keys(words3).length ) + 1;


	var randomKey1 = "key" + rand1;
	var randomKey2 = "key" + rand2;
	var randomKey3 = "key" + rand3;

console.log(rand1,rand2,rand3);

	var phrase = "Your Random Phrase is: " + words1[randomKey1] + " " + words2[randomKey2]  + " " + words3[randomKey3];

	console.log(phrase);

	alert ( phrase );

	console.log("Your random phrase is: "+ words1[randomKey1] + " " + words2[randomKey2] + " " + words3[randomKey3]+".");
	document.write ( "<br>"+"Your random phrase is: " + words1[ randomKey1 ] + " " + words2[ randomKey2 ] + " " + words3[ randomKey3 ] + "." );
	console.log(randomKey1+" of Words1 is: "+ words1[randomKey1]);
	document.write ( "<br>"+randomKey1 + " of Words1 is: " + words1[ randomKey1 ] );
	console.log(randomKey2+" of Words2 is: "+ words2[randomKey2]);
	document.write ( "<br>"+randomKey2 + " of Words2 is: " + words2[ randomKey2 ] );
	console.log(randomKey3+" of Words3 is: "+ words3[randomKey3]);
	document.write ( "<br>"+randomKey3 + " of Words3 is: " + words3[ randomKey3 ] );




}makePhrases();

