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
