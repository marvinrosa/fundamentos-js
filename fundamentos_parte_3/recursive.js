const sol = (x) =>{
    if(x <=1 ){
        return 1;
    }else{
        return x * sol(x-1);
    }
}

console.log(sol(5));