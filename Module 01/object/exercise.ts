// PLAYER CLASS
//1. name: nama pemain
//2. health: darah pemain (default 100)
//3. power: kekuatan serangan pemain (default 10)
//4. tentukan type data secara eksplisit
class Player {
  name: string;
  health: number = 100;
  power: number = 10;

  // dijalankan saat bikin objek Player
  // dikasih nama player saat buat instance
  constructor(name: string) {
    this.name = name;
  }

  // fungsi untuk menerima serangan dari lawan
  // param power menunjukkan seberapa besar serangan
  // health dikurangi sebeesar power
  hit(power: number): void {
    this.health -= power;
  }

  // fungsi untuk menggunakan item yang didapat
  // item 2 properti : health dan power
  // menambahkan salah 1 property ke player
  useItem(item: { health: number; power: number }): void {
    this.health += item.health;
    this.power += item.power;
  }

  // untuk menampilkan status pemain (nama, health, dan power)
  showStatus(): void {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

// SHOOTING GAME CLASS
// Game akan dimainkan oleh dua Player
// Properti player1 dan player2 dibikin saat buat objeck shooting game
class ShootingGame {
  player1: Player;
  player2: Player;

  // nerima 2 objek tipe Player dan disimpan
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // fungsi untuk dapat item acak
  // Math.random() menghasilkan angka antara 0 dan 1
  // jika < 0.5 dapat 0, kalau >= 0.5 dapat 10
  // digunakan untuk bonus Player
  getRandomItem(): { health: number; power: number } {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return { health, power };
  }

  // fungsi utama untuk memulai game
  // turn = menentukan giliran
  start(): void {
    let turn = 1;

    // game terus jalan jika health pemain masih diatas 0
    // setiap giliran menampilkan status
    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(`-- Turn ${turn} --`);

      // tampilkan status sebelum shooting
      this.player1.showStatus();
      this.player2.showStatus();

      // masing-masing player dapat item
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      // pemain menggunakan item random yang di dapat
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      // player1 menyerang player2
      this.player2.hit(this.player1.power);

      // cek kalau health player2 <= 0, game selesai
      if (this.player2.health <= 0) break;

      // pemain 2 menyerang balik pemain 1
      this.player1.hit(this.player2.power);

      // lanjut ke turn berikutnya (jika belum selesai)
      turn++;
    }

    // menampilkan hasil akhir
    this.player1.showStatus();
    this.player2.showStatus();

    if  (this.player1.health > 0) {
      console.log(`Winner is: ${this.player1.name}`);
    } else {
      console.log(`Winner is: ${this.player2.name}`);
    }
  }
}
