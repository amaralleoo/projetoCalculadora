const display = document.getElementById('display');

function adicionar(valor) {
      display.value += valor;
    }
function limpar() {
    display.value = '';
}
 function raiz() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } 
    catch {
        display.value = 'Erro';
    }
}
function calcular() {
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } 
    catch {
        display.value = 'Erro';
    }
}