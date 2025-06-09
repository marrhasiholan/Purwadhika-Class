// EXERCISE 1
function polaSegitiga(tinggi) {
  let angka = 1; //angka mulai dari 1

  for (let baris = 1; baris <= tinggi; baris++) {
    let barisRslt = "";

    for (let kolom = 1; kolom <= baris; kolom++) {
      if (angka < 10) {
        // Format angka 2 digit tanpa padStart
        barisRslt += "0" + angka;
      } else {
        barisRslt += angka;
      }
      barisRslt += " ";
      angka++;
    }
    console.log(barisRslt);
  }
}
polaSegitiga(4);

// EXERCISE 2
function fizzBuzz(n) {
  let res = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res += "FizzBuzz";
    } else if (i % 3 === 0) {
      res += "Fizz";
    } else if (i % 5 === 0) {
      res += "Buzz";
    } else {
      res += i;
    }
    if (i !== n) {
      res += ", ";
    }
  }
  console.log(res);
}
fizzBuzz(6);
fizzBuzz(15);

// EXERCISE 3
function hitungIMB(berat, tinggi) {
  let = IMB = berat / (tinggi * tinggi);
  if (IMB < 18.5) {
    return "Berat Badan Kurang";
  } else if (IMB < 24.9) {
    return "Ideal";
  } else if (IMB < 29.9) {
    return "Kelebihan Berat Badan";
  } else if (IMB < 39.9) {
    return "Sangat Kelebihan Berat Badan";
  } else {
    return "Obesitas";
  }
}
console.log(hitungIMB(60, 1.7));
console.log(hitungIMB(80, 1.6));
console.log(hitungIMB(53, 1.8));
console.log(hitungIMB(90, 1.75));
console.log(hitungIMB(100, 1.5));

// EXERCISE 4
function removeNumOdd(even) {
  const result = [];
  let j = 0;

  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0) {
      result.push(even[i]);
    }
  }
  return result;
// BISA JUGA MENGGUNAKAN .FILTER TAPI
// return even.filter((n) => n % 2 === 0)
}

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = removeNumOdd(angka);

console.log(result);

// EXERCISE 5
function splitStr(str) {
  return str.split(" ");
}
console.log(splitStr("Hello World"));
