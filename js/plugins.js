
$(function(){

$("body").niceScroll({

cursorcolor: "black",
cursorwidth: "5px",
scrollspeed: 100

});

$(".static ul li").on("mouseenter",function(){

$(this).css("textDecoration","underline").siblings().css("textDecoration","none")

})

$(window).on("scroll",function(){

$(".static").css("backgroundColor","white")
$(".static a , .static h2").css("color","black")
$(".static").css("width","100%")
$(".static").css("height","70px")

})

$('.bxslider').bxSlider({

pager : false

});

$(".static ul li:first-of-type a").on("click",function(){

$("html,body").animate({

scrollTop : 400

},1000)

})

$(".static ul li:nth-of-type(2) a").on("click",function(){

$("html,body").animate({
    
scrollTop : 400
    
},1000)
    
})

$(".static ul li:nth-of-type(3) a").on("click",function(){

$("html,body").animate({
        
scrollTop : 400
        
},1000)
        
})

$(".static ul li:nth-of-type(4) a").on("click",function(){

$("html,body").animate({
        
scrollTop : 400
        
},1000)
        
})

$(".static ul li:nth-of-type(5) a").on("click",function(){

$("html,body").animate({
        
scrollTop : 400
        
},1000)
        
})

$(".test button").on("click",function(){

$(this).css("backgroundColor","green").siblings().css("backgroundColor","white")

})

var mixer = mixitup('.cont');

(function test(){

$(".back .act").each(function(){

if(!$(this).is(":last-child")){

$(this).delay(2000).fadeOut(2000,function(){

$(this).removeClass("act").next().addClass("act").fadeIn();

test();

});

}

else{

$(this).delay(2000).fadeOut(2000,function(){


$(this).removeClass("act");

$(".back div").eq(0).addClass("act").fadeIn();

test();

});

}

})

}());








});
