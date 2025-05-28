// console -> mengacu pada sebuah terminal
// .log -> sebuah console bisa membuat sebuah logging ( catatan )
// ; -> adalah akhir sebuah syntax

// VARIABLE
// tempat penyimpanan data sementara
// RULES PEMBUATAN VARIABLE
// 1. HANYA BOLEH MENGGUNAKAN KARAKTER, ANGKA, SYMBOL $ ATAU _
let $angka = 5;
let _angka = 5;
// 2. KARAKTER PERTAMA TIDAK BOLEH MENGGUNAKAN ANGKA
//let 5angka = 5; <- ERROR
// 3. PENAMAAN VARIABLE CASE SENSITIVE
let text = "Hello";
let Text = "Hello";
// 4. TIDAK BOLEH MENGGUNAKAN KATA YANG SUDAH DIRESERVED

// DECLARE VARIABLE MENGGUNAKAN CONST
// CONST ATAU CONSTANTA,
// CARA MEDECLARE SEBUAH VARIABLE DIMANA VALUE DIDALAMNYA TIDAK BISA/BOLEH DIRUBAH LAGI SETELAH DIISI ATAU DIBUAT
const kotakSepatuAdidas = "Adidas";
// const kotakSepatuAdidas = "Adidas"; AKAN RERROR KARENA NAMA SUDAH ADA

console.log(kotakSepatuAdidas);

// kotakSepatuAdidas = "Adidas 2"; <- ERROR KARENA MAU MELAKUKAN PERUBAHAN PADA SEBUAH VARIABLE YANG DIDECLARE MENGGUNAKAN CONST/CONSTANTA
// console.log(kotakSepatuAdidas);

// DECLARE VARIABLE MENGGUNAKAN LET
// CARA MENDECLARE SEBUAH VARIABLE DIMANA VALUE DIDALAMNYA BISA/BOLEH DIRUBAH SETELAH DIISI ATAU DIBUAT
let kotakSepatuNike = "Nike";
// let kotakSepatuNike; AKAN AERROR KARENA NAMA VARIABLE SUDAH ADA
console.log(kotakSepatuNike);

// merubah value pada sebuah variable yang dideclare atau dibuat menggunakan let
kotakSepatuNike = "Nike 2";
console.log(kotakSepatuNike);

// DECLARE VARIABLE MENGGUNAKAN VAR
// VAR DIGUNAKAN UNTUK MEMBUAT GLOBAL VARIABLE (*DIDALAM JAVASCRIPT SUDAH HAMPIR TIDAK PERNAH DIGUNAKAN)
var kotakSepatuPuma = "Puma";
var kotakSepatuPuma = "Puma 2";
console.log(kotakSepatuPuma);

// DATA TYPES

// PRIMITIVE DATA TYPES

// STRING (MENYIMPAN SEBUAH TEXT ATAU KALIMAT)
// TERDAPAT "" PADA SEBUAH STRING
const _string = "Ini sebuah text ! 5 + 6";
console.log(_string);

// NUMBER (MENYIMPAN SEBUAH ANGKA, FLOAT, DECIMAL, INT)
const _number = 5;
console.log(_number);

// BOOLEAN (HANYA BISA MENYIMPAN VALUE ANTARA TRUE ATAU FALSE)
const _boolean = true;
console.log(_boolean);

// NULL
const _null = null;
console.log(null);

//UDEFINED
let _undefined;
console.log(_undefined);

// NON-PRIMITIVE DATA TYPES

// ARRAY
// OBJECT

// DATE
let hariIni = new Date("2021-01-01")
console.log(hariIni);

// BUILD-IN METHOD
// SYNTAX TERDIRI DARI VALUE TYPE DATA ITU SENDIRI + . + NAMA BUILD IN METHOD

// BUILD-IN METHOD STRING
let $string = "HELLO WORLD";
console.log($string);

console.log($string.toUpperCase());
console.log($string.toLowerCase());

// MENGHAPUS TRAILING WHITESPACE / KELEBIHAN SPASI DI DEPAN DAN DI BELAKANG
console.log($string.trim());

// MERUBAH KARAKTER E MENJADI A (CASE SENSITIVE CHARACTER)
// HANYA MERUBAH KARAKTER PERTAMA YANG DITEMUKAN SAJA
console.log($string.replace("E", "A"));

// MERUBAH SETIAP KARAKTER YANG DIINGINKAN
console.log($string.replace(/L/gi, "B"));

// BUILD-IN METHOD NUMBER
const $number = 5.246246;
console.log(typeof $number);

// MERUBAH SEBUAH ANGKA MENJADI SEBUAH STRING
console.log(typeof $number.toString());

console.log($number.toFixed(3));

// NUMBER BISA MENGGUNAKAN BUILD-IN METHOD OBJECT MATH
console.log(Math.pow(5, 2));
console.log(Math.PI);
console.log(Math.floor);

// DATE BUILD-IN METHOD
const $date = new Date();
console.log($date);

console.log($date.getFullYear());
console.log($date.getMonth() + 1);
console.log($date.getDate());
console.log($date.getDay());
console.log($date.getHours());
console.log($date.getMinutes());
console.log($date.toLocaleString("in-ID",{timeZone: "Asia/Jakarta"}));

// CHAINING BUILD-IN METHOD
const number = 2;
console.log(number.toString().replace(2, "a"));

// OPERASI MATEMATIKA
console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);
console.log(5 % 5);
console.log(5 ** 5);

// MODIFY IN PLACE (+=, -=, *=, /=, %=)
let x = 5;
x += 10; // x = x + 10; // x = 5 + 10
console.log(x);

x -= 10;
console.log(x);

// CONCAT ATAU PENGGABUNGAN STRING
console.log("HELLO" + "WORLD");
let i = "HELLO";
i += "WORLD";
console.log(i);

// INCREMENT DAN DECREMENT (+1 ATAU -1)
console.log(x);
x++; // x = x + 1
console.log(x);
x--; // x = x - 1
console.log(x);

// POSTFIX DAN PREFIX

// POSTFIX
// MENAMPILKAN TERLEBIH DAHULU BARU DITAMBAHKAN/DIKURANGI
console.log(x);
console.log(x++);
console.log(x);

// PREFIX
// MENAMBAHKAN TERLEBIH DAHULU BARU DITAMPILKAN
console.log(x);
console.log(--x);

// TEMPLATE LITERAL
const message = "Greeting";
console.log(message + ", Budi");
console.log(`${message}, Budi`);

const z = 6;
const f = 5;
console.log(5 + Number(z));
console.log(`Hasil perkalian ${z} x ${f} = ${z * f}`);
