$(document).ready(function(){

    // Animación del portfolio

    $(".enlaces").click(function(){
        let valor = $(this).attr("data-nombre");
        if(valor == "todos"){
            $(".filtro").show("1000");
        } else {
            $(".filtro").not("." + valor).hide("1000");
            $(".filtro").filter("." + valor).show("1000");
        }
        $("ul .enlaces").click(function(){
            $(this).addClass("activo").siblings().removeClass("activo");
        })
    })

    // Abrir modal de las imagenes del portfolio

    $(".fa-image").click(function(){
        let currentImage = $(this).siblings().attr("src");
        $(".modal-cont-portfolio .modal-portfolio .closeModal").css("opacity","1");        
        $(".modal-cont-portfolio").addClass("showModal");
        $(".modal-cont-portfolio .modal-portfolio").prepend(`<img>`); 
        $(".modal-cont-portfolio .modal-portfolio img").attr("src", currentImage);
        $(".modal-cont-portfolio .modal-portfolio img").addClass("currentImage");
    })

    // Cerrar modal de las imagenes del portfolio

    $("#cerrarModal").click(function(){
        $(".modal-cont-portfolio").removeClass("showModal");
        $(".modal-cont-portfolio .modal-portfolio img").remove();
        $(".modal-cont-portfolio .modal-portfolio .closeModal").css("opacity","0");     
        $(".modal-cont-portfolio .modal-portfolio img").removeClass("currentImage");   
    })

    // Galería de imagenes con Owl Carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout: 1500,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            800: {
                items:2
            },
            1200: {
                items: 3
            }
        }
    })

})