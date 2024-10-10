let exercise = 1
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  let area = l1 * l2
  console.log(area)
}
area(2, 3) // 6

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  if (n1 !== n2) {
    return n1 + n2
  }
  return (n1 + n2) * 3
}
console.log(crazySum(12, 13))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  if (n1 > 19) {
    return Math.abs(19 - n1) * 3
  }
  return Math.abs(19 - n1)
}
console.log(crazyDiff(20))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n1) {
  if ((n1 >= 20 && n1 <= 100) || n1 === 400) {
    return true
  }
}
console.log(boundary(350))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str) {
  let search = 'EPICODE'
  if (str.slice(0, search.length) === search) {
    return str
  }
  return 'EPICODE ' + str
}
console.log(epify('EPICODE è già presente'))
console.log(epify('non era presente'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n1) {
  if (n1 % 3 === 0 || n1 % 7 === 0) {
    return true
  }
  return false
}
let p6 = Math.floor(Math.random() * 100)
let isOrNot = check3and7(p6) ? '' : 'NON '
console.log('il numero ' + p6 + ' ' + isOrNot + 'è un multiplo di 3 o di 7.')

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  let reverseString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i]
  }
  return reverseString
}
let str = 'EPICODE'
console.log(
  'Questa è la stringa ' +
    str +
    ' e questa la sua reverse: ' +
    reverseString(str)
)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (str) {
  let previousLetter = ' '
  let upperFirstString = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      //   Se è già maiuscola la lascia tale
      upperFirstString += str[i]
    } else if (
      // Se è preceduta da uno spazio o da un punto la rende maiuscola
      (previousLetter === ' ' || previousLetter === '.') &&
      str[i] !== ' '
    ) {
      upperFirstString += str[i].toUpperCase()
    } else {
      // Altrimenti la rende minuscola
      upperFirstString += str[i].toLowerCase()
    }
    previousLetter = str[i]
  }
  return upperFirstString
}
str = 'EPICODE è una scuola di programmazione'
console.log(
  'Questa è la stringa ' +
    str +
    ' e questa la sua upperFirst: ' +
    upperFirst(str)
)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str) {
  return str.slice(1, -1)
}
str = 'EPICODE'
console.log(
  'Questa è la stringa ' + str + ' e questa la sua cutString: ' + cutString(str)
)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log('Exercise:', exercise++)
/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let randomArray = []
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * 11))
  }
  return randomArray
}
console.log(giveMeRandom(5))
