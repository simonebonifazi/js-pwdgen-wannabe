console.log('JS OK')

// scaletta iter;
/*
1 - creiamo una variabile const (in questo caso andrebbe bene anche la variabile let) firstName per contenere il nome utente
2 -  attribuiamogli il metodo prompt con il quale chiediamo il nome all' utente 
3 -  verifichiamo con il console.log che stiamo raccogliendo i dati carrettamente
3.5 - ripeto per tutte le costanti che ho creato
4 -  recupero elemento dal DOM per poi manipolare le risposte
5 - genero la password in grassetto
*/

const firstName = prompt('Come ti chiami?', 'Tuo nome');
console.log(firstName);

const lastName = prompt("qual'è il tuo cognome?", "Tuo cognome");
console.log(lastName);

const prefColor = prompt("Qual'è il tuo colore preferito?", "Tuo colore preferito");
console.log(prefColor);

/*
const password = document.getElementById('your-password');
password.innerHTML = firstName + '' + lastName + '' + prefColor + '' + 21
console.log(password) */

const password = document.getElementById('your-password');
password.innerHTML = `<strong> ${firstName} ${lastName} ${prefColor} 22 </strong>`