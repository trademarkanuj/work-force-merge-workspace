$(document).ready(function () {
  var $popupClickBtn = $(".popup-open");
  var $popBox = $("#popups");
  var $popupsCross = $(".hide_popup");

  $popupClickBtn.on("click", function () {
    $($popBox)[0].className = "";
    var id = $(this).attr("name");
    $($popBox).addClass(`show ${id}`);
    $(".popup-content").addClass("hidden");
    $("#" + id).removeClass("hidden");
  });

  $popupsCross.on("click", function () {
    $($popBox)[0].className = "";
    $($popBox).removeClass("show");
    $($popBox).addClass("hidden");
  });

  var $openDropDownBtn = $(".open-dropdown");
  var $closeDropDownBtn = $(".close-drop-down");
  $openDropDownBtn.on("click", function () {
    $(this).parent(".drop-down-popup").addClass("show_dorp_down");
    $(".popups-overlay").show();
  });
  $closeDropDownBtn.on("click", function () {
    $(".drop-down-popup").removeClass("show_dorp_down");
  });

  // SubPopup

  var $openSubPopupBtn = $(".open-sub-popup");
  var $subPopupsBox = $("#sub_popups");
  var $hideSubPopup = $(".hide_sub_popups");
  $openSubPopupBtn.on("click", function () {
    var id = $(this).attr("name");
    $($subPopupsBox).addClass(`show ${id}`);
    $($subPopupsBox).removeClass("hidden");
  });
  $hideSubPopup.on("click", function () {
    $($subPopupsBox).removeClass("show");
    $($subPopupsBox).addClass("hidden");
  });

  $(".alert_badge_closed").click(function () {
    $(".alert_badge").slideUp();
  });

  $(document).on("click", ".remove_job_posting_field", function () {
    $(this).closest(".job_posting_fields").slideUp();
  });
  // $(".remove_job_posting_field").on("click", function () {
  //   console.log($(this).parents(".job_posting_fields"));
  //   $(this).closest(".job_posting_fields").slideUp();
  // });
  $("#job_posting_add_option").click(function () {
    let contentParent = $("#jop_posting_option_field_content");
    let optionNumber = $(contentParent).children().length;
    // jop_posting_option_field_content
    let field = `<div class="form-group border-0 md:mb-0 mb-3 input_with_icon_right job_posting_fields"><label for="option-1" class="mb-2.5 gray-800 font-semibold text-sm block">Option ${
      optionNumber + 1
    }</label><div><input id="option-1" class="form-control bg-white px-4 py-3.5 rounded-md border w-full" placeholder="Option ${
      optionNumber + 1
    }"/><span class="input_icon gray-500 font-medium font-15 remove_job_posting_field">remove</span></div></div>`;

    $(contentParent).append(field);
    // $(this).parents(".job_posting_fields").slideUp();
  });
});
