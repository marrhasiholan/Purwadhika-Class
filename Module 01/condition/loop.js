// LOOP

// FOR LOOP
// STEP FOR LOOP:
// 1. statement 1 ( membuat atau mengupdate sebuah variable)
// 2. statement 2 pengecekan condition
// 3. jika condition statement ke 2 = true, maka block of code akan dijalankan
// 4. statement 3 melakukan increment atau decrement postfix
// 5. ulang dari step 2

for (let i = 11; i <= 1; i++) {
  console.log(i, "INI FOR LOOP");
}

// console.log(i); <- Error, tidak bisa menggunakan variable yang dibuat didalam for loop

// console.log(11 <= 10);

// WHILE LOOP
let i = 11;

// STEP WHILE LOOP:
// 1. pengecakan condition
// 2. jika pengecekan condition = true, maka jalankan block of code
// 3. ulang dari step 1
while (i <= 10) {
  console.log(i, "INI WHILE LOOP");

  i++;
}

// DO WHILE LOOP
// AKAN BERJALAN MINIMAL 1x
i = 11;

// STEP DO WHILE LOOP:
// 1. jalankan block of code didalam do
// 2. pengecekan condition
// 3, jika pengecekan condition true, maka ulang step1

do {
  console.log(i, "INI DO WHILE LOOP");

  i++;
} while (i <= 10);

// BREAK

let x = 1;

while (true) {
  console.log(x);

  if (x === 1000) break;

  x++;
}

// CONTINUE

for (let y = 1; y <= 10; y++) {
  if (y % 2 === 0) continue;

  // CODE DIBAWAH AKAN DIJALANKAN JIKA IF DIATAS MERETURN FALSE
  console.log(y);
}
