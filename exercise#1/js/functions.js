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