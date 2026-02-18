import Bowman from '../src/Bowman';

test('levelUp повышает уровень, атаку, защиту и здоровье', () => {
    const char = new Bowman('Bowman');
    char.health = 40;

    char.levelUp();

    const correct = {
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    };

    expect(char).toEqual(correct);
});    

test('levelUp для умершего персонажа выбрасывает ошибку', () => {
    const char = new Bowman('Bowman');
    char.health = 0;

    expect(() => char.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('damage уменьшает здоровье с учётом защиты', () => {
    const char = new Bowman('Bowman');
    char.damage(50);

    const correct = {
        name: 'Bowman',
        type: 'Bowman',
        health: 62.5,
        level: 1,
        attack: 25,
        defence: 25,
    };

    expect(char).toEqual(correct);
});

 test('damage не уменьшает здоровье ниже 0', () => {
    const char = new Bowman('Bowman');

    char.damage(500);

    expect(char.health).toBe(0);
});

test('damage с отрицательным уроном выбрасывает ошибку', () => {
    const char = new Bowman('Bowman');

    expect(() => char.damage(-10)).toThrow('Урон не может быть отрицательным');
});


