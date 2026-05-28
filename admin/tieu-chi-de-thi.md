# Tiêu chí đề thi

**Đường dẫn:** `https://lamsonedutech.vn/admin/question/criteria`

Tiêu chí đề thi là **bộ quy tắc dựng đề tự động**: hệ thống căn cứ vào tiêu chí để rút ngẫu nhiên câu hỏi từ [Danh mục câu hỏi](./danh-muc-cau-hoi) sao cho đề mới luôn đảm bảo đúng cấu trúc (số câu, mức độ, chương/chuyên đề, dạng câu hỏi…).

## Khi nào dùng

- Khi cần **sinh nhiều mã đề khác nhau** từ cùng một cấu trúc (vd: tạo 20 mã đề ôn cho 20 lớp khác nhau).
- Khi muốn **chuẩn hóa cấu trúc đề** trong một khóa học (mọi đề ôn đều đúng 50 câu trong đó 20 nhận biết, 20 thông hiểu, 10 vận dụng).
- Khi dùng cho [Đề ôn khóa học](./de-on-khoa-hoc), [Đề mẫu Luyện thi](./de-mau-luyen-thi), [Đánh giá đầu vào](./danh-gia-dau-vao) cần lấy câu hỏi tự động.

::: tip
Tiêu chí đề thi **không phải là đề thi**. Nó chỉ là **khuôn**. Mỗi lần hệ thống dựng đề từ tiêu chí, các câu hỏi cụ thể có thể khác nhau (random theo điều kiện).
:::

## Danh sách tiêu chí

Các cột chính:

| Cột | Ý nghĩa |
|---|---|
| Tên tiêu chí | Tên gợi nhớ, vd "Tiêu chí đề ôn Toán 12 - 50 câu" |
| Khung chương trình | Khung chương trình áp dụng |
| Môn / Chuyên đề | Phạm vi nội dung |
| Tổng số câu | Tổng câu mà tiêu chí yêu cầu |
| Thời gian | Thời lượng làm bài (phút) |
| Người tạo | Tài khoản đã tạo tiêu chí |
| Trạng thái | Đang dùng / Ngưng |

### Bộ lọc

- Theo **Khung chương trình**.
- Theo **Môn**.
- Theo **Người tạo**.
- Theo **Trạng thái**.
- Tìm kiếm theo **Tên tiêu chí**.

## Tạo mới tiêu chí

1. Bấm **Thêm mới**.
2. Khai báo thông tin cơ bản:
   - **Tên tiêu chí** (bắt buộc, dùng nội bộ).
   - **Mô tả** (tùy chọn).
   - **Khung chương trình** áp dụng.
   - **Môn** hoặc **nhóm chuyên đề**.
   - **Tổng số câu hỏi** dự kiến.
   - **Thời gian làm bài** (phút).
3. Thêm các **dòng cấu hình** (mỗi dòng = 1 nhóm câu sẽ rút):

   | Trường | Mô tả |
   |---|---|
   | Chương / Chuyên đề | Lấy câu thuộc chương/chuyên đề nào |
   | Mức độ | Nhận biết / Thông hiểu / Vận dụng / Vận dụng cao |
   | Dạng câu hỏi | Trắc nghiệm 1 đáp án / Nhiều đáp án / Đúng-Sai / Điền số / Tự luận |
   | Số câu | Số câu rút ngẫu nhiên từ điều kiện trên |
   | Điểm/câu | Điểm trên mỗi câu (mặc định = tổng điểm / tổng câu) |

4. Tổng số câu trên các dòng phải **bằng** "Tổng số câu hỏi" đã khai ở bước 2.
5. Bấm **Lưu**.

::: warning
Nếu số câu trong [Danh mục câu hỏi](./danh-muc-cau-hoi) thỏa điều kiện ít hơn số câu yêu cầu, khi dựng đề sẽ báo lỗi "Không đủ câu hỏi". Hãy bổ sung câu hỏi hoặc giảm số câu trong tiêu chí.
:::

## Ví dụ tiêu chí

**Tiêu chí: Đề ôn cuối chương Hàm số - Toán 12 (40 câu, 60 phút)**

| Chuyên đề | Mức độ | Dạng | Số câu | Điểm/câu |
|---|---|---|---|---|
| Hàm số bậc nhất | Nhận biết | Trắc nghiệm 1 đáp án | 5 | 0.2 |
| Hàm số bậc nhất | Thông hiểu | Trắc nghiệm 1 đáp án | 5 | 0.25 |
| Hàm số bậc hai | Nhận biết | Trắc nghiệm 1 đáp án | 5 | 0.2 |
| Hàm số bậc hai | Thông hiểu | Trắc nghiệm 1 đáp án | 5 | 0.25 |
| Hàm số bậc hai | Vận dụng | Trắc nghiệm nhiều đáp án | 10 | 0.3 |
| Hàm số bậc hai | Vận dụng cao | Điền số | 10 | 0.35 |

→ Tổng 40 câu, tổng điểm 10.

## Sửa tiêu chí

1. Tại danh sách, bấm biểu tượng **Sửa** (cây bút) trên dòng tương ứng.
2. Cập nhật các trường cần đổi.
3. Bấm **Lưu**.

::: tip
Sửa tiêu chí **không ảnh hưởng** đến các đề đã được sinh ra trước đó. Chỉ các lần dựng đề **sau khi sửa** mới dùng cấu hình mới.
:::

## Xóa tiêu chí

1. Bấm biểu tượng **Xóa** (thùng rác) trên dòng cần xóa.
2. Xác nhận trong hộp thoại.

::: danger
Không thể xóa tiêu chí đang được **gắn vào đề thi / khóa học đang công khai**. Hãy gỡ liên kết hoặc đặt tiêu chí về trạng thái **Ngưng** thay vì xóa.
:::

## Sao chép (Nhân bản) tiêu chí

Khi cần tạo tiêu chí mới gần giống tiêu chí cũ:

1. Tại dòng tiêu chí gốc, bấm biểu tượng **Nhân bản** (copy).
2. Hệ thống tạo bản sao với hậu tố "(Bản sao)".
3. Mở ra, đổi tên và chỉnh các dòng cấu hình theo nhu cầu.
4. Bấm **Lưu**.

## Sử dụng tiêu chí trong đề thi

Khi tạo [Đề ôn khóa học](./de-on-khoa-hoc) hoặc đề kiểm tra cuối chuyên đề, có 2 chế độ:

- **Cố định**: chọn sẵn từng câu hỏi → mỗi học viên nhận đề giống nhau.
- **Theo tiêu chí**: chọn 1 tiêu chí → mỗi học viên (hoặc mỗi mã đề) sẽ được rút câu khác nhau.

→ Chế độ "Theo tiêu chí" rất phù hợp khi muốn **chống gian lận**: hai học viên ngồi cạnh nhau sẽ thấy đề khác nhau dù cùng cấu trúc.

## Xuất / Nhập tiêu chí

- **Xuất Excel**: bấm **Xuất Excel** để tải danh sách tiêu chí kèm cấu hình. Hữu ích khi backup hoặc chia sẻ cấu trúc đề với đồng nghiệp.
- Nhập từ Excel: hiện chỉ hỗ trợ tạo thủ công từng tiêu chí; nếu cần nhập hàng loạt, liên hệ quản trị hệ thống.

## Câu hỏi thường gặp

**Tôi đã tạo tiêu chí nhưng khi dựng đề báo "Không đủ câu hỏi" - phải làm gì?**
→ Kiểm tra trong [Danh mục câu hỏi](./danh-muc-cau-hoi): lọc theo cùng chuyên đề, mức độ, dạng câu xem có bao nhiêu câu khả dụng. Nếu thiếu, bổ sung câu mới hoặc giảm số câu yêu cầu trong tiêu chí.

**Có thể đặt 1 câu hỏi xuất hiện ở nhiều dòng tiêu chí khác nhau không?**
→ Không. Trong một lần dựng đề, mỗi câu chỉ rút **tối đa 1 lần**. Nếu dòng tiêu chí khác nhau cùng nhắm tới nhóm câu giống nhau, có thể bị xung đột.

**Tôi muốn 100% học viên nhận đúng 1 đề giống nhau, không random - có dùng tiêu chí được không?**
→ Không cần dùng tiêu chí. Hãy tạo đề thi ở chế độ **Cố định** và chọn tay từng câu.

**Tôi muốn cứ mỗi lần học viên làm lại thì đề lại khác?**
→ Khi cấu hình đề thi, bật **Random lại đề mỗi lần làm**. Hệ thống sẽ chạy lại tiêu chí cho mỗi lượt làm.

**Khác nhau giữa "Tiêu chí đề thi" và "Bộ đề thi"?**
→ Tiêu chí = **khuôn dựng đề** (chỉ định cấu trúc). [Bộ đề thi](./bo-de-thi) = **tập hợp các đề thi cụ thể đã có sẵn nội dung**, dùng để gán hàng loạt cho lớp/khóa.

**Tôi sửa tiêu chí, các đề đã giao trước đó có bị đổi không?**
→ Không. Đề đã giao giữ nguyên các câu đã rút. Chỉ ảnh hưởng lần dựng đề tiếp theo.
