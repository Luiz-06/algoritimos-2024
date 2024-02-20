import { question } from 'readline-sync';
console.log('Conversor de velocidade');

// entrada
var velocidade_ms = Number(question('velocidade em m/s: '))

// processamento
var velocidade_km= velocidade_ms * 3.6

// saida 
console.log(`${velocidade_ms}m/s equivale a ${velocidade_km}km/h`)