
function toggle() {
    const modal = document.querySelector('#modal');
    modal.classList.toggle("active");

    const video = document.querySelector('#video');
    video.pause();
    video.currentTime= 0;
}

