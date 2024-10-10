// Esercizi aggiuntivi (facoltativi) per D4
let eExercise = 1
/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const checkArray = function (randomArray) {
  let sumGreaterThenFive = 0
  for (let i = 0; i < randomArray.length - 1; i++) {
    if (randomArray[i] > 5) {
      console.log(randomArray[i])
      sumGreaterThenFive += randomArray[i]
    }
  }
  return sumGreaterThenFive
}

let sumGreaterThenFive
randomArray = giveMeRandom(10)
console.log(randomArray)
sumGreaterThenFive = checkArray(randomArray)
console.log('La somma degli elementi maggiorni di 5 è: ', sumGreaterThenFive)

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
  { price: 1.5, name: 'Pacco di spaghetti', id: 1, quantity: 5 },
  { price: 3.5, name: 'Caramelle Azzurra', id: 2, quantity: 1 },
  { price: 28, name: 'Filetto di vitello', id: 3, quantity: 1.5 },
  { price: 12, name: 'Orata pescata', id: 4, quantity: 2 },
]
const shoppingCartTotal = function (shoppingCart) {
  let shoppingCartTotal = 0
  for (i = 0; i < shoppingCart.length; i++) {
    shoppingCartTotal += shoppingCart[i].price * shoppingCart[i].quantity
  }
  return shoppingCartTotal
}
console.log('Il totale del carrello è: ', shoppingCartTotal(shoppingCart))

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
let anotherItem = {
  price: 1.8,
  name: 'Litro di latte parz. scremato',
  id: 5,
  quantity: 2,
}
const addToShoppingCart = function (shoppingCart, anotherItem) {
  return shoppingCart.push(anotherItem)
}
console.log(
  'Il totale degli elementi nel carrello è: ',
  addToShoppingCart(shoppingCart, anotherItem)
)
console.log('Il totale del carrello ora è: ', shoppingCartTotal(shoppingCart))

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function (shoppingCart) {
  let shoppingCartTotal = 0
  let maxPrice = 0
  for (i = 0; i < shoppingCart.length; i++) {
    price = shoppingCart[i].price
    if (price > maxPrice) {
      maxPrice = price
      mostExpensiveItem = shoppingCart[i]
    }
  }
  return mostExpensiveItem
}
console.log(
  "L'oggetto più costoso del carrello è: ",
  maxShoppingCart(shoppingCart)
)

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function (shoppingCart) {
  return shoppingCart[shoppingCart.length - 1]
}
console.log(
  "L'ultimo oggetto del carrello è: ",
  latestShoppingCart(shoppingCart)
)

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const longest = function (array) {
  let longestString = ''
  for (i = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i]
    }
  }
  return longestString
}
let stringArray = ['ciao', 'come', 'stai', 'bene', 'grazie'] // Tutte di 4 tranne una! :)
console.log('La stringa più lunga è: ', longest(stringArray))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const antiSpam = function (emailContent) {
  let spamWords = ['SPAM', 'SCAM']
  for (i = 0; i < spamWords.length; i++) {
    if (emailContent.indexOf(spamWords[i]) > 0) {
      return true
    }
  }
  return false
}
let emailContent =
  'Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura'
console.log("L'email '" + emailContent + "' è spam?: ", antiSpam(emailContent))
emailContent =
  'Vuoi comprare un orologio Rolex a soli 10€? Pensi che io sia SPAM?'
console.log("L'email '" + emailContent + "' è spam?: ", antiSpam(emailContent))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
// trovato qui https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
const calcDateDifferences = function (date) {
  let today = Date.now()
  let dateDifference = today - date
  return dateDifference / (1000 * 60 * 60 * 24)
}
let date = new Date('01/18/2024')
console.log(
  'I giorni passati da ' + date + ' sono: ',
  calcDateDifferences(date)
)

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
console.log('EXTRA Exercise:', eExercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const matrixGenerator = function (x, y) {
  let theMatrix = []
  for (let i = 0; i < x; i++) {
    let row = []
    for (let j = 0; j < y; j++) {
      row.push(i + '' + j)
    }
    theMatrix.push(row)
  }
  return theMatrix
}

let x = Math.floor(Math.random() * 10)
let y = Math.floor(Math.random() * 10)
console.log(
  'La matrice per x=' + x + ' e y=' + y + ' è:',
  matrixGenerator(x, y)
)
