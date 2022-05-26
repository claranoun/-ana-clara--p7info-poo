"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
class NotaFiscal {
    /* Métodos */
    /* Método Construtor */
    constructor(id, codigo, cliente) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date();
        this.cliente = cliente;
        this.valorNota = 0.0;
        this.items = new Array();
    }
    /* Métodos Acessores */
    getid() {
        return this.id;
    }
    getcodigo() {
        return this.codigo;
    }
    getdata() {
        return this.data;
    }
    /* Métodos Modificadores */
    setcodigo(codigo) {
        this.codigo = codigo;
    }
    setdata(data) {
        this.data = data;
    }
    adicionarItem(item) {
        this.items.push(item);
        this.valorNota += item.valor;
    }
    // Percorrer o array items e calcular o valor total da NotaFiscal
    calcularValorNotaFiscal() {
        let valorCalculado = 0;
        return valorCalculado;
    }
    // Imprimir a NotaFiscal conforme o Layout definido
    IMPRIMIR_NotaFiscal() {
        var data = new Date();
        console.log("--------------------------------------------------------------------------------------------------------------------");
        console.log("NOTA FISCAL                                                                                                   ", data);
        console.log("Cliente:", this.cliente.getcodigo(), "      Nome:", this.cliente.getnome());
        console.log("CPF:", this.cliente.getcnpjcpf());
        console.log("--------------------------------------------------------------------------------------------------------------------");
        console.log("ITENS");
        console.log("--------------------------------------------------------------------------------------------------------------------");
        console.log("Seq    Descrição                                                               QTD       Valor Unit         Preço   ");
        console.log("------------------------------------------------------------------------      -----     -------------     ----------");
        for (let c = 0; c < this.items.length; c++) {
            let precoTotal = this.items[c].getquantidade() * this.items[c].produto.getvalorUnitario();
            this.valorNota += precoTotal;
            console.log("%i       %s                                                       %f            %f              %f  ", this.items[c].getsequencial(), this.items[c].produto.getdescricao(), this.items[c].getquantidade(), this.items[c].produto.getvalorUnitario(), precoTotal);
        }
        console.log("--------------------------------------------------------------------------------------------------------------------");
        console.log("Valor Total:", this.valorNota);
    }
    SomaTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            let valor = this.items[i].getquantidade() * this.items[i].getvalor();
            total += valor;
        }
        console.log("A QUANTIA EM DINHEIRO TOTAL DA SUA COMPRA: R$ " + total);
    }
}
exports.NotaFiscal = NotaFiscal;
