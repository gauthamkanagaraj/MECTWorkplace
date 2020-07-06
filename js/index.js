$(window).on("load", function() {
	setTimeout(function () {
	$(".loading").hide();
	$(".main").fadeIn(800);
}, 3000);
});

$(".signup").on("click", function () {
	window.location.replace("signup.html");
});