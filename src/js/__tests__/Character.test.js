import Character from "../characters/Character";

describe("testing Character class", () => {
  test("create character with valid name and type", () => {
    const character = new Character("Ivan", "Bowman");
    expect(character).toEqual({ name: "Ivan", type: "Bowman", health: 100, level: 1});
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
});
