console.log('JS OK')

// ---------- TuttiFrutti ----------

// 1 - dichiaro l'array del frigo con i frutti dentro
// 2 - aggiungo la stringa della pesca all'erray
// 3 - creo un ciclo for e aggiungo la pesca all'erray
// 4 - innesto una condizionale dentro al ciclo for per verificare se il cocomero è all'interno dell'erray
// 5 - stampo in console il risutlato

let fruits = ['banana','mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

console.log(fruits);

fruits.push('pesca');
console.log(fruits);

let watermelon = false

for ( let i = 0; i < fruits.length; i++) {
   console.log(fruits[i])
    
   if (fruits[i] === 'cocomero') {
    watermelon = true
    console.log('Trovato! Devo solo preparare il cocktail.')
   }
}

if (watermelon) console.log('Trovato! Devo solo preparare il cocktail.')
else  console.log("Oh no, devo uscire a comprare il cocomero!")


