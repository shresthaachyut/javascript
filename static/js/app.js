// from data.js load the data into a variable
var tableData = data;

// Select the table
var filterButton = d3.select("#filter-btn");

/*------------------------------------------------
-------------------------------------------------*/
filterButton.on("click",function(){
var inputDate = d3.select("#datetime");
var inputDateValue = inputDate.property("value");

var inputCountry = d3.select("#countryDropdown");
var inputCountryValue = inputCountry.property("value");

var inputState = d3.select("#stateDropdown");
var inputStateValue = inputState.property("value");

var inputCity = d3.select("#cityDropdown");
var inputCityValue = inputCity.property("value");

var inputShape = d3.select("#shapeDropdown");
var inputShapeValue = inputShape.property("value");


// Select tbody section and clear it
var tbody = d3.select("tbody");
tbody.html("");

// Just to view in console not really required
console.log(inputDateValue);
console.log(tableData);

var filteredDateData = tableData;



if(inputCountryValue !=='All'){
    
    filteredDateData = filteredDateData.filter(info => info.country===inputCountryValue);
}

if(inputStateValue !=='All'){
    
    filteredDateData = filteredDateData.filter(info =>info.state===inputStateValue);
}

if(inputCityValue !=='All'){
    
    filteredDateData = filteredDateData.filter(info =>info.city===inputCityValue);
}

if(inputShapeValue !=='All'){
    
    filteredDateData = filteredDateData.filter(info =>info.shape===inputShapeValue);
}

  
    filteredDateData = filteredDateData.filter(info =>info.datetime===inputDateValue);


filteredDateData.forEach(function(ufoSightings) {
  console.log(`this is: ${ufoSightings}`);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
  console.log(key, value);
  var cell = row.append("td");
  cell.text(value); 
  });
});
  
});
/*-----------------------------------------------
-------------------------------------------------*/
