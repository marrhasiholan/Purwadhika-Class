const namaSepatu = "Adidas";
const hargaSepatu = 50000;
const modelSepatu = "Boost";

const sepatu = {
  // nama = key, "adidas" adalah value
  nama: "Adidas",
  // harga = key, 50000 adalah value
  harga: 50000,
  // model = key, "boost" adalah value
  model: "Boost",
};

const sepatu2 = {
  // nama = key, "adidas" adalah value
  nama: "Nike",
  // harga = key, 50000 adalah value
  harga: 50000,
  // model = key, "boost" adalah value
  model: "Boost",
};

console.log(sepatu);

const mobil = {
  // key + value = property
  brand: "Toyota",
  model: "Alphard",
  harga: 50000,

  ignition() {
    return "Mobil menyala";
  },
};

console.log(mobil.ignition());
console.log(mobil["brand"]);
console.log(mobil.brand);
mobil.color = "Red";
console.log(mobil);

const { brand, model } = mobil;
console.log(brand);
console.log(model);

class Sepatu {
  nama;
  harga;
  model;

  constructor(paramNama, paramHarga, paramModel) {
    this.nama = paramNama;
    this.harga = paramHarga;
    this.model = paramModel;
  }
}

const newSepatu = new Sepatu("Adidas", 50000, "Boost");
console.log(newSepatu);

const sepatu3 = new Sepatu("Puma", 2000, "Macan");
console.log(sepatu3);

class Car {
  brand;
  price;
  model;
  #color;
  #customColor = false;

  constructor(brand, price, model, color) {
    this.brand = brand;
    this.price = price;
    this.model = model;
    this.#color = color;
  }

  #setcustomColor(bool) {
    this.#customColor = bool;
  }

  getColor() {
    return this.#color;
  }

  sellCar() {
    return {
      brand: this.brand,
      model: this.model,
      color: this.#color,
      sellPrice: this.#customColor ? this.price - 5000 : this.price,
    };
  }

  setColor(color) {
    this.#color = color;
    this.#setcustomColor(true);
  }
}

const BMW = new Car("BMW", 50000, "IX", "White");
BMW.setColor("red");
console.log(BMW);
console.log(BMW.sellCar());
console.log(BMW.getColor());

const BMW2 = new Car("BMW", 50000, "IX", "White");
console.log(BMW2.sellCar());

class Product {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// INHERITANCE
// JIKA ADA "EXTENDS" HARUS ADA "SUPER"
// BISA MEMBUAT CLASS TURUNAN DARI CLASS LAIN
class Elektronik extends Product {
  brand;

  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }
}

class TV extends Elektronik {
  layar;

  constructor(name, price, brand, layar) {
    super(name, price, brand);
    this.layar = layar;
  }
}
class Buku extends Product {
  author;
  publisher;

  constructor(name, price, author, publisher) {
    super(name, price);
    this.author = author;
    this.publisher = publisher;
  }
}
const tv = new TV("Samsung", 20000, "Samsung", "22 Inch");
console.log(tv);

const buku = new Buku("Harry Potter", 50000, "JK Rowling", "Matahari");
console.log(buku);


// POLYMORPHISM
// BISA MENJADI BANYAK HASIL ATAU BANYAK BENTUK DENGAN 1 PARENT CLASS
class Animal {
  makeASound() {
    return "Bersuara";
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }

  makeASound() {
    return "Bark";
  }
}

class Cat extends Animal {
  constructor() {
    super();
  }

  makeASound() {
    return "Meow";
  }
}

const anjing = new Dog();
console.log(anjing.makeASound());

const kucing = new Cat();
console.log(kucing.makeASound());