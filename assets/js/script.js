$("#project").on("click", ".card", function() {
  $(".card-body").toggle();
  $(".card-info").css({
    display: "block",
    "transition-timing-function": "ease-out",
    color: "#fff"
  });
  $(".card-body").css({
    background: "rgba(65, 63, 63, 0.9)"
  });
});
