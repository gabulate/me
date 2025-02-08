function ShowImage() {
    const highlight = document.querySelector('.carouselImg');
    const thumbnails = document.querySelectorAll('.thumbnail img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const source = this.src;
            highlight.src = source;
        })
    })
}