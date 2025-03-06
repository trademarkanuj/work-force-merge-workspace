let form = document.querySelector("form");

let jobCategory = document.getElementById("job-category");
const jobLocation = document.getElementById("job-location");
const jobTitle = document.getElementById("job-title");
const applicationDeadline = document.getElementById("application-deadline");
const aboutCompany = document.getElementById("about-company");
const roleOverview = document.getElementById("role-overview");
const keyResponsibility = document.getElementById("key-responsibility");
const qualifications = document.getElementById("qualifications");
const joinUs = document.getElementById("join-us");

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
    if (!jobCategory.value || jobCategory.value == "") {
      jobCategory.classList.add("error-field");
    }
    if (!jobLocation.value || jobLocation.value == "") {
      jobLocation.classList.add("error-field");
    }
    if (!jobTitle.value || jobTitle.value == "") {
      jobTitle.classList.add("error-field");
    }
    if (!applicationDeadline.value || applicationDeadline.value == "") {
      applicationDeadline.classList.add("error-field");
    }
    if (!aboutCompany.value || aboutCompany.value == "") {
      aboutCompany.classList.add("error-field");
    }
    if (!roleOverview.value || roleOverview.value == "") {
      roleOverview.classList.add("error-field");
    }
    if (!keyResponsibility.value || keyResponsibility.value == "") {
      keyResponsibility.classList.add("error-field");
    }
    if (!qualifications.value || qualifications.value == "") {
      qualifications.classList.add("error-field");
    }
    if (!joinUs.value || joinUs.value == "") {
      joinUs.classList.add("error-field");
    }

    if (
      jobCategory.value &&
      jobLocation.value &&
      jobTitle.value &&
      applicationDeadline.value &&
      aboutCompany.value &&
      roleOverview.value &&
      keyResponsibility.value &&
      qualifications.value &&
      joinUs.value
    ) {
      console.log("success Submit");
    }
    return false;
  } catch (error) {
    console.log("error", error);
    return false;
  }
}
