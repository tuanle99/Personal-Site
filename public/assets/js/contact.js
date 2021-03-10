$(document).ready(function () {
  $(".up_icon").click(function () {
    navToDiv("nav-home");
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
