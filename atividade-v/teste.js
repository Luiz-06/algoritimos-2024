import { adcArray, filterArray, mapArray, numberAletory, print, removeArray } from './functions/functions.js'

/* const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const a2 = filterArray(a, a => a % 2 == 0)
const b2 = mapArray(a, a => a ** 2)

print(a2)
print(b2) */

//________________________________________________________

/* const a = [1, 2, 3, 4, 5]
const a2 = adcArray(a, 6)

print(a2) */

//________________________________________________________

/* const a = [1, 2, 3, 4, 5]
const a2 = removeArray(a, 4)

print(a2) */

//________________________________________________________

/* const a = [1, 2, 3, 4, 5]
printArray(a, print) */

for (let i = 0; i < 10; i ++){
    const a = numberAletory(1, 10)
    print(a)
}



