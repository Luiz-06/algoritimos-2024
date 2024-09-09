function produtoDeFatores(fator1, fator2){
    let produto = 0
    let voltas = 0

    while (voltas < fator2){
        produto = produto + fator1
        voltas ++
    }

    return produto
}

const fator1 = 5
const fator2 = 3

const produto = produtoDeFatores(fator1, fator2)
console.log(`${fator1} x ${fator2} = ${produto}`)