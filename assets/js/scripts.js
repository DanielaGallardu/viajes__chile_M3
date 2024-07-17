$(document).ready(function() {
    // Inicializa tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('.nav-link').click(function(event) {
        event.preventDefault();
        var targetId = $(this).attr('href').substring(1);
        var targetElement = $('#' + targetId);
        $('html, body').animate({
            scrollTop: targetElement.offset().top
        }, 'slow');
    });
    
    // Previene el comportamiento predeterminado del formulario
    $('#form-contact').submit(function(event) {
      event.preventDefault();
      // Check each input and textarea

    if ($("#nombre-input").val() === '') {
        alert("Debe completar el nombre")
    }
    else if ($("#email-input").val() === '') {
        alert("Debe completar el correo")
    }
    else if ($("#mensaje-input").val() === '') {
        alert("Debe completar el mensaje")
    }
    else if (!$('#flexCheckDefault').is(':checked')) {
        alert("Debe aceptar los términos y condiciones")
    }else{
        alert("Su mensaje ha sido enviado")
    }

      



    });
  });
  