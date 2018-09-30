$(".link").click(function(){
    $(".wrapper").slideToggle();
});

$(".btn.btn-outline-secondary").click(function(){
    $(".second__text").slideToggle();
});

$('.js-shuffle').shuffleLetters();

$('#circle').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
});

$('#circle1').circleProgress({
    value: 0.75
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
});

$('#circle2').circleProgress({
    value: 0.8
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
});