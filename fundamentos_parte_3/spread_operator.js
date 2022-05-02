// spread operator

let lenguajes = ['Js','PHP','Phyton'];
let frameworks = ['React Js','Laravel','Django'];

let combinacion = lenguajes.concat(frameworks);
let combinacion_nueva = [...lenguajes, ...frameworks];

//copiando un arreglo
let lenguajes_copia = [...lenguajes].concat(1);

let [ultimo] = lenguajes.reverse();
console.log(ultimo)
console.log(lenguajes)
console.log(combinacion)
console.log(lenguajes_copia)

function suma(a,b,c){
    console.log(a+b+c);
}

const numeros = [1,2,3];
suma(...numeros);