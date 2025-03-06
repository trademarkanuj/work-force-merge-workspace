let form = document.querySelector("form");

let departmentName = document.getElementById("name-department");

// check validation when form field updates
form.addEventListener("input", function (event) {
  try {
    // The form field that triggered the event
    let field = event.target;
    if (field.value !== "") {
      field.classList.remove("error-field");
    } else {
      field.classList.add("error-field");
    }
    return false;
  } catch (error) {
    console.log("error", error);
    return false;
  }
});

// Form validation when submit data
function validateForm() {
  try {
    if (!departmentName.value || departmentName.value == "") {
      departmentName.classList.add("error-field");
    }
    if (departmentName.value) {
      console.log("success Submit");
    }
    return false;
  } catch (error) {
    console.log("error", error);
    return false;
  }
}
