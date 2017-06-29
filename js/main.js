/* Open when someone clicks on the span element */

function openNav() {
	if ($('body').width() < 767){
    	document.getElementById("navigation").style.left = "0%";
	}else{
		document.getElementById("navigation").style.left = "50%";
	}
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("navigation").style.left = "100%";
}

$(function() {

	$(document).on('click', '#menu-icon', function(){
		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')){
			openNav();
		}else{
			closeNav();
		}	
	}).on('click', '#navigation a', function(){
		var base = $('#menu-icon');
		base.toggleClass('is-active');
		if (base.hasClass('is-active')){
			openNav();
		}else{
			closeNav();
		}	
	}).on('click', '#submit', function() {
		var name = $("#form_name").val(),
			email = $("#form_email").val(),
			text = $("#form_msg").val();

		if (name != "" && email != "" && text != "")		{
		
			var	dataString = "name="+ name + "&email=" + email + "&text=" + text;
			
			$.ajax({
				type: "POST",
				url: "http://www.enderstudio.com/new/scripts/email.php",
				data: dataString,
				success: function(){
					$('#contact-form').addClass('sent');
					$('#success-msg').addClass('success-show');
				},
				error: function (request, error) {
					console.log(arguments);
					//alert(" Can't do because: " + error);
					//$('#error-msg').fadeIn(1000);
					$('#contact-form').addClass('sent');
					$('#success-msg').addClass('success-show');
				}
			}).fail(function() {
				$('#error-msg').fadeIn(1000);
			});
		}else{
			$('#error-msg').fadeIn(1000);
			if (name == ""){
				$('input#form_name').addClass('error');
			}
			if (email == ""){
				$('input#form_email').addClass('error');
			}
			if (text == ""){
				$('textarea#form_msg').addClass('error');
			}
		}
		return false;
		
		
	}).on('click', 'a[href*="#"]:not([href="#"])', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	}).on('focus', '#form_name, #form_email, #form_msg', function(){
		$(this).removeClass('error');
		$('#error-msg').hide();
	});
	$(document).ready(function() {
		setTimeout(function(){ 
			$("body").removeClass("loading");
			$('.loader').remove();
			$("section").fadeIn("slow");
			
		}, 3000);

	});
});