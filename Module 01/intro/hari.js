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