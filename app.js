// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
// y crear un programa que permita agregar una lista de amigos.
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo.trim() === "") {
        alert("Por favor, ingresa un nombre.");
    } else {
        amigos.push(nombreAmigo);
        document.querySelector("#amigo").value = ''; // Limpia el campo de entrada
    mostrarListaAmigos();
    }
}
function mostrarListaAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista actual

    for (let index = 0; index < amigos.length; index++) {
        const amigo = amigos[index];
        let listaHtml = document.createElement("li");
        listaHtml.textContent = amigo;
        listaAmigos.appendChild(listaHtml);
   }
}

function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
        alert("No hay amigos para sortear.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * cantidadAmigos);
        let amigoSeleccionado = amigos[indiceAleatorio];
        alert("El amigo seleccionado es: " + amigoSeleccionado);
        amigos.splice(indiceAleatorio, 1); // Elimina el amigo seleccionado de la lista
        mostrarListaAmigos();
        resultado.textContent = "El amigo seleccionado es: " + amigoSeleccionado;
        
    }
}