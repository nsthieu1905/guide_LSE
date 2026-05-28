# Bài giảng

**Đường dẫn:** `https://lamsonedutech.vn/admin/lesson/lesson`

Bài giảng là **đơn vị nội dung học** mà học viên xem/nghe/đọc. Một bài giảng có thể là video, văn bản, file PDF, slide, hoặc kết hợp.

## Danh sách bài giảng

Cột chính:
- Tên bài
- Khóa học / Chuyên đề liên kết
- Loại nội dung (Video / Văn bản / File / Slide)
- Thời lượng (đối với video)
- Trạng thái (Công khai / Nháp)
- Ngày tạo, Người tạo

## Tạo bài giảng

1. Bấm **Thêm bài giảng**.
2. Điền:
   - **Tên bài**
   - **Mô tả ngắn**
   - **Loại nội dung**: Video / Văn bản / File / Slide / Mix
3. Thêm nội dung tương ứng:

### Video
- Tải video lên (mp4, dung lượng ≤ giới hạn của hệ thống, thường 500MB-2GB).
- Hoặc nhúng video từ URL (YouTube, Vimeo, hệ thống lưu trữ riêng).
- (Tùy chọn) thêm **phụ đề** (file .srt) và **chương** (timestamp - tiêu đề).

### Văn bản / Rich text
- Sử dụng trình soạn thảo: định dạng, chèn ảnh, công thức toán (LaTeX), bảng, code.
- Có thể dán thẳng từ Word - hãy "paste plain" để tránh dính định dạng lỗi.

### File / PDF / Slide
- Tải lên file.
- Cấu hình **cho phép tải về** hay chỉ **đọc online**.

### Mix
- Kết hợp: video chính ở trên, văn bản tóm tắt và file PDF kèm bên dưới.

4. **Gán vào khóa / chuyên đề** (chọn 1 hoặc nhiều).
5. (Tùy chọn) **Thẻ / Từ khóa** cho tìm kiếm.
6. Bấm **Lưu**.

## Chi tiết bài giảng

`https://lamsonedutech.vn/admin/detailLesson/:id`

Trang chi tiết cho phép:
- Preview như học viên đang xem.
- Xem số lượt xem, thời gian xem trung bình.
- Xem nhận xét của học viên (nếu cho phép comment).

## Phân biệt với "Đề kiểm tra"

Bài giảng = **học**.
Đề thi / Đề kiểm tra = **kiểm tra**.

Bài giảng không có chấm điểm, không có đáp án. Hệ thống chỉ ghi nhận **đã xem / chưa xem**, dùng cho tính tiến độ học.

## Mẹo nội dung tốt

- **Mỗi video nên 5-15 phút.** Quá dài học viên mất tập trung.
- **Tên bài rõ ràng**: "Bài 3 - Cách tìm đỉnh parabol" tốt hơn "Bài 3".
- **Có file tóm tắt PDF** kèm video - học viên có thể in / lưu lại.
- **Có công thức bằng LaTeX** thay vì ảnh chụp - hiển thị đẹp, copy được.

## Xóa bài giảng

- Trước khi xóa, kiểm tra bài có đang được gán vào khóa nào không. Nếu có, học viên đã xem rồi sẽ bị mất tiến độ.
- Ưu tiên **gỡ khỏi chuyên đề** thay vì xóa nội dung.

## Tải lên hàng loạt (nếu có)

Nếu có tab **Import / Tải lên hàng loạt**:
1. Tải template Excel/CSV.
2. Điền danh sách: tên bài, link video, mô tả.
3. Upload file → hệ thống tạo hàng loạt bài giảng.
4. Sau đó vào khóa để gán chuyên đề thủ công.

## Câu hỏi thường gặp

**Video upload bị lỗi.**
→ Kiểm tra định dạng (mp4/h264), dung lượng, đường truyền. Có thể dùng nén video trước (HandBrake) để giảm dung lượng.

**Video bị giật khi học viên xem.**
→ Nên dùng dịch vụ streaming chuyên dụng và bật tự động chọn chất lượng (ABR). Liên hệ IT để kiểm tra CDN.

**Tôi muốn chỉnh sửa video sau khi đã đăng.**
→ Có thể tải video mới đè lên hoặc đổi URL. Tất cả học viên đang xem sẽ thấy nội dung mới khi reload.
