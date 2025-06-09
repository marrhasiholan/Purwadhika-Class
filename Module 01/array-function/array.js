// let kotakSepatu = "adidas";
// kotakSepatu = : "nikee";

// ARRAY
const kotakSepatu = ["adidas', nike, 1"];
console.log(kotakSepatu);

const alphabet = ["A", "B", "C", "D"];
console.log(alphabet[1]);

// ARRAY BUILD IN METHOD

// MEMASUKKAN VALUE BARU KE ELEMEN TERAKHIR
alphabet.push("E");
console.log(alphabet);

// MEMASUKKAN VALUE BARU KE ELEMEN PERTAMA
alphabet.unshift("Z")
console.log(alphabet);

// MENGHAPUS ELEMEN TERAKHIR
alphabet.pop();
console.log(alphabet);

// MENGHAPUS ELEMEN PERTAMA
alphabet.shift();
console.log(alphabet);

const angka = [];
for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
    angka.push(i + 1);
}
console.log(angka);

angka.forEach((data) => console.log(data)); // HANYA UNTUK KALKULASI
const loop = angka.map((value) => value); // BISA MENAMPILKAN
console.log(loop);

for (let val of angka) {
    console.log(val);
}

