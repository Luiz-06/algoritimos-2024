function somatorio(min, max ,n){
    const box = []
    let resposta = 0
    let voltas = 0
    
    while(voltas < n){
        box.push(numberAletory(min, max))
        voltas ++
    }

    let index = 0
    
    while(index < box.length){
        resposta += box[index]
        index ++
    }

    return {box, resposta}
}

function numberAletory(min, max){
    if (min > max) {
        throw new Error("Valor mínimo maior que o máximo");
    }
    
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1 
const max = 5
const n = 2

const {box, resposta} = somatorio(min, max, n)
console.log(box)
console.log(resposta)