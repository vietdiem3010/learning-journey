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

console.log(`#${giaodich1.id} | ${giaodich1.type} | ${giaodich1.amount} | ${giaodich1.category} | ${giaodich1.note} | ${giaodich1.date}`);
console.log(`#${giaodich2.id} | ${giaodich2.type} | ${giaodich2.amount} | ${giaodich2.category} | ${giaodich2.note} | ${giaodich2.date}`);
console.log(`#${giaodich3.id} | ${giaodich3.type} | ${giaodich3.amount} | ${giaodich3.category} | ${giaodich3.note} | ${giaodich3.date}`);
console.log(`#${giaodich4.id} | ${giaodich4.type} | ${giaodich4.amount} | ${giaodich4.category} | ${giaodich4.note} | ${giaodich4.date}`);
console.log(`#${giaodich5.id} | ${giaodich5.type} | ${giaodich5.amount} | ${giaodich5.category} | ${giaodich5.note} | ${giaodich5.date}`);



let sum = (a, b) => a + b;
console.log(sum(giaodich1.amount, giaodich2.amount));


function checkAge(age) {
    return age > 18 ? true : confirm("Bạn có đồng ý không?");
}

function checkPermission() {
    return permission || confirm("Bạn có đồng ý không?");
}

function min(a, b) {
    return a < b ? a : b;
}

function formatMoney(amount, currency = "đ") {
    return amount.toLocaleString() + " " + currency;
}

console.log(formatMoney(giaodich1.amount));
console.log(formatMoney(giaodich2.amount));
console.log(formatMoney(giaodich3.amount));
console.log(formatMoney(giaodich4.amount));
console.log(formatMoney(giaodich5.amount));

function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}
console.log(formatDate(giaodich1.date));
console.log(formatDate(giaodich2.date));
console.log(formatDate(giaodich3.date));
console.log(formatDate(giaodich4.date));
console.log(formatDate(giaodich5.date));

function getTypeLabel(type) {
    return type === "income" ? "Thu nhập" : "Chi tiêu";
}
console.log(getTypeLabel(giaodich1.type));
console.log(getTypeLabel(giaodich2.type));
console.log(getTypeLabel(giaodich3.type));
console.log(getTypeLabel(giaodich4.type));
console.log(getTypeLabel(giaodich5.type));