$(document).ready(function(){

//bx slider
(function(){
    $('.main-section__slides').bxSlider({
        slideMargin: 1000,
        controls: false
    });
}());

//маске для телефона в форме
(function(){
    $('#tel-input').mask('8 (000) 000-00-00');
}());

//faq аккордеон
(function(){
    $('.faq__list-item').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.faq__list'),
            target = $this.find('.faq__answer'),
            current = container.find('.faq__list-item--active .faq__answer');

        $('.faq__list-item .faq__answer').stop(true, true);

        if(!$this.hasClass('faq__list-item--active')){

            $this.addClass('faq__list-item--active')
                .siblings()
                .removeClass('faq__list-item--active');

            if(current.length != 0){
                current.slideUp(500, function(){
                    target.slideDown(500);
                }); 
            }else{
                target.slideDown(500);
            }

        }else{
            $this.removeClass('faq__list-item--active');
            current.slideUp(500);
        }
        
    })
}());

//табы команда

(function(){
    var flag = true;
    
    $('.tabs__item').on('click', function(e){

        e.preventDefault();

        var $this = $(this);
            ndx = $this.index(),
            slides = $('.team__slide'),
            currentSlide = slides.filter('.team__slide--active');
            targetSlide = slides.eq(ndx);

        if (flag){

            flag = false;

            if(!$this.hasClass('tabs__item--active')){

                $this.addClass('tabs__item--active')
                .siblings()
                .removeClass('tabs__item--active');
                
                currentSlide.fadeOut(300, function(){
                    targetSlide.fadeIn(300, function(){
                        $(this).addClass('team__slide--active')
                        .siblings()
                        .removeClass('team__slide--active');

                        flag = true;
                    });
                })
            }



        }

        
    })
}())

})

$(window).ready(function(){
    //размер тенюшки
    (function(){
        var pic = $('.main-section__sweet-pic');
        var shadows = $('.main-section__shadow');

        pic.each(function(ndx, elem){

            shadows.eq(ndx).width(pic.eq(ndx).width()*0.6);

        })
    })()
})