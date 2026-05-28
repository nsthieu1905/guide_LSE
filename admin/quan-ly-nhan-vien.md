# Quản lý Nhân viên

**Đường dẫn:** `https://lamsonedutech.vn/admin/account/admin`

Nhân viên là tài khoản nội bộ (kinh doanh, chăm sóc khách hàng, biên soạn nội dung, kế toán…) sử dụng khu vực `https://lamsonedutech.vn/admin/...` nhưng **chỉ thấy những menu được Admin cho phép**.

## Danh sách nhân viên

Cột thông tin:
- Họ tên, Ảnh đại diện
- Số điện thoại, Email
- **Chức vụ** (gắn với một bộ quyền)
- Phòng ban (nếu có)
- Trạng thái
- Thao tác

## Thêm nhân viên

1. Bấm **Thêm nhân viên**.
2. Điền: Họ tên, Số điện thoại, Email, Mật khẩu mặc định.
3. **Chọn chức vụ** từ danh sách (chức vụ phải tạo trước tại [Phân quyền](./phan-quyen)).
4. (Tùy chọn) Phòng ban, ghi chú.
5. Bấm **Lưu**. Hệ thống gửi tài khoản cho nhân viên.

## Đổi chức vụ

- Bấm **Sửa** → chọn lại **Chức vụ**.
- Nhân viên sẽ thấy menu Admin thay đổi ngay sau khi đăng nhập lại.

## Tạm khóa / Xóa

- Khi nhân viên nghỉ việc: **Khóa tài khoản ngay** để cắt quyền truy cập.
- Xóa tài khoản sau một khoảng thời gian (vd 30 ngày) để tránh mất lịch sử thao tác.

## Quy trình cấp tài khoản nhân viên mới

1. HR cung cấp thông tin nhân viên mới (vị trí, phòng ban).
2. Admin kiểm tra hoặc tạo **chức vụ** phù hợp ở [Phân quyền](./phan-quyen) (ví dụ: "Nhân viên CSKH" - chỉ có quyền `student`, `comment`, `invoice`).
3. Admin tạo tài khoản nhân viên, gán chức vụ.
4. Gửi tài khoản, hướng dẫn đăng nhập, yêu cầu đổi mật khẩu lần đầu.
5. Theo dõi hoạt động qua **Lịch sử thao tác** (nếu có).

## Một số "chức vụ" mẫu nên thiết lập

| Chức vụ | Quyền nên bật |
| --- | --- |
| **Quản trị cấp cao** | Tất cả |
| **Nhân viên kinh doanh** | `student`, `invoice`, `discountCode`, `dealerDiscount`, `courseStudent` |
| **Nhân viên CSKH / Hỗ trợ** | `student`, `comment`, `invoice` (chỉ xem) |
| **Biên soạn nội dung** | `course`, `modun`, `thematic`, `lesson`, `question`, `exam`, `examSet`, `evaluate`, `syntheticCriteria`, `exceprt` |
| **Kế toán** | `invoice`, `dealerDiscount` |
| **Marketing** | `menu`, `banner` (banner = nhóm Banner), `footer` |

## Phân biệt Nhân viên vs Giáo viên

| | Nhân viên | Giáo viên |
| --- | --- | --- |
| Khu vực làm việc | `https://lamsonedutech.vn/admin/...` | `https://lamsonedutech.vn/teacher/...` |
| Hiển thị trên trang khóa học | Không | Có (mặt giáo viên + bio) |
| Quản lý lớp học | Không | Có |
| Quản lý khóa do mình tạo | Tùy quyền | Có |
| Có thể tham gia ăn chia doanh thu | Không trực tiếp | Có (qua chiết khấu) |

→ Khi tạo tài khoản, chọn đúng loại để không lẫn quyền.
