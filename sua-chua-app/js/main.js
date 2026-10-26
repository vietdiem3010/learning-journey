// Điểm khởi động cho trình duyệt (index.html nạp file này)
import { loadTransactions, saveTransactions } from './storage.js';
import { formatMoney, formatDate, getTypeLabel } from './utils.js';
import { addTransaction, getTotal, getProfit } from './transactions.js';
import { validateTransaction, getToday } from './validation.js';

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

// ===== Hiện / xóa lỗi dưới ô nhập =====

// Gán lỗi cho từng ô; ô nào không có lỗi thì gán "" (nên showErrors({}) là xóa hết)
function showErrors(errors) {
    form.querySelectorAll(".error-message").forEach(el => {
        const field = el.dataset.errorFor;
        el.textContent = errors[field] ?? "";
    });
}

function clearErrors(name) {
    form.querySelectorAll(".error-message").forEach(el => {
        if (el.dataset.errorFor === name) {
            el.textContent = "";
        }
    });
}

// ===== Khởi động =====

// Chưa có gì trong localStorage thì là mảng rỗng
let transactions = loadTransactions();
render(transactions);
form.elements.date.max = getToday(); // lịch không cho chọn ngày sau hôm nay

// ===== Thêm giao dịch từ form =====
form.addEventListener("submit", (event) => {
    event.preventDefault(); // chặn trình duyệt tải lại trang

    const data = new FormData(form);
    const amountText = data.get("amount");
    const tx = {
        id: Date.now(),
        type: data.get("type"),
        amount: amountText === "" ? NaN : Number(amountText), // input luôn trả về chuỗi; Number("") là 0 nên ô trống phải đổi thành NaN
        category: data.get("category"),
        note: data.get("note"),
        date: data.get("date")
    };

    const errors = validateTransaction(tx);
    showErrors(errors);
    if (Object.keys(errors).length > 0) {
        return;
    }

    transactions = addTransaction(transactions, tx);
    saveTransactions(transactions);
    render(transactions);
    form.reset();
});

// Người dùng sửa ô nào thì xóa lỗi của ô đó.
// Gắn một lần trên form: sự kiện input của ô con sẽ nổi bọt lên form
form.addEventListener("input", (event) => {
    clearErrors(event.target.name);
});
