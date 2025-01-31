import Character from "./Character";

export class Bowman extends Character {
    constructor(name) {
        super (name, "Bowman");
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super (name, "Swordsman");
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name) {
        super (name, "Magician");
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Character {
    constructor(name) {
        super (name, "Daemon");
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name) {
        super (name, "Undead");
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name) {
        super (name, "Zombie");
        this.attack = 40;
        this.defence = 10;
    }
}

