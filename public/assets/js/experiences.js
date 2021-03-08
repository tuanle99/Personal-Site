$(document).ready(function () {
  $.getJSON("public/assets/data/experience_list_data.json", function (data) {
    data = data.experience_list;
    var container = $("<div>").attr("class", "container");

    for (var i = 0; i < data.length; i++) {
      var row = $("<div>").attr("class", "row");
      row.attr("style", "padding: 20px 0px 20px 0px");
      var col1 = $("<div>").attr("class", "col-4");
      var col2 = $("<div>").attr("class", "col-8");

      var title = $("<h4>").text(data[i].title);
      var date = $("<p>").text(data[i].date);
      var description = $("<p>").text(data[i].description);
      description.attr("style", "text-align: left;");
      var skill = data[i].skill;

      console.log(data[i].name);

      row.append(col1, col2);
      col1.append(title, date);
      col2.append(description);

      container.append(row);
    }
    $("#experiences").append(container);
  });
});
