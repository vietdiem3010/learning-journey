Ngày 1: 
const: dùng mặc định cho giá trị không gán lại (object/mảng, vì chỉ cấm gán lại biến chứ không cấm sửa nội dung)
let: dùng khi biến cần gán lại giá trị (biến đếm, tổng, ....)
var: gần như không dùng vì có phạm vi theo hàm chứ không theo khối, cho khai báo trùng tên và bị hoisting, dễ gây lỗi khó thấy. 
let và const có phạm vi theo khối và báo lỗi sớm hơn.

Ngày 2: 
Arrow function khác function thường ở điểm nào về this?
Không có this riêng. Nó lấy this từ phạm vi bao quanh nơi nó được định nghĩa
Không có arguments. Dùng ...args thay thế
Không thể gọi bằng new (không dùng làm constructor)