
$(".navbar-toggler").click(function (){
    let isClass = $(".navbar-collapse").hasClass('show');

    if ( isClass){
        $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
    }else {
        $(".menu-icon").removeClass(".fa-bars").addClass("fa-times")
    }
});

let screenHeight = $(window).height();
// console.log(screenHeight)

$(window).scroll(function (){
    let currentPosition = $(window).scrollTop();
    // console.log(currentPosition);
    if ( currentPosition >= screenHeight-120){
        $(".site-nav").addClass("site-nav-scroll");
    }else{
        $(".site-nav").removeClass("site-nav-scroll")
        setActive("home");

    }
})

function setActive(current){
    $(".nav-link").removeClass("current-section");
    $(`.nav-link[href = '#${current}']`).addClass("current-section");
}

function  navScroll() {
    let currentSection = $('section[id]');
    currentSection.waypoint(function (direction) {
        if (direction == "down") {
            let currentSectionId = $(this.element).attr('id');
            // console.log(currentSection)
            setActive(currentSectionId)
        }
    },{offset: '150px'});

    currentSection.waypoint(function (direction) {
        if (direction == "up") {
            let currentSectionId = $(this.element).attr('id');
            // console.log(currentSection)
            setActive(currentSectionId)
        }
    },{offset: '150px'});

}

navScroll();

$(window).on('load',function(){
    $(".loader-container").fadeOut(500, function(){
        $(this).remove();
    });
})


$('.counter').counterUp();