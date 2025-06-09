// FUNCTION
// SEBUAH BLOCK OF CODE YANG RE-USABLE ( BIASANYA MEMILIKI 1 SPESIFIK TUGAS) / BISA DISEBUT SUB-PROGRAM / METHOD = FUNCTION

// FUNCTION DECLARATION
function pertambahan(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("masukan angka yang benar");
  } else {
    console.log(a + b);
  }
}

pertambahan(5, 6);
pertambahan("a", 2);

// FUNCTION EXPRESSION
const pengurangan = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("masukan angka yang benar");
  } else {
    console.log(a - b);
  }
};

pengurangan(5, 2);

// ARROW FUNCTION
let hasilPerkalian;
const perkalian = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("masukan angka yang benar");
  } else {
    hasilPerkalian = a * b;
  }
}

perkalian(5, 5);
console.log(hasilPerkalian);

function pembagian(a, b) {
    return a / b;
}

let hasil = pembagian(6,2);
console.log(hasil);

// DEFAULT PARAMETER

function modulo(a, b = 5) {
    return a % b;
}

let result = modulo(10, 3, 6);
console.log(result);

// REST PARAMETER

function message(...c) {
    let hasil = "";

    for (let value of c) {
        hasil += value + " ";
    }
    return hasil;
}

console.log(message("hello", "world", "nama", "saya", "budi"));