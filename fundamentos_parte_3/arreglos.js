// arreglos y .map


const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

carrito.forEach( producto =>{
    console.log(`\n ${producto}`);
})

carrito.map( (producto, id) =>{
    console.log(`\n ${id} - ${producto}`);
})

const alumnos = [
    {
        id:1,
        nombre:'Marvin',
        profesion:'Desarrollador Web'
    },
    {
        id:2,
        nombre:'Steven',
        profesion:'Desarrollador Web'
    }
]

alumnos.map(alumno => console.log(`\n - ${alumno.nombre}`))


