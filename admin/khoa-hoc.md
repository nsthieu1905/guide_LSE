# Khóa học (Admin)

**Đường dẫn:** `https://lamsonedutech.vn/admin/thematic/course`

Khóa học là đơn vị **được bán / phát hành cho học viên**. Mỗi khóa thuộc một [Khung chương trình](./khung-chuong-trinh) và có một giáo viên phụ trách.

## Danh sách khóa học

Cột chính:
- Tên khóa, Ảnh bìa
- Khung chương trình
- Giáo viên phụ trách
- **Loại khóa** (Ôn luyện nền tảng / Ôn luyện chuyên đề / Luyện đề thi thực chiến)
- Giá gốc, Giá khuyến mãi
- Số chương / chuyên đề
- Số học viên đã mua
- Trạng thái (Công khai / Nháp / Ẩn)

## Tạo khóa học

1. Bấm **Thêm khóa học**.
2. Khai báo thông tin cơ bản:
   - **Tên khóa**
   - **Khung chương trình** (chọn từ danh sách)
   - **Giáo viên phụ trách** (1 giáo viên chính)
   - **Loại khóa**:
     - `1` - Ôn luyện nền tảng (kiến thức cơ bản)
     - `2` - Ôn luyện chuyên đề (chia theo chủ đề)
     - `3` - Luyện đề thi thực chiến (toàn đề full)
   - **Ảnh bìa, Giới thiệu ngắn**
3. **Thiết lập bán hàng**:
   - **Giá gốc**, **Giá khuyến mãi**
   - **Thời gian sử dụng** (số ngày kể từ ngày mua)
   - **Cho phép mua thử / học thử bao nhiêu phút?**
4. **Thiết lập học**:
   - **Có chuyển chương tự động hay học sinh phải hoàn thành chương trước?**
   - **Có giới hạn số lần làm lại bài kiểm tra?**
5. Bấm **Lưu** để tạo bản nháp.

> 💡 Tạo bản nháp trước, **thêm nội dung (chương, chuyên đề, bài giảng)** rồi mới chuyển trạng thái **Công khai**.

## Cấu hình "Mô tả khóa học" cho trang bán hàng

Trang `Đào tạo → Thông tin Khóa học` (`https://lamsonedutech.vn/admin/educate/course`) cho phép biên tập riêng:
- Mô tả dài, ảnh, video giới thiệu
- Lộ trình học theo tuần
- Đầu ra cam kết
- Lời giới thiệu giáo viên

→ Nội dung này hiển thị trên trang **Giới thiệu khóa học** (`https://lamsonedutech.vn/luyen-tap/gioi-thieu-khoa-hoc/:id`) của học viên.

## Thêm nội dung vào khóa

Sau khi tạo khóa, vào tab **Nội dung khóa** (hoặc bấm **Chi tiết khóa**):

1. Bấm **Thêm chương** → đặt tên chương (vd "Chương 1: Hàm số").
2. Trong từng chương, bấm **Thêm chuyên đề**.
3. Trong chuyên đề, có thể thêm:
   - **Bài giảng** (video, văn bản, file)
   - **Đề kiểm tra cuối chuyên đề**
4. Có thể kéo-thả để sắp xếp thứ tự.

→ Xem chi tiết tại [Chương / Chuyên đề](./chuong-chuyen-de) và [Bài giảng](./bai-giang).

## Gán đề thi cho khóa

- **Đề ôn khóa học**: tạo trong [Đề ôn khóa học](./de-on-khoa-hoc) → liên kết vào khóa.
- **Đề kiểm tra cuối chuyên đề**: tạo trong từng chuyên đề.
- **Bài kiểm tra đầu vào** của khóa: tạo từ [Đánh giá đầu vào](./danh-gia-dau-vao) → gán vào khóa.

## Khóa miễn phí vs có phí

- Đặt **Giá gốc = 0** ⇒ khóa miễn phí, học viên chỉ cần đăng ký để vào học.
- Có phí: học viên phải mua qua [Giỏ hàng & Thanh toán](/hoc-vien/gio-hang-thanh-toan).

## Công khai / Ẩn khóa

- **Nháp** (mặc định khi mới tạo): chỉ admin và giáo viên thấy.
- **Công khai**: học viên thấy và mua được.
- **Ẩn**: học viên không tìm thấy mới; người đã mua vẫn học bình thường.

## Sao chép khóa (nếu hệ thống hỗ trợ)

Khi sang năm hoặc tạo khóa tương tự:
1. Bấm **... → Sao chép khóa**.
2. Đặt tên mới, chọn khung mới.
3. Hệ thống copy toàn bộ cấu trúc + bài giảng (link video giữ nguyên).
4. Chỉnh sửa lại nội dung cho phù hợp.

## Xóa khóa

::: danger
Xóa khóa sẽ làm mất lịch sử học của tất cả học viên đã mua. **Hãy ẩn thay vì xóa** trong hầu hết trường hợp.
:::

## Câu hỏi thường gặp

**Khóa đã có học viên mua, có sửa giá được không?**
→ Sửa giá chỉ áp dụng cho học viên mới mua sau đó. Học viên đã mua giữ nguyên quyền học theo thời hạn.

**Tôi đổi giáo viên phụ trách - khóa và lớp học của giáo viên cũ sẽ ra sao?**
→ Khóa học **chuyển sang giáo viên mới**. Cần thông báo cho cả 2 bên. Các lớp học cũ vẫn còn nhưng nên reassign.

**Học viên báo "khóa đã hết hạn".**
→ Vào chi tiết học viên → tab Khóa học → bấm **Gia hạn** và chọn số ngày thêm.
