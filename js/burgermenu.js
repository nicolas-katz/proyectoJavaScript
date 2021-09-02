$(document).ready(function(){

    $("#burger-menu").click(function(){
        $("#burger-menu").toggleClass("close");
        $("#menu").toggleClass("show");
    })

    $("#menu ul li a").click(function(){
        $("#burger-menu").toggleClass("close");
        $("#menu").toggleClass("show");
    })

})