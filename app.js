$(document).ready(function () {
  //add new movie submission
  $("#movie-form").submit((event) => {
    event.preventDefault();
    let movieName = $("#movie-name").val();
    let movieRating = $("#movie-rating").val();
    let input = $("<div>");
    input.addClass("submission");
    input.text(`Movie: ${movieName} Rating: ${movieRating}`);
    $(".container").prepend(input);
  });

  //clear entries
  $("button").on("click", () => {
    $(".submission").remove();
  });
});
