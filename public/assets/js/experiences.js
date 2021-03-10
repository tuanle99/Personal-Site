$(document).ready(function () {
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
});
