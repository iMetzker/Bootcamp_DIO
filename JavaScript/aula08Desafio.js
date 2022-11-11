function pagamento (valor, forma){
    if (forma === 'debito'){
        return 'O valor a ser pago é: ' + (valor - (valor * 0.1));
    }
    else if (forma === 'dinheiro' | 'pix') {
        return 'O valor a ser pago no dinheiro ou por PIX é de R$ ' + (valor - (valor * 0.15));
    }
    else if (forma === 'dividir2x') {
        return 'O valor total a ser pago dividindo em 2x é de R$ ' + valor;
    }
    else if (forma === 'dividir2+') {
        return 'O valor total a ser pago dividindo em mais de 2x é de R$ ' + (valor + (valor * 0.1));
        
    }
    else {
        return 'Insira uma forma de pagamento válida';
    }
}

console.log( pagamento (100,'dividir2x'));