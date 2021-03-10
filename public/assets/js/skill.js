function render_skill_list() {
  $.getJSON("./public/assets/data/skill_data.json", (data) => {
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
    for (var i = 0; i < 7; i++) {
      var container = $("<div>");
      var div = $("<div>").attr("class", "progress");
      div.attr("style", "height: 5px;");
      var p = $("<p>").text(skill_array[i].name);
      div.append(
        `<div class="progress-bar" role="progressbar" style="width: ${skill_array[i].progress}%; background-color: gray;" aria-valuemin="0" aria-valuemax="100"></div>`
      );
      container.append(p, div);
      $("#technical_skill").append(container);
    }
  });
}

$(document).ready(function () {
  render_skill_list();
});
