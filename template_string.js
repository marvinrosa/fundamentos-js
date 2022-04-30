// template Strings

const nombre = 'Marvin';
const trabajo = 'Desarrollador Web';

// Forma antigua, concatenando con Js
console.log('Nombre ' + nombre + ', Trabajo ' + trabajo);

// Nueva forma
console.log(`\n-> Nombre ${nombre}, Trabajo ${trabajo}`);

// Concatenar con multiples lineas

let html = '<ul>'+
                '<li>'+ 'Nombre:'+ nombre + '</li>'+
                '<li>'+ 'Nombre:'+ nombre + '</li>'+
            '</ul>';

let htmljs = `<ul>
                <li> Nombre : ${nombre} </li>
                <li> Trabajo : ${trabajo} </li>
            </ul>`;

console.log(htmljs);