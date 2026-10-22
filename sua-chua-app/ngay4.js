let arr = ["I", "am", "learning", "JavaScript"];

arr.splice(1, 2, "am", "learning");

console.log(arr);

let removed = arr.splice(0,2);
console.log(removed);

let arrSlice = ["this", "is", "a", "test"];
let sliced = arrSlice.slice(1, 3);
console.log(sliced);

let arrConcat = ["Hello", "World"];
let combined = arrConcat.concat(arrSlice);
console.log(combined);

let arrForEach = ["a", "b", "c"];
arrForEach.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(u => u.id === 2);
console.log(user);

let usersFilter = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let filteredUsers = usersFilter.filter(u => u.id < 3);
console.log(filteredUsers);

let arrTotal = [1, 2, 3, 4, 5];
let total = arrTotal.reduce((sum, item) => sum + item, 0);
console.log(total);

function getTotal(list, type) {
    return list.reduce((total, item) => {
        if (item.type === type) {
            return total + item.value;
        }
        return total;
    }, 0);
}

let transactions = [
    {type: "income", value: 100},
    {type: "expense", value: 50},
    {type: "income", value: 200}
];
console.log(getTotal(transactions, "income")); // 300
console.log(getTotal(transactions, "expense")); // 50

function getProfit(list) {
    let income = getTotal(list, "income");
    let expense = getTotal(list, "expense");
    let purchase = getTotal(list, "purchase");
    return income - expense - purchase;
}

console.log(getProfit(transactions)); // 250

function groupByType(list) {
    return list.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});
}

console.log(groupByType(transactions));

// ===== Báo cáo tháng =====
let reportData = [
    {type: "income",   value: 600000,  category: "Bán hàng",   date: "2026-10-05"},
    {type: "income",   value: 780000,  category: "Bán hàng",   date: "2026-10-20"},
    {type: "purchase", value: 1200000, category: "Sữa",        date: "2026-10-02"},
    {type: "purchase", value: 350000,  category: "Bao bì",     date: "2026-10-02"},
    {type: "expense",  value: 300000,  category: "Điện nước",  date: "2026-10-10"},
    {type: "expense",  value: 120000,  category: "Vận chuyển", date: "2026-10-12"},
    {type: "income",   value: 500000,  category: "Bán hàng",   date: "2026-09-28"} // tháng 9, không tính
];

function getMonthly(list, month, year) {
    let prefix = `${year}-${String(month).padStart(2, "0")}`;
    return list.filter(item => item.date.startsWith(prefix));
}

function sumByCategory(list) {
    return list.reduce((acc, item) => {
        if (item.type === "income") {
            return acc;
        }
        acc[item.category] = (acc[item.category] || 0) + item.value;
        return acc;
    }, {});
}

let formatMoney = (n) => n.toLocaleString("vi-VN") + " đ";
let line = (label, n) => label.padEnd(16) + formatMoney(n).padStart(12);

function printMonthlyReport(list, month, year) {
    let data = getMonthly(list, month, year);

    console.log(`===== BÁO CÁO THÁNG ${month}/${year} =====`);
    console.log(line("Tổng thu:", getTotal(data, "income")));
    console.log(line("Tổng chi:", getTotal(data, "expense")));
    console.log(line("Tổng nhập hàng:", getTotal(data, "purchase")));
    console.log("-".repeat(33));
    console.log(line("Lãi lỗ:", getProfit(data)));
    console.log("");
    console.log("Chi phí theo danh mục:");
    Object.entries(sumByCategory(data))
        .sort((a, b) => b[1] - a[1])
        .forEach(([name, amount]) => console.log(line(`  ${name}`, amount)));
}

printMonthlyReport(reportData, 10, 2026);