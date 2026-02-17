import Character from '../src/Character';
import Bowman from '../src/Bowman';
import Swordsman from '../src/Swordsman';
import Magician from '../src/Magician';
import Undead from '../src/Undead';
import Zombie from '../src/Zombie';
import Daemon from '../src/Daemon';

describe('Проверка классов персонажей', () => {

  test('Создание Bowman', () => {
    const bowman = new Bowman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('Создание Swordsman', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.name).toBe('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Создание Magician', () => {
    const magician = new Magician('Merlin');
    expect(magician.name).toBe('Merlin');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('Создание Daemon', () => {
    const daemon = new Daemon('Azazel');
    expect(daemon.name).toBe('Azazel');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('Создание Undead', () => {
    const undead = new Undead('Ghoul');
    expect(undead.name).toBe('Ghoul');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('Создание Zombie', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  test('Ошибка короткого имени', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
  });

  test('Ошибка длинного имени', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow();
  });

  test('Ошибка неверного типа', () => {
    expect(() => new Character('Hero', 'Warrior')).toThrow();
  });

});

