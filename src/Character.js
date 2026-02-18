export default class Character {
    constructor(name, type) {
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
         ];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Некорректное имя');
        }

        if (!types.includes(type)) {
        throw new Error('Некорректный тип');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;     
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        }

        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (points < 0) {
            throw new Error('Урон не может быть отрицательным');
        }

        const damageTaken = points * (1 - this.defence / 100);
        this.health -= damageTaken;
        if (this.health < 0) this.health = 0;
    }
}

