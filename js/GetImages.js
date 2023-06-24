
var folder = "img/gallery/";

function LoadImages (i) {

    var xhr = new XMLHttpRequest()
    xhr.open('GET', folder + i + ".jpg", true)

    xhr.onload = (e) => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            $("#gallery").append(
                "<div class='col-md-auto'>" +
                "<div class='thumbnail' data-bs-toggle='modal' data-bs-target='#galleryModal'>" +
                "<img src='" + folder + i + ".jpg" + "' data-bs-target='#carousel' data-bs-slide-to='0'>" +
                "</div>" +
                "</div>"
            );
            document.getElementById("Loading").innerHTML = "Loading... "+ i;
            
            LoadImages(i+1)
          } else {
            ShowImage();
            document.getElementById("Loading").innerHTML = "";
          }
        }
      };
      xhr.onerror = (e) => {
        
      };

    xhr.send(null);
}
LoadImages(1);

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


