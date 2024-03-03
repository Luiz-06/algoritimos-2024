import { question } from "readline-sync"

function main(){

    var tipo, cartao, kg_file, kg_alcatra, kg_picanha, preco_file, preco_alcatra, preco_picanha, preco_cartao_file, preco_cartao_alcatra, preco_cartao_picanha

    
    console.log('1-File')
    console.log('2-Alcatra')
    console.log('3-Picanha')
    tipo=Number(question('Qual o tipo de carne deseja comprar: '))





if(tipo===1){
    console.log('Voce escolheu file')
    kg_file=Number(question('Digite a quantidade (Kg): '))
if(kg_file<=5){
    preco_file=4.9*kg_file
}else{
    preco_file=5.8*kg_file
}
    console.log('1-Sim')
    console.log('2-Nao')
    cartao=Number(question('Voce deseja comprar no cartao tabajara? Nele voce tera 5% de desconto: '))
if(cartao===1){
    preco_cartao_file=preco_file-(preco_file*0.05)
    console.log('NOTA FISCAL')
    console.log(`Tipo de carne: ${tipo}`)
    console.log(`Quantidade: ${kg_file}`)
    console.log(`Preco total: ${preco_file}`)
    console.log(`Usou o cartao da loja: ${cartao}`)
    console.log(`Desconto: ${(preco_file*0.05).toFixed(2)}`)
    console.log(`Total: ${preco_cartao_file.toFixed(2)}`)
}else{
    console.log('NOTA FISCAL')
    console.log(`Tipo de carne: ${tipo}`)
    console.log(`Quantidade: ${kg_file}`)
    console.log(`Preco total: ${preco_file}`)
    console.log(`Usou o cartao da loja: ${cartao}`)
    console.log(`Total: ${preco_file.toFixed(2)}`)
}
}







if(tipo===2){
    console.log('Voce escolheu alcatra')
    kg_alcatra=Number(question('Digite a quantidade (Kg): '))
if(kg_alcatra<=5){
    preco_alcatra=5.9*kg_alcatra
}else{
    preco_alcatra=6.8*kg_alcatra
}
    console.log('1-Sim')
    console.log('2-Nao')
    cartao=Number(question('Voce deseja comprar no cartao tabajara? Nele voce tera 5% de desconto: '))
if(cartao===1){
    preco_cartao_alcatra=preco_alcatra-(preco_alcatra*0.05)
    console.log('NOTA FISCAL')
    console.log(`Tipo de carne: ${tipo}`)
    console.log(`Quantidade: ${kg_alcatra}`)
    console.log(`Preco total: ${preco_alcatra}`)
    console.log(`Usou o cartao da loja: ${cartao}`)
    console.log(`Desconto: ${(preco_alcatra*0.05).toFixed(2)}`)
    console.log(`Total: ${preco_cartao_alcatra.toFixed(2)}`)
}else{
    console.log('NOTA FISCAL')
    console.log(`Tipo de carne: ${tipo}`)
    console.log(`Quantidade: ${kg_alcatra}`)
    console.log(`Preco total: ${preco_alcatra}`)
    console.log(`Usou o cartao da loja: ${cartao}`)
    console.log(`Total: ${preco_alcatra.toFixed(2)}`)
}
}








if(tipo===3){
    console.log('Voce escolheu picanha')
    kg_picanha=Number(question('Digite a quantidade (Kg): '))
if(kg_picanha<=5){
    preco_picanha=6.9*kg_picanha
}else{
    preco_picanha=7.8*kg_picanha
}
    console.log('1-Sim')
    console.log('2-Nao')
    cartao=Number(question('Voce deseja comprar no cartao tabajara? Nele voce tera 5% de desconto: '))
if(cartao===1){
    preco_cartao_picanha=preco_picanha-(preco_picanha*0.05)
    console.log('NOTA FISCAL')
    console.log(`Tipo de carne: ${tipo}`)
    console.log(`Quantidade: ${kg_picanha}`)
    console.log(`Preco total: ${preco_picanha}`)
    console.log(`Usou o cartao da loja: ${cartao}`)
    console.log(`Desconto: ${(preco_picanha*0.05).toFixed(2)}`)
    console.log(`Total: ${preco_cartao_picanha.toFixed(2)}`)
}else{
    console.log('NOTA FISCAL')
    console.log(`Tipo de carne: ${tipo}`)
    console.log(`Quantidade: ${kg_picanha}`)
    console.log(`Preco total: ${preco_picanha}`)
    console.log(`Usou o cartao da loja: ${cartao}`)
    console.log(`Total: ${preco_picanha.toFixed(2)}`)
}
}









}
main()