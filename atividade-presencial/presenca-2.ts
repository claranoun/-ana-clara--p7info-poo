
function decimal(valor: number): string{
    let d = (valor).toString(10)
    return d
}
function octal(valor: number): string{
    let o = (valor).toString(8)
    return o
}
function hexadecimal(valor: number): string{
    let h = (valor).toString(16)
    return h
}
function binario(valor: number): string{
    let b = (valor).toString(2)
    return b
}

function printTabela(): void{
    console.log('Decimal Octal Hexadecimal  Binario')
    console.log('--------- ------ ----------- -------')
    for( let i = 0; i <=225; i++){
        console.log(`${decimal(i)}  ${octal(i)}   ${hexadecimal(i)}   ${binario(i)}`)
    }
}

printTabela()