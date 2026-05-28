# Mã khuyến mãi

**Đường dẫn:** `https://lamsonedutech.vn/admin/business/discount`

Tạo và quản lý **mã giảm giá** mà học viên có thể nhập khi thanh toán.

## Danh sách mã

Cột chính:
- Mã khuyến mãi (vd `HSA2026`, `WELCOME50K`)
- Loại giảm: **% phần trăm** hoặc **số tiền cố định**
- Giá trị giảm
- Áp dụng cho: Tất cả khóa / Khóa cụ thể / Khung chương trình cụ thể
- Điều kiện áp dụng: đơn tối thiểu, lần sử dụng
- Ngày bắt đầu - Ngày kết thúc
- Số lượng tổng / Đã dùng
- Trạng thái (Đang chạy / Hết hạn / Tạm tắt)

## Tạo mã khuyến mãi

1. Bấm **Thêm mã**.
2. Nhập **Mã**: nên ngắn, dễ nhớ, không dấu, không khoảng trắng.
3. Chọn **Loại giảm**:
   - **% phần trăm**: vd 10% (nên đặt mức tối đa giảm).
   - **Số tiền cố định**: vd 50.000đ.
4. Nhập **Giá trị giảm**.
5. **Phạm vi áp dụng**:
   - Tất cả khóa, hoặc
   - Chọn khóa / khung chương trình cụ thể.
6. **Điều kiện**:
   - Đơn tối thiểu (vd: chỉ giảm khi mua ≥ 500.000đ).
   - Số lần sử dụng tối đa: tổng số người dùng và mỗi học viên dùng được mấy lần.
   - Áp dụng cho học viên mới / mọi học viên.
7. **Thời gian hiệu lực**: ngày bắt đầu - ngày kết thúc.
8. **Trạng thái**: Bật / Tắt.
9. Bấm **Lưu**.

## Tạm tắt / Bật lại mã

- Cần tạm dừng phát hành mà không xóa: bấm **Tắt**.
- Sau này mở lại: bấm **Bật**.

## Sửa mã

- Có thể chỉnh giá trị giảm, thời gian, phạm vi.
- Học viên đã sử dụng vẫn giữ giảm giá cũ trên hóa đơn của họ.

## Xóa mã

- Chỉ xóa được mã **chưa có ai sử dụng**. Nếu đã có lượt dùng, hãy tắt thay vì xóa.

## Cách học viên sử dụng

1. Học viên thêm khóa vào giỏ.
2. Tại trang **Thanh toán** → nhập **Mã khuyến mãi** vào ô tương ứng → bấm **Áp dụng**.
3. Hệ thống tự kiểm tra điều kiện và cập nhật giá.

## Theo dõi hiệu quả

- Cột **Đã dùng** cho biết số lượt áp dụng thành công.
- Xem [Thống kê → Khóa học](./thong-ke#_1-thống-kê-khóa-học) để xem doanh thu theo khoảng thời gian, so trước/sau khi tung mã.

## Gợi ý chiến dịch

| Loại chiến dịch | Mẫu mã |
| --- | --- |
| Học viên mới | `WELCOME50K`, giảm 50k cho đơn đầu, hết hạn 7 ngày |
| Đầu năm học | `DAUNAM10`, giảm 10% cho mọi khóa, kéo dài 2 tuần |
| Sự kiện ngày 20/11 | `2011GV`, áp dụng cho khóa luyện thi |
| Black Friday | `BF2025`, giảm 30%, giới hạn 100 lượt đầu |

## Câu hỏi thường gặp

**Học viên báo "nhập mã nhưng không giảm giá".**
→ Kiểm tra: mã còn hiệu lực? Đúng phạm vi khóa? Đơn của họ có đạt mức tối thiểu? Họ đã dùng mã này trước đó chưa?

**Có thể dùng 2 mã trong 1 đơn không?**
→ Mặc định **không**. Nếu cần, hãy tạo 1 mã với mức giảm tương đương.

**Học viên muốn dùng mã sau khi đã thanh toán.**
→ Hệ thống không hoàn lại tự động. Có thể hỗ trợ bằng cách gia hạn thêm hoặc tặng coupon mới.
