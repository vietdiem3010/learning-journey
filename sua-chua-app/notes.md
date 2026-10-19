const: dùng mặc định cho giá trị không gán lại (object/mảng, vì chỉ cấm gán lại biến chứ không cấm sửa nội dung)
let: dùng khi biến cần gán lại giá trị (biến đếm, tổng, ....)
var: gần như không dùng vì có phạm vi theo hàm chứ không theo khối, cho khai báo trùng tên và bị hoisting, dễ gây lỗi khó thấy. 
let và const có phạm vi theo khối và báo lỗi sớm hơn.