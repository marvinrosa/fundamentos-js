const personas =[
    {nombre:'Marvin', edad:23, aprendiendo:'Laravel'},
    {nombre:'Miguel', edad:26, aprendiendo:'Java'},
    {nombre:'Raul', edad:18, aprendiendo:'Pyhton'},
    {nombre:'Daniela', edad:19, aprendiendo:'React Js'},
    {nombre:'Amilcar', edad:58, aprendiendo:'Adobe XD'},
    {nombre:'Ursula', edad:39, aprendiendo:'Cisco'}
];

//console.log(personas)

// personas mayores de 28

const mayores = personas.filter( persona =>{
    return persona.edad > 28;
})

console.log(mayores);

// que esta aprendiendo alguien en especifico y edad

const per = personas.find( persona =>{
    return persona.nombre === 'Daniela';
})

console.log(per)

// total de las edades

const totalEdad = personas.reduce( (edadTotal,persona) =>{
    return edadTotal + persona.edad;
},0)

console.log(totalEdad)