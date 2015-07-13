


  /*jQuery is a common JavaScript library for reading and making changes to the
  Document Object Model (DOM). The DOM is a tree that contains information
  about what is actually visible on a website.

  While HTML is a static document, the browser converts HTML to the
  DOM and the DOM can change. In fact, JavaScript's power comes from
  its ability to manipulate the DOM, which is essentially a JavaScript
  object. When JavaScript makes something interesting happen on a
  website, it's likely the action happened because JavaScript changed
  the DOM. jQuery is fast and easy to use, but it doesn't do anything
  you can't accomplish with vanilla (regular) JavaScript.
  */


  /*  var formattedEmp = HTMLworkEmployer.replace("%data%",work.jobs[job].employer).replace('#',work.jobs[job].url);
              var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
              var formattedEmployerTitle = formattedEmp + formattedWorkTitle; 
              var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].date);
              var formattedCity = HTMLworkLocation .replace("%data%",work.jobs[job].location);
              var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);  */



var firstName= "Sonam ";
var age= 26;
console.log(firstName);

var awesomeThoughts= "I am Sonam and I am awesome";
console.log(awesomeThoughts);

var email= "ssinha@neiu.edu";
var newEmail=  email.replace("ssinha@neiu.edu","way2shona@gmail.com");

console.log(email);
console.log(newEmail);

var funThoughts= awesomeThoughts.replace("awesome","fun");
$("awesomeThoughts").append(funThoughts);



/*$("#main").append("Sonam Sinha");
var awesomeThoughts= "I am Sonam and I am awesome";
console.log(awesomeThoughts);

var email= "ssinha@neiu.edu";
var newEmail=  email.replace("ssinha@neiu.edu","way2shona@gmail.com");

console.log(email);
console.log(newEmail);

var funThoughts= awesomeThoughts.replace("awesome","fun");
$("#main").append(" "+funThoughts);*/

/*var skills=["awesomeness, ", "coding, ", "java, ", "javascript, ", "database, ", "HTML and CSS. "]; 
 $("#main").append(skills);

 $("#main").append(skills[0]); // will display awesomeness only 

  $("#main").append(skills.length);  // Length of the array  */



/*function locationizer(work){
	var locationArray = [];
	for(job in work.jobs){
		var newLocation = work.jobs[job].location;
		location.push(newLocation);
	}
	return locationArray;
}
console.log(lacationizer(work)); */ // Remove this code


var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s= s.slice(1);
    s= s.replace('u','U');
    /*
		var s = "audacity";
		s = s[1].toUpperCase() + s.slice(2);

		.slice() is another string method, which acts on the string s in this case. .slice(start, [end]) will grab the part of the string from the index of start to the index of end. The fact that [end] shows up in brackets means that it's optional. If it isn't there, then .slice() will select all of the string from start to the very end of the string. s.slice(2) gives us "dacity".
		Concatenated together, we get "Udacity"!
    */
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));


var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    finalName[0].toUpperCase();
    finalName.substring(1,7).toLowerCase();
    finalName.substring(7,finalName.length -1).toUpperCase();
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");

    
    
    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));


/*Problem 1*/
var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
// console.log(weirdObject.property1);

// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = true;
var bracketNotation1 = true;

// property-2
var dotNotation2 = false;
var bracketNotation2 = true;
console.log(weirdObject["8property"]);

// property 3
var dotNotation3 = false;
var bracketNotation3 = true;

// property$
var dotNotation4 = true;
var bracketNotation4 = true;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = true;

// property()
var dotNotation6 = false;
var bracketNotation6 = true;

// property[]
var dotNotation7 = false;
var bracketNotation7 = true;

// 8property
var dotNotation8 = false;
var bracketNotation8 = true;


/*Solution Problem 1


Solution Summary:

Bracket notation always works. Dot notation requires properties that begin with a letter and do not include special characters.

Let's go through these one-by-one.
property

dot notation: true

bracket notation: true

This one is normal. Either syntax is fine.
"property1"

dot notation: true

bracket notation: true

A number attached to the end of a property is acceptable for dot and bracket notation.
"property-2"

dot notation: false

bracket notation: true

Some special characters like the - are not acceptable with dot notation but will still work with bracket notation.
"property 3"

dot notation: false

bracket notation: true

Spaces are generally bad form in programming. Don't use them except within strings. But you can still access a property name with a space using bracket notation.
"property$"

dot notation: true

bracket notation: true

Surprisingly, you actually can use $ within property names and still access them with dot notation.
" property"

dot notation: false

bracket notation: true

In dot notation, the space actually gets ignored, so you are accessing "property" instead. But bracket notation still works.
"property()"

dot notation: false

bracket notation: true

Without quotes, property() is a function call. This is just plain bad. While you can access a property like this one with bracket notation, there's no reason you should ever include () within an object property.
"property[]"

dot notation: false

bracket notation: true

Like the last one, this is bad form too. [] already have a specific purpose in JavaScript and should never be used within a property.
"8property"

dot notation: false

bracket notation: true

Dot notation fails to work if the property starts with a number. This is also bad form. Properties should never start with numbers.


*/