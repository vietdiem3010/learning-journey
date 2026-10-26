// Lưu và tải danh sách giao dịch từ localStorage

const STORAGE_KEY = "sua-chua-transactions";

// Trả về danh sách đã lưu, hoặc fallback nếu chưa có / dữ liệu hỏng
export function loadTransactions(fallback = []) {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
        return fallback;
    }
    try {
        return JSON.parse(raw);
    } catch {
        return fallback;
    }
}

export function saveTransactions(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}
