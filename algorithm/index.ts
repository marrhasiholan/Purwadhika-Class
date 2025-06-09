// CALLBACK
// MENJADIKAN FUNCTION SEBAGAI ARGUMENT

function pertambahan(a: number, b: number, c: (n: number) => void) {
  c(a + b);
}

function display(n: number) {
  console.log(n);
}

let tambah = pertambahan(5, 5, display);

let arr = [1, 2, 3, 4, 5];

arr.filter((i) => i === 3);
