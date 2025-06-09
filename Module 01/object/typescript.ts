// TYPERSCRIPT WAJIB MENULISKAN TYPE OF DATA
let angkaTS: number = 5;

function pertambahanTS(a: number, b:number) {
    return a + b;
}

console.log(pertambahanTS(5, 2));

// WAJIB MENGGUNAKAN KONTRAK
// DI TS jika ada 2 Interface akan di merge atau tidak di salahkan
interface IPerson {
    name: string;
    age: number;
    email: string;
}

const personTS: IPerson = {
    name: "Budi",
    age: 22,
    email: "",
};

function greetPersonTS(person: IPerson) {
    return `Hello, ${person.email}`;
}

console.log(greetPersonTS({ name: "sad", age: 22, email: ""}));

//Cara Penulisan Class Interface

interface IProduct {
    name: string;
    price: number;
}

interface IBuku extends IProduct {
    author: string;
    publisher: string;
}

class Produk implements IProduct {
    name = "";
    price = 0;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Book extends Produk implements IBuku {
    author: string;
    publisher: string;

    constructor(name: string, price: number, author: string, publisher: string) {
        super(name, price);
        this.author = author;
        this.publisher = publisher;
    }
}
