function produtoDeFatores(fator1, fator2){
    let produto = 0

    for (let i = 1; i <= fator2; i ++){
        produto = produto + fator1
    }

    return produto
}

const fator1 = 5
const fator2 = 3

const produto = produtoDeFatores(fator1, fator2)
console.log(`${fator1} x ${fator2} = ${produto}`)