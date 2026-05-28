# Đại lý

**Đường dẫn:** `https://lamsonedutech.vn/admin/business/dealerTeacher`

Quản lý hệ thống **đại lý / cộng tác viên bán hàng** ngoài hệ thống nhân viên cơ hữu.

## Khái niệm

Đại lý là **đối tác bên thứ ba** giúp giới thiệu khóa học và nhận chiết khấu. Khác với giáo viên:
- Đại lý không soạn nội dung.
- Đại lý không truy cập khu vực `https://lamsonedutech.vn/teacher/...`.
- Đại lý có **link giới thiệu riêng** (referral) để track doanh số.

## Danh sách đại lý

Cột chính:
- Tên đại lý / cá nhân
- Số điện thoại, Email
- Mã đại lý (referral code)
- Loại: Cá nhân / Tổ chức
- Cấu hình chiết khấu liên kết
- Doanh số luỹ kế
- Trạng thái

## Tạo đại lý

1. Bấm **Thêm đại lý**.
2. Điền:
   - **Tên**, **Số điện thoại**, **Email**
   - **Loại** (Cá nhân / Tổ chức)
   - **Mã đại lý** (referral code) - mặc định tự sinh, có thể đổi
   - **Địa chỉ**, thông tin ngân hàng (để chi trả chiết khấu)
3. Lưu.

## Mã giới thiệu (Referral)

Khi đại lý chia sẻ link có chứa mã giới thiệu của họ (vd `?ref=NAM2026`):
- Học viên click vào link → hệ thống ghi nhận "đại lý giới thiệu".
- Sau khi học viên mua khóa, hệ thống tự tính chiết khấu cho đại lý.

> Link mẫu: `https://hsaplus.edu.vn/luyen-tap/gioi-thieu-khoa-hoc/123?ref=NAM2026`

## Cấu hình chiết khấu cho đại lý

→ Sang [Chiết khấu](./chiet-khau) → chọn người nhận là đại lý vừa tạo → đặt tỷ lệ.

## Xem hiệu quả của đại lý

- Bấm vào dòng đại lý để mở chi tiết.
- Tab **Doanh số**: liệt kê hóa đơn được giới thiệu.
- Tab **Chiết khấu**: tiền chiết khấu đã/chưa thanh toán.

## Thanh toán cho đại lý

1. Cuối kỳ, xuất báo cáo chiết khấu của đại lý.
2. Đối soát.
3. Chuyển khoản theo thông tin ngân hàng đã lưu.
4. Đánh dấu **Đã thanh toán** trên hệ thống để khép sổ.

## Tạm dừng / Xóa đại lý

- **Tạm dừng**: link giới thiệu vẫn còn nhưng giao dịch sau không tính chiết khấu.
- **Xóa**: chỉ xóa được khi chưa có giao dịch.

## Câu hỏi thường gặp

**Đại lý báo "doanh số không khớp với báo cáo họ tự kê khai".**
→ Có thể do học viên đã xóa cookie / vào link không đúng. Đối chiếu mã referral trong hóa đơn để xác minh.

**Có thể vừa là giáo viên vừa là đại lý không?**
→ Có. Tạo 2 cấu hình chiết khấu khác nhau cho cùng người. Khi học viên mua khóa của giáo viên đó qua link giới thiệu của chính họ, có thể nhận cả 2 mức chiết khấu (tùy quy định).
