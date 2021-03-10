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

function render_skill_list() {
  return new Promise((resolve, reject) => {
    $.getJSON("./public/assets/data/skill_data.json", (data) => {
      resolve(data);
    });
  });
}

async function init() {
  try {
    let data = await render_skill_list();
    let skill_array = data.skill_array;
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
  } catch (error) {
    console.log(error);
  }
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

  init();
});
