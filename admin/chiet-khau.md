# Chiết khấu

**Đường dẫn:** `https://lamsonedutech.vn/admin/business/dealer`

Chiết khấu (Dealer Discount) cấu hình **tỷ lệ ăn chia doanh thu** với:
- Giáo viên cộng tác (không phải nhân viên cơ hữu).
- Đại lý / cộng tác viên bán hàng.
- Đối tác phân phối.

## Khái niệm

Khi một hóa đơn được tạo có liên quan tới một **Đại lý / Giáo viên cộng tác**, hệ thống tự tính chiết khấu theo công thức cấu hình.

Ví dụ:
- Khóa A giá 1.000.000đ.
- Cấu hình chiết khấu cho giáo viên X = 40%.
- Học viên mua khóa A qua link giới thiệu của giáo viên X.
- Giáo viên X được tính 400.000đ chiết khấu.

## Danh sách chiết khấu

Cột chính:
- Tên người nhận chiết khấu (giáo viên / đại lý)
- Khóa / khung chương trình áp dụng
- Tỷ lệ (% hoặc số tiền cố định)
- Điều kiện kích hoạt (nếu có): doanh số tối thiểu, mức bậc thang
- Ngày bắt đầu - kết thúc
- Trạng thái

## Tạo cấu hình chiết khấu

1. Bấm **Thêm chiết khấu**.
2. **Người nhận**:
   - Chọn **Giáo viên** từ danh sách, hoặc
   - Chọn **Đại lý** từ [Đại lý](./dai-ly).
3. **Phạm vi**:
   - Tất cả khóa của giáo viên đó (đối với giáo viên).
   - Khóa / Khung chương trình cụ thể.
4. **Tỷ lệ chiết khấu**:
   - **Cố định**: 1 con số duy nhất (vd 30%).
   - **Bậc thang**: chia mức theo doanh thu (vd ≤ 10tr: 30%; > 10tr: 35%).
5. **Thời gian hiệu lực**.
6. Lưu.

## Xem chi tiết chiết khấu

`https://lamsonedutech.vn/admin/business/detaildealer/:id`

Trang chi tiết hiển thị:
- Bảng các giao dịch đã tính chiết khấu (theo ngày, hóa đơn).
- Tổng doanh thu, tổng chiết khấu trong khoảng thời gian.
- Đã thanh toán bao nhiêu, còn nợ bao nhiêu.

## Quy trình thanh toán chiết khấu

1. Cuối tháng/quý, xuất **báo cáo chiết khấu** theo người nhận.
2. Đối soát với phòng kế toán.
3. Thanh toán bằng chuyển khoản hoặc tiền mặt.
4. Trên hệ thống, đánh dấu **Đã thanh toán** cho các giao dịch tương ứng.

## Đại lý

Phần [Đại lý](./dai-ly) là nơi quản lý tài khoản đại lý (đơn vị / cá nhân bán hàng giúp hệ thống), riêng biệt với chiết khấu của giáo viên.

## Câu hỏi thường gặp

**Một giáo viên có nhiều khóa, cần chiết khấu khác nhau?**
→ Tạo nhiều dòng chiết khấu, mỗi dòng cho 1 khóa / nhóm khóa với tỷ lệ riêng.

**Học viên mua qua mã khuyến mãi - chiết khấu tính trên giá nào?**
→ Mặc định tính trên **giá thực thu** (sau khuyến mãi). Có thể cấu hình tính trên giá gốc nếu cần.

**Giáo viên báo "thiếu chiết khấu của tháng này".**
→ Mở [Chi tiết chiết khấu](./chiet-khau) → tab Giao dịch của giáo viên → đối chiếu hóa đơn. Có thể có hóa đơn chưa hoàn tất thanh toán.
