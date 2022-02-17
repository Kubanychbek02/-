//banner
$(".dropdown-item").click(function () {
    $(".banner__modal").toggleClass("banner-active")
})

$(".banner__modal-btn-x").click(function () {
    $(".banner__modal").toggleClass("banner-active")
})

// products
$(".products__btns-2").click(function () {
    $(".products__modal").toggleClass("products-active")
})

$(".products__modal-btn-x").click(function () {
    $(".products__modal").toggleClass("products-active")
})

// finance
$(".finance__card").click(function () {
    $(".finance__modal").toggleClass("finance-active")
})

$(".finance__modal-btn-x").click(function () {
    $(".finance__modal").toggleClass("finance-active")
})

// libs
$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3
        ,
        slidesToScroll: 1
    });
});

$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    })
})

function initMap() {
    const uluru = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}