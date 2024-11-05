
// funcion para escuchar un evento
function iniciarFormulario() {
    const form = document.getElementById('empezarencargue'); // toma el formulario por id
    if (form) {
        form.addEventListener('submit', enviarDatos); // asocia el evento 'submit' al formulario
    }
}
//funcion para enviar datos

function enviarDatos(event) {
    event.preventDefault(); // Evita el envío del formulario

    // valores del formulario
    const email = document.getElementById('email').value; //importante naturalizar sintaxis, se usa asi siempre para tomar elementos
    const size = document.getElementById('size').value;
    const papel = document.getElementById('papel').value;
    const archivo = document.getElementById('archivo').value;

    // objeto con los datos
    const data = { email, password };
    console.log(data);  // Mostrar los datos en la consola

    // respuesta exitosa
    console.log('Datos enviados correctamente'); // imprime en consola, se ve apretando f12 en el navegador y yendo a consola
    alert('Datos enviados correctamente para el email: ' + email); // Muestra msj en navegador 
    window.location.href = 'nuevo.html';
    }
