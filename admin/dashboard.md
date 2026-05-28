# Dashboard - Trang tổng quan (Admin)

**Đường dẫn:** `https://lamsonedutech.vn/admin/dashboard`

Đây là trang đầu tiên hiển thị sau khi bạn đăng nhập tài khoản quản trị. Mục tiêu là cho bạn một cái nhìn nhanh về sức khỏe của hệ thống.

## Các thẻ số liệu (Cards)

Phần trên cùng hiển thị các con số tổng:

| Thẻ | Ý nghĩa |
| --- | --- |
| **Tổng số học viên** | Số tài khoản học viên đang có trong hệ thống |
| **Tổng số giáo viên** | Số giáo viên đang hoạt động |
| **Tổng số khóa học** | Số khóa học đã công khai + đang chuẩn bị |
| **Tổng số đề thi** | Số đề thi đã tạo (gồm cả đề ôn, đề mẫu, bộ đề) |
| **Hóa đơn tháng này** | Số hóa đơn đã thanh toán thành công trong tháng |
| **Doanh thu tháng này** | Tổng tiền đã thu (đã trừ khuyến mãi) |

Bấm vào từng thẻ để nhảy đến trang chi tiết tương ứng.

## Biểu đồ

- **Biểu đồ doanh thu theo ngày / tháng** - giúp theo dõi xu hướng kinh doanh.
- **Biểu đồ học viên mới đăng ký** - theo dõi mức tăng trưởng người dùng.
- **Top khóa học bán chạy** - các khóa có lượng đăng ký lớn nhất trong khoảng thời gian chọn.
- **Tỷ lệ học viên hoạt động** - học viên có hoạt động (học bài / làm bài / mua) trong 7-30 ngày qua.

> 💡 Bạn có thể đổi khoảng thời gian (7 ngày / 30 ngày / quý / năm) bằng bộ chọn ở góc trên bên phải biểu đồ.

## Hoạt động gần đây

- Danh sách **học viên mới đăng ký** trong 24 giờ qua.
- Danh sách **hóa đơn mới** cần xử lý.
- Danh sách **câu hỏi mới** chưa trả lời (Hỏi đáp).

Bấm tên học viên / hóa đơn để mở chi tiết.

## Gợi ý dùng Dashboard hằng ngày

1. Mở Dashboard mỗi sáng để check:
   - Có hóa đơn nào pending quá 24h chưa?
   - Có học viên mới đăng ký cần được chăm sóc không?
   - Doanh thu hôm qua so với cùng kỳ tuần trước?
2. Cuối tuần kiểm tra biểu đồ xu hướng để báo cáo.
3. Khi có sự cố (lượng học viên đăng ký bất thường, doanh thu đột biến) → vào [Thống kê](./thong-ke) để phân tích sâu.

## Khi số liệu không khớp với thực tế

- Bấm nút **Làm mới** (refresh icon) ở góc phải để load lại dữ liệu mới nhất.
- Số liệu doanh thu được tính từ các hóa đơn **đã thanh toán**, không tính hóa đơn đang chờ.
- Nếu vẫn sai, vào [Thống kê](./thong-ke) để xem báo cáo chi tiết hoặc liên hệ IT để kiểm tra.
