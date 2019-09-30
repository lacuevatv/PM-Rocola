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

        //agrega la clase active y elimina las restantes
        cleanActivesBtn(this);
    });
});

function cleanActivesBtn(el) {
    var actives = $('.button-rockola-active');

    if (actives.length > 0) {
        actives.each(function(){
            $(this).removeClass('button-rockola-active');
        });
    }
    
    setTimeout(function(){
        $(el).addClass('button-rockola-active');
    }, 100);
    
    
}
