document.addEventListener("DOMContentLoaded", function() {
    const altaForm = document.getElementById("alta-form");
    const contactoForm = document.getElementById("contacto-form");

    if (altaForm) {
        altaForm.addEventListener("submit", function(event) {
            // Add validation logic for alta form
            // Example: Validate that all required fields are filled
            const nombre = document.getElementById("nombre").value;
            const precio = document.getElementById("precio").value;
            // ...other fields...

            if (!nombre || !precio /* ...other validations... */) {
                event.preventDefault();
                alert("Por favor, complete todos los campos obligatorios.");
            }
        });
    }

    if (contactoForm) {
        contactoForm.addEventListener("submit", function(event) {
            // Add validation logic for contacto form
            // Example: Validate email format
            const email = document.getElementById("email").value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                event.preventDefault();
                alert("Por favor, ingrese un correo electrónico válido.");
            }
        });
    }
});