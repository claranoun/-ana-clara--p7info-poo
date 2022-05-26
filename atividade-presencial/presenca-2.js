"use strict";
function decimal(valor) {
    let d = (valor).toString(10);
    return d;
}
function octal(valor) {
    let o = (valor).toString(8);
    return o;
}
function hexadecimal(valor) {
    let h = (valor).toString(16);
    return h;
}
function binario(valor) {
    let b = (valor).toString(2);
    return b;
}
function printTabela() {
    console.log('Decimal Octal Hexadecimal  Binario');
    console.log('--------- ------ ----------- -------');
    for (let i = 0; i <= 225; i++) {
        console.log(`${decimal(i)}  ${octal(i)}   ${hexadecimal(i)}   ${binario(i)}`);
    }
}
printTabela();
