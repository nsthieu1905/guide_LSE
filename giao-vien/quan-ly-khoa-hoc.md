# Quản lý khóa học (Giáo viên)

**Đường dẫn:** `https://lamsonedutech.vn/teacher/course-management`

Đây là **trang chính** của giáo viên. Mọi thao tác tạo khóa, soạn nội dung, gắn đề thi, công khai khóa đều bắt đầu từ đây.

## Danh sách khóa của bạn

Bạn chỉ thấy các khóa do **mình phụ trách** (Admin gán). Cột chính:

- Tên khóa
- Khung chương trình
- Loại khóa (Nền tảng / Chuyên đề / Thực chiến)
- Số chương / chuyên đề / bài giảng
- Số học viên đang học
- Giá
- Trạng thái (Nháp / Công khai / Ẩn)
- Thao tác (Sửa / Xem chi tiết / Sao chép / Ẩn)

## Tạo khóa học mới

> ⚠️ Tùy hệ thống, có nơi chỉ Admin được tạo khóa rồi giao cho giáo viên. Nếu bạn có nút **Thêm khóa**, hãy theo các bước sau.

1. Bấm **Thêm khóa**.
2. Trang `https://lamsonedutech.vn/teacher/form-course/:idCourse` mở ra với form khai báo:
   - **Tên khóa**
   - **Khung chương trình** (chọn từ dropdown)
   - **Loại khóa**: Ôn luyện nền tảng / Ôn luyện chuyên đề / Luyện đề thi thực chiến
   - **Ảnh bìa**, **Mô tả ngắn**
   - **Mô tả chi tiết** (rich text)
   - **Giá gốc**, **Giá khuyến mãi**
   - **Thời gian sử dụng** (số ngày)
   - **Cho phép học thử bao nhiêu phút?**
3. **Lưu** dưới dạng nháp.

## Chi tiết khóa học

`https://lamsonedutech.vn/teacher/detail-course/:idCourse`

Trong trang chi tiết, bạn có các tab:

### 1. Thông tin chung
- Toàn bộ thông tin đã khai báo khi tạo.
- Có thể chỉnh sửa bất cứ lúc nào.

### 2. Cấu trúc nội dung
- Cây **Chương → Chuyên đề → Bài giảng**.
- Bấm **Thêm chương** → đặt tên chương + thứ tự.
- Trong chương, bấm **Thêm chuyên đề**.
- Trong chuyên đề, có thể thêm **Bài giảng** và **Đề kiểm tra cuối chuyên đề**.
- Kéo-thả để đổi thứ tự.

→ Xem chi tiết: [Soạn chương / chuyên đề / bài giảng](./soan-bai-giang).

### 3. Đề thi
- Tổng hợp các đề thi đã gắn vào khóa: đề ôn khóa học, đề kiểm tra chuyên đề, đề mẫu luyện thi.
- Có thể tạo đề mới hoặc liên kết đề đã có.

### 4. Lớp học
- Danh sách các lớp đang dùng khóa này.
- Mở từng lớp để vào [Quản lý lớp học](./quan-ly-lop-hoc).

### 5. Học viên
- Toàn bộ học viên đã mua / được gán khóa này (không phân theo lớp).
- Cột: tên, SĐT, ngày bắt đầu, tiến độ học (%), điểm trung bình.
- Bấm vào học viên để xem **chi tiết tiến độ và điểm thi** của họ.

### 6. Thảo luận / Hỏi đáp khóa
- Câu hỏi học viên đặt riêng cho khóa này (link sang [Hỏi đáp](./hoi-dap)).

### 7. Báo cáo / Thống kê
- Số học viên hoàn thành.
- Điểm trung bình theo chuyên đề.
- Tỷ lệ học viên hoạt động tuần này.

## Sao chép khóa

Khi cần tạo khóa tương tự (ví dụ năm sau):

1. Trên dòng khóa, bấm **... → Sao chép**.
2. Đặt tên mới và chọn khung chương trình.
3. Hệ thống copy cấu trúc + bài giảng + đề (giữ link video).
4. Mở khóa mới → chỉnh nội dung cho phù hợp năm mới.

## Công khai khóa

Sau khi nội dung và đề thi hoàn thiện:
1. Vào tab **Thông tin chung**.
2. Chọn trạng thái **Công khai**.
3. Lưu.
4. Khóa hiển thị trên trang chủ học viên (nếu khung chương trình cũng đang công khai).

> 💡 Trước khi công khai, hãy **đăng nhập bằng tài khoản học viên test** để xem giao diện thực tế. Tránh sai sót đáng tiếc.

## Câu hỏi thường gặp

**Tôi không thấy nút "Thêm khóa".**
→ Hệ thống có thể chỉ cho Admin tạo khóa. Liên hệ Admin để được giao quyền.

**Khóa nháp đã có học viên test, nay muốn xóa khóa.**
→ Đề nghị Admin can thiệp - xóa khóa kèm dữ liệu test.

**Tôi muốn cộng tác với giáo viên khác trong cùng 1 khóa.**
→ Hệ thống hiện gán 1 giáo viên chính. Bạn có thể chia sẻ tài khoản hoặc nhờ Admin thiết lập tính năng đồng giảng (nếu phiên bản hỗ trợ).
