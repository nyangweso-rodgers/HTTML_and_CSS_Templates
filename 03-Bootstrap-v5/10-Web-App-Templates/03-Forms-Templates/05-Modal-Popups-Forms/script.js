// form validation

// get document elements
const modalFormToAddTasks = document.getElementById("modalFormToAddTasks");
const modalTitleInput = document.getElementById("modalTitleInput");
const modalDueDateInput = document.getElementById("modalDueDateInput");
const modalDescriptionInput = document.getElementById("modalDescriptionInput");

const formValidation = (event) => {
  event.preventDefault(); // prevent default form submission

  // get values from the elements
  let titleInputValue = modalTitleInput.value;
  let dueDateInputValue = modalDueDateInput.value;
  let descriptionInputValue = modalDescriptionInput.value;

  // initialize submitModalForm flag
  let submitModalForm = true;

  // Clear previous error messages
  //document.getElementById("titleError").textContent = "";
  //document.getElementById("dueDateError").textContent = "";
  //document.getElementById("descriptionError").textContent = "";

  // validate task title
  if (titleInputValue.trim() === "") {
    //alert("Title Input is blank!"); //TODO: uncomment to for an alert box to dipaly error message
    document.getElementById("titleError").innerHTML =
      "Title cannot be blank!";
    submitModalForm = false;
  } else if (titleInputValue.length > 20) {
    alert("Title Input is too long!");
    submitModalForm = false;
  }
  // valodate due date
  try {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for both dates
    const dueDate = new Date(dueDateInputValue);
    dueDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for both dates
    if (dueDate < currentDate) {
      alert("Date cannot be in the past!");
      submitModalForm = false;
    }
  } catch (error) {
    ("Invalid due date!");
    submitModalForm = false;
  }

  // validate description
  if (descriptionInputValue.trim() == "") {
    alert("Description Input is blank!");
    submitModalForm = false;
  } else if (descriptionInputValue.length > 99) {
    alert("Description must be less than 100 characters!");
    submitModalForm = false;
  }

  // If all fields are filled, you can proceed with form submission or other actions
  if (submitModalForm) {
    console.log("Form submitted successfully!");
  }
};

modalFormToAddTasks.addEventListener("submit", formValidation);
