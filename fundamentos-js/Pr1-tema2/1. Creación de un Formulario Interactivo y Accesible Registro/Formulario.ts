/*Parte 3 del ejercicio- Implementacion del ts en el formulario*/

/*Funcion para validar el formulario al enviarlo*/
const formulario = document.getElementById('registroForm') as HTMLFormElement;

// Función que se ejecute al intentar enviar el formulario
function validarFormulario() : boolean {
    const terminosCheckbox = document.getElementById('terminos') as HTMLInputElement;

    // 1. Validación de Contraseña
    if (!validarConfirmacionContrasena()) {
        return false;
    }

    // 2. Validación de Términos y Condiciones
    if (!terminosCheckbox.checked) {
        alert('Debes aceptar los términos y condiciones.');
        return false;
    }

    // La Lógica Condicional la comprobamos con el 'required' de HTML5)

    return true; // Todas las validaciones son correctas
}

formulario.addEventListener('submit', (event) => {
    if (!validarConfirmacionContrasena()) {
        event.preventDefault(); // Valida si el formulario es correcto antes de enviarlo
    }
});


/*Funcion para validar la confirmación de la contraseña*/
function validarConfirmacionContrasena() {
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        return false;
    }
    return true;
}

/*Terminos y condiciones */
const terminosCheckbox = document.getElementById('terminos') as HTMLInputElement;
const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
terminosCheckbox.addEventListener('change', () => {
    submitButton.disabled = !terminosCheckbox.checked;
});

/*Logica Condicional*/
const tipoEntradaSelect = document.getElementById('tipoEntrada') as HTMLSelectElement;
const comprobanteInput = document.getElementById('comprobante') as HTMLInputElement;
tipoEntradaSelect.addEventListener('change', () => {
    if (tipoEntradaSelect.value === 'estudiante') {
        comprobanteInput.required = true;
    } else {
        comprobanteInput.required = false;
    }
});
