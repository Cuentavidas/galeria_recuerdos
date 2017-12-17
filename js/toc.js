$(document).ready(function(){
  var ToC =
    "<nav role='navigation' class='toc'>" +
    "  <h3>Contenidos</h3>" +
      "<ul>";

  var newLine, el, title, link;

  $("h1").each(function() {

    el = $(this);
    title = el.text();
    link = "#" + el.attr("id");

    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";

    ToC += newLine;

  });

  ToC +=
     "</ul>" +
    "</nav>";

  $(".cfi-sidebar").append(ToC);

  scrollToTop();
});


function scrollToTop() {
   $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });

    $('#to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }); 
}
