function copyAllProducts() {
    // Inicializar una cadena de texto para almacenar los productos listos
    let readyProducts = '';
    let titulo='Pedido La Rollerie Carrera de San Jerónimo 26 para mañana:\n\n'

    // Obtener todas las filas de la tabla
    const rows = document.querySelectorAll('.table tbody tr');

    // Iterar sobre todas las filas y obtener el título y la cantidad de cada producto listo
    rows.forEach(row => {
        const productTitle = row.querySelector('.producto').innerText.trim();
        const productQuantity = row.querySelector('.cantidad').innerText.trim();
        const productStatus = row.querySelector('.acciones a').innerText.trim();

        // Verificar si el producto está marcado como "Listo"
        if (productStatus === 'Listo') {
            readyProducts += `${productTitle}: (${productQuantity})\n`;
        }
    });

    // Imprimir los productos listos en la consola
    console.log(titulo+readyProducts);
     // Guardar los productos listos en el portapapeles
     navigator.clipboard.writeText(titulo+readyProducts)
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

function deleteProduct(id){
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