// COMPARISON OPERATORS
let bool = false;

// EQUAL TO / SAMA DENGAN
// HANYA MEMBACA VALUE TANPA MEMBACA TYPE DATANYA
console.log(5 == "5");
console.log("apel" == "Apel");

// STRICT EQUAL TO 
// MEMBACA VALUE DAN TYPE DATANYA
console.log(5 === "5");

// NOT EQUAL TO / TIDAK SAMA DENGAN
console.log(5 != 5);

// STRICT NOT EQUAL TO
console.log(5 !== "5");

// GREATER THAN
console.log(5 > 6);
console.log(5 > 5);

// GRATER THAN OR EQUAL TO
console.log(5 >= 5);

// LESS THAN
console.log(5 < 6);
console.log(5 > 5);

// LESS THAN OR EQUAL TO
console.log(5 <= 5);

// IF
let nilai = "B";

if (nilai === "A") {
    console.log("Excellent Result");
}

if (nilai === "B") {
    console.log("Good Result");
}

if (nilai === "C") {
    console.log("Standard Result");
}

// ELSE (HARUS ADA IF)
nilai = "A";
if (nilai === "A") {
    console.log("Excellent Result");
} else {
    console.log("Diperbaiki");
}

// TERNARY OPERATOR ATAU PENYINGKATAN PENULISAN IF ELSE
console.log(nilai === "A" ? "Excellent Result" : "Diperbaiki");

// ELSE IF
if (nilai === "A"){
    console.log("Excellent Result");
} else if (nilai === "B") {
    console.log("Good Result");
} else if (nilai === "C") {
    console.log ("Average Result");
} else {
    console.log("Diperbaiki");
}

let angka = 9;

 if (angka % 2 === 0) {
    console.log("Genap");
 } else {
    console.log("Ganjil");
 }

// SWITCH / CASE
nilai = "D";
switch(nilai) {
    case "A":
        console.log("Excellent Result");
        break;
    case "B":
        console.log("Good Result");
        break;
    case "C":
        console.log("Average Result");
        break;
    default:
        console.log("Poor Result");
}

// TRUETHY AND FALSY

// TRUETHY
console.log(Boolean(" "));
console.log(Boolean("b"));
console.log(Boolean(10));

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

let input = "";
console.log(Boolean(input));
if (input) {
    console.log(`input kamu ${input}`);
}   else {
    console.log("Harap masukkan input");
}

// ! = VALUE TERBALIK
if (!input) {
    console.log("Harap masukkan input");
}   else {
    console.log(`input kamu ${input}`);
}

// LOOP

