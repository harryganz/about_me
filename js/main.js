$(document).ready(function(){
  $('#nav li a').on('click', function(){
    $('#nav li a').removeClass('active');
    $(this).addClass('active');
    var address = $(this).attr("href");
    $('.panel').removeClass('active');
    $(address).addClass('active')
  })
})
