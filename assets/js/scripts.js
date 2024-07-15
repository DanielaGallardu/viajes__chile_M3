const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('a.nav-link').click(function (event) {
    if (this.hash !== '') {
        event.preventDefault()
        const idTag = this.hash
        console.log(this.hash)
        $('html, body').animate(
            {
                scrollTop: $(idTag).offset().top
            },
            1000,
            function () {
                window.location.hash = idTag
            }
        )
    }
})
$("#enviarCorreo").click(function () {
    const nombre = $('#inputNombre').val();
    const asunto = $('#inputAsunto').val();
    const mensaje = $('#textArea').val();

    if (nombre === '') {
        alert('Por favor, completa el campo de nombre.');
        return false;
    } else if (asunto === '') {
        alert('Por favor, completa el campo de asunto.');
        return false; 
    } else if (mensaje === '') {
        alert('Por favor, completa el campo de mensaje.');
        return false; 
    } else {
        alert("El correo fue enviado correctamente");
        
    }

});

$(".img-carta").dblclick(function () {
    $(".card-text, .card-title").toggle();
});
