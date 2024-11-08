
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
    window.location.href = 'encargoenviado.html';

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
    alert('Datos enviados correctamente para el email: ' + email); // Muestra msj en navegador 

    }
