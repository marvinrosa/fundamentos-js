
// // Función par - even function
// const even = ( n ) => {
//     if( (n/2)*2 === n ) return true;
//     else return false;
// }

// let ind;
// let s =1;

// const odd = (N) => {

//     while( (ind < N/2) && s==1 ){

//         if( (N/ind) * ind === N){
//             return false;
//         }

//         ind =ind + 1;

//     }
//     return true;
// }

// const countDownToZero = ( n ) =>{
//     if( n < 0){
//         return; // stop function
//     }else{
//         console.log(n);
//         countDownToZero(n-1);
//     }
// }

// const countDownToZero1 = ( n ) =>{  
//     countDownToZero(n-1);
    
// }

// // Fibonnacii

// const getNthFibo = (n) =>{

//     if( n<=1 ) return n;

//     let sum =0, last = 1, lastlast = 0;

//     for(let i = 1; i< n;i++){
//         sum = lastlast + last;
//         lastlast = last;
//         last = sum;
//     }
    
//     return sum;
// }
// //console.log(getNthFibo(3))

// const getFibo = ( n ) =>{
//     if( n <= 1) {
//         return n
//     }else{
//         return getFibo(n-1) + getFibo(n-2);
//     }

// }

// //console.log(getFibo(3))


// const getFiboBetter = (n, lastlast, last) =>{

//     if(n == 0){
//         return lastlast;
//     }
//     if(n == 1){
//         return last;
//     }
//     return getFiboBetter(n-1,last, lastlast + last);
// }

//console.log(getFiboBetter(5,0,1))