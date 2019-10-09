//popover
//$('#BasketPopover').popover();

$(document).ready(function(){
    $('#BasketPopover').popover({
        placement : 'bottom',
        html : true,
        title : 'سبد خرید شما',
        content : '<ul><li>محصول شماره یک </li><li>محصول شماره دو </li><li>محصول سماره سه</li><li>مشحصول شماره چهار</li></ul>'
		
		
    });
    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
});



//timer
var timer = 60;

var interval = setInterval(function() {
    timer--;
    $('.timer').text(timer);
    if (timer === 0) clearInterval(interval);
}, 1000);
//endtimert
