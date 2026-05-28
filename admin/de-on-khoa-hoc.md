# Đề ôn khóa học

**Đường dẫn:** `https://lamsonedutech.vn/admin/question/exam`

Đề ôn khóa học là **đề luyện tập gắn với một khóa học cụ thể**. Học viên đã mua khóa sẽ thấy các đề này trong tab "Đề ôn" của khóa và làm để củng cố kiến thức sau mỗi chương / chuyên đề.

## Phân biệt với các loại đề khác

| Loại đề | Mục đích | Module |
|---|---|---|
| **Đề ôn khóa học** | Luyện tập theo khóa học, có thể làm nhiều lần | Trang này |
| **Đề kiểm tra cuối chuyên đề** | Tính điểm tiến độ trong [Chuyên đề](./chuong-chuyen-de) | Tạo từ chuyên đề |
| **Đề mẫu Luyện thi** (HSA/TSA/THPT) | Giả lập kỳ thi thật, đếm ngược thời gian | [Đề mẫu Luyện thi](./de-mau-luyen-thi) |
| **Đánh giá đầu vào** | Đo trình độ trước khi vào khóa | [Đánh giá đầu vào](./danh-gia-dau-vao) |
| **Bộ đề thi** | Tập hợp nhiều đề để gán hàng loạt cho lớp | [Bộ đề thi](./bo-de-thi) |

## Danh sách đề ôn

Cột chính:

| Cột | Ý nghĩa |
|---|---|
| Tên đề | Tên đề ôn |
| Khóa học | Khóa được gắn vào |
| Chương / Chuyên đề | Chương / chuyên đề liên kết (nếu có) |
| Số câu | Tổng câu hỏi |
| Thời gian (phút) | Thời lượng làm bài |
| Tổng điểm | Mặc định 10 |
| Chế độ | Cố định / Random theo tiêu chí |
| Lượt làm | Số lượt học viên đã làm |
| Trạng thái | Công khai / Nháp / Ẩn |

### Bộ lọc

- Theo **Khóa học**.
- Theo **Chương / Chuyên đề**.
- Theo **Trạng thái**.
- Theo **Người tạo**.
- Tìm kiếm theo **Tên đề**.

## Tạo mới đề ôn

1. Bấm **Thêm mới**.
2. Khai báo thông tin cơ bản:
   - **Tên đề** (vd "Đề ôn Chương 2 - Hàm số bậc hai").
   - **Khóa học**: chọn khóa sẽ gắn đề vào.
   - **Chương / Chuyên đề** (tùy chọn): nếu chỉ áp dụng cho 1 chuyên đề cụ thể.
   - **Mô tả** ngắn cho học viên.
   - **Thời gian làm bài** (phút).
   - **Tổng điểm** (mặc định 10).
3. Chọn **chế độ dựng đề**:
   - **Cố định**: chọn tay từng câu hỏi.
   - **Theo tiêu chí**: chọn 1 [Tiêu chí đề thi](./tieu-chi-de-thi) → hệ thống random câu.
4. Cấu hình **luật làm bài**:
   - **Số lần làm lại tối đa** (0 = không giới hạn).
   - **Hiển thị đáp án sau khi nộp**: Có / Không / Chỉ hiển thị đúng-sai.
   - **Trộn câu hỏi** giữa các lần làm.
   - **Trộn đáp án** trong từng câu.
   - **Random lại đề** mỗi lần làm (chỉ khi chế độ Theo tiêu chí).
5. (Tùy chọn) **Thời gian mở/đóng đề**: chỉ học viên trong khoảng thời gian này mới được làm.
6. Bấm **Lưu**.

::: tip
Để khóa **Luyện đề thực chiến**, hãy bật **Đếm ngược thời gian** và **Không cho xem lại đáp án từng câu khi đang làm** — giả lập tâm lý phòng thi.
:::

## Chọn câu hỏi (chế độ Cố định)

1. Sau khi lưu thông tin cơ bản, mở chi tiết đề.
2. Vào tab **Câu hỏi**.
3. Bấm **Thêm câu hỏi**.
4. Trong popup chọn câu:
   - Lọc theo **Môn**, **Chuyên đề**, **Mức độ**, **Dạng câu**.
   - Tích chọn các câu cần thêm.
   - Bấm **Thêm vào đề**.
5. Sau khi thêm, có thể:
   - **Kéo-thả** để sắp xếp thứ tự.
   - **Sửa điểm** từng câu.
   - **Xóa** câu khỏi đề.
6. Kiểm tra **Tổng số câu** và **Tổng điểm** ở cuối trang.
7. Bấm **Lưu**.

## Dùng Tiêu chí (chế độ Random)

1. Tạo trước [Tiêu chí đề thi](./tieu-chi-de-thi) phù hợp.
2. Khi tạo đề ôn, chọn chế độ **Theo tiêu chí**.
3. Chọn tiêu chí từ dropdown.
4. (Tùy chọn) Bấm **Xem thử đề** để hệ thống dựng thử 1 đề mẫu — kiểm tra số câu và mức độ.
5. Lưu.

::: warning
Khi dùng Theo tiêu chí, **mỗi học viên (mỗi lượt làm)** sẽ nhận tập câu hỏi khác nhau. Điều này có lợi cho việc chống gian lận, nhưng làm cho việc **giải đề / chữa đề** khó hơn — vì mỗi em một đề khác.
:::

## Sửa đề ôn

1. Tại danh sách, bấm **Sửa**.
2. Cập nhật thông tin / câu hỏi.
3. Bấm **Lưu**.

::: warning
Nếu đề đã có lượt làm, việc **xóa/sửa câu** sẽ ảnh hưởng tới điểm cũ của học viên (vì cấu trúc đề thay đổi). Khuyến nghị **tạo đề mới** và ẩn đề cũ thay vì sửa.
:::

## Xóa đề ôn

1. Tại danh sách, bấm **Xóa**.
2. Xác nhận.

::: danger
Đề đã có lượt làm sẽ không xóa được hoàn toàn — hệ thống chỉ ẩn để giữ lịch sử điểm. Nếu cần xóa hẳn, liên hệ quản trị hệ thống.
:::

## Nhân bản đề

Khi cần tạo đề tương tự cho khóa khác:

1. Tại danh sách, bấm **Nhân bản** trên dòng đề gốc.
2. Hệ thống tạo bản sao với hậu tố "(Bản sao)".
3. Sửa **Khóa học liên kết** và **Tên đề**.
4. Lưu.

## Công khai / Ẩn / Lưu trữ

- **Nháp**: chỉ admin/giáo viên thấy, học viên không thấy.
- **Công khai**: học viên trong khóa thấy và làm được.
- **Ẩn**: học viên không thấy đề mới, ai đã làm vẫn xem được lịch sử.

→ Đổi trạng thái bằng nút **Đổi trạng thái** trên dòng hoặc trong trang chi tiết.

## Xem kết quả học viên

Sau khi học viên làm đề:

1. Vào chi tiết đề ôn → tab **Kết quả**.
2. Bảng hiển thị: học viên, lần làm, điểm, thời gian, ngày làm.
3. Bấm vào một dòng → xem chi tiết bài làm (từng câu đúng/sai).
4. Có thể **Xuất Excel** danh sách kết quả.

→ Thống kê tổng hợp (top câu sai nhiều, độ khó từng câu) có ở [Thống kê](./thong-ke).

## Nhập / Xuất

- **Xuất Excel** danh sách đề ôn: tải xuống danh sách đề kèm metadata (khóa, số câu, thời gian).
- **Xuất đề thi (file Word/PDF)**: tại chi tiết đề, bấm **Xuất đề** → tải file Word/PDF để in giấy.

## Câu hỏi thường gặp

**Tôi muốn đề ôn cho cả khóa, không gắn vào chuyên đề cụ thể.**
→ Khi tạo đề, để trống ô **Chuyên đề** và chỉ chọn **Khóa học**. Đề sẽ xuất hiện ở tab "Đề ôn chung" của khóa.

**Học viên hoàn thành khóa nhưng đề ôn vẫn cho làm - có giới hạn được không?**
→ Đặt **Thời gian mở/đóng đề** khi tạo. Sau ngày đóng, đề tự ẩn khỏi học viên.

**Đề ôn có tính vào tiến độ khóa học không?**
→ **Không** mặc định. Tiến độ khóa tính theo bài giảng đã xem và đề kiểm tra cuối chuyên đề. Đề ôn chỉ để luyện tập.

**Tôi đã tạo đề theo tiêu chí, nhưng học viên thấy đề thiếu câu - vì sao?**
→ Do [Danh mục câu hỏi](./danh-muc-cau-hoi) không đủ câu thỏa tiêu chí. Mở tiêu chí → kiểm tra số câu khả dụng → bổ sung câu hỏi.

**Tôi muốn 1 đề dùng chung cho nhiều khóa khác nhau?**
→ Mỗi đề ôn chỉ thuộc về 1 khóa. Nếu muốn dùng chung, hãy **nhân bản** đề cho từng khóa, hoặc dùng [Bộ đề thi](./bo-de-thi) để gán hàng loạt.

**Học viên báo "đề bị lock thời gian, không bấm nộp được".**
→ Kiểm tra **Thời gian làm bài** đã chính xác chưa, và đảm bảo học viên có nộp trước khi hết giờ. Nếu hệ thống đã tự nộp khi hết giờ, vào tab Kết quả xem có ghi nhận điểm chưa.
