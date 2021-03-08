$("#Home").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#home").offset().top,
    },
    "slow"
  );
});
$("#About").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#about").offset().top,
    },
    "slow"
  );
});
