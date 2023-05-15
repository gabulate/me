//Function that displays all of the images placed in the galley folder
//so I don't have to add changes to the html each time I add want to add
//a new drawing

var folder = "/img/gallery/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if(val.length > 12){
                $("#gallery").append(
                     "<div class='col-md-auto'>" +
                    "<div class='thumbnail' data-bs-toggle='modal' data-bs-target='#galleryModal'>" +
                        "<img src='" + val + "' data-bs-target='#carousel' data-bs-slide-to='0'>" +
                    "</div>" +
                "</div>"
                );
            }
        });
        ShowImage();
    }
});
