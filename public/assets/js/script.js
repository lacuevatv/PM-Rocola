$(window).on('load', function(){
    
    $('.my-flipster').flipster({
        style: 'carousel',
        start: 'center',
        spacing: -0.5,
        nav: false,
        buttons: false,
        loop: true,
        //hace que a medida que se desliza se marque en los botones de abajo
        onItemSwitch: function(currentItem, previousItem) {
            var index = parseInt($(currentItem).attr('data-index'));
            
            var btns = $('.button-rockola');
            
            cleanActivesBtn(btns[index]);
        }
    });

    $('.button-rockola').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        
        var myFlister = $('.my-flipster');
        myFlister.flipster('jump', parseInt(href) );

        //agrega la clase active y elimina las restantes
        cleanActivesBtn(this);
    });

    $(document).on('click', '.cover', function(){
        event.preventDefault();
        var wrapper = $('.tidal-wrapper');
        $(wrapper).empty()

        var idList = $(this).attr('href');
        var html = '<div class="tidal-embed" data-type="p" data-id="'+idList+'"></div>';
        
        $(wrapper).append($(html));

        $('body').append( $('<script src="https://embed.tidal.com/tidal-embed.js"></script>') );

       setTimeout(function(){
        scrollToID('.tidal-wrapper');
       }, 1000);
        
    });

    /*
     *pone la lista de rock por defecto
     */
    /*var html = '<div class="tidal-embed" data-type="p" data-id="94fe2b9b-096d-4b39-8129-d5b8e774e9b3"></div>';
        
    $('.tidal-wrapper').append($(html));

    $('body').append( $('<script src="https://embed.tidal.com/tidal-embed.js"></script>') );

    setTimeout(function(){
    scrollToID('.tidal-wrapper');
    }, 1000);
    */
});

//busca todos los botones activos y le quita la marca de activo y luego marca la que actualmente esta activa.
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

function scrollToID ( id ) {
    $('html, body').stop().animate({
        scrollTop: $(id).offset().top -90
    }, 'slow');
}