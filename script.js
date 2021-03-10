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

$(document).ready(function () {
  $("#nav-home").click(function () {
    navToDiv(this.id);
  });
  $("#nav-about").click(function () {
    navToDiv(this.id);
  });
  $("#nav-resume").click(function () {
    navToDiv(this.id);
  });
  $("#nav-project").click(function () {
    navToDiv(this.id);
  });
  $("#nav-contact").click(function () {
    navToDiv(this.id);
  });
});
