function somatorio(min, max, n){
    const box = []
    let resposta = 0

    for (let i = 0; i < n; i ++){
        box.push(numberAletory(min, max))
    }

    for (let item of box){
        resposta += item
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
const max = 10
const n = 2

const {box, resposta} = somatorio(min, max, n)
console.log(box)
console.log(resposta)