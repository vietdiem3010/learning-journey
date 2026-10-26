const giaodich1 = {
    id: 1,
    type: "expense",
    amount: 27000,
    category: "Sữa chua",
    note: "Sữa để làm sữa chua",
    date: "2024-06-18"
}
const giaodich2 = {
    id: 2,
    type: "expense",
    amount: 100000,
    category: "Sữa tươi",
    note: "Sữa để làm sữa chua",
    date: "2024-06-18"
}
const giaodich3 = {
    id: 3,
    type: "expense",
    amount: 15000,
    category: "Đường",
    note: "Đường để làm sữa chua",
    date: "2024-06-18"
}
const giaodich4 = {
    id: 4,
    type: "expense",
    amount: 2000,
    category: "Hũ nhựa",
    note: "Hũ nhựa để làm sữa chua",
    date: "2024-06-18"
}
const giaodich5 = {
    id: 5,
    type: "income",
    amount: 100000,
    category: "Sữa chua bịch",
    note: "Bán được 20 bịch",
    date: "2024-06-18"
}
let arr = ["Join", "Leave"];
let [join, leave] = arr;
console.log(join);
console.log(leave);

let [firstName, lastName] = "Viet Diem".split(" ");
console.log(firstName);
console.log(lastName);

let user = {
    firstName: "Viet",
    lastName: "Diem"
};
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

let user1 = new Map();
user1.set("firstName", "Viet");
user1.set("lastName", "Diem");

for (let [key, value] of user1) {
    console.log(`${key}: ${value}`);
}


let  options = {
    title: "My Title",
    width: 400,
    height: 300
}

let {title, width, height} = options;
console.log(title);
console.log(width);
console.log(height);

let hello = {
    greeting: "Hello",
    name: "Viet",
    age: 25
}

let {greeting, ...rest} = hello;
console.log(rest.name);
console.log(rest.age);

let options2 = {
    title: "Another Title",
    items: ["Item1", "Item2"]
}

function showName({
    title = "Xin chào", 
    width = 200, 
    height = 100, 
    items = []
}) {
    console.log(title);
    console.log(width);
    console.log(height);
    console.log(items);
}
showName(options2);


let users1 = {
    name: "Viet",
    years: 30
}

let {name, years: age, isAdmin = false} = users1;
console.log(name);
console.log(age);
console.log(isAdmin);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2, 3, 4, 5));

function sumAll(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4, 5));

let arr12 = [1, 2, 3, 4, 5];
console.log(Math.max(...arr12));

let arr13 = [6, 7, 8, 9, 10];
let arr14 = [1, -2, -3, -4, -5];
console.log(Math.max(...arr13, ...arr14));

console.log(...arr13, ...arr14);


function addTransaction(list, tx) {
    return [...list, tx];
}

const gd1 = { id: 1, type: "expense", amount: 27000 };
const gd2 = { id: 2, type: "income", amount: 100000 };
const gd3 = { id: 3, type: "expense", amount: 15000 };

const a = [gd1, gd2];
const b = addTransaction(a, gd3);

console.log(a.length);
console.log(b.length);
console.log(a === b);


function updaterTransaction(list, id, changes) {
    return list.map(tx => tx.id === id ? {...tx, ...changes} : tx);
}

function deleteTransaction(list, id) {
    return list.filter(tx => tx.id !== id);
}

const a1 = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 }
];

const b2 = updaterTransaction(a1, 2, { amount: 999 });
console.log(a1[1].amount);  // 200, mảng gốc không đổi
console.log(b2[1].amount);  // 999

const c2 = deleteTransaction(a1, 1);
console.log(a1.length);     // 2, mảng gốc không đổi
console.log(c2.length);     // 1

function checkTransaction(list, fn) {
    const before = JSON.stringify(list);
    const result = fn(list);
    const after = JSON.stringify(list);
    return {
        unchanged: before === after,
        newArray: result !== list
    }
}

const list = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 }
];

console.log(checkTransaction(list, l => addTransaction(l, { id: 3, amount: 300 })));
console.log(checkTransaction(list, l => updaterTransaction(l, 2, { amount: 999 })));
console.log(checkTransaction(list, l => deleteTransaction(l, 1)));

