 $(document).ready(function(){
         $("a[rel='m_PageScroll2id']").mPageScroll2id({
         	offset:100,
         	scrollSpeed: 600
         });

         $(function() {
           $(window).on("scroll", function() {
             if($(window).scrollTop() > 850) {
                $(".navigation").addClass("active");
             } else {
                 $(".navigation").removeClass("active");
        }
    });
});

	 var mySwiper = new Swiper ('.swiper-container', {
 	 navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop:true,
  
    autoplay: {
    delay: 2000
    },
    slidesPerView:2,
  
  });

$(".amount").counterUp({delay:10,time:1000});

var card = document.getElementsByClassName('card');
var numCards = card.length;
     function addSomeClass() {
        this.classList.toggle("is-flipped");
     };
for (var i = 0; i < numCards; i += 1) {
    card[i].addEventListener('click', addSomeClass , false);
    };
});
	
