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
		addingForm();
	});
		function addingForm(){
 			var end = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			
			if( $('.main_page').hasClass('animated') ){
				$('.main_page').removeClass('bounceInLeft').addClass('bounceOutLeft');
			} else {
				$('.main_page').addClass('animated bounceOutLeft');	
			}

			setTimeout(function(){ writingForm();},700);
			
		
		function writingForm(){	
			var writingFormContainer = $('<div>').addClass('container');
			var header = $('<h1>').text('Contact Me').css({'margin-top': '0px','color':'white'});

			if($('.contact_form').hasClass('animated')){
				var contact_form = $('.contact_form').removeClass('bounceOutRight').addClass('animated bounceInRight'); 
			} else {
				var contact_form = $('.contact_form').addClass('animated bounceInRight'); //'background-image': 'url(assets/images/curtain.jpg)'});	
			}

			
			var form = $('<form>').attr({role:'form'});
			
			var div1 = $('<div>').addClass('form-group');
			var labelName = $('<label>').attr({for: 'Fullname'}).html('Full Name:');
			var fullName = $('<input>').attr({type:'text', name:'Fullname', class:'form-control', placeholder: 'You Full Name'});
			div1.append(labelName,fullName);

			var div2 = $('<div>').addClass('form-group');
			var labelEmail = $('<label>').attr({for: 'email'}).html('Email:');
			var email = $('<input>').attr({type: 'email', name: 'email',class: 'form-control',placeholder: 'abcd@yahoo.com'});
			div2.append(labelEmail,email);

			
			var div3 = $('<div>').addClass('form-group');
			var labelMessage = $('<label>').attr({for:'message'}).html('Your Message:');
			var textarea = $('<textarea>').attr({name:'message', class:'form-control', rows: '5', placeholder: 'Write your Message Here'});
			div3.append(labelMessage,textarea);

			var submit = $('<input>').attr({type:'submit',name: 'submit', class:'submit_button'});
			var go_back = $('<button>').attr({type:'button', name: 'button'}).text('Main Page');
			form.append(header,div1,div2,div3,submit,go_back);
			writingFormContainer.append(form);
			contact_form.append(writingFormContainer);



			$(go_back).on('click',function(){	
				contact_form.removeClass('bounceInRight').addClass('bounceOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){	
					contact_form.html('');
				 	$('.main_page').removeClass('bounceOutLeft').addClass('bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ 		
				 	return;
				 	});//closes LAST animation
				 }); // closes next animation
			}); //go_back 	
		} //writing form
	} // this closes addingForm



	$('.top').mouseenter(function(){

		$(this).removeClass('animated rubberBand');
		$(this).removeClass('animated pulse');
		$(this).addClass('animated wobble').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){ 
		$(this).removeClass('animated wobble');
		$(this).addClass('animated pulse');
	
		}); //function
	}); //mouseenter



	$('.hire').click(function(){

			
			if( $('.square-box_holder').hasClass('animated') ){
				var maybe = $('.square-box_holder').addClass('bounceOutRight');
			} else {
				var maybe = $('.square-box_holder').addClass('animated bounceOutRight');
			}

			maybe.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
				topScroll();
			 });
			

			function topScroll(){
					$('html,body').animate({ scrollTop: 0 }, 2000);

					setTimeout(function(){ addingForm() } ,2300);

					setTimeout(function(){
						$('.square-box_holder').removeClass('bounceOutRight');
						$('.square-box_holder').addClass('bounceInRight');
					},4000);
			} // topScroll
		}); // this closes the click
	
	}); // CLOSES THE MAIN DOCUMENT
