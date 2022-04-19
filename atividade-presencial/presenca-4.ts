class Queue{
    amigos: string[] = []
    maxQueue = 5
    final = 0
    numPrim = 0
    numF = 0

    isEmpty(): number{
        if(this.numF == 0){
            return 1
        }else{
            return 0
        }
    }
    isFull(): number{
        if(this.final == this.maxQueue){
            return 1
        }else{
            return 0
        }
    }
    addQueue(nome: string): void{
        if(this.isFull() == 1){
            console.log('fila cheia')
        }else{
            this.amigos[this.final] = nome
            console.log(nome+' está na fila')
            this.final++
            this.numF++
        }
    }
    removeQueue():string | void {
        if(this.isEmpty() == 1){
            console.log(' fila vazia')
        }else{
            let temp = this.amigos[this.numPrim]
            console.log(this.amigos[this.numPrim]+' saiu da fila')
            this.numPrim++
            this.numF--
            return temp
        }
    }
    viewQueue(): void{
        if(this.isEmpty() == 1){
            console.log('fila vazia')
        }else{
            let np = this.numPrim
            for(let i=0; i < this.numF; i++){
                console.log(this.amigos[np]+' está na fila')
                np++
            }
        }
    }
}
let fila: Queue = new Queue()

fila.addQueue('Gabriel')
fila.addQueue('Lourdes')
fila.addQueue('Iuri')
fila.addQueue('Clara')
console.log('-------------------------')
fila.removeQueue()
fila.removeQueue()
fila.removeQueue()
console.log('-------------------------')
fila.addQueue('Yasmim')
console.log('-------------------------')
fila.viewQueue()
console.log('-------------------------')
fila.removeQueue()
fila.removeQueue()
console.log('-------------------------')

fila.viewQueue()