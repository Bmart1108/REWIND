

// pull the user entered string from the page
function getValues() {
    let userString = document.getElementById("revString").value;

    //call reverse a string
    let revString = reverseAString(userString);

    //Display the reverse string   
    displayData(revString);
}

// this is out generate data function
function reverseAString(userString) {

    let revString = "";

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];

    }

    return revString;
}

//display out reversed string to the page
function displayData(revString) {

    document.getElementById("msg").innerHTML = `Your String Reversed is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}