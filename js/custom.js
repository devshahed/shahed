									/*---------------*/
									/*Custom JS*/
									/*---------------*/
function myValidation(){
	var name = document.forms['contactForm']['name'].value;
	var email = document.forms['contactForm']['email'].value;
	var phone = document.forms['contactForm']['phone'].value;
	var message = document.forms['contactForm']['message'].value;
	var error =[];
	if(name == '' || name.length <3){
		error[0]='name must be at least 3 letters';
		document.getElementById('name-error').innerHTML = error[0];
	}else{
		document.getElementById('name-error').innerHTML = '';
	}
	if(email == '' || email.length <10){
		error[1]='please enter a valid email address';
		document.getElementById('email-error').innerHTML = error[1];
	}else{
		document.getElementById('email-error').innerHTML = '';
	}
	if(phone == '' || phone.length <11){
		error[2]='please enter a valid phone number';
		document.getElementById('phone-error').innerHTML = error[2];
	}else{
		document.getElementById('phone-error').innerHTML = '';
	}
	if(message == '' || message.length <10){
		error[3]='message must be at least 10 letters';
		document.getElementById('message-error').innerHTML = error[3];
	}else{
		document.getElementById('message-error').innerHTML = '';
	}
	if(error.length > 0){
		return false;
	}
}
function myFocus(x){
	x.style.background='#fffbfb78';
}
$(document).ready(function(){
	//upper button scroll start
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		if(x > 1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
	});
		$('#upper').click(function(){
			$('html').animate({scrollTop: 0},2000);
		});
});