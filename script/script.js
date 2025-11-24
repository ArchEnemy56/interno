//search
function openModal() {
    document.getElementById("overlay").style.top = "0px";
} function closeModal() {
    document.getElementById("overlay").style.top = "-100vh";
}

//Swiper

var swiper = new Swiper(".swiperFeedback", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    speed: 1200,
    loop: true, 
});

//checkbox

const checkbox = document.getElementById('myCheckbox');

checkbox.addEventListener('click', function() {
    if (this.classList.contains('checked')) {
    this.classList.remove('checked');
    } else {
    this.classList.add('checked');
    }
});