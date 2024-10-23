        // Función para mostrar/ocultar especificaciones
        function toggleSpecs(category) {
            const specsContainer = document.getElementById(`${category}-specs`);
            const currentDisplay = specsContainer.style.display;
            specsContainer.style.display = currentDisplay === 'block' ? 'none' : 'block';
        }

        // Manejador del formulario
        document.getElementById('consultaForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu consulta! Te contactaremos pronto.');
            this.reset();
        });