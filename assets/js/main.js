$(document).ready(function() {
    $('.firstname,.lastname').mouseenter(function() {
        $('.cat_hire').css({
            'display': 'inline-block'
        }).addClass('animated bounceInLeft');
    });
    $('.cat_hire').mouseenter(function() {
        $(this).css({
            'background': 'red'
        });
    });
    $('.cat_hire').mouseleave(function() {
        $(this).css({
            'background': 'transparent'
        });
    });

    function jqUpdateSize() {
        // Get the dimensions of the viewport
        var width = $(window).width();
        var height = $(window).height();
        if (width > 620) {
            // if its above 620 add this size
            $('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').css({
                'padding': '15px 20px'
            });
            $('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').mouseenter(function() {
                $(this).css({
                    'background': 'lavender'
                });
            });
            $('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').mouseleave(function() {
                $(this).css({
                    'background': 'none'
                });
            });
        } else {
            // if its below the certian window size remove this class 
            $('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').css({
                'padding': '0'
            });
            $('.fa-github-square, .fa-linkedin-square, .fa-envelope, .fa-google-plus-square').mouseenter(function() {
                $(this).css({
                    'background': 'none'
                });
            });
        }
        if (width < 835) {
            $('.cat_hire').css({
                'background': 'red'
            });
            $('.cat_hire').mouseleave(function() {
                $(this).css({
                    'background': 'red'
                });
            });
        }
        if (width > 835) {
            $('.cat_hire').css({
                'background': 'transparent'
            });
            $('.cat_hire').mouseenter(function() {
                $(this).css({
                    'background': 'red'
                });
            });
            $('.cat_hire').mouseleave(function() {
                $(this).css({
                    'background': 'transparent'
                });
            });
        }
    }
    $(document).ready(jqUpdateSize); // When the page first loads
    $(window).resize(jqUpdateSize); // When the browser changes size
    $('.contact,.cat_hire').on('click', function() {
        addingForm();
    });

    function addingForm() {
        var end = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        if ($('.main_page').hasClass('animated')) {
            $('.main_page').removeClass('bounceInLeft').addClass('bounceOutLeft');
        } else {
            $('.main_page').addClass('animated bounceOutLeft');
        }
        // you could just remove the cat picture
        setTimeout(function() {
            writingForm();
        }, 700);

        function writingForm() {
            var writingFormContainer = $('<div>').addClass('container');
            var header = $('<h1>').text('Contact Me').css({
                'margin-top': '0px',
                'color': 'white'
            });
            var body = document.querySelector('body');
            body.style.overflow = 'hidden';
            if ($('.contact_form').hasClass('animated')) {
                var contact_form = $('.contact_form').removeClass('bounceOutRight').addClass('animated bounceInRight');
            } else {
                var contact_form = $('.contact_form').addClass('animated bounceInRight');
            }
            // add css property and then remove css property.
            contact_form.addClass('contact_form_background');
            var form = $('<form>').attr({
                role: 'form',
                class: 'form_contacts'
            });
            form.addClass('form_position');
            var div1 = $('<div>').addClass('form-group');
            var labelName = $('<label>').attr({
                for: 'Fullname'
            }).html('Full Name:').css({
                color: 'white'
            });
            var fullName = $('<input>').attr({
                type: 'text',
                name: 'Fullname',
                class: 'form-control',
                placeholder: 'Your Full Name'
            });
            div1.append(labelName, fullName);
            var div2 = $('<div>').addClass('form-group');
            var labelEmail = $('<label>').attr({
                for: 'email'
            }).html('Your Email:').css({
                color: 'white'
            });
            var email = $('<input>').attr({
                type: 'email',
                name: 'email',
                class: 'form-control',
                placeholder: 'abcd@yahoo.com'
            });
            div2.append(labelEmail, email);
            var div3 = $('<div>').addClass('form-group');
            var labelMessage = $('<label>').attr({
                for: 'message'
            }).html('Your Message:').css({
                color: 'white'
            });
            var textarea = $('<textarea>').attr({
                name: 'message',
                class: 'form-control',
                rows: '5',
                placeholder: 'Write your Message Here'
            });
            div3.append(labelMessage, textarea);
            var submit = $('<input>').attr({
                type: 'button',
                name: 'button',
                class: 'submit_button btn btn-primary',
                value: 'Submit'
            }).css({
                'float': 'right',
                'padding': '6px 55px'
            });
            var go_back = $('<button>').attr({
                type: 'button',
                name: 'button',
                class: 'glyphicon glyphicon-arrow-left'
            }).css({
                'position': 'relative',
                'left': '4%',
                'top': '4vh',
                'margin-bottom': '4%'
            });
            contact_form.append(go_back)
            form.append(header, div1, div2, div3, submit);
            writingFormContainer.append(form);
            contact_form.append(writingFormContainer);
            if (contact_form.innerHTML !== '') {
                $('.contact').off('click');
            }
            $(go_back).on('click', function() {
                contact_form.removeClass('bounceInRight').addClass('bounceOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    contact_form.removeClass('contact_form_background');
                    contact_form.html('');
                    body.style.overflow = 'auto';
                    $('.main_page').removeClass('bounceOutLeft').addClass('bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        if (($.trim($(contact_form).html()) === '')) {
                            $('.contact').click(function() {
                                $('.contact').on('click', addingForm());
                            });
                        }
                        return;
                    }); //closes LAST animation
                }); // closes next animation
            }); //go_back   
        } //writing form
    } // this closes addingForm
    $('.top').mouseenter(function() {
        $(this).removeClass('animated rubberBand');
        $(this).removeClass('animated pulse');
        $(this).addClass('animated wobble').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated wobble');
            $(this).addClass('animated pulse');
            $('.top').addClass('animated wobble');
        }); //function
    }); //mouseenter
    $('.hire').click(function() {
        if ($('.square-box_holder').hasClass('animated')) {
            var maybe = $('.square-box_holder').addClass('zoomOutUp');
        } else {
            var maybe = $('.square-box_holder').addClass('animated zoomOutUp');
        }
        maybe.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            setTimeout(function() {
                topScroll();
            }, 300);
        });

        function topScroll() {
            $('html,body').animate({
                scrollTop: 0
            }, 2000);
            setTimeout(function() {
                addingForm();
            }, 2300);
            setTimeout(function() {
                $('.square-box_holder').removeClass('zoomOutUp');
                $('.square-box_holder').addClass('zoomInDown');
            }, 4000);
        } // topScroll
    }); // this closes the click
    //  CONTACT FORM AJAX CALL 
    $('body').on('click', '.submit_button', function() {
        var form_contacts = $(".form_contacts");
        var form_data = {
            name: form_contacts.find("input[name=Fullname]").val(),
            email: form_contacts.find("input[name=email]").val(),
            message: form_contacts.find("textarea[name=message]").val(),
        };
        $.ajax({
            url: 'form_validation.php',
            data: form_data,
            dataType: 'json',
            method: 'POST',
            cache: false,
            success: function(response) {
                if (response.success) {
                    //alert(response.message); // you want to add a modal and then take you to the home page when exited
                    if ($('.contact_form').find('.error_message').length >= 1) {
                        $('.error_box').html('');
                    }
                    var modal = $('<div>').attr({
                        class: 'modal fade',
                        id: 'success_modal',
                        role: 'dialog',
                        'data-toggle': 'modal'
                    });
                    var modal_dialog = $('<div>').attr({
                        class: 'modal-dialog'
                    });
                    var modal_content = $('<div>').attr({
                        class: 'modal-content'
                    });
                    var modal_header = $('<div>').attr({
                        class: 'modal-header'
                    }).html('This is header');
                    var modal_body = $('<div>').attr({
                        class: 'modal-body'
                    });
                    var success_message = $('<h1>').html(response.message);
                    modal_body.append(success_message);
                    var modal_footer = $('<div>').attr({
                        class: 'modal-footer'
                    });
                    var prev_page = $('<button>').attr({
                        type: 'button',
                        class: 'btn btn-primary back_page',
                        'data-dismiss': 'modal'
                    }).html('Go back to main page');
                    var close_button = $('<button>').attr({
                        type: 'button',
                        class: 'btn btn-default',
                        'data-dismiss': 'modal'
                    }).html('Close');
                    modal_footer.append(prev_page, close_button);
                    modal_content.append(modal_body, modal_footer);
                    modal_dialog.append(modal_content);
                    modal.append(modal_dialog);
                    $('body').append(modal);
                    $('#success_modal').modal('show');
                    $(prev_page).on('click', function() {
                        setTimeout(function() {
                            go_home();
                        }, 500);
                    });
                } //closes first conditional 
                if (response.success === false) {
                    display_message(response);
                }

                function go_home() {
                    var contact_form = $('.contact_form');
                    contact_form.removeClass('bounceInRight').addClass('bounceOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        contact_form.removeClass('contact_form_background');
                        contact_form.html('');
                        $('.main_page').removeClass('bounceOutLeft').addClass('bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            if (($.trim($(contact_form).html()) === '')) {
                                $('.contact').click(function() {
                                    $('.contact').on('click', addingForm());
                                });
                            }
                            return;
                        }); //closes LAST animation
                    }); // closes next animation
                } //closes function
                function display_message(response) {
                    if ($('.contact_form').find('.error_message').length >= 1) {
                        $('.error_box').html('');
                    }
                    var candy = response.message;
                    var error_box = $('<div>').addClass('error_box').css({
                        'text-align': 'center'
                    });
                    for (var i in candy) {
                        var error_messages = $('<h3>').html(candy[i]).css({
                            color: 'white'
                        }).addClass('error_message');
                        error_box.append(error_messages);
                    }
                    $('.contact_form').append(error_box);
                } //function
            } // this closes the success function
        }); // this closes the ajax call
    }); //closes the .submit_button click
}); // CLOSES THE MAIN DOCUMENT