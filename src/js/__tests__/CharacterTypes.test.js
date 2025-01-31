import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from "../characters/CharacterTypes";

test.each([
    [Bowman, "Ivan", { name: "Ivan", type: "Bowman", health: 100, level: 1, attack: 25, defence: 25 }],
    [Swordsman, "Ivan", { name: "Ivan", type: "Swordsman", health: 100, level: 1, attack: 40, defence: 10 }],
    [Magician, "Ivan", { name: "Ivan", type: "Magician", health: 100, level: 1, attack: 10, defence: 40 }],
    [Daemon, "Ivan", { name: "Ivan", type: "Daemon", health: 100, level: 1, attack: 10, defence: 40 }],
    [Undead, "Ivan", { name: "Ivan", type: "Undead", health: 100, level: 1, attack: 25, defence: 25 }],
    [Zombie, "Ivan", { name: "Ivan", type: "Zombie", health: 100, level: 1, attack: 40, defence: 10 }],
    ])("testing types with valid data", (type, name, expected) => {

    expect(new type(name)).toEqual(expected);
});

test.each([
    [Bowman, "Ivan", 0, { name: "Ivan", type: "Bowman", health: 100, level: 2, attack: 30, defence: 30 }],
    [Swordsman, "Ivan", 1, { name: "Ivan", type: "Swordsman", health: 100, level: 2, attack: 48, defence: 12 }],
    [Magician, "Ivan", 10, { name: "Ivan", type: "Magician", health: 100, level: 2, attack: 12, defence: 48 }],
    [Daemon, "Ivan", 25, { name: "Ivan", type: "Daemon", health: 100, level: 2, attack: 12, defence: 48 }],
    [Undead, "Ivan", 50, { name: "Ivan", type: "Undead", health: 100, level: 2, attack: 30, defence: 30 }],
    [Zombie, "Ivan", 75,  { name: "Ivan", type: "Zombie", health: 100, level: 2, attack: 48, defence: 12 }],
    ])("testing levelUp method with valid data", (type, name, points, expected) => {
    let result = new type(name);
    result.damage(points);
    result.levelUp();
    expect(result).toEqual(expected);
});

test.each([
    [Bowman, "Ivan",],
    [Swordsman, "Ivan"],
    [Magician, "Ivan"],
    [Daemon, "Ivan"],
    [Undead, "Ivan"],
    [Zombie, "Ivan"],
    ])("testing levelUp and damage method with invalid data", (type, name) => {
    let result = new type(name);
    result.damage(200);
    expect(() => result.levelUp()).toThrow("Hельзя повысить level умершего");
    expect(() => result.damage(25)).toThrow("Hельзя нанести урон умершему");
});
