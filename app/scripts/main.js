'use strict';
$(document).ready(function(){
  $('ul.nav').find('a').on('click', function(e) {
    e.preventDefault();
    var targetLi = $(this),
        target = targetLi.attr('href'),
        offsetValue = 15;
    $('html, body').animate({
      scrollTop: $(target).offset().top-offsetValue
     }, 1000);
    targetLi.parent('li').addClass('active');
    targetLi.parent('li').siblings('li').removeClass('active');
    $(".btn-navbar").click(); //bootstrap 2.x
    $(".navbar-toggle").click() //bootstrap 3.x by Richard
  });
});


$(document).ready(function(){
  $('#InputName').on('blur', function(){
    if ($(this).val().length >= 3){
      $(this).next('span').css('color', 'green');
    }
    else {
      $(this).next('span').css('color', 'red');
    }
  });
  $('#InputMessage').on('blur', function(){
    if ($(this).val().length >= 3){
      $(this).next('span').css('color', 'green');
    }
    else {
      $(this).next('span').css('color', 'red');
    }
  });  
  $('#InputEmail').on('blur', function(){
    var validEmail = $(this).val().indexOf('@') !==-1;
    if (validEmail){
      $(this).next('span').css('color', 'green');
    }
    else {
      $(this).next('span').css('color', 'red');
    }
  });
  $('#InputReal').on('blur', function(){
    var spam = $(this).val() === 7;
    if (spam){
      $(this).next('span').css('color', 'green');
    }
    else {
      $(this).next('span').css('color', 'red');
    }
  });    
});