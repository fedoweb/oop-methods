export default class Character {
    constructor(name, type) {
        const validValue = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"]
        
        if (typeof(name) !== "string" || name.length < 2 || name.length > 10) {
            throw new Error("Имя должно быть строкой длиной от 2 до 10 символов.")
        }

        if (!validValue.includes(type)) {
            throw new Error("Тип персонажа должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.");
        }
        
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        if(this.type === "Bowman" || this.type === "Undead") {
            this.attack = 25;
            this.defence = 25;
        } else if (this.type === "Swordsman" || this.type === "Zombie") {
            this.attack = 40;
            this.defence = 10;
        } else {
            this.attack = 10;
            this.defence = 40;
        }
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error("Hельзя повысить lavel умершего");
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        } 
    }
}