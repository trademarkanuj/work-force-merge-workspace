$(document).ready(function () {
  var $menuToggle = $("#sidebar_toggle");
  $menuToggle.on("click", function () {
    $(".left_sidebar").toggleClass("show");
  });

  var $switchTabsBtn = $(".switch_tabs");
  $switchTabsBtn.on("click", function () {
    var tabName = $(this).attr("name");
    $(".switch_tabs_content").hide();
    $($switchTabsBtn).removeClass("active");
    $("#" + tabName).slideDown();
    $(this).addClass("active");
  });

  var $scheduleInterviewPopup = $(".schedule_interview_popup");
  $scheduleInterviewPopup.on("click", function () {
    $('#schedule_interview').show()
  });
  $('.hide_schedule_interview').click(function(){
    $('#schedule_interview').hide()
  })
});
