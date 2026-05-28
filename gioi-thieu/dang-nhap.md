# Đăng nhập và Đăng ký

Hệ thống có **3 cổng đăng nhập** cho 3 vai trò. Chọn đúng cổng tương ứng với vai trò của bạn.

## 1. Học viên

### Đăng ký tài khoản mới

1. Truy cập trang chủ hệ thống.
2. Bấm **Đăng ký** ở góc phải trên cùng (hoặc vào trang `https://lamsonedutech.vn/auth/hocvien` rồi chọn tab Đăng ký).
3. Điền các thông tin bắt buộc:
   - Họ và tên
   - Số điện thoại (dùng để đăng nhập và nhận OTP)
   - Email
   - Mật khẩu (ít nhất 6 ký tự, nên có cả chữ và số)
   - Xác nhận mật khẩu
4. Đồng ý điều khoản sử dụng → bấm **Đăng ký**.
5. Hệ thống có thể gửi mã OTP qua SMS/email để xác thực số điện thoại / email. Nhập OTP để kích hoạt tài khoản.

### Đăng nhập

1. Vào trang `https://lamsonedutech.vn/auth/hocvien`.
2. Nhập **số điện thoại / email** và **mật khẩu**.
3. Bấm **Đăng nhập**.
4. Nếu chọn **Ghi nhớ đăng nhập**, lần sau vào hệ thống không cần đăng nhập lại trên cùng trình duyệt.

### Quên mật khẩu

1. Tại trang đăng nhập, bấm **Quên mật khẩu**.
2. Nhập số điện thoại / email đã đăng ký.
3. Nhập mã OTP được gửi tới.
4. Đặt mật khẩu mới và đăng nhập lại.

## 2. Giáo viên

> Tài khoản giáo viên do **Quản trị viên** cấp. Giáo viên không tự đăng ký.

1. Sau khi Admin tạo tài khoản, bạn sẽ nhận **email/SMS** chứa:
   - Tên đăng nhập (thường là số điện thoại hoặc email)
   - Mật khẩu mặc định
   - Đường dẫn đăng nhập: `https://lamsonedutech.vn/auth/giaovien`
2. Đăng nhập lần đầu → hệ thống có thể yêu cầu **đổi mật khẩu** và **bổ sung hồ sơ** (ảnh đại diện, môn dạy, giới thiệu...).
3. Sau đó bạn vào được trang `https://lamsonedutech.vn/teacher/dashboard`.

## 3. Quản trị viên

> Tài khoản admin do **Quản trị cấp cao hơn** tạo. Khi triển khai lần đầu, hệ thống có một tài khoản admin gốc.

1. Vào trang `https://lamsonedutech.vn/auth/admin`.
2. Nhập tên đăng nhập / email và mật khẩu.
3. Sau đăng nhập, vào trang `https://lamsonedutech.vn/admin/dashboard`.

## Đăng xuất

Ở mọi vai trò, bấm vào **avatar / tên người dùng** ở góc trên bên phải → chọn **Đăng xuất**.

> 💡 Sau khi đăng xuất, mọi tab đang mở của hệ thống đều cần đăng nhập lại để tiếp tục.

## Đổi mật khẩu

- **Học viên:** vào `https://lamsonedutech.vn/luyen-tap/nguoi-dung/profile` → tab **Đổi mật khẩu**.
- **Giáo viên:** vào `https://lamsonedutech.vn/teacher/profile` → **Đổi mật khẩu**.
- **Admin:** vào `https://lamsonedutech.vn/admin/profile` → **Đổi mật khẩu**.

## Sự cố thường gặp

- **Sai mật khẩu nhiều lần:** Tài khoản có thể bị tạm khóa vài phút. Đợi và thử lại, hoặc dùng **Quên mật khẩu**.
- **Không nhận được OTP:** Kiểm tra hộp thư rác, chắc chắn nhập đúng số điện thoại / email. Nếu vẫn không có, bấm **Gửi lại** sau ~60 giây.
- **Bị đăng xuất khi đang làm bài thi:** Tránh đăng nhập trên nhiều thiết bị cùng lúc. Bài thi sẽ được lưu nháp, có thể tiếp tục nếu còn thời gian.
- **Quên cả mật khẩu và số điện thoại:** Liên hệ bộ phận hỗ trợ (mục **Liên hệ** ở footer).
