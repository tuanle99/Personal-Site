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
      // inner_div.attr("style", "display:block");

      var a = $("<a>").attr("href", `${e.link}`);
      a.attr("target", "_blank");
      a.attr("style", "display:block; padding-bottom: 10px");
      var button = $("<button>").attr("type", "button");
      button.attr("class", "btn background_primary text_primary");
      button.text(e.title);

      var a_git = $("<a>").attr("href", `${e.link}`);
      a.attr("target", "_blank");
      a_git.attr("style", "display:block");
      var button_git = $("<button>").attr("type", "button");
      button_git.attr("class", "btn background_primary text_primary");
      button_git.text("Github");

      a.append(button);
      a_git.append(button_git);
      inner_div.append(a, a_git);
      div.append(img, inner_div);
      $("#project_js").append(div);
    });
  });
}

// function get_project_data() {
//   $.getJSON("public/assets/data/project_data.json", function (data) {
//     project_data = data.project;
//     var div = $("<div>").attr("class", "carousel slide");
//     div.attr("id", "carouselIndicators");
//     div.attr("data-ride", "carousel");
//     var ol = $("<ol>").attr("class", "carousel-indicators");
//     var inner_div = $("<div>").attr("class", "carousel-inner");

//     div.attr("style", "width: 80%");

//     project_data.forEach((e) => {
//       var li = $("<li>").attr("data-target", "#carouselIndicators");
//       li.attr("data-slide-to", e.id);
//       li.attr("class", "active");
//       var item_div = $("<div>").attr("class", "carousel-item active");

//       var img = $("<img>").attr("class", "d-block w-100");
//       img.attr("src", `${e.image}`);
//       img.attr("alt", `${e.description}`);

//       item_div.append(img);
//       ol.append(li);
//       inner_div.append(item_div);
//       div.append(ol, inner_div);
//       $("#project_js").append(div);
//     });
//     var a_prev = $("<a>").attr("carousel-control-prev");
//     a_prev.attr("href", "#carouselIndicators");
//     a_prev.attr("role", "button");
//     a_prev.attr("data-slide", "prev");

//     var span_prev = $("<span>").attr("class", "carousel-control-prev-icon");
//     span_prev.attr("aria-hidden", "true");
//     var span_prev2 = $("<span>").attr("class", "sr-only");

//     a_prev.append(span_prev, span_prev2);
//   });
// }

$(document).ready(function () {
  get_project_data();
});
