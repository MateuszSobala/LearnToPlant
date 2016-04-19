function show_modal(i) {
    if (i.id == "0") {
        $(".modal-header").append("<button type=\"button\" class=\"close\" data-dismiss=\"modal\" >&times;</button><h4 class=\"modal-title\">Lekcja 1</h4>");
        //$(".modal-body").append("<iframe src=\"http://www.youtube.com/embed/XGSy3_Czz8k\"></iframe>");
        $("#modal-body-left").append("<img src=\"http://cdn28.ogrod.smcloud.net/s/photos/t/7516/pomidory_w_donicach_707343.jpg\" style=\" width:430px;\">");
        $("#modal-body-right").append("<p>Pomidor Pomidor Pomidor Pomidor</p>");
        $(".modal-footer").append("<button type=\"button\" class=\"btn btn-default\">Next</button><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>");
        $("#myModal").modal();
    }
    else if (i.id == "1") {
        $(".modal-header").append("<button type=\"button\" class=\"close\" data-dismiss=\"modal\" >&times;</button><h4 class=\"modal-title\">Lekcja 2</h4>");
        $(".modal-body").append("<div class=\"col-md-12\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/rPqUbN7zQqo\"></iframe><p>Pomidor Pomidor</p></div>");
        $(".modal-footer").append("<button type=\"button\" class=\"btn btn-default\">Next</button><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>");
        $("#myModal").modal();
    }
    else if (i.id == "2") {
        $(".modal-header").append("<button type=\"button\" class=\"close\" data-dismiss=\"modal\" >&times;</button><h4 class=\"modal-title\">Lekcja 3</h4>");
        $(".modal-body").append("<p>Some text about lesson.</p>");
        $(".modal-footer").append("<button type=\"button\" class=\"btn btn-default\">Next</button><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>");
        $("#myModal").modal();
    }
};

$("#myModal").on('hidden.bs.modal', function () {
    $(".modal-header").empty();
    $(".modal-body").empty();
    $(".modal-body").append("<div class=\"col-md-6\" id=\"modal-body-left\"></div><div class=\"col-md-6\" id=\"modal-body-right\"></div>");
    $(".modal-footer").empty();
});