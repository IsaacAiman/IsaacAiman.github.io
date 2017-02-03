function cerrar() {
    firebase.auth().signOut().then(function() {
            console.log('Signed Out');
        },
        function(error) {
            console.error('Sign Out Error', error);
        });
    acceso();
}


function acceso() {
    firebase.auth().signInWithEmailAndPassword(document.getElementById("login_email").value, document.getElementById("login_contraseña").value);
}

function usuario() {

    var user = firebase.auth().currentUser;
    if (user) {
        alert("Ha iniciado sesión correctamente");
        window.location.href = "iniciado.html";
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
}

function login() {
    cerrar();
    setTimeout(acceso, 100);
    setTimeout(usuario, 1000);
}

function cerrar_sesion() {
    firebase.auth().signOut().then(function() {
            console.log('Signed Out');
        },
        function(error) {
            console.error('Sign Out Error', error);
        });
    window.location.href = "inicio.html";
}
