function sequenciaAaB(a,b){
    if (a == b){
        console.log(b)
        return
    }

    console.log(a)
    return sequenciaAaB(a + 1, b)
}

const a = 1
const b = 10

sequenciaAaB(a, b)
