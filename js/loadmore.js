$(document).ready(function () {
    // $(".moreBox").slice(0, 3).show();
      // if ($(".blogBox:hidden").length != 0) {
      //   $("#loadMore").show();
      // }
      // Add click event to load more button
      $("#loadMore").on('click', function (e) {
        // Prevent default functionality
        e.preventDefault();
        // Select hidden images and reveal 6
        $(".morePic:hidden").slice(0, 6).slideDown();
        // If no more hidden images
        if ($(".morePic:hidden").length == 0) {
          // Fade out load more button
          $("#loadMore").fadeOut('slow');
        }
    });
});
