import {Ponto} from './ponto'
import { Quadrilatero } from "./quadrilatero"

let pontoA = new Ponto(0, 6)
let pontoB = new Ponto(8, 0)

let pontoC = new Ponto(5, 0)
let pontoD = new Ponto(12, 10)
let pontoE = new Ponto(8, 6)

let Quad = new Quadrilatero(pontoA,pontoB)

console.log(Quad.pertencerArea(pontoC)? "Ponto C está dentro do Quadrilátero": "Ponto C não está dentro do Quadrilátero")
console.log(Quad.pertencerArea(pontoD)? "Ponto D está dentro do Quadrilátero": "Ponto D não está dentro do Quadrilátero")
console.log(Quad.pertencerArea(pontoE)? "Ponto E está dentro do Quadrilátero": "Ponto E não está dentro do Quadrilátero")

