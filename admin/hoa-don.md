# Hóa đơn

**Đường dẫn:** `https://lamsonedutech.vn/admin/business/receipt`

Quản lý toàn bộ hóa đơn (receipt) phát sinh trong hệ thống: học viên mua khóa, gia hạn, mua bộ đề, mua học liệu…

## Danh sách hóa đơn

Cột chính:
- **Mã hóa đơn** (vd `HD20260512001`)
- **Học viên** (tên, SĐT)
- **Tổng tiền** trước khuyến mãi
- **Khuyến mãi** (nếu có)
- **Số tiền thực thu**
- **Phương thức thanh toán** (Chuyển khoản / VNPay / Momo / Tiền mặt…)
- **Trạng thái**:
  - `Chờ thanh toán` (vừa tạo)
  - `Đã thanh toán` (đã đối soát thành công)
  - `Đã hủy`
  - `Hoàn tiền`
- **Ngày tạo**, **Ngày thanh toán**
- Đại lý / Giáo viên giới thiệu (nếu có)

## Bộ lọc & tìm kiếm

- Theo trạng thái
- Theo phương thức thanh toán
- Theo khoảng ngày
- Theo học viên (SĐT / tên)
- Theo khóa học có trong đơn
- Theo đại lý / giáo viên giới thiệu

## Xem chi tiết hóa đơn

`https://lamsonedutech.vn/admin/business/detailreceipt/:id`

Trang chi tiết hiển thị:
- Thông tin học viên
- Danh sách khóa học / sản phẩm trong đơn
- Giá từng dòng, tổng tiền
- Mã khuyến mãi áp dụng
- Phương thức + biên lai (ảnh chứng từ chuyển khoản nếu có)
- Lịch sử thay đổi trạng thái

## Xác nhận thanh toán thủ công

Khi học viên chuyển khoản trực tiếp (không qua cổng thanh toán):
1. Học viên gửi ảnh chứng từ qua hotline / Zalo.
2. Admin / nhân viên kế toán mở hóa đơn → tab **Thanh toán**.
3. Tải lên ảnh chứng từ, ghi chú số tài khoản nhận.
4. Bấm **Xác nhận thanh toán** → hệ thống đổi trạng thái sang **Đã thanh toán**.
5. Hệ thống tự động kích hoạt khóa học cho học viên (xem [Học viên - Khóa học](./hoc-vien-khoa-hoc)).

## Hủy hóa đơn

- Bấm **Hủy** trên dòng.
- Chỉ hủy được đơn ở trạng thái `Chờ thanh toán`.
- Đối với đơn đã thanh toán → dùng **Hoàn tiền** thay vì hủy.

## Hoàn tiền

1. Bấm **Hoàn tiền** trên hóa đơn đã thanh toán.
2. Nhập số tiền hoàn (có thể hoàn toàn phần hoặc 1 phần).
3. Nhập lý do.
4. Xác nhận → hệ thống:
   - Đổi trạng thái thành **Hoàn tiền**.
   - Thu hồi quyền học của khóa tương ứng (xem [Học viên - Khóa học](./hoc-vien-khoa-hoc)).
   - Kế toán thực hiện hoàn tiền thực tế ngoài hệ thống.

## In hóa đơn / Xuất PDF

- Mở chi tiết hóa đơn → bấm **In hóa đơn** → hiển thị bản in chuẩn.
- Hoặc **Xuất PDF** để gửi qua email cho học viên.

## Đối soát với cổng thanh toán

Nếu hệ thống tích hợp **VNPay / Momo / ZaloPay / OnePay**:
- Trạng thái thanh toán **tự cập nhật** khi cổng thanh toán callback thành công.
- Trường hợp callback lỗi, có thể bấm **Kiểm tra lại** để gọi API truy vấn.

## Báo cáo doanh thu

- Vào [Thống kê → Khóa học](./thong-ke#_1-thống-kê-khóa-học) để xem doanh thu tổng quan.
- Xuất Excel hóa đơn theo bộ lọc để báo cáo kế toán hàng tháng.

## Câu hỏi thường gặp

**Học viên báo "đã chuyển tiền nhưng chưa được mở khóa".**
→ Tra hóa đơn theo SĐT. Nếu trạng thái còn **Chờ thanh toán**, đối soát ngân hàng và xác nhận thủ công.

**Học viên xin xuất hóa đơn VAT đỏ.**
→ Liên hệ kế toán xuất ngoài hệ thống. Hệ thống chỉ cung cấp **biên nhận điện tử** mặc định.

**Tạo hóa đơn thủ công cho học viên offline?**
→ Bấm **Tạo hóa đơn** → chọn học viên + khóa + nhập tiền và phương thức. Phù hợp khi học viên đóng tiền mặt tại văn phòng.
