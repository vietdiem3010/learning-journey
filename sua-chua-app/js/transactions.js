// Xử lý danh sách giao dịch

// ===== Thêm, sửa, xóa (chép từ practice/ngay3.js) =====
export function addTransaction(list, tx) {
    return [...list, tx];
}

// Tên gốc trong ngay3.js là updaterTransaction
export function updateTransaction(list, id, changes) {
    return list.map(tx => tx.id === id ? {...tx, ...changes} : tx);
}

export function deleteTransaction(list, id) {
    return list.filter(tx => tx.id !== id);
}

// ===== Tính tổng, lãi lỗ, nhóm (chép từ practice/ngay4.js) =====
export function getTotal(list, type) {
    return list.reduce((total, item) => {
        if (item.type === type) {
            return total + item.amount;
        }
        return total;
    }, 0);
}

export function getProfit(list) {
    let income = getTotal(list, "income");
    let expense = getTotal(list, "expense");
    let purchase = getTotal(list, "purchase");
    return income - expense - purchase;
}

export function groupByType(list) {
    return list.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});
}

// TODO: chưa có trong ngay3.js / ngay4.js, tự viết (nhóm giao dịch theo item.category)
export function groupByCategory(list) {
}

export function getMonthly(list, month, year) {
    let prefix = `${year}-${String(month).padStart(2, "0")}`;
    return list.filter(item => item.date.startsWith(prefix));
}

export function sumByCategory(list) {
    return list.reduce((acc, item) => {
        if (item.type === "income") {
            return acc;
        }
        acc[item.category] = (acc[item.category] || 0) + item.amount;
        return acc;
    }, {});
}
