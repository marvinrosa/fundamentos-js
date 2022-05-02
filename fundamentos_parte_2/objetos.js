//Obejtos se usan siempre con llaves

// Forma más común, objeto literal (object literal)

let nombre = 'Marvin';
let profesion = 'Desarrollador Web';

console.log(nombre);
console.log(profesion);

// forma correcta de trabajar con esa información

const persona = {
    nombre:'Marvin',
    profesion:'Desarrollador Web'
}

const persona_nueva = {
    nombre:'Steven',
    profesion:'Full Stack Developer'
}
// persona
console.log(persona.nombre +" , "+ persona.profesion);
console.log(persona['nombre'] +" , "+ persona['profesion']);

// persona_nueva
console.log(persona_nueva.nombre +" , "+ persona_nueva.profesion);

// Arreglo de objetos
const profesional = [
    {
        nombre:'Marvin',
        profesion:'Desarrollador Web'
    },
    {
        nombre:'Steven',
        profesion:'Full Stack Developer'
    }
];

profesional.map(profesion => profesion.nombre + " - " + profesion.profesion);

console.log(profesional.map(profesion => profesion['nombre'] + " - - " + profesion['profesion']));

