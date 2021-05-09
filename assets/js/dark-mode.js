$(document).ready(function () {
  $("#darkMode").on("change", function () {
    colorModePreview(this);
  });
});

function colorModePreview(ele) {
  if ($(ele).prop("checked") == true) {
    $("#mode-icon").removeClass("fa-sun");
    $("#mode-icon").addClass("fa-moon");
    $("body").addClass("dark");
    $(".header").addClass("dark");
    $(".sait-logo").addClass("dark");
    $(".accordion-button").addClass("dark");
    $(".skill-card").addClass("dark");
    $(".project-content").addClass("dark");
    $(".project-btn").addClass("dark");
    $(".footer-basic").addClass("dark");
  } else if ($(ele).prop("checked") == false) {
    $("#mode-icon").removeClass("fa-moon");
    $("#mode-icon").addClass("fa-sun");
    $("body").removeClass("dark");
    $(".header").removeClass("dark");
    $(".sait-logo").removeClass("dark");
    $(".accordion-button").removeClass("dark");
    $(".skill-card").removeClass("dark");
    $(".project-content").removeClass("dark");
    $(".project-btn").removeClass("dark");
    $(".footer-basic").removeClass("dark");
  }
}
