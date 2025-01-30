import Character from "../characters/character";

describe("testing Character class", () => {
  test("create character with valid name and type", () => {
    const character = new Character("Ivan", "Bowman");
    expect(character).toEqual({ name: "Ivan", type: "Bowman", health: 100, level: 1, attack: 25, defence: 25});
  });

  test ("throw an error for invalid name length < 2", () => {
    expect(() => new Character("I", "Bowman")).toThrow("Имя должно быть строкой длиной от 2 до 10 символов.");
  });

  test ("throw an error for invalid name length > 10", () => {
    expect(() => new Character("IvanIvanIvan", "Bowman")).toThrow("Имя должно быть строкой длиной от 2 до 10 символов.");
  });

  test("should throw an error for invalid type", () => {
    expect(() => new Character("Ivan", "Human")).toThrow("Тип персонажа должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.");
  });

  

  test("levelUp method with health = 100", () => {
    let character = new Character("Ivan", "Bowman");
    character.levelUp();

    expect(character).toEqual({ name: "Ivan", type: "Bowman", health: 100, level: 2, attack: 30, defence: 30 });
  });

  test("levelUp method with health = 50", () => {
    let character = new Character("Ivan", "Bowman");
    character.health = 50;
    character.levelUp();

    expect(character).toEqual({ name: "Ivan", type: "Bowman", health: 100, level: 2, attack: 30, defence: 30 });
  });

  test("levelUp method with health = 0", () => {
    let character = new Character("Ivan", "Bowman");
    character.health = 0;

    expect(() => character.levelUp()).toThrow('Hельзя повысить lavel умершего');
  });

  test("damage method with health > 0", () => {
    let character = new Character("Ivan", "Bowman");
    character.damage(10);

    expect(character).toEqual({ name: "Ivan", type: "Bowman", health: 92.5, level: 1, attack: 25, defence: 25 })
  });

  test("damage method with health 0", () => {
    let character = new Character("Ivan", "Bowman");
    character.health = 0
    character.damage(10);

    expect(character).toEqual({ name: "Ivan", type: "Bowman", health: 0, level: 1, attack: 25, defence: 25 })
  });
});
