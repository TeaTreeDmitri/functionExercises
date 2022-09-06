const oldString = "Gareth David Davies";


splitString()

function splitString() {
    firstName = oldString.substring([0], oldString.firstIndexOf(" "));
    middleName = oldString.substring(oldString.firstIndexOf(" "), oldString.lastIndexOf(" "));
    lastName = oldString.substring(oldString.lastIndexOf(" "), );
    console.log(firstName, middleName, lastName);
}