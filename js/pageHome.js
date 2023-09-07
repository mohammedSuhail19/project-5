// code input date jquery
document.addEventListener("DOMContentLoaded", function (e) {
  $('[name="date"]')
    .datepicker({
      format: "dd/mm/yyyy",
    })
    .on("changeDate", function (e) {
      // do somwthing here
    });
});
document.body.style.overflow = "hidden";
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  document.body.style.overflow = "visible";

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
