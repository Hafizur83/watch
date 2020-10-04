
	$(document).ready(function(){
	//STICKY MENU
		var topbutton = document.getElementById("topbtn");
		window.onscroll = function(){scrollFunction()};
		function scrollFunction(){
			if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
				$("nav").addClass("sticky");
				topbutton.style.display = "block";
				
			}else{
				$("nav").removeClass("sticky");
				topbutton.style.display = "none";
			}
		}
$('.screenshort-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
      
      {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
      
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	
//		Feedback Slider
		$('.feedback-slider').slick({
			  dots: false,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  slidesToScroll: 1,
				arrows: true,
			prevArrow: '<i class="fa fa-arrow-left"></i>',
            nextArrow: '<i class="fa fa-arrow-right"></i>'
			});
});


//SCROLL TO TOP
	function topFunction(){
			window.scrollTo({top: 0, behavior:"smooth"});
			//document.body.scrollTop = 0;
			//document.documentElement.scrollTop = 0;
		}