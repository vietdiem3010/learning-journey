import { reportData } from './data.js';
import { formatMoney } from './utils.js';
import { getTotal, getProfit, getMonthly, sumByCategory } from './transactions.js';

// Chạy bằng Node: node js/report.js
// ===== Báo cáo tháng (chép từ practice/ngay4.js) =====
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
