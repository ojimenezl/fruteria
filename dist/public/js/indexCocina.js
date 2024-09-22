document.querySelector('.refresh-button').addEventListener('click', function () {
    location.reload();  // Recarga la página actual
});
function copyAllProductsCocina() {
    console.log("aquii");
    
    // Inicializar una cadena de texto para almacenar los productos listos
    let readyProducts = '';
    let titulo = 'Hola:)! Este es el pedido de COCINA de La Rollerie :\n\n'

    // Obtener todas las filas de la tabla
    const rows = document.querySelectorAll('.table tbody tr');

    // Iterar sobre todas las filas y obtener el título y la cantidad de cada producto listo
    rows.forEach(row => {
        
        const productTitle = row.querySelector('.producto').innerText.trim();
        const productQuantity = row.querySelector('.comentario').innerText.trim();
        const productStatus = row.querySelector('.pedidos').querySelector('i').className;
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
                title: "Copiado",
                text: "Puedes pegarlo ahora en Whatsapp.",  // Este es el subtítulo
                showConfirmButton: false,
                timer: 6000
            });            
        })
        .catch(err => console.error('Error al copiar al portapapeles:', err));

}

///ajax


