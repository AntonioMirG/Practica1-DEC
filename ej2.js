function secuencia(n) {
    let p = [1, 1, 1];
 

    for (let i = 3; i <= n; i++) {
        p[i] = p[i - 2] + p[i - 3];
    }
    
    return p;
}

 console.log(secuencia(100));  
