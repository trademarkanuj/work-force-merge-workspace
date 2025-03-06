let dragAbleListBox = document.getElementsByClassName("drag_able_items");
let dragAbleList = document.getElementsByClassName("draggable");
let dropAbleList = document.getElementById("drop_able_items");

let selected = "";
function drag(event) {
  selected = event.target;
  console.log("se", selected);
}
function drop(ev) {
  let newField = selected.id;
  switch (newField) {
    case "key-responsibilities":
      dropAbleList.insertAdjacentHTML("afterbegin", keyResponsibilities);
      break;
    case "application-deadline":
      dropAbleList.insertAdjacentHTML("afterbegin", applicationDeadline);
      break;
    case "job-description":
      dropAbleList.insertAdjacentHTML("afterbegin", jobDescription);
      break;
    case "job-overview":
      dropAbleList.insertAdjacentHTML("afterbegin", jobOverview);
      break;
    case "job-location":
      dropAbleList.insertAdjacentHTML("afterbegin", jobLocation);
      break;
    case "salary-range":
      dropAbleList.insertAdjacentHTML("afterbegin", salaryRange);
      break;
    case "qualifications":
      dropAbleList.insertAdjacentHTML("afterbegin", qualifications);
      break;
    case "why-join-us":
      dropAbleList.insertAdjacentHTML("afterbegin", whyJoinUs);
      break;
    default:
      dropAbleList.insertAdjacentHTML("afterbegin", keyResponsibilities);
  }
  ev.preventDefault();
}
function allowDrop(ev) {
  ev.preventDefault();
}
//  Key responsibilities
const keyResponsibilities = `<div class="py-3 px-4 bc-gray-100 rounded-md mb-2.5 job_posting_fields"><div class="flex items-center justify-between"><div><img src="../src/assets/select-gray.svg" alt="select"></div><div class="shadow bg-white py-2 px-3 gray-500 font-medium rounded-full flex items-center cursor-pointer remove_job_posting_field">Remove<img src="../src/assets/x-lg.svg" class="ml-2" alt="x-lg"></div></div><div class="mt-2.5"><div class="form-group border-0 md:mb-0 mb-3 md:w-2/3"><label for="job-location" class="mb-2.5 gray-800 font-semibold text-sm block">Key responsibilities</label><div><select id="job-category" class="form-control bg-white px-4 py-3.5 rounded-md border w-full"><option value="" selected="">eg. Key responsibilities</option><option value="Key responsibilities">Key responsibilities</option></select></div></div></div></div>`;

//  Key applicationDeadline
const applicationDeadline = `<div class="py-3 px-4 bc-gray-100 rounded-md mb-2.5 job_posting_fields"><div class="flex items-center justify-between"><div><img src="../src/assets/select-gray.svg" alt="select" /></div><div class="shadow bg-white py-2 px-3 gray-500 font-medium rounded-full flex items-center cursor-pointer remove_job_posting_field">Remove<img src="../src/assets/x-lg.svg"class="ml-2"alt="x-lg"/></div></div><div class="mt-2.5"><div class="form-group border-0 md:mb-0 mb-3 md:w-2/3"><label for="application-deadline"class="mb-2.5 gray-800 font-semibold text-sm block">Application Deadline</label><div><input type="date" class="form-control bg-white px-4 py-3.5 rounded-md border w-full" id="application-deadline" autocomplete="off" placeholder="eg. Frontend Developer"/></div></div></div></div>`;

//  Key jobDescription
const jobDescription = `<div class="py-3 px-4 bc-gray-100 rounded-md mb-2.5 job_posting_fields"><div class="flex items-center justify-between"><div><img src="../src/assets/select-gray.svg" alt="select" /></div><div class="shadow bg-white py-2 px-3 gray-500 font-medium rounded-full flex items-center cursor-pointer remove_job_posting_field">Remove<img src="../src/assets/x-lg.svg" class="ml-2" alt="x-lg"/></div></div><div class="mt-2.5"><div class="form-group border-0 md:mb-0 mb-3 md:w-2/3"><label for="job-description" class="mb-2.5 gray-800 font-semibold text-sm block">Job Description</label><div><textarea id="job-description" class="form-control bg-white px-4 py-3.5 rounded-md border w-full"></textarea></div></div></div></div>`;

//  Key jobOverview
const jobOverview = `<div class="py-3 px-4 bc-gray-100 rounded-md mb-2.5 job_posting_fields"><div class="flex items-center justify-between"><div><img src="../src/assets/select-gray.svg" alt="select" /></div><div class="shadow bg-white py-2 px-3 gray-500 font-medium rounded-full flex items-center cursor-pointer remove_job_posting_field">Remove<img src="../src/assets/x-lg.svg" class="ml-2" alt="x-lg"/></div></div><div class="mt-2.5"><div class="form-group border-0 md:mb-0 mb-3 md:w-2/3"><label for="job-overview" class="mb-2.5 gray-800 font-semibold text-sm block">Job Overview</label><div><textarea id="job-overview" class="form-control bg-white px-4 py-3.5 rounded-md border w-full"></textarea></div></div></div></div>`;

//  Key jobLocation
const jobLocation = `<div class="py-3 px-4 bc-gray-100 rounded-md mb-2.5 job_posting_fields"><div class="flex items-center justify-between"><div><img src="../src/assets/select-gray.svg" alt="select" /></div><div class="shadow bg-white py-2 px-3 gray-500 font-medium rounded-full flex items-center cursor-pointer remove_job_posting_field">Remove<img src="../src/assets/x-lg.svg" class="ml-2"alt="x-lg"/></div></div><div class="mt-2.5"><div class="form-group border-0 md:mb-0 mb-3 md:w-2/3"><label for="job-location" class="mb-2.5 gray-800 font-semibold text-sm block" >Job Location</label><div><select id="job-category" class="form-control bg-white px-4 py-3.5 rounded-md border w-full"><option value="" selected="">eg. Job Location</option><option value="Job Location">Job Location</option></select></div></div></div></div>`;

//  Key salaryRange
const salaryRange = `<div class="py-3 px-4 bc-gray-100 rounded-md mb-2.5 job_posting_fields"><div class="flex items-center justify-between"><div><img src="../src/assets/select-gray.svg" alt="select" /></div><div class="shadow bg-white py-2 px-3 gray-500 font-medium rounded-full flex items-center cursor-pointer remove_job_posting_field">Remove<img src="../src/assets/x-lg.svg" class="ml-2" alt="x-lg" /></div></div><div class="mt-2.5"><div class="form-group border-0 md:mb-0 mb-3 md:w-2/3"><label for="salary-range" class="mb-2.5 gray-800 font-semibold text-sm block">Salary Range</label><div class="md:flex items-center"><select id="select-country" class="form-control bg-white px-2 py-3.5 rounded-md border max-w-60 md:mr-2 md:mb-0 mb-2 md:w-auto w-full"><option value="" selected="">Select Country</option><option value="Australia">Australia</option><option value="USA">USA</option></select><select id="salary-range" class="form-control bg-white px-4 py-3.5 rounded-md border w-full"><option value="" selected="">eg. $1k to $5k</option><option value="$1k to $5k">$1k to $5k</option></select></div></div></div></div>`;

//  Key qualifications
const qualifications = `<div class="py-3 px-4 bc-gray-100 rounded-md mb-2.5 job_posting_fields"><div class="flex items-center justify-between"><div><img src="../src/assets/select-gray.svg" alt="select" /></div><div class="shadow bg-white py-2 px-3 gray-500 font-medium rounded-full flex items-center cursor-pointer remove_job_posting_field">Remove<img src="../src/assets/x-lg.svg" class="ml-2" alt="x-lg"/></div></div><div class="mt-2.5"><div class="form-group border-0 md:mb-0 mb-3 md:w-2/3"><label for="qualifications" class="mb-2.5 gray-800 font-semibold text-sm block">Qualifications</label><div><textarea id="qualifications" class="form-control bg-white px-4 py-3.5 rounded-md border w-full"></textarea></div></div></div></div>`;


//  Why Join Us
const whyJoinUs = `<div class="py-3 px-4 bc-gray-100 rounded-md mb-2.5 job_posting_fields"><div class="flex items-center justify-between"><div><img src="../src/assets/select-gray.svg" alt="select" /></div><div class="shadow bg-white py-2 px-3 gray-500 font-medium rounded-full flex items-center cursor-pointer remove_job_posting_field">Remove<img src="../src/assets/x-lg.svg" class="ml-2" alt="x-lg"/></div></div><div class="mt-2.5"><div class="form-group border-0 md:mb-0 mb-3 md:w-2/3"><label for="why-join-us" class="mb-2.5 gray-800 font-semibold text-sm block">Why join us</label><div><textarea id="why-join-us" class="form-control bg-white px-4 py-3.5 rounded-md border w-full"></textarea></div></div></div></div>`;
