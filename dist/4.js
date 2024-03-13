// # Завдання 4 *
// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.
// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.
// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.
// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.
// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.
// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.
// Наприклад, ось так:
// ```ts
// const key = new Key();
// const house = new MyHouse(key);
// const person = new Person(key);
// house.openDoor(person.getKey());
// house.comeIn(person);
// ```
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() { return this.signature; }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.door = false; // захищена властивість, що визначає стан дверей (відкриті/закриті)
        this.tenants = []; // захищений масив, що зберігає об'єкти осіб, які мешкають у будинку
        this.key = key;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person); // якщо двері відкриті, особа додається до масиву мешканців
            console.log('Person entered the house');
        }
        else {
            console.log('The door is closed');
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) { // Якщо підпис ключа співпадає з підписом ключа будинку, 
            this.door = true; //відкриваються двері
            console.log('The door is now open');
        }
        else {
            console.log('Invalid key. The door closed');
        }
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
console.log('Attempting to open the door...');
house.openDoor(person.getKey());
console.log('Attempting to enter the house...');
house.comeIn(person);
export {};
