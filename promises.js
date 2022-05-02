// promesas


const aplicarDescuento = new Promise((resolve,reject) =>{
    setTimeout( ()=>{
        let descuento = true;

        if(descuento){
            resolve('Descuento aplicado');
        }else{
            reject('No se puede aplicar el descuento');
        }
    },3000);
})

aplicarDescuento.then( resultado =>{
    console.log(resultado);
})