// Điểm khởi động cho trình duyệt (index.html nạp file này)
import { loadTransactions, saveTransactions } from './storage.js';
import { formatMoney, formatDate, getTypeLabel } from './utils.js';
import { addTransaction, getTotal, getProfit } from './transactions.js';

const form = document.querySelector("#tx-form");

// ===== Vẽ ra trang =====

// Mới nhất ở trên cùng: ngày lớn hơn trước, cùng ngày thì cái nhập sau (id lớn hơn) trước.
// Dùng [...list] để không làm đổi thứ tự mảng gốc
function sortNewestFirst(list) {
    return [...list].sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
}

function renderTable(list) {
    const tbody = document.querySelector("#tx-table tbody");
    tbody.replaceChildren();

    sortNewestFirst(list).forEach(item => {
        const tr = document.createElement("tr");
        const cells = [
            formatDate(item.date),
            getTypeLabel(item.type),
            item.category,
            item.note ?? "",
            formatMoney(item.amount)
        ];
        cells.forEach(text => {
            const td = document.createElement("td");
            td.textContent = text; // textContent, không dùng innerHTML: ghi chú do người dùng gõ
            tr.append(td);
        });
        tbody.append(tr);
    });
}

function renderSummary(list) {
    const summary = document.querySelector("#summary");
    const rows = [
        ["Tổng thu", getTotal(list, "income")],
        ["Tổng chi", getTotal(list, "expense")],
        ["Tổng nhập hàng", getTotal(list, "purchase")],
        ["Lãi lỗ", getProfit(list)]
    ];
    summary.replaceChildren();

    rows.forEach(([label, amount]) => {
        const p = document.createElement("p");
        p.textContent = `${label}: ${formatMoney(amount)}`;
        summary.append(p);
    });
}

function render(list) {
    renderTable(list);
    renderSummary(list);
}

// ===== Khởi động =====

// Chưa có gì trong localStorage thì là mảng rỗng
let transactions = loadTransactions();
render(transactions);

// ===== Thêm giao dịch từ form =====
form.addEventListener("submit", (event) => {
    event.preventDefault(); // chặn trình duyệt tải lại trang

    const data = new FormData(form);
    const tx = {
        id: Date.now(),
        type: data.get("type"),
        amount: Number(data.get("amount")), // input luôn trả về chuỗi, phải đổi sang số
        category: data.get("category"),
        note: data.get("note"),
        date: data.get("date")
    };

    transactions = addTransaction(transactions, tx);
    saveTransactions(transactions);
    render(transactions);
    form.reset();
});
