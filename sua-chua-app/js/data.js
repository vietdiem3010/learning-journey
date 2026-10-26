// Dữ liệu mẫu (chép từ practice/data.js và practice/ngay4.js)

export const giaodich1 = {
    id: 1,
    type: "expense",
    amount: 27000,
    category: "Sữa chua",
    note: "Sữa để làm sữa chua",
    date: "2024-06-18"
}
export const giaodich2 = {
    id: 2,
    type: "expense",
    amount: 100000,
    category: "Sữa tươi",
    note: "Sữa để làm sữa chua",
    date: "2024-06-18"
}
export const giaodich3 = {
    id: 3,
    type: "expense",
    amount: 15000,
    category: "Đường",
    note: "Đường để làm sữa chua",
    date: "2024-06-18"
}
export const giaodich4 = {
    id: 4,
    type: "expense",
    amount: 2000,
    category: "Hũ nhựa",
    note: "Hũ nhựa để làm sữa chua",
    date: "2024-06-18"
}
export const giaodich5 = {
    id: 5,
    type: "income",
    amount: 100000,
    category: "Sữa chua bịch",
    note: "Bán được 20 bịch",
    date: "2024-06-18"
}

// ===== Dữ liệu báo cáo tháng =====
export let reportData = [
    {type: "income",   amount: 600000,  category: "Bán hàng",   date: "2026-10-05"},
    {type: "income",   amount: 780000,  category: "Bán hàng",   date: "2026-10-20"},
    {type: "purchase", amount: 1200000, category: "Sữa",        date: "2026-10-02"},
    {type: "purchase", amount: 350000,  category: "Bao bì",     date: "2026-10-02"},
    {type: "expense",  amount: 300000,  category: "Điện nước",  date: "2026-10-10"},
    {type: "expense",  amount: 120000,  category: "Vận chuyển", date: "2026-10-12"},
    {type: "income",   amount: 500000,  category: "Bán hàng",   date: "2026-09-28"} // tháng 9, không tính
];
