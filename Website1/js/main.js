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


    addEvents();

};
cities(citiesList, pops);

//call the initialize function when the document has loaded
document.addEventListener('DOMContentLoaded',initialize)