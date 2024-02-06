// form validation

// get document elements
const modalFormToAddTasks = document.getElementById("modalFormToAddTasks");
const modalTitleInput = document.getElementById("modalTitleInput");
const modalDueDateInput = document.getElementById("modalDueDateInput");
const modalDescriptionInput = document.getElementById("modalDescriptionInput");

// get elements for displaying error messages
const titleErrorElement = document.getElementById("titleErrorElement");
const dueDateErrorElement = document.getElementById("dueDateErrorElement");
const descriptionErrorElement = document.getElementById(
  "descriptionErrorElement"
);

// validate task title
const validateModalTitleInput = (titleInput) => {
  if (titleInput.trim() === "") {
    //alert("Title Input is blank!"); //TODO: uncomment to for an alert box to dipaly error message
    titleErrorElement.innerHTML = "Title cannot be blank!";
    return false;
  } else if (titleInput.length > 20) {
    titleErrorElement.innerHTML = "Title Input is too long!";
    return false;
  }
  // Clear any previous error message
  titleErrorElement.innerHTML = "";
  return true;
};

// validate due date
const validateModalDueDateInput = (dueDateInput) => {
  try {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const dueDateObj = new Date(dueDateInput);
    dueDateObj.setHours(0, 0, 0, 0);
    if (dueDateObj < currentDate) {
      dueDateErrorElement.innerHTML = "Date cannot be in the past!";
      return false;
    }
    // Clear any previous error message
    dueDateErrorElement.innerHTML = "";
    return true;
  } catch (error) {
    dueDateErrorElement.innerHTML = "Invalid due date!";
    return false;
  }
};

// validate description
const validateModalDescriptionInput = (descriptionInput) => {
  if (descriptionInput.trim() == "") {
    descriptionErrorElement.innerHTML = "Description Input is blank!";
    return false;
  } else if (descriptionInput.length > 99) {
    descriptionErrorElement.innerHTML =
      "Description must be less than 100 characters!";
    return false;
  }
  // clear any previous description error message
  descriptionErrorElement.innerHTML = "";
  return true;
};

const modalFormValidation = (event) => {
  event.preventDefault(); // prevent default form submission
  const modalTitleInputIsValid = validateModalTitleInput(modalTitleInput.value);
  const modalDueDateInputIsValid = validateModalDueDateInput(
    modalDueDateInput.value
  );
  const modalDescriptionInputIsValid = validateModalDescriptionInput(
    modalDescriptionInput.value
  );

  if (
    modalTitleInputIsValid &&
    modalDueDateInputIsValid &&
    modalDescriptionInputIsValid
  ) {
    console.log("Form submitted successfully!");
  }
};

modalFormToAddTasks.addEventListener("submit", modalFormValidation);