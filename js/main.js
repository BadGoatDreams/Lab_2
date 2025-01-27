// Question 1 - How many vowels?
// Write code that counts the number of vowels in a string.
// +1 bonus points if you ask for the string from the user

//var sentence1 = "How many vowels do you think are in this oneeee?";


function vowel_counter(){
      var input = prompt("What is your sentence? Please use at least one vowel! ");
      var vowels = /[aeiouAEIOU]/g;
      var vowels_found = input.match(vowels);
      var vowel_num = vowels_found.length;
    console.log("the number of vowels is " + vowel_num)
	const textBox = document.getElementById("ans1");

  // Set the value of the text box
  textBox.value = "the number of vowels is " + vowel_num;
}
    

vowel_counter();

// Question 2 - Odd Addition
// You'll be given three arrays containing two numbers each. 
// Write a script that checks if the numbers are odd or even.
// If they are odd, multiple them and return or print the results.
// If they are even, add them and return or print the results.
// For example, [3, 5] would return 15; but [3, 6] would result in 9



function odd_or_even(input_array){
  if(input_array[0] % 2 === 0 && input_array[1] % 2 ===0 ){
    
    console.log(input_array[0]  + input_array[1])
	return (input_array[0]  + input_array[1])
  }
  else{
    console.log(input_array[0] * input_array[1])
	return (input_array[0] * input_array[1])
  }
  
  
}

const first = [5, 7];
const second = [12, 3];
const third = [7, 7];

const textBox = document.getElementById("ans2");
textBox.value = "5 and 7 returns: " + odd_or_even([5, 7]);
const textBox1 = document.getElementById("ans3");
textBox1.value = "12 and 3 returns: " + odd_or_even([12, 3]);
const textBox2= document.getElementById("ans4");
textBox2.value = "7 and 7 returns: " + odd_or_even([7, 7]);

// Question 3 - Twenty One
// You'll receive three arrays with two numbers again.
// If the two numbers add up to 21, return True
// If they don't, return False unless they are identical
// If they are identical, return "Split"

// Your solution goes here


function blackjack_checker(array_input){
  if(array_input[0] + array_input[1] === 21){
    //return True
    console.log("True")
	return "True"
  }
  else if (array_input[0] === array_input[1]){
    //return "split"
    console.log("split")
	return "split"
    
  } else {
    //return False
    console.log("False")
	return "False"
  }
}

const p = [19, 2];
const q = [4, 6];
const r = [16 ,16];

const textBox3 = document.getElementById("ans5");
textBox3.value = "19 and 2 returns: " + blackjack_checker([19, 2]);
const textBox4 = document.getElementById("ans6");
textBox4.value = "4 and 6 returns: " + blackjack_checker(q);
const textBox5= document.getElementById("ans7");
textBox5.value = "16 and 16 returns: " + blackjack_checker(r);



// Question 4 - FizzBuzz
// This is a classic programming question.
// Print out the numbers from 1 to 100, except
// If the number is a multiple of three, print Fizz
// If the number is a multiple of five, print Buzz
// If the number is a multiple of three and five, print FizzBuzz
// Your output might look something like 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz ....

// Your solution goes here

var count = 0;

while(count <= 100){
  if(count % 3 === 0 && count %5 === 0){
    console.log("FizzBuzz")
  } else if(count %3 === 0){
    console.log("Fizz") } else if (count %5 === 0){
      console.log ("Buzz")} else{
        console.log(count)
      }
  count = count + 1
  
  
}
const textBox6 = document.getElementById("ans8");
textBox6.value = "check console for fizz buz";


// Question 5 - Start my car
// Create a car variable (object)
// Give it the properties of make, model, year, and color
// Give it a start method that returns to the console "Vroom vroom! Car started!" or something similar
// Call the start method

// Your solution goes here
var mycar = {
  make: "Honda",
  model: "Pilot",
  year: 2004,
  color: "Grey",
  start: function(color, make, model){
	const textBox7 = document.getElementById("ans9");
	textBox7.value = "Vroooom! here comes the " + this.color + " " + this.make + " " + this.model;
    console.log("Vroooom! here comes the " + this.color + " " + this.make + " " + this.model) //did reference chatgpt for "this" usage
  }
}
mycar.start()


//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
var citiesList = ['Corvallis', 'Portland', 'Eugene', 'Albany']
var pops = ['59920', '652500', '176650', '56470']

function cities(array1, array2){
	//define two arrays for cities and population
	

	//create a table element
	var table = document.createElement("table");

	//create a header row element and append it to the table
	var headerRow = document.createElement("tr");
	table.appendChild(headerRow);

	//create the "City" and "Population" column headers
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	
	//loop to add a new row for each city
	i = 0;

	while(i < array1.length){
		var rowHtml = "<tr><td>" + array1[i] + "</td><td>" + array2[i] + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend',rowHtml);
		i++;

	}
    
	
	//append the table element to the div
	document.querySelector("#mydiv").appendChild(table);


    //addEvents();

};
cities(citiesList, pops);

//call the initialize function when the document has loaded
document.addEventListener('DOMContentLoaded',initialize);






fetch('data/airports.geojson')
.then(response => response.json())
.then(data => {

	console.log(data);
})
.catch(error => console.error('Error!! agh!: ', error));


//Question 6 - How many states are there?
// Ok, this seems silly, but we're actually going to work with AJAX to get some data and process it
// You need to load a geojson file, convert it to json, and then count up the number of entires it has...
// In other words, print out to the console log the number of airports in the data set
// You'll want to use chapter 3 of the roth textbook and our Monday lecture here.
// +2 bonus points if you tell me first how many total airports there are and then how many civilian 
// feel free to explore the data in QGIS (or arc). If you know how to answer the question in QGIS, how do you transfer it to javascript?

function jsAjax(){
    //Step 1: Create the data request
    // You may not have your data stored in a data sub-directory, just update this appropriately
    var request = new Request('data/airports.geojson');
	fetch(request)
	.then(response => response.json())
	//.then(count => Object.keys(count).length)
	.then(data => {
		const num = data.features.length;
		const num_civ = (data.features.filter( feature => feature.properties.type == "mid" || feature.properties.type == "major" || feature.properties.type == "small")).length
		//const num_civ = (data.features.filter( feature => feature.properties.type == "spaceport")).length

		console.log("total # of airports: " + num);
		const textBox8 = document.getElementById("ans10");
		textBox8.value = "total # of airports: " + num;
		console.log("civ airports #: " + num_civ)
		const textBox9 = document.getElementById("ans11");
		textBox9.value = "civ airports #: " + num_civ;

	})
    
    //Step 3: use Fetch to retrieve the data and set up callback functions

};
jsAjax();

//Step 4: define your callback functions
// You'll need to process the data in some way. First, from geojson to json... then to find the answer.
// Loops are helpful here.


//Step 5: send the final answer to the console.log()
