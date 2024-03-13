/*
  Клас Student, який містить три властивості: name, age та grade.
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення,
  напишіть скорочену ініціалізацію.
*/
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
// тестування 
const student = new Student("John Doe", 20, "A");
console.log(student);
export {};