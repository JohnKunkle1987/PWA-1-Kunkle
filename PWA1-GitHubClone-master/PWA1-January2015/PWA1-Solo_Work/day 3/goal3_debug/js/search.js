// 14 total errors
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),        //creates var for resultsDiv that equals a document
		searchInput = document.forms[0].search,				//creates var for searchInput and it equals an array
		currentSearch = '';
	
	// Validates search query
	var validate = function(query) { // a variable called validate that is function useing the parameters query

		// Trim whitespace from start and end of search query
		while (query.charAt(0) == " ") { //first part of the function it will run until something becomes true
			query = query.substring(1, query.length); // while query is equal to substring
		}
		while (query.charAt(query.length - 1) === "") { //another while loop that will continue until a condition is met
			query = query.substring(0, query.length - 1);// the condition that it will always stay inside the search length

		}
		// Check search length, must have 3 characters
		if (query.length < 3) {//if the query length is shorter than 3 it will not search
			alert("Your search query is too small, try again.");// alerts that they didn't type enough character.

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();//i don't know what this does
		}


		return search(query);//this returns the something that is not specified
	};
	
	// Finds search matches
	var search = function(query){ // sets search var the function of query
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");//sends the users search into the array
		
		// array to store matched results from database.js
		var results = [];//sets results to catch the data from the array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) { //makes it so that the loop will go through all data in the db.length

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');//not sure whats this is doing It's a var called dbTitleEnd
			var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);//changes something about dbItem

		}
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++) {//What is lowercase variable?
				var qItem = queryArray[ii].toLowerCase();//changes the search to lower case so it can find it in the db

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qItem);//searches db items for a match
				if (compare !== -1) {//returns the match so it can put showed later
					results.push(db[i]);//adds what it found to the array
				}

			}
		
		results.sort();//sorts the result
		
		// Check that matches were found, and run output functions
		if(results.length = 0){//makes sure that what it found, was found in the db
			noMatch();//i don't know
		}else{//Run this if cant run IF
			showMatches(results);//shows the results for search after making sure they are from the db
		}
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){//var for noMatch
		var html = ''+//var for html
			'<p>No Results found.</p>'+//html paragraph that says no result found
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'//shows up if they are having trouble searching.
		;
		resultsDIV.innerHTML = html;//has the results go to the html
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){//named function showMatches function with results as parameters
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //shows this in the html
			title, //?
			url		//?
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){//goes though the db and checks for hits on the search
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');//uses the index to put all the results together
			title = results[i].subString(0, titleEnd);//displays the result in the search browser
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);//looks for the url after the title
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';//makes the url a action link
		}
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.//???
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {//document.forms array is a function
		var query = searchInput.value;//query value is the same as search input
		validate(query);//checks the query


		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;//??
	}

})();