// function get_project_data() {
//   $.getJSON("public/assets/data/project_data.json", function (data) {
//     project_data = data.project;
//     project_data.forEach((e) => {
//       var div = $("<div>").attr("class", "card project_card");
//       div.attr("style", "width: 18rem");
//       var img = $("<img>").attr("class", "card-img-top");
//       img.attr("src", `${e.image}`);
//       img.attr("alt", `${e.description}`);

//       var inner_div = $("<div>").attr("class", "card-body");
//       // inner_div.attr("style", "display:block");

//       var a = $("<a>").attr("href", `${e.link}`);
//       a.attr("target", "_blank");
//       a.attr("style", "display:block; padding-bottom: 10px");
//       var button = $("<button>").attr("type", "button");
//       button.attr("class", "btn background_primary text_primary");
//       button.text(e.title);

//       var a_git = $("<a>").attr("href", `${e.link}`);
//       a.attr("target", "_blank");
//       a_git.attr("style", "display:block");
//       var button_git = $("<button>").attr("type", "button");
//       button_git.attr("class", "btn background_primary text_primary");
//       button_git.text("Github");

//       a.append(button);
//       a_git.append(button_git);
//       inner_div.append(a, a_git);
//       div.append(img, inner_div);
//       $("#project_js").append(div);
//     });
//   });
// }

function get_project_data() {
  $.getJSON("public/assets/data/project_data.json", function (data) {
    project_data = data.project;

    project_data.forEach((e) => {
      let li = $("<li>").attr("data-target", "#carouselProject");
      li.attr("data-slide-to", e.id + 1);

      let div = $("<div>").attr("class", "carousel-item");
      let img = $("<img>").attr("class", "d-block w-100");
      img.attr("src", e.image);
      img.attr("alt", e.title);

      let title = $("<p>").text(e.title);
      let github = $("<button>").attr("class", "btn btn-primary");
      github.attr("type", "button");
      github.text("Github");
      github.attr("style", "margin-right: 20px");

      let a_github = $("<a>").attr("href", e.git);
      a_github.attr("target", "_blank");
      a_github.append(github);

      let link = $("<button>").attr("class", "btn btn-primary");
      link.text("Link");
      link.attr("type", "button");

      let a_link = $("<a>").attr("href", e.link);
      a_link.attr("target", "_blank");
      a_link.append(link);

      let card = $("<div>").attr("class", "card");

      let card_body = $("<div>").attr("class", "card-body");
      card_body.attr("style", "margin-bottom: 30px");
      card_body.append(title, a_github, a_link);
      card.append(card_body);
      div.append(img, card);
      $(".carousel-inner").append(div);
      $(".carousel-indicators").append(li);
    });
  });
}

$(document).ready(function () {
  get_project_data();
});
