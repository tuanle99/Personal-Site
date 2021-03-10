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

$(document).ready(function () {
  get_project_data();
});
