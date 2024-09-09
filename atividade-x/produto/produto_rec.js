function produtoDeFatores(fator1, fator2, voltas = 0){
    let produto = 0

    if (voltas >= fator2){
        return produto
    }

    produto = produto + fator1

    return produto + produtoDeFatores(fator1, fator2, voltas + 1)
}

const fator1 = 5
const fator2 = 5

const produto = produtoDeFatores(fator1, fator2)
console.log(`${fator1} x ${fator2} = ${produto}`)