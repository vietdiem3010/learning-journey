// Ngày hôm nay dạng "YYYY-MM-DD" theo giờ máy.
// Không dùng toISOString() vì nó tính theo giờ UTC (ở VN trước 7h sáng sẽ ra ngày hôm qua)
export function getToday() {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${month}-${day}`;
}

// Trả về object lỗi theo tên ô, ví dụ { amount: "..." }. Rỗng {} là hợp lệ
export function validateTransaction(tx, today = getToday()) {
    const errors = {};

    if (!tx.type) {
        errors.type = "Loại giao dịch là bắt buộc";
    }
    if (Number.isNaN(tx.amount)) {
        errors.amount = "Số tiền là bắt buộc";
    } else if (tx.amount <= 0) {
        errors.amount = "Số tiền phải lớn hơn 0";
    }
    if (!tx.category) {
        errors.category = "Danh mục là bắt buộc";
    }
    if (!tx.date) {
        errors.date = "Ngày là bắt buộc";
    } else if (tx.date > today) { // chuỗi "YYYY-MM-DD" so sánh trực tiếp được
        errors.date = "Ngày không được sau hôm nay";
    }

    return errors;
}
