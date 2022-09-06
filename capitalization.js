//make capitalize function
"use strict"


function capitalize(str) { 
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.substring(1);
    return str
}


console.log(capitalize("HeNrY"))

