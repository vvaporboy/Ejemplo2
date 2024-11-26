
// funcion para escuchar un evento
function iniciarFormulario() {
    const form = document.getElementById('empezarencargue');
    if (form) {
        form.addEventListener('submit', enviarDatos);
    }
}
//funcion para enviar datos

function enviarDatos(event) {
    event.preventDefault(); // Evita el envío del formulario
   
    // valores del formulario
    const archivo = document.getElementById('archivo').value;
    const size = document.getElementById('size').value;
    const papel = document.getElementById('papel').value;
    const cantidad = document.getElementById('cantidad').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const domicilio = document.getElementById('domicilio').value;
    const codigopostal = document.getElementById('codigopostal').value;
    // objeto con los datos
    const data = { archivo, size, papel, cantidad, email, telefono, domicilio, codigopostal };
    console.log(data);

    // respuesta exitosa
    console.log('Datos enviados correctamente'); // imprime en consola, se ve apretando f12 en el navegador y yendo a consola
    alert('Datos enviados correctamente para el email: '); // Muestra msj en navegador 

    }
    function submit(){
    window.location.href = 'encargoenviado.html';
    }
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
        throw new Error('Credenciales incorrectas');
    }
    return response.text();
})
.then(data => {
    window.location.href = '/encargoenviado';
})
.catch(error => {
    mostrarErrorModal(error.message);
});

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