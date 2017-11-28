$(document).ready(function(){
	$('.reviews__hover--btn').click(function (e) {
        e.preventDefault();   
        $('.reviews-overlay').addClass('reviews-overlay-active');
        });
        $('.reviews-overlay-btn').click(function (e) {
            e.preventDefault();   
            $('.reviews-overlay').removeClass('reviews-overlay-active');
            });
	});