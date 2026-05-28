# Quản lý Giáo viên

**Đường dẫn:** `https://lamsonedutech.vn/admin/account/teacher`

Nơi tạo và quản lý tài khoản giáo viên. Khác với học viên, **giáo viên không tự đăng ký** - tài khoản phải do Admin tạo.

## Danh sách giáo viên

Cột thông tin:
- Họ và tên, Ảnh đại diện
- Số điện thoại, Email
- **Môn / Chuyên môn** dạy
- **Số khóa đang phụ trách**
- **Số học viên** đang dạy
- Ngày tạo tài khoản
- Trạng thái (Hoạt động / Tạm khóa)
- Thao tác

## Tạo tài khoản giáo viên

1. Bấm **Thêm giáo viên**.
2. Điền:
   - **Họ và tên** (sẽ hiển thị công khai cho học viên)
   - **Số điện thoại**, **Email** - giáo viên dùng để đăng nhập
   - **Mật khẩu mặc định** (yêu cầu đổi khi đăng nhập lần đầu)
   - **Môn dạy / Chuyên môn** (Toán, Văn, Lý, Hóa, ...)
   - **Bằng cấp / Học vị** (Cử nhân, Thạc sĩ, ...)
   - **Giới thiệu ngắn** (bio hiển thị trên trang khóa học)
   - **Ảnh đại diện**
3. (Tùy chọn) Chọn **Đại lý / Chiết khấu** nếu giáo viên là cộng tác bên ngoài.
4. Bấm **Lưu**. Hệ thống gửi tài khoản qua email/SMS cho giáo viên.

## Sửa hồ sơ giáo viên

- Bấm icon **Sửa**.
- Có thể chỉnh tất cả các trường ngoại trừ **ID hệ thống**.
- Nếu đổi số điện thoại / email → thông báo lại cho giáo viên.

## Phân công khóa học

Có 2 cách:
1. **Vào chi tiết khóa học** (Đào tạo → Khóa học) → chọn giáo viên phụ trách ở phần thông tin.
2. **Vào chi tiết giáo viên** → tab **Khóa học** → bấm **Gán khóa**.

> Mỗi khóa học có 1 giáo viên chính. Có thể có thêm trợ giảng nếu hệ thống cho phép.

## Tạm khóa / Mở khóa

- Khi giáo viên nghỉ tạm thời, vi phạm, hoặc chấm dứt hợp tác → bấm **Khóa**.
- Sau khi khóa: giáo viên **không đăng nhập được**; các khóa học vẫn còn nhưng nên reassign cho người khác.

## Xóa tài khoản giáo viên

::: danger Cảnh báo
Trước khi xóa, cần **chuyển giao toàn bộ khóa học và bài giảng** sang giáo viên khác. Nếu không, các khóa đó sẽ rơi vào trạng thái "không có người phụ trách".
:::

## Chiết khấu cho giáo viên

Nếu giáo viên là cộng tác viên (không phải nhân viên cơ hữu), bạn có thể cấu hình tỷ lệ ăn chia:

1. Vào **[Đại lý](./dai-ly)** → tạo tài khoản đại lý/giáo viên.
2. Liên kết tài khoản giáo viên với cấu hình đại lý.
3. Hệ thống tự tính chiết khấu mỗi khi có hóa đơn liên quan tới khóa của giáo viên đó.
4. Xem báo cáo tại **[Chiết khấu](./chiet-khau)**.

## Xem hiệu quả giảng dạy

- Vào **[Thống kê → Giáo viên](./thong-ke#_2-thống-kê-giáo-viên)**.
- Hoặc trong chi tiết giáo viên có tab **Hiệu quả**: số học viên, doanh thu, đánh giá trung bình.

## Câu hỏi thường gặp

**Giáo viên quên mật khẩu, không đăng nhập được.**
→ Vào chi tiết → bấm **Reset mật khẩu**, gửi mật khẩu mới cho giáo viên.

**Giáo viên muốn đổi ảnh / bio.**
→ Họ có thể tự đổi ở `https://lamsonedutech.vn/teacher/profile`. Admin chỉ can thiệp khi cần.

**Cần cấp quyền giáo viên xem được điểm thi của TẤT CẢ học viên (không chỉ học viên của họ).**
→ Tạo cho họ một **chức vụ nhân viên** thay vì giáo viên, hoặc cấp quyền `student` trong Phân quyền.
