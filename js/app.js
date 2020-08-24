"use strict";
let unicorns = [];
$.ajax("./data/page-1.json").then((data, index) => {
  data.forEach((item) => {
    let clonedSection = $(".rendering").clone();
    let h2 = clonedSection.find("h2").text(item.title);
    let img = clonedSection
      .find("img")
      .attr("src", item.image_url)
      .attr("alt", item.title);
    let p = clonedSection.find("p").text(item.description);
    clonedSection.attr("class", "rendered" + index);
    $("main").append(clonedSection);
  });
  $("main section").first().remove();
});
