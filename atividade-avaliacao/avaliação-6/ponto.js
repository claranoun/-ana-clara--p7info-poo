"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ponto = void 0;
class Ponto {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    get getX() {
        return this.x;
    }
    get getY() {
        return this.y;
    }
    set setX(x) {
        this.x = x;
    }
    set setY(y) {
        this.y = y;
    }
}
exports.Ponto = Ponto;
