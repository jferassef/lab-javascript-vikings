// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  //TODO Add 2 Methods
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  // check attack method

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let viking = this.vikingArmy[randomIndexViking];
    let saxon = this.saxonArmy[randomIndexSaxon];
    let saxonStatus = saxon.receiveDamage(viking.strength);
    if (saxonStatus === `A Saxon has died in combat`) {
      this.saxonArmy.pop(randomIndexSaxon);
    }
    return saxonStatus;
  }

  saxonAttack() {
    let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let viking = this.vikingArmy[randomIndexViking];
    let saxon = this.saxonArmy[randomIndexSaxon];
    let vikingStatus = viking.receiveDamage(saxon.strength);
    if (vikingStatus === `${viking.name} has died in act of combat`) {
      this.vikingArmy.pop(randomIndexViking);
    }
    return vikingStatus;
  }

  showStatus() {
    if ((this.saxonArmy = [])) {
      return 'Vikings have won the war of the century!';
    } else if ((this.vikingArmy = [])) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.vikingArmy > 1 && this.saxonArmy > 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
