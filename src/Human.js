const dev = 'dev1';
console.log('test');
class Human {
  constructor(name) {
    this.name = name;
    this.weapon = 'sword';
    this.health = 100;
  }

  say() {
    console.log(`I am human ${this.name}`);
  }

  atack() {
    console.log(`${this.name} used ${this.weapon}`);
  }

  defense() {
    console.log(`${this.name} blocked the atack`);
  }

  treat(value) {
    this.health += value;
  }
}