# Học viên - Khóa học

**Đường dẫn:** `https://lamsonedutech.vn/admin/business/courseStudent`

Đây là **bảng quan hệ** giữa học viên và khóa học mà họ đang sở hữu, giúp bạn:
- Tra cứu nhanh: học viên nào đang học khóa nào.
- Gán khóa miễn phí cho học viên (VIP, khuyến mại).
- Gia hạn thời hạn sử dụng khóa.
- Thu hồi quyền học khi cần (vd: hoàn tiền).

## Danh sách

Cột chính:
- Tên học viên, Số điện thoại
- Tên khóa học
- Ngày bắt đầu, Ngày hết hạn
- **Nguồn**: Mua thường / Khuyến mãi / Gán thủ công / Đại lý
- Mã hóa đơn liên quan (nếu mua)
- Trạng thái (Đang hoạt động / Hết hạn / Bị thu hồi)

## Bộ lọc

- Theo khóa học
- Theo trạng thái
- Theo nguồn
- Theo khoảng ngày bắt đầu / hết hạn
- Theo học viên (tìm theo tên/SĐT)

## Gán khóa cho học viên (thủ công)

1. Bấm **Gán khóa**.
2. Chọn **Học viên** (gõ tên/SĐT để tìm).
3. Chọn **Khóa học**.
4. Cấu hình:
   - **Thời hạn** (số ngày, hoặc ngày kết thúc cố định)
   - **Nguồn**: chọn `Gán thủ công` hoặc `Khuyến mãi`
   - **Ghi chú** (vd: "Học viên VIP, miễn phí học kỳ 1")
5. Bấm **Lưu**. Học viên có thể vào học ngay.

## Gán hàng loạt

Nếu cần gán cho nhiều học viên cùng lúc (vd cả một lớp offline):
1. Bấm **Gán hàng loạt**.
2. Tải template Excel.
3. Điền: SĐT học viên, Mã khóa, Ngày bắt đầu, Số ngày sử dụng.
4. Upload lại → hệ thống xác nhận và gán đồng loạt.

## Gia hạn

- Bấm icon **Gia hạn** trên dòng.
- Nhập **số ngày cần thêm** (vd 30 ngày) hoặc **ngày hết hạn mới**.
- Lưu.

## Thu hồi quyền học (hủy)

::: warning
Khi thu hồi, học viên ngay lập tức không vào được khóa. Hãy chắc chắn đã hoàn tiền hoặc đã thông báo cho học viên.
:::

1. Bấm icon **Hủy**.
2. Chọn lý do (Hoàn tiền / Vi phạm / Khác).
3. Xác nhận.

## Đối soát với Hóa đơn

- Mỗi dòng "mua khóa" tương ứng 1 chi tiết hóa đơn.
- Bấm vào **Mã hóa đơn** để mở [Chi tiết hóa đơn](./hoa-don) liên quan.
- Khi có khiếu nại "tôi đã thanh toán nhưng chưa vào được khóa" → tra ở đây trước.

## Câu hỏi thường gặp

**Học viên báo "không thấy khóa đã mua trong danh sách của mình".**
→ Kiểm tra ở đây. Nếu **không có dòng nào** thì có thể giao dịch chưa hoàn tất (xem [Hóa đơn](./hoa-don)). Nếu có dòng nhưng trạng thái Hết hạn → gia hạn lại.

**Có thể thấy danh sách học viên của 1 khóa cụ thể không?**
→ Có. Vào [Khóa học](./khoa-hoc) → mở chi tiết khóa → tab **Học viên**.

**Học viên mua 1 khóa 2 lần (có 2 dòng) - xử lý sao?**
→ Có thể là cộng dồn thời hạn. Kiểm tra hóa đơn từng lần. Nếu là lỗi → hoàn tiền 1 lần và hủy 1 dòng tương ứng.
