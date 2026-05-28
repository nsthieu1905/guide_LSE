# Đánh giá đầu vào

**Đường dẫn:** `https://lamsonedutech.vn/admin/question/evaluation`

Đánh giá đầu vào (Kiểm tra đầu vào) là **bài test đo trình độ học viên trước khi vào khóa học / lớp học**. Kết quả giúp tư vấn lộ trình học phù hợp và phân loại học viên vào nhóm năng lực đúng.

## Khi nào dùng

- Học viên mới đăng ký, **chưa rõ trình độ** → cần test trước khi đề xuất khóa.
- Trung tâm tổ chức **tuyển sinh đầu vào** cho lớp luyện thi.
- **Phân lớp** học viên theo trình độ (Cơ bản / Trung bình / Khá / Giỏi).
- Đo **điểm chuẩn ban đầu** để so sánh với điểm sau khóa (đánh giá hiệu quả khóa).

## Phân biệt với đề thi khác

| Đề | Mục đích |
|---|---|
| **Đánh giá đầu vào** | Test trình độ trước khóa, gắn với khóa cụ thể hoặc đứng độc lập |
| **Đề ôn khóa học** | Luyện tập sau khi đã trong khóa |
| **Đề mẫu Luyện thi** | Thi thử mô phỏng kỳ thi thật |

## Danh sách bài đánh giá

Cột chính:

| Cột | Ý nghĩa |
|---|---|
| Tên bài đánh giá | Vd "Test đầu vào - Luyện thi HSA" |
| Môn / Lĩnh vực | Toán / Văn / Anh / Tổng hợp… |
| Khóa liên kết | Khóa nào dùng làm test đầu vào (có thể trống nếu dùng độc lập) |
| Số câu | |
| Thời gian (phút) | |
| Số học viên đã làm | |
| Trạng thái | Công khai / Nháp / Ẩn |

### Bộ lọc

- Theo **Môn**.
- Theo **Khóa liên kết**.
- Theo **Trạng thái**.
- Tìm kiếm theo **Tên bài**.

## Tạo mới bài đánh giá

1. Bấm **Thêm mới**.
2. Khai báo:
   - **Tên bài đánh giá** (vd "Test đầu vào - Luyện thi HSA 2026").
   - **Mô tả**: hiển thị cho học viên trước khi làm.
   - **Hướng dẫn làm bài**.
   - **Môn / Lĩnh vực** áp dụng.
   - **Khóa liên kết** (tùy chọn): khóa sẽ tự gọi bài test này.
   - **Thời gian làm bài** (phút).
   - **Tổng điểm** (mặc định 10 hoặc 100).
3. Chọn **chế độ dựng đề**:
   - **Cố định**: chọn tay từng câu.
   - **Theo tiêu chí**: chọn 1 [Tiêu chí đề thi](./tieu-chi-de-thi) → hệ thống random.
4. Cấu hình thêm:
   - **Số lần làm**: thường chỉ cho **1 lần** (đánh giá đầu vào không nên làm lại).
   - **Hiển thị đáp án sau khi nộp**: thường **Không** để tránh học viên ghi nhớ rồi làm lại.
   - **Trộn câu / trộn đáp án**.
5. Cấu hình **khung phân loại** (xem mục kế).
6. Bấm **Lưu**.

## Chọn câu hỏi (chế độ Cố định)

1. Mở chi tiết bài đánh giá → tab **Câu hỏi**.
2. Bấm **Thêm câu hỏi** → chọn từ [Danh mục câu hỏi](./danh-muc-cau-hoi).
3. Khuyến nghị: chọn câu **trải đều các mức độ** (Nhận biết → Vận dụng cao) để đánh giá chính xác trình độ.
4. Sắp xếp thứ tự, sửa điểm.
5. Lưu.

## Cấu hình khung phân loại (Phân ngưỡng)

Khung phân loại giúp hệ thống **tự gắn nhãn trình độ** cho học viên dựa theo điểm:

1. Trong chi tiết bài đánh giá, mở **tab Phân loại**.
2. Thêm các ngưỡng:

   | Khoảng điểm | Nhãn | Khóa khuyến nghị |
   |---|---|---|
   | 0 - 4 | Cơ bản | Khóa "Nền tảng HSA" |
   | 4.1 - 6.5 | Trung bình | Khóa "Tăng tốc HSA" |
   | 6.6 - 8.5 | Khá | Khóa "Luyện đề thực chiến" |
   | 8.6 - 10 | Giỏi | Khóa "Cao thủ HSA" |

3. Khi học viên nộp bài, hệ thống tự tính và **gợi ý khóa** phù hợp ngay trên màn hình kết quả.

::: tip
Khung phân loại cũng có thể dùng để **phân lớp**: học viên >7 vào Lớp A, 5-7 vào Lớp B, <5 vào Lớp C. Việc gán lớp được thực hiện ở [Quản lý học viên](./quan-ly-hoc-vien).
:::

## Gán bài đánh giá vào khóa học

Có 2 cách:

### Cách 1: Trong [Khóa học](./khoa-hoc)

1. Vào chi tiết khóa.
2. Tab **Kiểm tra đầu vào** → chọn bài đánh giá đã tạo.
3. Lưu.

→ Học viên mới mua khóa sẽ **bắt buộc** (hoặc tùy chọn) làm bài này trước khi học.

### Cách 2: Trong bài đánh giá

1. Mở bài đánh giá → tab **Khóa liên kết**.
2. Bấm **Thêm khóa** → chọn 1 hoặc nhiều khóa.
3. Lưu.

## Test độc lập (không gắn khóa)

Bài đánh giá có thể đứng độc lập, dành cho **học viên tiềm năng** (chưa mua khóa nào):

1. Tạo bài đánh giá, không liên kết khóa.
2. Đặt trạng thái **Công khai**.
3. Lấy **link công khai** (nút **Sao chép link** tại chi tiết bài).
4. Chia sẻ link cho người quan tâm — họ vào làm test, nhận kết quả + gợi ý khóa.
5. Dữ liệu sẽ chuyển về [CRM / Bộ phận tư vấn](./quan-ly-nhan-vien) để chăm sóc.

::: tip
Đây là cách hiệu quả để **lead-gen** (thu lead): học viên làm test, cung cấp số điện thoại / email, nhận tư vấn miễn phí.
:::

## Sửa bài đánh giá

1. Tại danh sách, bấm **Sửa**.
2. Cập nhật thông tin, câu hỏi, khung phân loại.
3. Bấm **Lưu**.

::: warning
Sửa khung phân loại **không ảnh hưởng** đến học viên đã làm trước đó. Họ vẫn giữ nhãn theo khung cũ.
:::

## Xóa bài đánh giá

1. Tại danh sách, bấm **Xóa**.
2. Xác nhận.

::: danger
Bài đánh giá đã có lượt làm chỉ bị **ẩn**. Cân nhắc trước khi xóa vì sẽ mất gợi ý khóa của nhiều học viên.
:::

## Xem kết quả

1. Mở chi tiết bài đánh giá → tab **Kết quả**.
2. Bảng hiển thị:
   - Học viên, ngày làm, điểm, **nhãn phân loại**, **khóa được gợi ý**.
   - Có thể bấm vào dòng để xem chi tiết bài làm.
3. **Xuất Excel** danh sách → chuyển bộ phận tư vấn.
4. **Biểu đồ phân bố** điểm theo nhãn — giúp đánh giá chất lượng học viên đầu vào theo đợt.

## Nhập / Xuất

- **Xuất Excel** danh sách bài đánh giá kèm thống kê lượt làm.
- **Xuất kết quả Excel** từ tab Kết quả: học viên, điểm, nhãn, gợi ý khóa, thông tin liên hệ — dùng để chuyển CRM.

## Câu hỏi thường gặp

**Học viên đã làm test rồi nhưng muốn làm lại - cho phép không?**
→ Không khuyến khích, vì học viên đã nhớ câu → kết quả không phản ánh đúng trình độ. Nếu thực sự cần, vào chi tiết kết quả → bấm **Reset lượt làm** cho học viên đó.

**Test đầu vào có miễn phí không?**
→ Mặc định miễn phí. Nếu muốn thu phí, gắn vào khóa có phí hoặc dùng cơ chế "trả phí mở test" (liên hệ quản trị để bật).

**Tôi muốn 1 bài test áp dụng cho nhiều môn (Toán + Văn + Anh) - làm sao?**
→ Tạo 1 bài đánh giá tổng hợp, chia câu hỏi theo từng môn trong cùng đề. Khung phân loại có thể chia điểm tổng hoặc xem điểm từng môn (cấu hình nâng cao).

**Có thể bắt buộc học viên làm test trước khi truy cập bài giảng không?**
→ Có. Trong cấu hình [Khóa học](./khoa-hoc), bật tùy chọn "Bắt buộc làm kiểm tra đầu vào trước khi học".

**Học viên không có thông tin liên hệ - làm sao tư vấn?**
→ Khi làm test độc lập, bắt buộc học viên điền **Họ tên + Số điện thoại / Email** trước khi xem kết quả. Bật trường này trong cấu hình bài.

**Khung phân loại không hợp lý - học viên làm rất tốt nhưng bị xếp Trung bình.**
→ Mở **tab Phân loại** → điều chỉnh ngưỡng điểm. Lưu ý: chỉ áp dụng cho lượt làm sau.

**Có gợi ý khóa cho học viên dựa trên ĐIỂM TỪNG MÔN, không phải điểm tổng?**
→ Cấu hình nâng cao trong khung phân loại: chia "Phần" → đặt ngưỡng riêng cho từng phần → ánh xạ sang khóa khác nhau. Liên hệ quản trị nếu chưa thấy giao diện này.
