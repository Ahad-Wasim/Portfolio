$(document).ready(function(){

	$('.firstname,.lastname').mouseenter(function(){
		$('.cat_hire').css({'display': 'inline-block'}).addClass('animated bounceInLeft');
	});

	$('.cat_hire').mouseenter(function(){
		$(this).css({'background': 'red'});
	});
	$('.cat_hire').mouseleave(function(){
		$(this).css({'background': 'transparent'});
	});




	
	$('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').css({'padding': '15px 20px'});


	$('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').mouseenter(function(){
		$(this).css({'background':'lavender'});
	});
	
	$('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').mouseleave(function(){
		$(this).css({'background':'none'});

	});


	$('.contact,.cat_hire').click(function(){

		 if( $('.main_page').hasClass('animated') ){
		 	$('.main_page').removeClass('bounceInLeft').addClass('bounceOutLeft');
		 } else {
			$('.main_page').addClass('animated bounceOutLeft');	
		}



		

		var interval = setInterval(writingForm,600);
	
		function writingForm(){	
			var header = $('<h1>').text('Contact Me');	

			 if( $('.contact_form').hasClass('animated') ){
		 	var contact_form = $('.contact_form').removeClass('bounceOutRight').addClass('bounceInRight').css({'background': 'red'});
		 	} else {
			var contact_form = $('.contact_form').addClass('animated bounceInRight').css({'background': 'red'});
		 	}
			var form = $('<form>');
			var labelName = $('<label>').text('Full Name');
			var go_back = $('<button>').attr({type:'button', name: 'button'}).text('Main Page');
			var fullName = $('<input>').attr({type: 'text',name: 'Fullname',class: 'name_input',placeholder: 'You Full Name'});
			var email = $('<input>').attr({type: 'email',name: 'email',class: 'email_input',placeholder: 'abcd@yahoo.com'});
			var textarea = $('<textarea>').attr({type:'text',name:'message',class:'message'});
			var submit = $('<input>').attr({type:'submit',name: 'submit', class:'submit_button'});



			form.append(header,fullName,email,textarea,submit);
			contact_form.append(form,go_back);
			window.clearInterval(interval);

				$('body').on('click',go_back,function(){
					$(contact_form).removeClass('bounceInRight').addClass('bounceOutRight');
					var secondInterval = setInterval(mainPage,600);
					function mainPage(){
						$(contact_form).html('');
						$('.main_page').removeClass('bounceOutLeft').addClass('bounceInLeft');
						window.clearInterval(secondInterval);	
					}
					
				});


		}	

		

	}); //closes click function


	



	$('.hire').mouseenter(function(){

		$(this).removeClass('animated rubberBand');
		$(this).removeClass('animated pulse');
		$(this).addClass('animated wobble').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){ 
		$(this).removeClass('animated wobble');
		$(this).addClass('animated pulse');
	
		}); //function
	}); //mouseenter

	
	//    Parallax





	//    Parallax





	$('.hire').click(function(){
		setInterval(slideOut, 1);
		function slideOut(){
		$('.square-box_holder').addClass('animated bounceOutRight');
		}
		setInterval(modal,1000);

		function modal(){
			// this will pop up with a modal
		}


		}); // this closes the click
	}); // this closes document.ready





/*
$(".main_picture").click(function() {
    $('.main_picture').animate({
        scrollTop: $(".resume").offset().top},
        'slow');
});
*/