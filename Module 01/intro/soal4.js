//
//
function convertDaysToYearsMonthsDays(days) {
const year = Math.floor(days / 365);
days %= 365;

const months = Math.floor(days / 30)
const remainingDays = days % 30;

return `${year} tahun, ${months} bulan, ${remainingDays} hari`;
}
const result = convertDaysToYearsMonthsDays(400);
console.log(result);