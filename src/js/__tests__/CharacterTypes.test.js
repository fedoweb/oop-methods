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
    [Bowman, "I"],
    [Bowman, "IvanIvanIvan"],
    [Swordsman, "I"],
    [Swordsman, "IvanIvanIvan"],
    [Magician, "I"],
    [Magician, "IvanIvanIvan"],
    [Daemon, "I"],
    [Daemon, "IvanIvanIvan"],
    [Undead, "I"],
    [Undead, "IvanIvanIvan"],
    [Zombie, "I"],
    [Zombie, "IvanIvanIvan"],
    ])("throw an error for invalid name", (type, name) => {

    expect(() => new type(name)).toThrow("Имя должно быть строкой длиной от 2 до 10 символов.");
});



