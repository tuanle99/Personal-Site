$(document).ready(function () {
  $(".down_icon").click(function () {
    console.log("Success");
    navToDiv("nav-about");
  });
});

function navToDiv(id) {
  $(`#${id}`).attr("style", "color:#66fcf1");
  $(`.nav-link`)
    .not($(`#${id}`))
    .attr("style", "color:white");

  id = id.replace("nav-", "").toLowerCase();
  $("html,body").animate(
    {
      scrollTop: $(`#${id}`).offset().top,
    },
    "slow"
  );
}
