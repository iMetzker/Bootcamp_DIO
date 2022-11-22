let n = 15;
let soma = 0;


function somatorio (n){
    for (let i = n; i >= 0 ; i--) {
        soma = soma + (n - i); 
    }
    console.log(soma);
}

somatorio(n);