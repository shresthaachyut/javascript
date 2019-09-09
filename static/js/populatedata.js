var cityList = [];
var stateList = [];
var countryList = [];
var shapeList = [];

console.log(`countryArrayEarlier: ${countryList}`);
data.forEach((cityData) => {
    //console.log(cityData);
  
    // Get the entries for each object in the array
    Object.entries(cityData).forEach(([key, value]) => {
        
        if(key === "city")
        {
            if(!(cityList.includes(value))){
                cityList.push(value);
            }
        }
        else if(key === 'state')
        {
            if(!(stateList.includes(value))){
                stateList.push(value);
            }
        }
        else if(key === 'country')
        {
            
            if(!(countryList.includes(value))){
                countryList.push(value);
            }
                    }
        else if(key === 'shape')
        {
            if(!(shapeList.includes(value))){
                shapeList.push(value);
            }
        }

    });
  });
  
console.log(cityList);
console.log(countryList);
console.log(stateList);
console.log(shapeList);

addOption = function(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);  
}

var dropdown = document.getElementById("countryDropdown");
if (dropdown) {
    for (var i=0; i < countryList.length;++i){    
        addOption(dropdown, countryList[i], countryList[i]);
    }
}

var dropdown = document.getElementById("stateDropdown");
if (dropdown) {
    for (var i=0; i < stateList.length;++i){    
        addOption(dropdown, stateList[i], stateList[i]);
    }
}

var dropdown = document.getElementById("cityDropdown");
if (dropdown) {
    for (var i=0; i < cityList.length;++i){    
        addOption(dropdown, cityList[i], cityList[i]);
    }
}

var dropdown = document.getElementById("shapeDropdown");
if (dropdown) {
    for (var i=0; i < shapeList.length;++i){    
        addOption(dropdown, shapeList[i], shapeList[i]);
    }
}






