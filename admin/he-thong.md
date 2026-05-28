# Cấu hình Hệ thống

Nhóm **Hệ thống** chứa các cấu hình "nền tảng" mà admin cần thiết lập sớm và ít khi đụng vào sau đó.

| Mục | Đường dẫn | Mục đích |
| --- | --- | --- |
| Ngân hàng | `https://lamsonedutech.vn/admin/system/bank` | Tài khoản nhận tiền hiển thị cho học viên |
| Footer | `https://lamsonedutech.vn/admin/system/footer` | Nội dung phần chân trang website |
| Liên hệ | `https://lamsonedutech.vn/admin/system/contact` | Thông tin liên hệ, hotline, địa chỉ |

## 1. Ngân hàng

Mục này khai báo **tài khoản ngân hàng nhận thanh toán** mà học viên sẽ thấy khi thanh toán bằng chuyển khoản.

### Tạo tài khoản ngân hàng

1. Vào `https://lamsonedutech.vn/admin/system/bank` → bấm **Thêm tài khoản**.
2. Điền:
   - **Tên ngân hàng** (Vietcombank, BIDV, Techcombank, …)
   - **Chi nhánh** (nếu cần)
   - **Số tài khoản**
   - **Chủ tài khoản** (đúng như đăng ký với ngân hàng)
   - **Mã QR** (tải lên ảnh, hoặc hệ thống tự sinh QR VietQR nếu hỗ trợ)
   - **Ưu tiên hiển thị** (số thứ tự)
   - **Trạng thái** (Bật / Tắt)
3. Lưu.

### Hiển thị cho học viên
- Khi học viên chọn **Thanh toán chuyển khoản**, hệ thống hiển thị danh sách tài khoản đang bật.
- Học viên copy thông tin hoặc quét QR để chuyển.
- Sau khi chuyển, học viên có thể tải biên lai → admin xác nhận tại [Hóa đơn](./hoa-don).

### Lưu ý
::: warning Bảo mật
- Đảm bảo **chủ tài khoản** trùng pháp nhân/doanh nghiệp đang vận hành hệ thống.
- Định kỳ đối soát với ngân hàng để kịp phát hiện giao dịch lạ.
:::

## 2. Footer

Footer là **phần chân trang** hiển thị trên mọi trang của website học viên.

### Các phần thường có trong footer
- Logo + slogan
- Cột "Về chúng tôi" (Giới thiệu, Liên hệ, Tuyển dụng)
- Cột "Pháp lý" (Điều khoản sử dụng, Chính sách bảo mật, Bảo mật thanh toán)
- Cột "Hỗ trợ" (FAQ, Hướng dẫn, Hotline)
- Mạng xã hội (Facebook, YouTube, Zalo, TikTok)
- Đăng ký nhận tin
- Bản quyền

### Cấu hình Footer

1. Vào `https://lamsonedutech.vn/admin/system/footer`.
2. Mỗi **cột** trong footer là 1 nhóm:
   - Tiêu đề cột (vd "Liên hệ")
   - Danh sách link (text + URL)
3. Có khu vực **HTML tự do** cho phần copyright hoặc nội dung khác.
4. Lưu → hệ thống cập nhật ngay trên trang chủ.

## 3. Liên hệ

Thông tin liên hệ chính của tổ chức.

### Trường thông tin
- Tên đơn vị / Doanh nghiệp
- Địa chỉ (chính, chi nhánh)
- Hotline (1 hoặc nhiều)
- Email hỗ trợ
- Email tuyển dụng
- Giờ làm việc
- Bản đồ Google Map (nhúng iframe hoặc tọa độ)
- Liên kết mạng xã hội

### Cập nhật

1. Vào `https://lamsonedutech.vn/admin/system/contact`.
2. Sửa từng trường → Lưu.
3. Thông tin sẽ hiển thị tự động ở:
   - Trang **Liên hệ** trên website.
   - Footer (nếu cấu hình).
   - Email tự động gửi cho học viên.

## Câu hỏi thường gặp

**Đổi logo footer thì làm ở đâu?**
→ Có thể trong Footer hoặc Cấu hình thương hiệu (tùy phiên bản hệ thống). Liên hệ IT nếu không tìm thấy.

**Tài khoản ngân hàng cũ vẫn hiển thị dù đã tắt?**
→ Có thể do cache. Yêu cầu học viên reload trang.

**Cần thêm điều khoản pháp lý dài (vd Chính sách bảo mật).**
→ Tạo 1 trang riêng (Page) trong **Banner → Menu** hoặc nhờ IT bổ sung route, sau đó trỏ link footer tới trang đó.
