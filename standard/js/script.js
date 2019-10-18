// 배너
$('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

// 버튼을 클릭하면 전체메뉴를 보이게 하세요
$(".tit .btn").click(function(e) {
    e.preventDefault();
    // $("#cont_nav").css("display", "block");
    // $("#cont_nav").show();
    // $("#cont_nav").fadeIn();
    // $("#cont_nav").slideDown();
    // $("#cont_nav").toggle();
    // $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle();
    $(this).toggleClass("on")
})