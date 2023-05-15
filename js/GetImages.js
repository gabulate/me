
var folder = "img/gallery/";
var i = 1;
while (i <= 30) {

    var http = new XMLHttpRequest()
    http.open('HEAD', folder + i + ".jpg", false)
    http.send()
    if (http.status === 200) {

        $("#gallery").append(
            "<div class='col-md-auto'>" +
            "<div class='thumbnail' data-bs-toggle='modal' data-bs-target='#galleryModal'>" +
            "<img src='" + folder + i + ".jpg" + "' data-bs-target='#carousel' data-bs-slide-to='0'>" +
            "</div>" +
            "</div>"
        );
    } else {
        i = 99999;
    }

    i++;
}


function ShowImage() {
    const highlight = document.querySelector('.carouselImg');
    const thumbnails = document.querySelectorAll('.thumbnail img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const source = this.src;
            highlight.src = source;
            console.log(thumbnail);
        })
    })
}

ShowImage();

