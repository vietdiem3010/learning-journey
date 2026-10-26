// Hàm định dạng hiển thị

// Chép từ practice/ngay4.js (bản dùng cho báo cáo tháng)
export let formatMoney = (n) => n.toLocaleString("vi-VN") + " đ";

// Chép từ practice/data.js
export function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

// Chép từ practice/data.js
export function getTypeLabel(type) {
    return type === "income" ? "Thu nhập" : "Chi tiêu";
}
