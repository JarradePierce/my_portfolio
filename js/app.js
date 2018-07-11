$(document).ready(function(){
  hideAboutMe();
  showAboutMe();
});

hideAboutMe = function(){
  $('.about-me-paragraph1').hide();
  $('.about-me-paragraph2').hide();
  $('.about-me-paragraph3').hide();
}

showAboutMe = function(){
  $('.read1').click(function(e){
    e.preventDefault();
    $('.about-me-paragraph1').show();
  });
  $('.read2').click(function(e){
    e.preventDefault();
    $('.about-me-paragraph2').show();
  });
}
