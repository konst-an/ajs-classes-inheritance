import Character from '../src/Character';

test('Ошибка короткого имени', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Некорректное имя');
});

test('Ошибка длинного имени', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Некорректное имя');
});

test('Ошибка неверного типа', () => {
    expect(() => new Character('Hero', 'Warrior')).toThrow('Некорректный тип');
});
