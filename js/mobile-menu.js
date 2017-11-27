$(document).ready(function(){
	$('.hamburger__menu-icon').click(function (e) {
        e.preventDefault();   
        $('.mobile-menu').addClass('mobile-menu-active');
        });
    $('.mobile-menu__btn').click(function (e) {
        e.preventDefault();   
        $('.mobile-menu').removeClass('mobile-menu-active');
        });
        $('.mobile-menu__item').click(function (e) {
            e.preventDefault();   
            $('.mobile-menu').removeClass('mobile-menu-active');
            });
	});