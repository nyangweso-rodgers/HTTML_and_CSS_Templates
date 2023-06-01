

// initial variables
var pos = 0; test = 0, test_status = 0, question = 0, choice = 0, choices = 0, chA = 0, chB = 0, chC = 0, correct = 0;

// create a variable which is a multi-dimensional array
// it will hold all the question
var questions = [
    [ "What is 10 + 4?", "12", "14", "16", "B" ],
    [ "What is 20 - 9?", "7", "13", "11", "C" ],
    [ "What is 7 x 3?", "21", "24", "25", "A" ],
    [ "What is 8 / 2?", "10", "2", "4", "C" ]
];

function _(x) { // returns the object element with the id string
    return document.getElementById(x);
}

function renderQuestion() {
    test = _("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test-status").innerHTML = "Test Completed";
        pos = 0; // for restarting the test
        correct = 0; // for restarting the test
        return false; // prevents the renderQuestion function from rendering any further question
    }
    _("test-status").innerHTML = "Question " +(pos+1)+" of " +questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " +chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " +chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " +chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
         if (choices[i].checked) {
             choice = choices[i].value;
         }
    }
    if (choice == questions[pos][4]) {
        correct++;
    }

    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);