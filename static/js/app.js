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

switch(true){
case inputCountryValue === "All" && inputStateValue === "All" && inputCityValue === "All" && inputShapeValue === "All":
    var filteredDateData = tableData.filter(info =>info.datetime===inputDateValue);
    break;
case inputStateValue === "All" && inputCityValue === "All" && inputShapeValue === "All":
    var filteredDateData = tableData.filter(info =>info.datetime===inputDateValue && info.country===inputCountryValue);
    break;
case inputCityValue === "All" && inputShapeValue === "All":
    var filteredDateData = tableData.filter(info =>info.datetime===inputDateValue && info.country===inputCountryValue && info.state===inputStateValue);
    break;
case inputShapeValue === "All":
    var filteredDateData = tableData.filter(info =>info.datetime===inputDateValue && info.country===inputCountryValue && info.state===inputStateValue && info.city===inputCityValue);
    break;
default:
    var filteredDateData = tableData.filter(info =>info.datetime===inputDateValue && info.country===inputCountryValue && info.state===inputStateValue && info.city===inputCityValue && info.shape===inputShapeValue );
    break;
}

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
