let form = document.querySelector("form");

let fullName = document.getElementById("full_name");
const email = document.getElementById("email");
const hiredDate = document.getElementById("hired-date");
const employeeId = document.getElementById("employee-id");
const phoneNumber = document.getElementById("phone-number");
const jobLocation = document.getElementById("job-location");
const employmentType = document.getElementById("employment-type");
const jobTitle = document.getElementById("job-title");
const departmentTeam = document.getElementById("department-team");
const salaryCompensation = document.getElementById("salary-compensation");

let uploadCV = document.getElementById("upload-cv");

const uploadCVInput = document.getElementById("upload-cv-input");

const linkedinUrl = document.getElementById("linkedin-link");
const supervisorManager = document.getElementById("supervisor-manager");

// email REGEX
const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validEmail(input) {
  if (!input.value.match(emailValidation)) input.classList.add("error-field");
}

// Clear Email field
function clearEmailInput() {
  email.value = "";
}

// check validation when form field updates
form.addEventListener("input", function (event) {
  // The form field that triggered the event
  let field = event.target;
  if (field.value !== "") {
    field.classList.remove("error-field");
    uploadCV.classList.remove("error-field");
  } else {
    field.classList.add("error-field");
  }
  return false;
});

// Form validation when submit data
function validateForm() {
  try {
    if (!fullName.value || fullName.value == "") {
      fullName.classList.add("error-field");
    }
    if (!email.value.match(emailValidation)) {
      email.classList.add("error-field");
    }
    if (!hiredDate.value || hiredDate.value == "") {
      hiredDate.classList.add("error-field");
    }
    if (!employeeId.value || employeeId.value == "") {
      employeeId.classList.add("error-field");
    }
    if (!phoneNumber.value || phoneNumber.value == "") {
      phoneNumber.classList.add("error-field");
    }
    if (!jobLocation.value || jobLocation.value == "") {
      jobLocation.classList.add("error-field");
    }
    if (!employmentType.value || employmentType.value == "") {
      employmentType.classList.add("error-field");
    }
    if (!jobTitle.value || jobTitle.value == "") {
      jobTitle.classList.add("error-field");
    }
    if (!departmentTeam.value || departmentTeam.value == "") {
      departmentTeam.classList.add("error-field");
    }
    if (!salaryCompensation.value || salaryCompensation.value == "") {
      salaryCompensation.classList.add("error-field");
    }

    if (!uploadCVInput.value || uploadCVInput.value == "") {
      uploadCV.classList.add("error-field");
    }

    if (!linkedinUrl.value || linkedinUrl.value == "") {
      linkedinUrl.classList.add("error-field");
    }
    if (!supervisorManager.value || supervisorManager.value == "") {
      supervisorManager.classList.add("error-field");
    }
    if (
      fullName.value &&
      email.value &&
      hiredDate.value &&
      employeeId.value &&
      phoneNumber.value &&
      jobLocation.value &&
      employmentType.value &&
      jobTitle.value &&
      departmentTeam.value &&
      salaryCompensation.value &&
      uploadCVInput.value &&
      linkedinUrl.value &&
      supervisorManager.value
    ) {
      console.log("success Submit");
    }
    return false;
  } catch (error) {
    console.log("error", error);
    return false;
  }
}

function getUploadCV(myFile) {
  const resumeUploadedFile = document.getElementById("upload-cv_uploaded_file");
  var file = myFile.files[0];
  var filename = file.name;
  resumeUploadedFile.innerHTML = filename;
}
