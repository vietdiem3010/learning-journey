interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
greet({ name: "Alice", age: 25 });