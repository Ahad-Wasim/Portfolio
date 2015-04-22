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
  
	function jqUpdateSize(){
	    // Get the dimensions of the viewport
	    var width = $(window).width();
	    var height = $(window).height();

	if(width > 620){
			// if its above 620 add this size
			$('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').css({'padding': '15px 20px'});


			$('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').mouseenter(function(){
				$(this).css({'background':'lavender'});
			});
			
			$('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').mouseleave(function(){
				$(this).css({'background':'none'});

			});
	 
		} else {
			// if its below the certian window size remove this class 
			$('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').css({'padding': '0'});

			$('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').mouseenter(function(){
				$(this).css({'background':'none'});
			});
		}

		if (width < 835) {
			$('.cat_hire').css({'background':'red'});

			$('.cat_hire').mouseleave(function(){
				$(this).css({'background': 'red'});
			});
		}  
		if (width > 835){
			$('.cat_hire').css({'background': 'transparent'});
		}		


	}
	$(document).ready(jqUpdateSize);    // When the page first loads
	$(window).resize(jqUpdateSize);     // When the browser changes size







	$('.contact,.cat_hire').on('click', function(){
		addingForm();
	});
		function addingForm(){
 			var end = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			
			if( $('.main_page').hasClass('animated') ){
				$('.main_page').removeClass('bounceInLeft').addClass('bounceOutLeft');
			} else {
				$('.main_page').addClass('animated bounceOutLeft');	
			}
			// you could just remove the cat picture
			
			setTimeout(function(){ writingForm();},700);
			
		
		function writingForm(){	
			var writingFormContainer = $('<div>').addClass('container');
			var header = $('<h1>').text('Contact Me').css({'margin-top': '0px','color':'white'});

			if($('.contact_form').hasClass('animated')){
				var contact_form = $('.contact_form').removeClass('bounceOutRight').addClass('animated bounceInRight'); 
			} else {
				var contact_form = $('.contact_form').addClass('animated bounceInRight'); 
			}

			
			// add css property and then remove css property.
			contact_form.addClass('contact_form_background');

			
			var form = $('<form>').attr({role:'form', action: 'index.php', method:'post'});
			form.addClass('form_position');
			
			var div1 = $('<div>').addClass('form-group');
			var labelName = $('<label>').attr({for: 'Fullname'}).html('Full Name:').css({color:'white'});
			var fullName = $('<input>').attr({type:'text', name:'Fullname', class:'form-control', placeholder: 'Your Full Name'});
			div1.append(labelName,fullName);

			var div2 = $('<div>').addClass('form-group');
			var labelEmail = $('<label>').attr({for: 'email'}).html('Your Email:').css({color:'white'});
			var email = $('<input>').attr({type: 'email', name: 'email',class: 'form-control',placeholder: 'abcd@yahoo.com'});
			div2.append(labelEmail,email);

			
			var div3 = $('<div>').addClass('form-group');
			var labelMessage = $('<label>').attr({for:'message'}).html('Your Message:').css({color:'white'});
			var textarea = $('<textarea>').attr({name:'message', class:'form-control', rows: '5', placeholder: 'Write your Message Here'});
			div3.append(labelMessage,textarea);

			var submit = $('<input>').attr({type:'submit',name: 'submit', class:'submit_button btn btn-primary', value: 'Submit'}).css({'float': 'right', 'padding': '6px 55px'});
			var go_back = $('<button>').attr({type:'button', name: 'button', class: 'glyphicon glyphicon-arrow-left'}).css({'position':'relative', 'left': '4%', 'top':'4vh','margin-bottom':'4%'});
			contact_form.append(go_back)
			form.append(header,div1,div2,div3,submit);
			writingFormContainer.append(form);
			contact_form.append(writingFormContainer);




			if( contact_form.innerHTML !== ''){
				$('.contact').off('click');			 
			 } 
			
			$(go_back).on('click',function(){	
				contact_form.removeClass('bounceInRight').addClass('bounceOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){	
					contact_form.removeClass('contact_form_background');
					contact_form.html('');
				 	$('.main_page').removeClass('bounceOutLeft').addClass('bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ 		
				 	
				 		if ( ($.trim($(contact_form).html())=== '')){
							$('.contact').click(function(){
								$('.contact').on('click',addingForm());
							});
						}				
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
		$('.top').addClass('animated wobble');
	
		}); //function
	}); //mouseenter



	$('.hire').click(function(){

			
			if( $('.square-box_holder').hasClass('animated') ){
				var maybe = $('.square-box_holder').addClass('zoomOutUp');
			} else {
				var maybe = $('.square-box_holder').addClass('animated zoomOutUp');
			}

			maybe.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
				setTimeout(function(){topScroll();}, 300);
			 });
			

			function topScroll(){
					$('html,body').animate({ scrollTop: 0 }, 2000);

					setTimeout(function(){ addingForm(); } ,2300);

					setTimeout(function(){
						$('.square-box_holder').removeClass('zoomOutUp');
						$('.square-box_holder').addClass('zoomInDown');
					},4000);
			} // topScroll
		}); // this closes the click




	
	
	}); // CLOSES THE MAIN DOCUMENT
