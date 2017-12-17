
$(document).ready(function(){
  // Load header
  $("#header").load("header.html", function() {
    menuActiveItem();
    $('.nav li.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });

    $('.dropdown-toggle').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });

  });


  // $.get("/navmenu.html", function(data) {
  //    $("#navmenu").replaceWith(data);
  // });
  // Make table rows with links clickable
  // clickableTableRows();
   
  share();

  // $( "ol.temario li" ).wrapInner( "<span></span>");
  
  $(".clickable").click(function(){
    window.location=$(this).data("link");
  });

  $("#normativa-anual").change(function() {
        $("#matricula-anual").toggleClass("disabled");
  });
  $("#normativa-ecv").change(function() {
        $("#matricula-ecv").toggleClass("disabled");
  });

  $("#normativa-anual-content").load('normativa-anual-content.html');
  $("#normativa-ecv-content").load('normativa-ecv-content.html');


});

function menuActiveItem() {
  var activeItemIx = $("#activeMenu").attr("index");
  if (activeItemIx) {
    console.log(activeItemIx);
    $("#menu-buttons>li").each(function(i, elem) {
      $(elem).removeClass( 'active' );
      if (i==activeItemIx) {
        $(elem).addClass( 'active' );
      }
    })
  }

}


function share(){
	var hashtag = $("#share").attr("hashtag");
	var url = document.URL;//$("#share").attr("url");
	var title = $('h1').text();
	var desc = $('#descripcion').text().trim();
	// console.log(desc);
    //$("#share").load("share.html");
    $.get("share.html",function(data,status){

    	var newdata =  data.replace(new RegExp('URL', 'g'), url);
      newdata =  newdata.replace(new RegExp('HASH', 'g'), hashtag);
      newdata =  newdata.replace(new RegExp('TITLE', 'g'), title);
      newdata =  newdata.replace(new RegExp('DESC', 'g'), desc);

      $('#share').replaceWith(newdata);
    });
};

function clickableTableRows() {
  $('tbody>tr').click( function() {
    var link = $(this).find('a');
    if (link.length > 0)
      window.location = link.attr('href');
  })
}
