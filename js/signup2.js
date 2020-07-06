$(".dial").knob({
	'width': 60
	});	
	
$(".add-image").on("click", function () {
	$(".file").click();
});

$(".next").on("click", function () {
	window.location.replace("accountcreated.html");
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('.img').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
	$(".add-image").hide();
  }
}

$(".file").change(function() {
  readURL(this);
});