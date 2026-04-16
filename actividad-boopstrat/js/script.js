// BOTONES DE LAS CARDS PARA ABRIR LA MODAL
let botones = document.querySelectorAll(".btn-modal");

botones.forEach(boton => {
    boton.addEventListener("click", function() {
        let modal = new bootstrap.Modal(document.getElementById("miModal"));
        modal.show();
    })
});

// Validacion del formulario
document.getElementById("Login").addEventListener("submit", function(e) {
    e.preventDefault();

    let correo = document.getElementById("email").value
    let password = document.getElementById("Password").value
    let mensaje = document.getElementById("mensaje");
    const USER_DEFAULT = "prueba@gmail.com";
    const PASSWORD_DEFAULT = "192610";

    if (correo === "" || password === "") {
        mensaje.innerHTML = "Todos los campos son obligatorios";
        mensaje.className = "text-warning";
    } else if (correo === USER_DEFAULT && password === PASSWORD_DEFAULT) {
        mensaje.innerHTML = "Bienvenido al sistema";
        mensaje.className = "text-success";
    } else {
        mensaje.innerHTML = "Error al procesar los datos";
        mensaje.className = "text-danger";
    }
});