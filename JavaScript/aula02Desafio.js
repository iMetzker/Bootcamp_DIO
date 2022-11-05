
// Declaração de variáveis

const etanol = 3.80;
const gasolina = 5.79;
const combustivel = 0;
const kmlt = 17;
const km = 400;

 if (combustivel === 1){
    const valorviagem = (km / kmlt) * etanol;
    console.log ('O valor do etanol gasto na viagem será de: R$ ', valorviagem.toFixed(2));
}
else if (combustivel === 2){
    const valorviagem = (km / kmlt) * gasolina;
    console.log ('O valor da gasolina gasta na viagem será de: R$ ', valorviagem.toFixed(2));
}
else{
    console.log('Digite uma entrada válida');
}





