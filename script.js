// header search
let headerEventClicks = document.getElementsByClassName('header__event--click');
let headerEventDisplays = document.getElementsByClassName('header__event--display');

Array.from(headerEventClicks).forEach(function(headerEventClick, index) {
    headerEventClick.addEventListener('click', function(event) {
        event.stopPropagation(); // ngăng chặn sự kiện click lan ra ngoài
        let headerEventDisplay = headerEventDisplays[index];
        let currentDisplay = window.getComputedStyle(headerEventDisplay).display;
        if(currentDisplay === "none") {
            headerEventDisplay.style.display = "block"
        } else {
            headerEventDisplay.style.display = "none"
        }
    });

});

// Sự kiện click trên document để ẩn headerEventDisplay khi nhấp ra ngoài
document.addEventListener('click', function(event) {
    Array.from(headerEventDisplays).forEach(function(headerEventDisplay, index) {
        if (!headerEventDisplay.contains(event.target) && !headerEventClicks[index].contains(event.target)) {
            headerEventDisplay.style.display = 'none';
        }

    })
});