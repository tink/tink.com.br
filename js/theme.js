jQuery(document).ready(function($){
    fadeReplace = function(toHide, toShow) {
        $(toHide).hide();
        $(toShow).fadeIn();
    }

    $('.to_fade').click(function(event){
        fadeReplace('#main', $(this).attr('href'));
        event.preventDefault();
    });

    $('.back-to-home').click(function(){
        fadeReplace($(this).parent(), '#main');
    });
});
