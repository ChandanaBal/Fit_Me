$(document).ready(function() {
    
// menu toggle mobile //

$(".toggle").click(function(){
   $(".lefthdr_sec .navigation").slideToggle(500); 
});

// menu toggle mobile // 

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
    
    $(function () {
      $("#rateYo, #rateYo3, #rateYo4, #rateYo5, #rateYo-1, #rateYo-4, #rateYo-5, #rateYo-6, #rateYo2-1, #rateYo2-4, #rateYo2-5, #rateYo2-6, #rateYo3-1, #rateYo3-4, #rateYo3-5, #rateYo6-4").rateYo({
        rating: 4,
        fullStar: true,  
        spacing: "5px"  
      });
    });
    
      $(function () {
      $("#rateYo1").rateYo({
        rating: 4.7,
        fullStar: true,  
        spacing: "5px"  
      });
    });
    
    $(function () {
      $("#rateYo2").rateYo({
        rating: 5,
        fullStar: true,  
        spacing: "5px"  
      });
    });
    
    
  $(function () {
      $("#rateYo-2").rateYo({
        rating: 4.7,
        fullStar: true,  
        spacing: "5px"  
      });
    });
    
      $(function () {
      $("#rateYo-3").rateYo({
        rating: 5,
        fullStar: true,  
        spacing: "5px"  
      });
    });

    
    $(function () {
      $("#rateYo2-2").rateYo({
        rating: 4.7,
        fullStar: true,  
        spacing: "5px"  
      });
    });    
        
    $(function () {
      $("#rateYo2-3").rateYo({
        rating: 5,
        fullStar: true,  
        spacing: "5px"  
      });
    });  
    
 
    
  $(function () {
      $("#rateYo3-2").rateYo({
        rating: 4.7,
        fullStar: true,  
        spacing: "5px"  
      });
    });

  $(function () {
      $("#rateYo3-3").rateYo({
        rating: 5,
        fullStar: true,  
        spacing: "5px"  
      });
    });    

});



