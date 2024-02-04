// include Header
$(function () {
    $("#header").load("layout/header.html");
    $("#footer").load("layout/footer.html");
});
// include Header
// header color change
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 70) {
            $(".NavbarMain").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".NavbarMain").removeClass("active");
        }
    });
});
// header color change

// owl
$('.slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    autoHeightClass: 'owl-height',
    nav: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// 
const readMoreButton = document.getElementById("readMoreButton");
const hiddenParagraphs = document.querySelector(".hidden-paragraphs");

let isOpen = false; // Variable to track the state

readMoreButton.addEventListener("click", function () {
  if (!isOpen) {
    hiddenParagraphs.style.maxHeight = "1000px"; // Set a large max-height value to show the paragraphs
    readMoreButton.textContent = "Read Less";
  } else {
    hiddenParagraphs.style.maxHeight = "0"; // Set max-height back to 0 to hide the paragraphs
    readMoreButton.textContent = "Read More";
  }
  isOpen = !isOpen; // Toggle the state
});
const readMoreButton2 = document.getElementById("readMoreButton2");
const hiddenParagraphs2 = document.querySelector(".hidden-paragraphs2");

let isOpen2 = false; // Variable to track the state

readMoreButton2.addEventListener("click", function () {
  if (!isOpen2) {
    hiddenParagraphs2.style.maxHeight = "1000px"; // Set a large max-height value to show the paragraphs
    readMoreButton2.textContent = "Read Less";
  } else {
    hiddenParagraphs2.style.maxHeight = "0"; // Set max-height back to 0 to hide the paragraphs
    readMoreButton2.textContent = "Read More";
  }
  isOpen2 = !isOpen2; // Toggle the state
});







