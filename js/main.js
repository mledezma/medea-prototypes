var galleryItems = $('.gallery li');
var viewportWidth = $(window).width();
var rangeValue = 0;

// $('body').mousewheel(function(event, delta) {
//     rangeValue = delta * 30;
//     this.scrollLeft -= (delta * 30);
//     $('#galleryRange').attr('value', rangeValue);
//     console.log($('#galleryRange').attr('value'))
//     event.preventDefault();
// });

// function windowSize(){
//     $(window).resize(function(){
//         viewportWidth = $(window).width();
//         initRange();
//     });
// }

function initRange(){
    $('#galleryRange').attr({
        min: 0,
        max: viewportWidth,
        value: 0,
    });

    $('#galleryRange').change('input', function () {
        console.log('hi')
    });

    $('#galleryRange').on('input', function () {
        $(this).trigger('change');
    });

// .input(function(event, delta) {
//         $(this).attr('min', 0) 
//         $(this).trigger('change');
//     });
    console.log( $('#galleryRange'))
}

initRange();
windowSize();