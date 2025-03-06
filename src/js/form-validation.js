let form = document.querySelector("form");
let submitForm = document.getElementById("apply-form");
let successfulSubmit = document.getElementById("successful_submit");

let fullName = document.getElementById("full_name");
const email = document.getElementById("email");
const verificationCodeInput = document.getElementById(
  "verification-code-input"
);
const verificationCode = document.getElementById("verification-code");

const phoneNumber = document.getElementById("phone-number");
let uploadResumeCV = document.getElementById("upload_resume_cv");

const uploadCVInput = document.getElementById("resume_cv");
const uploadCoverLetter = document.getElementById("cover-letter");
const linkedinUrl = document.getElementById("linkedin_url");
const githubUrl = document.getElementById("github_url");
const noticePeriod = document.getElementById("notice-period");

const currentRole = document.getElementById("current-role");
const newJob = document.getElementById("new-job");
const newPosition = document.getElementById("new-position");

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
    uploadResumeCV.classList.remove("error-field");
  } else {
    field.classList.add("error-field");
  }
  return false;
});

// Form validation when submit data
function validateForm() {
  if (!fullName.value || fullName.value == "") {
    fullName.classList.add("error-field");
  }
  if (!email.value.match(emailValidation)) {
    email.classList.add("error-field");
  }
  if (!phoneNumber.value || phoneNumber.value == "") {
    phoneNumber.classList.add("error-field");
  }
  if (!uploadCVInput.value || uploadCVInput.value == "") {
    uploadResumeCV.classList.add("error-field");
  }

  if (!linkedinUrl.value || linkedinUrl.value == "") {
    linkedinUrl.classList.add("error-field");
  }

  if (!noticePeriod.value || noticePeriod.value == "") {
    noticePeriod.classList.add("error-field");
  }
  if (!currentRole.value || currentRole.value == "") {
    currentRole.classList.add("error-field");
  }
  if (!newJob.value || newJob.value == "") {
    newJob.classList.add("error-field");
  }
  if (!newPosition.value || newPosition.value == "") {
    newPosition.classList.add("error-field");
  }

  if (
    fullName.value &&
    email.value &&
    phoneNumber.value &&
    uploadCVInput.value &&
    linkedinUrl.value &&
    noticePeriod &&
    currentRole &&
    newJob &&
    newPosition
  ) {
    verificationCodeInput.classList.remove("hidden");
    if (verificationCode.value) {
      submitForm.classList.add("hidden");
      successfulSubmit.classList.remove("hidden");
      successfulSubmit.classList.add("flex");
    }
  }
  return false;
}

function getResumeCV(myFile) {
  const resumeUploadedFile = document.getElementById("resume_uploaded_file");
  var file = myFile.files[0];
  var filename = file.name;
  resumeUploadedFile.innerHTML = filename;
}

function getCoverLetter(myFile) {
  const coverLetterUploadedFile = document.getElementById(
    "cover_letter_uploaded_file"
  );
  var file = myFile.files[0];
  var filename = file.name;
  coverLetterUploadedFile.innerHTML = filename;
}
