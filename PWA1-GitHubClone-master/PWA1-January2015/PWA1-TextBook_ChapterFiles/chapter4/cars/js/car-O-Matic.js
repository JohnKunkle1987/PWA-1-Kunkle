

var makes = [ "Chevy" , "GM" , "Fiat" , "Webville Motors" , "Tucker" ];

var models = [ "Cadillac" , "500" , "Bel-Air" , "Taxi" , "Torpedo" ];

var years = [ 1955 , 1957 , 1948 , 1954 , 1961 ];

var colors = [ "red" , "blue" , "tan" , "yellow" , "white" ];

var convertible = [ true , false ];

//Variable Array for make model year color convertible

function makeCar(){ // function for makeCar

	var rand1 = Math.floor ( Math.random () * makes.length );
	var rand2 = Math.floor ( Math.random () * models.length );
	var rand3 = Math.floor ( Math.random () *  years.length);
    var rand4 = Math.floor ( Math.random () * colors.length );
	var rand5 = Math.floor ( Math.random () * 5 )+ 1;
	var rand6 = Math.floor ( Math.random () * 2 );

	var car ={
		make: makes[rand1],
		model: models[rand2],
		year: years[rand3],
		color: colors[rand4],
		passangers: rand5,
		convertible: convertible[rand6],
		mileage: 0
	};
	return car;



}makeCar (); // Finish main function

function displayCar(car){ // function for displaying the car

	console.log("Your new car is a " + car.year + " " + car.make+ " "+ car.model);
	alert ( "Your new car is a " + car.year + " " + car.make + " " + car.model );
	document.write ( "<br>"+"Congrats Your new car is a " + car.year + " " + car.make + " " + car.model );

	console.log ( "'" +car.make + "'" + " Came from this array of choices: " , makes );
	document.write ( "<br>" + "'" +car.make + "'" + " Came from this array of choices: " , makes );

	console.log ( "'" + car.model + "'" + " Came from this array of choices: " , models );
	document.write ( "<br>" + "'" +car.model + "'" + " Came from this array of choices: " , models );

	console.log ( "'"+car.year+"'" + " Came from this array of choices: " , years );
	document.write ( "<br>" + "'" +car.year + "'" + " Came from this array of choices:" , years );

	console.log ( "'" +car.color + "'" +" Came from this array of choices: " , colors );
	document.write ( "<br>" + "'" + car.color + "'" + " Came from this array of choices: " , colors );
/*
	console.log("MAKES has this many: "+ Object.keys(makes).length);
	document.write ( "<br>"+"MAKES has this many: " +Object.keys(makes).length);

	console.log ( "MODELS has this many: " + Object.keys ( models ).length );
	document.write ( "<br>" + "MODELS has this many: " + Object.keys ( models ).length );

	console.log ( "YEARS has this many: " + Object.keys ( years ).length );
	document.write ( "<br>" + "YEARS has this many: " + Object.keys ( years ).length );

	console.log ( "COLORS has this many: " + Object.keys ( colors ).length );
	document.write ( "<br>" + "COLORS has this many: " + Object.keys ( colors ).length );

	console.log ( "CONVERTIABLE has this many: " + Object.keys ( convertible ).length );
	document.write ( "<br>" + "CONVERTIABLE has this many: " + Object.keys ( convertible ).length );
*/
}
var cartoSell = makeCar(); // variable to create car
displayCar(cartoSell);// function call to display car






/*
	var randomKey1 = "key" + rand1;
	var randomKey2 = "key" + rand2;
	var randomKey3 = "key" + rand3;

	var car = "Your Car is: " + rand1 + " " + rand2  + " " + rand3 + " " + rand4 + " " + rand5 + " " + rand6;

	console.log(car);

	alert ( car );

	console.log("Your car is: "+ words1[randomKey1] + " " + words2[randomKey2] + " " + words3[randomKey3]+".");
	document.write ( "<br>"+"Your car is: " + words1[ randomKey1 ] + " " + words2[ randomKey2 ] + " " + words3[ randomKey3 ] + "." );
	console.log(randomKey1+" of makes is: "+ words1[randomKey1]);
	document.write ( "<br>"+randomKey1 + " of Words1 is: " + words1[ randomKey1 ] );
	console.log(randomKey2+" of Words2 is: "+ words2[randomKey2]);
	document.write ( "<br>"+randomKey2 + " of Words2 is: " + words2[ randomKey2 ] );
	console.log(randomKey3+" of Words3 is: "+ words3[randomKey3]);
	document.write ( "<br>"+randomKey3 + " of Words3 is: " + words3[ randomKey3 ] );
*/





