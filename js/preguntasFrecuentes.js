$(document).ready(function(){

    $(".accordion").removeClass("active");
    $(".accordion").click(function(){
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    })

})