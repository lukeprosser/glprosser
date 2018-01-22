$(document).ready(function () {
    // $(".moreBox").slice(0, 3).show();
      // if ($(".blogBox:hidden").length != 0) {
      //   $("#loadMore").show();
      // }   
      $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".morePic:hidden").slice(0, 6).slideDown();
        if ($(".morePic:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
        }
    });
});