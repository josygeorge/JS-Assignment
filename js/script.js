function userForm() {

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let province = document.getElementById('province').value;
    let membershipSelected;

    if (firstName != '' &&
        lastName != '' &&
        email != '' &&
        address != '' &&
        city != '' &&
        province != ''
    ) {
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

        // Reset click event
        document.getElementById('resetBtn').addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('user-info-result').innerHTML = '';
            document.getElementById('membership-form').reset();

        });
    }
    else {
        alert('All fields are required!')
    }
}

/*****************************************************************
 *                  EXCEL FUNCTIONS
 *****************************************************************/

// Our pure JS code
function myExcelFuns() {
    let numberStr = document.getElementById("numbers").value;
    console.log(numberStr);
    if (numberStr.length == 0) {
        alert("Please input your numbers with spaces!");
        return;
    }
    // checking for whether input as numbers
    //else if (numberStr.match(/[0-9 ]+/g)) {
    else if (numberStr.match(/^[0-9 ]+$/g)) {
        numberStr = numberStr.trim();
        let numberArr = numberStr.split(" ");

        /*Converting str arr to numeric array*/
        let finalNumericArray = [];
        for (let j = 0; j < numberArr.length; j++) {
            finalNumericArray.push(parseFloat(numberArr[j]));
        }

        let result;
        /* Autosum */
        if (document.getElementById("autosum").checked) {
            result = 0;
            for (let i = 0; i < finalNumericArray.length; i++) {
                result += finalNumericArray[i];
            }
        }
        /* Average */
        else if (document.getElementById("average").checked) {

            //find the total sum
            let sum = 0;
            for (let i = 0; i < finalNumericArray.length; i++) {
                sum += finalNumericArray[i];
            }
            // find the average
            result = (sum / finalNumericArray.length).toFixed(2);
        }
        /* Max */
        else if (document.getElementById("max").checked) {
            result = Math.max(...finalNumericArray);
        }
        /* Min */
        else if (document.getElementById("min").checked) {
            /*Method 1 */
            //Sort numbers in an array in ascending order
            finalNumericArray.sort(function (a, b) { return a - b });
            // Print the first element with 0th index for the lowest number
            result = finalNumericArray[0];

            /* OR Method 2 - using Math function and spread operator */
            //result = Math.min(...userNumberArray);
        }
        document.getElementById("calc-result").style.display = 'block';
        finalOutput = `<p class="finalCalcOutput">The result is: ${result}</p>`;
        document.getElementById("calc-result").innerHTML = finalOutput;
    }
    else { // else if nothing is typed
        alert("Please check whether the input has numbers with spaces!");
    }

}
function clearFunc() {
    document.getElementById('numbers').innerHTML = '';
    document.getElementById("calc-result").style.display = 'none';
    document.getElementById("autosum").checked;
}