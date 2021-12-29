
$(".navbar-toggler").click(function (){
    let isClass = $(".navbar-collapse").hasClass('show');

    if ( isClass){
        $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
    }else {
        $(".menu-icon").removeClass(".fa-bars").addClass("fa-times")
    }
});