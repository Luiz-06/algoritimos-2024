//Função genérica de busca linear

function main(){
    const valor = 20
    const box = [1,2,3,4,5,6,7,8,9,10]

    const resposta = realizarBuscaLinear(box, valor, 0, box.length)
    console.log(resposta)
}

function realizarBuscaLinear(box, valor, inicio, fim){
    return inicio > fim ? 'Valor não encontrado' : 
    box[inicio] == valor ? `Número encontrado no index : ${inicio}` : 
    realizarBuscaLinear(box, valor, inicio + 1, fim)
}

main()