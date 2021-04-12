function userForm() {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let province = document.getElementById('province').value;
    let membershipSelected;
    /* Getting the radio elements array */
    let radioElements = document.getElementsByName('membership');
    /* Finding the checked value */
    for (let i = 0, length = radioElements.length; i < length; i++) {
        if (radioElements[i].checked) {
            membershipSelected = radioElements[i].value;
            break;
        }
    }
    /* DOM structure of the output/result */
    let resultHTML = `
        <table class="user-result">
            <tr><td>Full Name:</td><td> ${firstName} ${lastName} </td></tr>
            <tr><td>Email:</td><td> ${email} </td></tr>
            <tr><td>Address:</td><td> ${address}, ${city}, ${province} </td></tr>
            <tr><td>Membership:</td><td> ${membershipSelected}</td> </tr>
        </table>
    `;

    document.getElementById('user-info-result').innerHTML = resultHTML;

}

// Reset click event
document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('user-info-result').innerHTML = '';
    document.getElementById('membership-form').reset();

});

/*****************************************************************
 *                  EXCEL FUNCTIONS
 *****************************************************************/

// Our pure JS code
function findResult() {
    var userInputStr = document.getElementById("numbers").value;
    if (userInputStr) {
        console.log(userInputStr); // " 1 2 3 4 5 "
        userInputStr = userInputStr.trim();
        var userNumberArray = userInputStr.split(" ");

        console.log(userNumberArray);
        var result; // 
        if (document.getElementById("mul").checked) {
            result = 1;
            for (var i = 0; i < userNumberArray.length; i++) {
                result *= userNumberArray[i];
            }
            console.log(result);
        } else if (document.getElementById("div").checked) {

            result = userNumberArray[0];
            for (var i = 1; i < userNumberArray.length; i++) {
                result /= userNumberArray[i];
            }
            // for testing:
            console.log(result);
        } else {
            result = userNumberArray.length;
        }
        document.getElementById("result").innerText = result;
    }
    else { // else if nothing is typed
        alert("Please input your numbers with spaces!");
    }
}








/*  function myExcelFun() {

    // get user input data
    let numberStr = document.getElementById('user-number').value;
    console.log(numberStr);
    // regular expression for finding any characters excluding spaces and digits
    let regEx = /[^\d ]/g;

    // validate user input data for non-digit characters
    if (numberStr.length == 0 ) {
        // if empty input
        alert("Please enter your numbers separated by spaces");
    } else if ( numberStr.match(regEx) !== null) {
        //if input matches regEx
        alert("Please enter your numbers separated by spaces");
    } else if (numberStr.match(/[0-9]/g) === null) {
        //if input has no numbers
        alert("Please enter your numbers separated by spaces");
    } else {

        //Execute functions

        // convert string array 'numberStr ' into array of numbers
        let numberArr = numberStr.split(" ");

        //declare final array to use for the excel function
        let finalNumericArray = [];

        // build finalNumericArray with numeric data
        for (let i = 0; i < numberArr.length; i++) {

            if (numberArr[i] == "") {
                continue; // skip to next iteration
            } else {
                // convert string to float number
                finalNumericArray.push(parseFloat(numberArr[i]));
            }

        }

        let result;


        // Check and execute selected excel function
        if (document.getElementById("autosum").checked) {

            //find total sum
            let sum = 0;
            for (let i = 0; i < finalNumericArray.length; i++){
                sum += finalNumericArray[i];
            }
            // get results
            result = sum;
            //display the results
            document.getElementById('output').innerHTML = `
                <p class="result"> Your total is ${result}.</p>
            `;

        } else if (document.getElementById("average").checked) {

            //find total sum
            let sum = 0;
            for (let i = 0; i < finalNumericArray.length; i++) {
                sum += finalNumericArray[i];
            }

            // get the average
            result = sum / finalNumericArray.length;
            //display the results
            document.getElementById('output').innerHTML = `
                <p class="result"> Your average is ${result}.</p>
            `;

        } else if (document.getElementById("max").checked) {

            //Sort numbers in an array in descending order
            finalNumericArray.sort(function(a, b){return b-a});
            //console.log(finalNumericArray);

            //Get max number
            result = finalNumericArray[0];
            //display the results
            document.getElementById('output').innerHTML = `
                <p class="result"> The max value is ${result}.</p>
            `;

        } else if (document.getElementById("min").checked) {

            //Sort numbers in an array in ascending order
            // Code idea from w3schools
            // https://www.w3schools.com/jsref/jsref_sort.asp
            finalNumericArray.sort(function(a, b){return a-b});
            //console.log(finalNumericArray);

            //get lowest number
            result = finalNumericArray[0];
            //display the results
            document.getElementById('output').innerHTML = `
                <p class="result"> The lowest value is ${result}.</p>
            `;

        } else {
         alert("Please select an excel operation");
        }
    }

} */
