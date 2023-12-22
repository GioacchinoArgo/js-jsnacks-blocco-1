console.log('JS OK')

// ---------- La coda dell'Array ----------

// 1 - costruisco la domanda assegnandogli una variabile
// 2 - assegno all'array una variabile 
// 3 - creo un ciclo for e aggiungo all'array un numero random per il numero di volte dichiarato dall'utente
// 4 - stampo in console il risutlato in console

let number = parseInt(prompt("Quanti elementi vuoi che contenga l'Array?"))

let ciccio = []

console.log(number)

for (let i = 1; i <= number; i++ ) {
    ciccio.push(Math.floor(Math.random() * 100) + 1);

}

console.log(ciccio)


console.log(ciccio[number - 1])

console.log(ciccio[number - 2])

console.log(ciccio[number - 3])

console.log(ciccio[number - 4])

console.log(ciccio[number - 5])

