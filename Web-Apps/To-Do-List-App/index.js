// get Elements using querySelector()

let select = document.querySelector('#mySelect');
let input = document.querySelector('#myInput');
let button = document.querySelector('#myButton');
let list = document.querySelector('#myList');


// add event listeners to the button
button.addEventListener('click', function () {

    // Get Selected option value and text
    let selectedValue = select.value;
    //console.log(selectedValue); //TODO:
    let selectedText = select.options[select.selectedIndex].text;
    //console.log(selectedText); //TODO:

    // Get user Input Text
    let userInput = input.value;
    // console.log(userInput); //TODO:

    // Create list item elements
    let listItem = document.createElement('li');
    let sublistItem = document.createElement('li');
    // console.log(listItem); //TODO:

    // Set the content for the list items
    listItem.textContent = selectedText;
    //console.log(listItem); //TODO:
    sublistItem.textContent = userInput;
    //console.log(sublistItem); //TODO:

    // Append the list items to the list
    list.appendChild(listItem);

    // create a sublist and append to the sublist item
    let subList = document.createElement('ul'); 
    subList.appendChild(sublistItem);

    // Append the sublist to the list item
    listItem.appendChild(subList);

    // clear the selected value and inout text
    select.value = '';
    input.value = '';

});