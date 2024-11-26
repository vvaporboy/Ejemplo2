
// funcion para escuchar un evento
function iniciarFormulario() {
    const form = document.getElementById('empezarencargue');
    const form2 = document.getElementById('empezarencargue2');
    if (form && form2) {
        form.addEventListener('submit', enviarDatos);
    }
}
//funcion para enviar datos
function enviarDatos(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Capturar valores del formulario
    const archivo = document.getElementById('archivo').value;
    const size = document.getElementById('size').value;
    const papel = document.getElementById('papel').value;
    const cantidad = document.getElementById('cantidad').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const domicilio = document.getElementById('domicilio').value;
    const codigopostal = document.getElementById('codigopostal').value;

    // Crear un objeto con los datos
    const data = { archivo, size, papel, cantidad, email, telefono, domicilio, codigopostal };

    // Imprimir los datos en consola 
    console.log(data);

    // Enviar los datos al servidor
    fetch('/encargarimpresion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Asegúrate de que es JSON
        },
        body: JSON.stringify(data), // Convertir el objeto en una cadena JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Hubo un error al enviar los datos');
        }
        return response.text();
    })
    .then(data => {
        console.log(data); // Puedes ver la respuesta del servidor aquí (si hay alguna)
        alert('Datos enviados correctamente para el email: ' + email); // Mensaje con el email
        window.location.href = '/encargoenviado'; // Redirigir a otra página
    })
    .catch(error => {
        console.error(error);
        alert('Error al enviar los datos: ' + error.message); // Mostrar el error en caso de fallo
    });
}


// Función para mostrar el modal con el error
function mostrarErrorModal(mensaje) {
const modal = document.getElementById('miModal');
const modalMessage = document.getElementById('modal-message');
modalMessage.textContent = mensaje;
modal.style.display = 'block'; // Mostrar el modal
}

// Función para cerrar el modal
function cerrarModal() {
const modal = document.getElementById('miModal');
modal.style.display = 'none'; // Ocultar el modal
}


function volver() {
window.location.href = 'encargarimpresion.html';
}