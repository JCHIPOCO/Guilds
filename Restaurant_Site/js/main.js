/* 
    Validation function for phone numbers
*/

//global variable, # of non-number chars, exclude "-" or " "
var errSum = 0;

function validate() {
    // Fetch phone number entry.
    var phoneVar = document.forms["contactUs"]["inputPhone"].value;
    // Turn the string in to a character array.
    var charArr = phoneVar.split("");
    // Iterate through character array, check for non-number chars.
    charArr.forEach(checkForInvalidChars);
    // Throw an alert if invalid characters were detected in the iteration.
    if(errSum > 0){
        alert("Invalid phone number. Please adhere to USA convention.");
        errSum = 0;
    }
    // If array passes, check for length, filter " " and "-"
    else if(charArr.filter(isNum).length != 10){
        alert("Invalid phone number. Please provide 10 digits.");
    }
}

function isNum(val){
    return !(isNaN(val)) && val != " ";
}

function checkForInvalidChars(val){
    if(isNaN(val) && val != "-"){
        errSum++;
    }
}
