function load_page() {
	show_type();
	// console.log($.get(navbar.html))
    $.get("navbar.html", function(data) {
    	$("#navbar").html(data);
    	$('.navbar-nav').find('li:nth-child(2)').addClass('active');
	})
}

function show_type() {
	$("#bytype").show();
	$("#byposition").hide();
	$("#posButton").removeClass("active");
	$("#typeButton").addClass("active");
}

function show_position() {
	$("#bytype").hide();
	$("#byposition").show();
	$("#posButton").addClass("active");
	$("#typeButton").removeClass("active");
}