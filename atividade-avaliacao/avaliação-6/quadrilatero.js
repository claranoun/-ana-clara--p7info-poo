"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrilatero = void 0;
class Quadrilatero {
    constructor(PontoA, PontoB) {
        this.pontoA = PontoA;
        this.pontoB = PontoB;
    }
    pertencerArea(ponto) {
        if (this.pontoA.getX <= ponto.getX && ponto.getX <= this.pontoB.getX
            && this.pontoB.getY <= ponto.getY && ponto.getY <= this.pontoA.getY) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Quadrilatero = Quadrilatero;
