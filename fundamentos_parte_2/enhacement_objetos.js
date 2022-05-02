// esto es lo contrario al Destructuring (extrae)
// Object literal Enhacement

const banda = 'Mana';
const genero = 'Rock';
const canciones = ['Labios compartidos','Mariposa traicionera','Mandame una señal'];

// forma antigua
// const Mana = {
//     banda : banda,
//     genero : genero,
//     canciones : canciones
// }

// console.log(Mana);

// forma nueva de union de objetos
const mana = {
    banda,
    genero,
    canciones
}

console.log(mana);