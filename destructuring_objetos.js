// Destructuring


const aprendiendoJS = {
    version:{
        nueva:'ES6',
        anterior:'ES5'
    },
    frameworks:['React','Vue Js','Angular Js']
}

//console.log(aprendiendoJS)

// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks;


let { nueva, anterior } = aprendiendoJS.version;

console.log(nueva, anterior)

let { frameworks } = aprendiendoJS;

console.log(frameworks)