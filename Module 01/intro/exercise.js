//step.1 -> initiate
const panjang = 5;
const lebar = 3;

//step.2 -> calculate
const luasPersegiPanjang = panjang * lebar;
const kelilingPersegiPanjang = 2 * (panjang + lebar);

//step.3
console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);

//step.1 -> initiate
const radius = 5;

//step.2 -> calculate
const diameterLingkaran = 2 * radius;
const kelilingLingkaran = 2 * 3.14159 * radius;
const luasLingkaran = 3.14159 * radius * radius;

//step.3
console.log(diameterLingkaran);
console.log(kelilingLingkaran);
console.log(luasLingkaran.toFixed(4));

//step.1 -> initiate
const a = 80;
const b = 65;

//step.2 -> calculate
const c = 180 - ( a + b );

//step.3
console.log(c);

//step.1 -> initiate
let hari = 400;
//step.2 -> calculate
let tahun = hari / 365;
tahun = tahun - (tahun % 1);
let sisaHari = hari % 365;
let bulan = sisaHari / 30;
bulan = bulan - (bulan % 1);
let sisaHari2 = sisaHari % 30;
//step.3
console.log(tahun + "tahun," + bulan + "bulan," + sisaHari2 + "hari");
//
//
//
//step.1 -> initiate
let tanggal1 = new Date('2022-01-20');
let tanggal2 = new Date('2022-01-22');
//step.2 -> calculate
let selisihTanggal = tanggal2.getTime() - tanggal1.getTime();
let selisihHari = Math.floor(selisihTanggal / 86400000);
//step.3
console.log(selisihHari);