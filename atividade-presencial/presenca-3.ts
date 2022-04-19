
class Stack{
    
    stack: number[] = []
    topoPilha: number = -1
    max = 4

    vazio(): number{
        if(this.topoPilha == -1){
            return 1
        }else{
            return 0
        }
    }
    cheio(): number{
        if(this.topoPilha == this.max){
            return 1
        }else{
            return 0
        }
    }
    push(num: number): void{
        if(this.cheio() == 1){
            console.log('pilha cheia')
        }else{
            this.topoPilha++
            this.stack[this.topoPilha] = num
            console.log(+num+' acrestado à lista')
        }
    }
    pop(): number | void{
        if(this.vazio() == 1){
            console.log('pilha vazia')
        }else{
            let aux = this.stack[this.topoPilha]
            console.log(+aux+' ')
            this.topoPilha--
            return aux
        }
    }
    view(): void{
        if(this.vazio() == 1){
            console.log('pilha vazia')
         }else{
            for(let i = 0; i <= this.topoPilha; i++){
                console.log('pilha tem o elemento '+this.stack[i])    
            }
        }
    }
}

let pilha: Stack = new Stack()
pilha.push(1)
pilha.push(2)
pilha.push(3)
pilha.push(4)
console.log('-------------------------')
pilha.view()
console.log('-------------------------')
pilha.pop()
pilha.pop()
console.log('-------------------------')
pilha.view()
console.log('-------------------------')
pilha.pop()
pilha.pop()
console.log('-------------------------')
pilha.view()