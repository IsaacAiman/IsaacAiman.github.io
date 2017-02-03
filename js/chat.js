//Para darle al "Enter" y que el mensaje se envíe.
$(document).ready(function() {
    $('.message').keydown(function(event) {
        if (event.keyCode == 13) {
            this.form.reset();
            return false;
        }
    });
});

//Función para enviar los mensajes a Firebase.
function send() {
    document.getElementById('mensaje-form').addEventListener('submit',
        (postRef.push({
            name: firebase.auth().currentUser.email,
            text: document.getElementById('mensaje').value
        })));
    return false;
}

//Función para que los mensajes aparezcan al final del div y el scroll esté siempre situado al final.
function scroll() {
    var elem = document.getElementById('mensaje-filler');
    elem.scrollTop = elem.scrollHeight;

}
