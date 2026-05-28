# Quản lý Học viên

**Đường dẫn:** `https://lamsonedutech.vn/admin/account/student`

Đây là nơi quản lý toàn bộ tài khoản học viên: xem danh sách, tạo / sửa / khóa / xóa tài khoản, xem chi tiết tiến độ học của từng người.

## Danh sách học viên

Bảng hiển thị các cột:
- **Họ và tên**
- **Số điện thoại / Email**
- **Ngày sinh, Giới tính**
- **Tỉnh / Thành phố**
- **Khối lớp** (10/11/12)
- **Ngày đăng ký**
- **Số khóa đã mua**
- **Trạng thái** (Hoạt động / Tạm khóa)
- **Thao tác** (Xem / Sửa / Khóa / Xóa)

## Tìm kiếm & Lọc

- Ô tìm kiếm theo **họ tên, số điện thoại, email**.
- Bộ lọc theo **trạng thái**, **khoảng ngày đăng ký**, **khối lớp**, **tỉnh/thành**, **khóa học đã mua**.

## Thêm học viên (thủ công)

Thông thường học viên tự đăng ký. Khi cần tạo thủ công (vd: học viên offline chuyển lên):

1. Bấm **Thêm học viên**.
2. Điền: Họ tên, Số điện thoại, Email, Mật khẩu mặc định, Ngày sinh, Giới tính, Tỉnh / Thành, Khối lớp.
3. (Tùy chọn) Chọn ngay **Khóa học cần gán** cho học viên.
4. Bấm **Lưu**. Hệ thống gửi SMS/email tài khoản cho học viên.

## Sửa thông tin học viên

- Bấm icon **Sửa** trên dòng tương ứng.
- Chỉnh các trường cần đổi → bấm **Lưu**.
- Trường **Số điện thoại** và **Email** là duy nhất, nếu trùng với người khác sẽ báo lỗi.

## Xem chi tiết một học viên

`https://lamsonedutech.vn/admin/account/student/:id`

Trang chi tiết cho phép xem:
- Thông tin cá nhân.
- **Danh sách khóa học đã mua** (kèm ngày mua, giá, mã đơn).
- **Lịch sử làm bài thi**: tên đề, ngày làm, điểm, thời gian, link xem lại.
- **Tiến độ học**: % bài giảng đã xem, chuyên đề đã hoàn thành.
- **Hóa đơn**: các đơn đã thanh toán.

Bấm vào một bài thi để mở [Lịch sử làm bài](/hoc-vien/xem-lai-bai-thi) - rất hữu ích khi học viên khiếu nại "tôi không làm bài này".

## Khóa / Mở khóa tài khoản

- Khi học viên vi phạm (gian lận thi cử, lạm dụng tài khoản): bấm icon **Khóa**.
- Học viên bị khóa **không đăng nhập được** và **không thể làm bài thi**.
- Bấm lại để **Mở khóa**.

> 💡 Nên ghi chú lý do khóa vào trường ghi chú để các admin khác biết.

## Xóa tài khoản

::: danger Lưu ý
Xóa tài khoản sẽ làm mất **toàn bộ lịch sử học và hóa đơn** của học viên. Chỉ xóa khi chắc chắn (tài khoản test, đăng ký nhầm, học viên yêu cầu xóa theo GDPR).

Thay vì xóa, **hãy ưu tiên Khóa** tài khoản.
:::

1. Bấm icon **Xóa** trên dòng.
2. Xác nhận trong popup.
3. Tài khoản và mọi dữ liệu liên quan sẽ bị xóa vĩnh viễn.

## Gán khóa học miễn phí cho học viên

Trường hợp khuyến mại VIP, học sinh học bổng, hoặc bù lỗi:
1. Vào chi tiết học viên.
2. Tab **Khóa học** → bấm **Thêm khóa học**.
3. Chọn khóa cần gán → chọn **Miễn phí** hoặc nhập giá tùy chỉnh.
4. Bấm **Gán**. Học viên có thể vào học ngay.

Cách khác là dùng [Học viên - Khóa học](./hoc-vien-khoa-hoc) để gán hàng loạt.

## Xuất danh sách

- Bấm **Xuất Excel** để tải toàn bộ danh sách đã lọc.
- Có thể dùng file này để gửi SMS/email marketing.

## Câu hỏi thường gặp

**Học viên nói "không nhận được mật khẩu khi đăng ký".**
→ Vào chi tiết → bấm **Reset mật khẩu**, hệ thống gửi lại mật khẩu mới.

**Học viên muốn đổi số điện thoại.**
→ Sửa số trong thông tin tài khoản. Nếu yêu cầu xác thực OTP, hãy giải thích cho học viên thực hiện qua mục **Hồ sơ cá nhân** trên app của họ.

**Một số điện thoại đã được dùng để đăng ký nhưng học viên nói chưa từng đăng ký.**
→ Tìm số đó trong danh sách. Nếu là tài khoản chưa kích hoạt và chưa mua khóa, có thể xóa để học viên đăng ký lại.
