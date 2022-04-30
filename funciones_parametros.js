
// function declaration
function agregarProducto(nombreProducto='TV SAMSUNG'){
    console.log('Agregando el producto ' + nombreProducto);
}

agregarProducto()


// Parametros por defecto
// Express Function
const producto = function(nombreProducto = 'TV'){
    console.log(`Mostrando el producto ${nombreProducto}`)
}

producto()