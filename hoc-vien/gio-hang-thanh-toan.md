# Giỏ hàng & Thanh toán

## Giỏ hàng

**Đường dẫn:** `https://lamsonedutech.vn/luyen-tap/gio-hang/:id`

### Truy cập giỏ hàng
- Bấm icon **🛒 Giỏ hàng** ở góc trên phải.
- Hoặc sau khi bấm **Thêm vào giỏ** từ trang khóa.

### Trên trang giỏ hàng
- Danh sách các khóa đã chọn (ảnh, tên, giá).
- Có thể **Xóa khóa khỏi giỏ**.
- Có thể **Đổi số lượng** (1 khóa thường mua 1, nhưng học liệu/sách có thể nhiều).
- **Tổng tiền tạm tính**.
- Ô **Mã khuyến mãi** - nhập mã nếu có.

## Thanh toán

Bấm **Thanh toán** ở giỏ hàng → vào trang `https://lamsonedutech.vn/luyen-tap/hoa-don/checkout`.

### Bước 1: Xác nhận thông tin

- Họ tên, SĐT, email - hệ thống tự điền từ hồ sơ.
- Có thể chỉnh sửa nếu cần (vd: dùng email khác cho hóa đơn).
- (Tùy chọn) Điền **mã giới thiệu** từ đại lý / giáo viên nếu có.

### Bước 2: Áp dụng mã khuyến mãi

- Gõ mã vào ô → bấm **Áp dụng**.
- Nếu mã hợp lệ, giá được giảm ngay.
- Có thể bỏ áp dụng để gõ mã khác.

### Bước 3: Chọn phương thức thanh toán

| Phương thức | Cách dùng |
| --- | --- |
| **Chuyển khoản** | Hệ thống hiển thị tài khoản nhận tiền + QR code. Bạn chuyển khoản qua app ngân hàng. |
| **VNPay** | Bấm "Thanh toán VNPay" → quét QR hoặc nhập thẻ ATM/Visa. |
| **Momo** | Bấm "Thanh toán Momo" → mở app Momo → quét QR. |
| **ZaloPay** | Tương tự Momo. |
| **Thẻ Visa / Master** | Nhập số thẻ trực tiếp qua cổng thanh toán. |
| **Tiền mặt tại văn phòng** | Đến văn phòng trung tâm thanh toán. |

### Bước 4: Hoàn tất

#### Với cổng thanh toán online (VNPay, Momo, ZaloPay, Visa)
- Sau khi thanh toán thành công, hệ thống tự cập nhật **trạng thái = Đã thanh toán**.
- Khóa học được kích hoạt ngay.
- Bạn có thể vào **Khóa học của tôi** để bắt đầu học.

#### Với chuyển khoản
1. Sau khi chuyển khoản, **chụp ảnh biên lai**.
2. Vào trang `https://lamsonedutech.vn/luyen-tap/hoa-don/checkout2/:idReceipt` → tải biên lai lên.
3. Trung tâm sẽ **xác nhận trong vòng 1-24 giờ** (giờ hành chính).
4. Khi xác nhận xong, bạn nhận email + khóa được kích hoạt.

> 💡 Khi chuyển khoản, **nội dung chuyển khoản phải có mã hóa đơn** (vd: `HD20260512001`) để trung tâm khớp nhanh.

## Xem lại hóa đơn

**Đường dẫn:** `https://lamsonedutech.vn/luyen-tap/nguoi-dung/hoa-don`

- Liệt kê tất cả hóa đơn của bạn.
- Bấm vào để xem chi tiết, tải PDF, in.

## Các trạng thái hóa đơn

| Trạng thái | Ý nghĩa |
| --- | --- |
| **Chờ thanh toán** | Hóa đơn vừa tạo, chưa thanh toán hoặc chuyển khoản chưa được xác nhận |
| **Đã thanh toán** | Thành công, khóa đã được kích hoạt |
| **Đã hủy** | Bạn hoặc trung tâm đã hủy đơn |
| **Hoàn tiền** | Đã hoàn tiền cho bạn |

## Hủy hóa đơn

- Hóa đơn ở trạng thái **Chờ thanh toán** có thể tự hủy.
- Đã thanh toán → cần liên hệ trung tâm yêu cầu hoàn tiền.

## Câu hỏi thường gặp

**Tôi đã chuyển khoản 30 phút rồi mà chưa thấy khóa được mở?**
→ Có thể trung tâm chưa xác nhận. Đợi tới giờ hành chính hoặc liên hệ hotline (gửi biên lai).

**Cổng thanh toán báo lỗi.**
→ Thử lại sau vài phút hoặc đổi phương thức (Momo / chuyển khoản). Nếu vẫn lỗi, liên hệ trung tâm.

**Tôi nhập mã khuyến mãi nhưng báo "không hợp lệ".**
→ Kiểm tra: mã còn hạn? Mã áp dụng cho khóa bạn đang mua? Đơn đạt mức tối thiểu?

**Tôi muốn xuất hóa đơn VAT đỏ cho công ty.**
→ Liên hệ trung tâm. Hệ thống mặc định cấp **biên nhận điện tử**; VAT đỏ xuất ngoài hệ thống.

**Mua khóa cho con / người khác?**
→ Bạn vẫn dùng tài khoản của bạn để mua. Sau đó liên hệ trung tâm chuyển sở hữu khóa sang tài khoản người sử dụng, hoặc đăng ký tài khoản mới cho người đó.
