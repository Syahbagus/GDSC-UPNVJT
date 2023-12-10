// Fungsi untuk user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function randomChoice(){
    const choices = ["gunting", "batu", "kertas"];
    const randomNumber = Math.floor(Math.random() * choices.length); //Random pakai library math, length fungsinya buat ngambil panjangnya array
    return choices[randomNumber];
}

console.clear()
console.log("Permainan gunting batu kertas!")

readline.question("Pilihan pemain: ", (result) => {
    const playerChoice = result;
    const computerChoice = randomChoice();
    console.log("Pilihan komputer: " + computerChoice);

    // Pemain menang
    if(playerChoice == 'gunting' && computerChoice == 'kertas'){
        console.log("Pemain menang");
    }
    else if (playerChoice == 'batu' && computerChoice == 'gunting'){
        console.log("Pemain menang");
    }
    else if (playerChoice == 'kertas' && computerChoice == 'batu'){
        console.log("Pemain menang");
    }

    //Imbang
    else if (playerChoice == computerChoice){
        console.log("Hasilnya seimbang");
    }

    // Komputer menang
    else{
        console.log("Komputer menang");
    }

    readline.close();
});

