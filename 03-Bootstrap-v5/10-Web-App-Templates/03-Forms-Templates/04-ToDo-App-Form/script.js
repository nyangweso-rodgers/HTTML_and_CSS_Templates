// ToDo App Form Validation

const contactForm = document.getElementById("contactForm");

const formValidation = (event) => {
  event.preventDefault(); // Prevents the default form submission
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim()=== "" || email.trim() === "" || message.trim() === "") {
    alert("All the fields must be filled out!");
    return;
  } else if (!email.includes("@")) {
    alert("Please enter a valid email address");
  }

  // If all fields are filled, you can proceed with form submission or other actions
  console.log("Form submitted successfully!");
  // Additional actions or form submission code can go here
};

contactForm.addEventListener("submit", formValidation);
