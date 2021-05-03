// function palindroma(parola) {
//     // find the length of a string
//     var len = parola.length;

//     // loop through half of the parola
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last parola are same
//         if (parola[i] !== parola[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }



function palindroma(parola) {

    // conversione della stringa in array usando .split
    const valoriArray = parola.split('');

    // inversione dei valori dell'array usando .reverse
    const valoriArrayInversi = valoriArray.reverse();

    // conversione dell'array in stringa
    const stringaInversa = valoriArrayInversi.join('');

    // condizione per stabilire se la parola iniziale è uguale alla parola invertita
    if(parola == stringaInversa) {
        console.log('Questa parola è palindroma!');
    }
    else {
        console.log('Questa parola non è palindroma!');
    }
}