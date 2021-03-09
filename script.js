$(document).ready(function () {
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
  $("#Resume").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#resume").offset().top,
      },
      "slow"
    );
  });

  $.getJSON("public/assets/data/skill_data.json", function (data) {
    var skill_array = data.skill_array;
    skill_array.sort(function (a, b) {
      let x = a.progress.toLowerCase(),
        y = b.progress.toLowerCase();
      if (x < y) {
        return 1;
      }
      if (y < x) {
        return -1;
      }
      return 0;
    });
    for (var i = 0; i < skill_array.length; i++) {
      var container = $("<div>");
      var div = $("<div>").attr("class", "progress");
      var p = $("<p>").text(skill_array[i].name);
      div.append(
        `<div class="progress-bar" role="progressbar" style="width: ${skill_array[i].progress}%;" aria-valuemin="0" aria-valuemax="100">${skill_array[i].progress}%</div>`
      );
      container.append(p, div);
      $("#technical_skill").append(container);
    }
  });
});
