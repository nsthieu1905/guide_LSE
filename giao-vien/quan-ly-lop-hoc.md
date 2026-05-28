# Quản lý lớp học

**Đường dẫn:** `https://lamsonedutech.vn/teacher/class-management/:courseId`

Lớp học là **một nhóm học viên cùng học một khóa theo lịch / mục tiêu chung**. Khác với khóa học (nội dung), lớp học là một đơn vị **vận hành** (lịch, danh sách, điểm danh, chấm điểm theo lớp).

## Khi nào nên dùng lớp học?

- Trung tâm offline chuyển lên online, muốn quản lý theo lớp như cũ.
- Tổ chức **lớp ôn thi cấp tốc** trong 2-3 tháng.
- Cần **so sánh điểm giữa các học viên trong cùng nhóm**.
- Có **lịch live stream** đi kèm khóa học video.

## Truy cập

Từ chi tiết khóa học (`https://lamsonedutech.vn/teacher/detail-course/:idCourse`) → tab **Lớp học** → chọn / tạo lớp.

## Tạo lớp mới

1. Bấm **Thêm lớp**.
2. Điền:
   - **Tên lớp** (vd: "Lớp HSA-K12 Đợt 1 - 2026")
   - **Khóa học áp dụng** (mặc định = khóa hiện tại)
   - **Ngày bắt đầu - Ngày kết thúc**
   - **Số lượng học viên tối đa** (vd: 30)
   - **Mô tả** (lịch học, yêu cầu)
   - (Tùy chọn) **Lịch live**: ngày trong tuần + giờ + link buổi học
3. Lưu.

## Thêm học viên vào lớp

### Cách 1: Mời bằng SĐT / Email
1. Vào chi tiết lớp → **Thêm học viên**.
2. Nhập danh sách SĐT (mỗi dòng 1 số).
3. Hệ thống tự khớp với tài khoản học viên có sẵn → gửi lời mời.
4. Học viên xác nhận tham gia → vào lớp.

### Cách 2: Học viên tự xin vào lớp
- Lớp được hiển thị trong trang khóa (nếu cấu hình **Cho phép học viên tự xin**).
- Học viên bấm **Xin vào lớp** → giáo viên duyệt.

### Cách 3: Import Excel
- Tải template Excel → điền SĐT / Email → upload lại.

## Quản lý thành viên lớp

Tab **Học viên** trong chi tiết lớp:
- Danh sách học viên đang trong lớp.
- **Trạng thái**: Đang học / Tạm nghỉ / Đã loại.
- Tiến độ học (%), điểm trung bình của các bài kiểm tra trong lớp.
- Có thể **loại học viên khỏi lớp** (không phải xóa tài khoản học viên).

## Lịch học / Buổi học

Tab **Lịch học**:
- Lịch trình các buổi học live / offline.
- Mỗi buổi có: chủ đề, giờ, link join (Zoom / Google Meet).
- Học viên thấy lịch trong khóa của họ.

### Tạo buổi học
1. Bấm **Thêm buổi học**.
2. Điền: ngày, giờ, chủ đề, link join, link tài liệu.
3. Lưu → hệ thống thông báo cho học viên trong lớp.

## Điểm danh

Sau mỗi buổi học live, vào **Điểm danh**:
- Tick từng học viên có mặt / vắng / muộn.
- Có thể tự động: bật **Điểm danh tự động qua link join** (nếu hệ thống tích hợp).
- Xuất báo cáo điểm danh theo tuần / tháng.

## Bài tập theo lớp

Tab **Bài tập**:
- Giao bài tập riêng cho lớp (deadline cụ thể).
- Khác với bài luyện tập trong khóa (mở rộng cho mọi học viên), bài tập lớp **chỉ học viên trong lớp** thấy.
- Có thể chấm thủ công + nhận xét.

## Thông báo lớp

- Gửi thông báo cho cả lớp: lịch nghỉ, đổi giờ, lời nhắc trước buổi học.
- Học viên nhận qua email / push notification.

## Báo cáo lớp

Tab **Thống kê**:
- Tỷ lệ điểm danh từng học viên.
- Điểm trung bình từng bài kiểm tra so với điểm trung bình lớp.
- Xếp hạng trong lớp.
- Học viên cần hỗ trợ (điểm thấp / vắng nhiều).

## Đóng lớp

Khi lớp kết thúc:
1. Vào chi tiết lớp → **Kết thúc lớp**.
2. Hệ thống sinh **báo cáo tổng kết** (PDF) - có thể gửi từng học viên/phụ huynh.
3. Lớp ở trạng thái **Đã đóng** - lịch sử vẫn xem được.

## Câu hỏi thường gặp

**Học viên ngoài lớp nhưng vẫn vào học khóa được không?**
→ Có. Lớp là **thêm** trên khóa, không thay thế. Học viên đã mua khóa luôn vào học được, lớp chỉ thêm cấu trúc quản lý.

**Tôi muốn xóa toàn bộ học viên khỏi lớp.**
→ Bấm **... → Loại tất cả**. Cẩn trọng, không khôi phục được.

**Học viên báo "không thấy lớp trong tài khoản".**
→ Kiểm tra: học viên đã chấp nhận lời mời chưa? Lớp đã active chưa? Khóa của lớp có còn quyền truy cập?
