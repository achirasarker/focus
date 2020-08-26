// $(".card").on("mouseover", function() {
//   $(".card").addClass("shadow p-3 mb-5 bg-white rounded bg-secondary")
// });
// setTimeout(function() {
//   $(".card").removeClass("shadow p-3 mb-5 bg-white rounded");
// },100);

$(".card").on("mouseover", function() {
  $(".card").addClass("border-info")
});
setTimeout(function() {
  $(".card").removeClass("border-info");
},10);
