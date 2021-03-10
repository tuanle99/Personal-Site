function get_experiences_data() {
  $.getJSON("public/assets/data/experience_list_data.json", function (data) {
    data = data.experience_list;
    var container = $("<div>").attr("class", "container-fluid");

    for (var i = 0; i < data.length; i++) {
      var row = $("<div>").attr("class", "row-fluid");
      row.attr("style", "padding: 20px 0px 20px 0px");
      var col1 = $("<div>").attr("class", "resume_left");
      var col2 = $("<div>").attr("class", "resume_right");

      var title = $("<h4>").text(data[i].title);
      var date = $("<p>").text(data[i].date);
      var description = $("<p>").text(data[i].description);
      var skill = data[i].skill;

      row.append(col1, col2);
      col1.append(title, date);
      col2.append(description);

      container.append(row);
    }
    $("#experiences").append(container);
  });
}

function get_project_data() {
  $.getJSON("public/assets/data/project_data.json", function (data) {
    project_data = data.project;
    project_data.forEach((e) => {
      var div = $("<div>").attr("class", "card project_card");
      div.attr("style", "width: 18rem");
      var img = $("<img>").attr("class", "card-img-top");
      img.attr("src", `${e.image}`);
      img.attr("alt", `${e.description}`);
      var inner_div = $("<div>").attr("class", "card-body");
      var a = $("<a>").attr("href", `${e.link}`);
      a.attr("target", "_blank");
      var button = $("<button>").attr("type", "button");
      button.attr("class", "btn background_primary text_primary");
      button.text(e.title);

      a.append(button);
      inner_div.append(a);
      div.append(img, inner_div);
      $("#project_js").append(div);
    });
  });
}

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

  get_project_data();
  get_experiences_data();

  init();
});
