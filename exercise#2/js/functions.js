function numeroCasuale() {
    return Math.floor(Math.random() * 5) +1;
}

function sommaPari(somma) {
    if (somma % 2 == 0){
        console.log("la somma è pari");
        return true;
    } 
    console.log("la somma è dispari");
    return false;
}