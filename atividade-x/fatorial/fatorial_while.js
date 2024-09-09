function fatorial(n){
    let res = 1
    let voltas = 1

    while(voltas <= n){
        res = res * voltas
        voltas ++
    }
    
    return res
}

const res = fatorial(3)
console.log(res)