// const oldString = "Gareth David Davies";



// function splitString(fullName) {
//     let firstName = fullName.substring([0], fullName.indexOf(" "));
//     let middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" "));
//     let lastName = fullName.substring(fullName.lastIndexOf(" "), );
//     return `My first name is ${firstName} and my second name is${middleName} and my last name is${lastName}`;
// }

// console.log(splitString("Gareth David Davies"))

function fullName(lastName, firstName, middleName) {
    if (middleName) {
       // return `My first name is ${firstName} and my second name is ${middleName} and my last name is ${lastName}`;
       return {firstName, middleName, lastName};
    }
        //return `My first name is ${firstName} and my last name is ${lastName}`;
        return {firstName, lastName};
}
console.log(fullName("ingle","jeff", "superman"));