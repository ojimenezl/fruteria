function copyAllProducts() {
    // Inicializar una cadena de texto para almacenar los productos listos
    let readyProducts = '';

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
    console.log(readyProducts);
     // Guardar los productos listos en el portapapeles
     navigator.clipboard.writeText(readyProducts)
     .then(() => alert('Productos Listos copiados al portapapeles'))
     .catch(err => console.error('Error al copiar al portapapeles:', err));
}
