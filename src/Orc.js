class Orc {
  constructor(name) {
    this.name = name;
    this.weapon = 'axe';
    this.health = 125;
    this.defeat = 10;
  }

  say() {
    console.log(`I am orc ${this.name}`);
  }

  atack(person) {
    console.log(`${this.name} atacked ${person}`);    
    person.health - this.defeat;
  }

  defense() {
    console.log(`${this.name} blocked the atack`);
  }

  angry() {
    this.defeat *= 3;
  }
}