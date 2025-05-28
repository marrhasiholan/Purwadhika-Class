function calculateDateDifference(date1Str, date2Str) {
    const date1 = new Date(date1Str);
    const date2 = new Date(date2Str);

    // hitung selisih dalam milidetik
    const timeDiff = Math.abs(date2 - date1);

    // konversi ke hari
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return dayDiff;
}
const diff= calculateDateDifference("2022-01-20", "2022-01-22");
console.log(`Perbedaan ${diff}hari`);
