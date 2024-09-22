document.querySelector('.refresh-button').addEventListener('click', function () {
    location.reload();  // Recarga la página actual
});
function copyAllProducts() {
    // Inicializar una cadena de texto para almacenar los productos listos
    let readyProducts = '';
    let titulo = 'Pedido La Rollerie Carrera de San Jerónimo 26 para mañana:\n\n'

    // Obtener todas las filas de la tabla
    const rows = document.querySelectorAll('.table tbody tr');

    // Iterar sobre todas las filas y obtener el título y la cantidad de cada producto listo
    rows.forEach(row => {
        
        const productTitle = row.querySelector('.producto').innerText.trim();
        const productQuantity = row.querySelector('.cantidad').innerText.trim();
        const productStatus = row.querySelector('.acciones button').querySelector('i').className;
        // Verificar si el producto está marcado como "Listo"
        if (productStatus === 'fas fa-check') {
            readyProducts += `${productTitle}: (${productQuantity})\n`;
        }
    });

    // Imprimir los productos listos en la consola
    console.log(titulo + readyProducts);
    // Guardar los productos listos en el portapapeles
    navigator.clipboard.writeText(titulo + readyProducts)
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "La lista esta ahora en tu portapapeles",
                showConfirmButton: false,
                timer: 4000
            });
        })
        .catch(err => console.error('Error al copiar al portapapeles:', err));

}

function deleteProduct(id) {
    swal.fire({
        title: '¿Estás seguro?',
        text: '¡Se eliminará para siempre!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, redirige manualmente a la ruta de eliminación
            console.log(id);
            window.location.href = `/tasks/${id}/delete`;
        }
    });
}



///ajax
document.addEventListener("DOMContentLoaded", function () {
    // Lógica para los botones de "done"
    const doneButtons = document.querySelectorAll(".toggle-done-button");
    doneButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskId = this.getAttribute("data-id");
            toggleTaskStatus(taskId, this, '/tasks/' + taskId + '/toggleDone', 'btn-success', 'btn-dark', '<i class="fas fa-check"></i>', '<i class="fas fa-plus"></i>');
        });
    });

    // Lógica para los botones de "pedido"
    const pedidoButtons = document.querySelectorAll(".toggle-pedido-button");
    pedidoButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskId = this.getAttribute("data-id");
            toggleTaskStatus(taskId, this, '/tasks/' + taskId + '/togglePedidos', 'btn-warning', 'btn-secondary', 'Pedir','<i class="fas fa-check"></i>');
        });
    });

    // Función generalizada para alternar el estado de cualquier botón
    function toggleTaskStatus(taskId, button, url, activeClass, inactiveClass, activeText, inactiveText) {
        fetch(url, { method: "POST" })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
    
                // Cambiar la clase del botón "Pedir"
                button.classList.toggle(activeClass);
                button.classList.toggle(inactiveClass);
    
                // Cambiar el texto del botón "Pedir"
                const buttonContent = button.innerHTML.trim();
                if (buttonContent === activeText) {
                    button.innerHTML = inactiveText;  // Aquí colocamos el icono
                    button.setAttribute("data-comentario", "Pedir");  // Actualizar el atributo data-comentario
                } else {
                    button.innerHTML = activeText;  // Aquí colocamos el texto
                    button.setAttribute("data-comentario", "");  // Actualizar el atributo data-comentario
                }
    
                // Obtener el comentario desde el atributo data-comentario
                const comentarioText = button.getAttribute("data-comentario");
                
                // Actualizar el comentario en la celda correspondiente
                const comentarioCell = button.closest('tr').querySelector('.comentario'); // Busca la celda dentro de la misma fila
                if (comentarioCell) {
                    comentarioCell.textContent = comentarioText; // Actualiza el texto de la celda
                }
    
                // Aquí actualizamos el ícono del segundo botón (el reloj)
                const relojButton = button.closest('tr').querySelector('.toggle-reloj-button');
                if (relojButton) {
                    const relojIcon = relojButton.querySelector('i');
                    if (relojIcon.classList.contains('fa-hourglass-start')) {
                        // Si el icono actual es de reloj, lo cambiamos a check
                        relojIcon.classList.remove('fa-hourglass-start');
                        relojIcon.classList.add('fa-check');
                        relojIcon.style.color = '#1ae3aa'; // Cambiar color a verde
                    } else {
                        // Si es un check, lo cambiamos a reloj
                        relojIcon.classList.remove('fa-check');
                        relojIcon.classList.add('fa-hourglass-start');
                        relojIcon.style.color = '#5d6af4'; // Cambiar color a azul
                    }
                }
    
                console.log("Estado del producto y reloj cambiados exitosamente");
            })
            .catch(error => {
                console.error("Hubo un problema al cambiar el estado del producto:", error);
            });
    }
    

});

