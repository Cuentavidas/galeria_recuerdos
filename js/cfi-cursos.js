
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

  addLabels();
  initIsotope();


  $(".clickable").click(function(){
    window.location=$(this).data("link");
  });

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

addLabels = function() {
  $(".label-general").text( "GENERALISTA");
  $(".label-iniciacion").text( "INICIACIÓN");
  $(".label-especial").text( "ESPECIALIZACIÓN");
}




function initIsotope() {
  // init Isotope
  // 
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
      getSortData: {
        name: '.card-titulo'
      },
      sortBy: 'name',
  });

  fNivel ="*";
  fArea ="*";
  // bind filter button click
  $('#filtroNivel').on( 'click', 'button', function() {
    fNivel = $( this ).attr('data-filter');
    if(fNivel=="*")
      $container.isotope({ filter: fArea });
    else
      $container.isotope({ filter: fNivel+fArea });
    $('#filtroNivel').children().removeClass("active");
    $(this).addClass("active");
  });

  $('#filtroArea').on( 'click', 'button', function() {
    fArea = $( this ).attr('data-filter');
    if(fArea=="*")
      $container.isotope({ filter: fNivel });
    else
      $container.isotope({ filter: fArea+fNivel });
    $('#filtroArea').children().removeClass("active");
    $(this).addClass("active");
  });
 
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
}
