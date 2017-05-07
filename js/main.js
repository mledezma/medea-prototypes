var galleryItems = $('.gallery li');
for (var i = 0; i < galleryItems.length; i+=2) {
    console.log(galleryItems[i]);
};

$('body').mousewheel(function(event, delta) {
    this.scrollLeft -= (delta * 30);
    event.preventDefault();
})

$('#galleryRange').prop('min',)