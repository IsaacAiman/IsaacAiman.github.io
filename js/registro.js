function registrar() {
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("correo").value, document.getElementById("contraseña1").value).catch(
        function(error) { 
            var errorCode = error.code;
            var errorMessage = error.message;

        });
}

function envio_formulario() {
    window.location.href = "envio_formulario.html";
}

function Verifica() {
    if (/^[a-zA-Z]+$/.test(document.getElementById("nombre").value) == false) {
        alert("Rellena el nombre corectamente.");
        return false;
    }
    if (/^[a-zA-Z]+$/.test(document.getElementById("apellido1").value) == false) {
        alert("Rellena el primer apellido correctamente.");
        return false;
    }
    if ((/^[a-zA-Z]+$/.test(document.getElementById("apellido2").value) == false)) {
        alert("Rellena el segundo apellido correctamente");
        return false;
    }
    if (/^[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]+[@][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]+[.][a-zA-Z]+$/.test(document.getElementById("correo").value) == false) {
        alert("Rellena el correo correctamente.");
        return false;
    }
    if ((document.getElementById("contraseña1").value) != (document.getElementById("contraseña2").value)) {
        alert("Las contraseñas no coinciden.");
        return false;
    }
    if ((document.getElementById("listado").value) == "1") {
        alert("Selecciona una opción válida de la lista.");
        return false;
    }
    //cerrar();
    setTimeout(registrar, 200);
    setTimeout(envio_formulario, 900);


    return true;
}
