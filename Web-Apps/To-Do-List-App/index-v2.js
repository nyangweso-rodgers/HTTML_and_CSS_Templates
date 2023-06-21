
// JS - V2

// Object to store the select option and user input values
let inputValues = {};

// Get the select element, input field, button and list
let select = document.querySelector('#mySelect');
let input = document.querySelector('#myInput');
let button = document.querySelector('#myButton');
let list = document.querySelector('#myList');

// Add Event Listener to the Button element
button.addEventListener('click', function () {

    // Get the selected option value and text
    let selectedValue = select.value;
    //console.log(selectedValue); //TODO: Run to check: Expected Output: 
    let selectedText = select.options[select.selectedIndex].text;
    console.log(selectedText); //TODO: Run to check: 

    // Get the User Input Text
    let userInput = input.value;
    //console.log(userInput); //Todo:

    // Check if the select option already has a <ul> element in the list
    let optionList = list.querySelector('[data-value="' + selectedValue + '"]');
    // console.log(optionList); //TODO: Run to check

    if (optionList) {
        // if yes, create a new <li> element and append it using the existing <ul> element
        let listItem = document.createElement('li');
        listItem.textContent = userInput;
        optionList.appendChild(listItem);
    }

    else {
        // if no, create a new <ul> and <li> elements
        let ul = document.createElement('ul');
        ul.setAttribute('data-value',selectedValue);

        let listItem = document.createElement('li');
        listItem.textContent = selectedText;

        let inputListItem = document.createElement('li');
        inputListItem.textContent = userInput;

        // Append the <li> element to the <ul> element
        ul.appendChild(listItem);
        ul.appendChild(inputListItem);

        // Append the <ul> to the main list
        list.appendChild(ul);
    }

    // clear the selected value and input text
    select.value = '';
    input.value = '';
});