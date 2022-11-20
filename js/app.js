
// start page loading

$(document).ready(function(){
    $('.loading .spinner').fadeOut(2000,function(){
        $('.loading').slideUp(2000,function(){
            $('body').css('overflow','auto')
            $('.loading').remove()
        })
    })
})
// end page loading

// start scroll up 
var mybutton = document.getElementById('up');

window.onscroll = function(){
    'use strict';
    if (window.pageYOffset >= 10) {
        mybutton.style.display = 'block';
    }else {
        mybutton.style.display = 'none';
    }
    
};

mybutton.onclick = function () {
    'use strict';
    
    window.scrollTo(0, 0);
}
// end scroll up 
