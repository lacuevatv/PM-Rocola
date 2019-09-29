$(window).on('load', function(){
    
    $('.my-flipster').flipster({
        style: 'carousel',
        start: 'center',
        spacing: -0.5,
        nav: false,
        buttons: false,
        loop: true,
    });

    $('.button-rockola').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        
        var myFlister = $('.my-flipster');
        myFlister.flipster('jump', parseInt(href) );
    });
});
