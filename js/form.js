
$(document).ready(function(){
    var algo = 0;
    var precio = 0;
    $("#tipo").change(function() {
        $("#centro").prop('disabled', this.value==5);
        $("#carrera").prop('disabled', this.value==5);
        $("#emailUCM").prop('disabled', this.value==5);      
    });

    $('input[type="checkbox"]').change(function() {
      valor = 90;
      if(this.id=="cofimatica")
        valor = 0;
      if(this.id=="csoftlibre")
        valor = 0;
      if(this.checked) {
        precio += valor;
        algo++;
      }
      else {
        precio -= valor;
        algo--;
      }
      $('#precio').val(precio);
      console.log(precio);
      console.log(algo);
    });

});

