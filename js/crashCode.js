const todos = [
    {
        id: 1,
        work: 'clean the house',
        completed: true

    },
    {
        id: 2,
        work: 'wash dishes',
        completed: true
    },
    {
        id: 3,
        work: 'Go for the kids',
        completed: false

    }
]
for (let todo of todos) {
    console.log(todo.work);
}
/*High order Array
forEach, map, filter*/

//forEach()
todos.forEach(function(todo) {
    console.log(todo.id);
});

//map(): Returns an array
const todoText = todos.map(function(todo){
    return todo.work;
});
console.log(todoText);

//filter(): filter outs stated conditions

const isCompleted = todos.filter(function(todo) {
    return todo.completed === true;
});
console.log(isCompleted);

/* Another way to set conditionals
':' means else*/
const x = 10;
const y = x > 10 ? 'Daniel' : 'Kissiedu';
console.log(y);

//Switcg case

switch(y) {
    case 'Daniel':
        console.log("I picked Daniel");
        break;
    case 'Kissiedu':
        console.log("I picked Kissiedu");
        break;
    default:
        console.log("Picked none");
        break;
}

//Functions

function addNums(num1, num2) {
    return num1 + num2;
};
console.log(addNums(5, 6));

//arrow function
const sumNums = (num1, num2) => {
    return num1 + num2;
};
console.log(sumNums(5, 5));

/*arrow function allows us
call a function on a single line */
const func = tag1 => tag1 + 2;
console.log(func(3));

//object oriented programming:
//constructor function
/*function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    
}

//Prototype
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
//Instanciate object
const person1 = new Person('Daniel', 'kissiedu', '8-25-2002');
const person2 = new Person('Travis', 'Freemann', '4-16-2002');
*/

//OR
// OOP - classes (Important)
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    //prototypes goes here
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
//Instanciate object
const person1 = new Person('Daniel', 'kissiedu', '8-25-2002');
const person2 = new Person('Travis', 'Freemann', '4-16-2002');

console.log(person1);
console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
