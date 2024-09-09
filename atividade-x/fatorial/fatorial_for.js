function fatorial(n){
    let res = 1

    for (let i = 1; i <= n; i ++){
        res = res * i
    }

    return res
}

const res = fatorial(3)
console.log(res)

