let numero1 = Number (prompt("Digite um número"))
let numero2 = Number (prompt("Digite outro número"))

console.log(numero1, numero2)

let primeiro = numero1>numero2
let segundo = numero1===numero2 
let terceiro = (numero1%numero2)===0 
let quarto = (numero2%numero1)===0 

console.log ("O primeiro numero é maior que segundo?", primeiro) 
console.log ("O primeiro numero é igual ao segundo?", segundo) 
console.log ("O primeiro numero é divisível pelo segundo?", terceiro) 
console.log ("O segundo numero é divisível pelo primeiro?", quarto) 