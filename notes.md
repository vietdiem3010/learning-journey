Ngày 1: Chuẩn bị môi trường và thiết kế dữ liệu
const: dùng mặc định cho giá trị không gán lại (object/mảng, vì chỉ cấm gán lại biến chứ không cấm sửa nội dung)
let: dùng khi biến cần gán lại giá trị (biến đếm, tổng, ....)
var: gần như không dùng vì có phạm vi theo hàm chứ không theo khối, cho khai báo trùng tên và bị hoisting, dễ gây lỗi khó thấy. 
let và const có phạm vi theo khối và báo lỗi sớm hơn.

Ngày 2: Hàm định dạng tiền và ngày kiểu Việt Nam
Arrow function khác function thường ở điểm nào về this?
Không có this riêng. Nó lấy this từ phạm vi bao quanh nơi nó được định nghĩa
Không có arguments. Dùng ...args thay thế
Không thể gọi bằng new (không dùng làm constructor)

Ngày 3: Thêm, sửa, xóa giao dịch
Hỏi: Vì sao nên tạo mảng mới thay vì sửa trực tiếp mảng cũ? 
Trả lời: Sửa trực tiếp sẽ làm các function chỗ khác bị ảnh hưởng nếu sử dụng. Mảng mới giúp code dễ đoán và giữ được dữ liệu cũ.(Tốt cho việc dùng React)

Ngày 4: Tính tổng thu, chi và lãi lỗ
Trả lời: map khác forEach ở đâu? Khi nào dùng cái nào?
Khi cần lặp qua một mảng, chúng ta có thể sử dụng forEach, forhoặc for..of.
Khi cần lặp lại và trả về dữ liệu cho từng phần tử, chúng ta có thể sử dụng map.