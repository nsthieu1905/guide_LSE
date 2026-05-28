# Danh mục câu hỏi (Ngân hàng câu hỏi)

**Đường dẫn:** `https://lamsonedutech.vn/admin/question/question`

Danh mục câu hỏi là **ngân hàng câu hỏi trung tâm** của hệ thống. Mọi đề thi (đề ôn, đề mẫu, đánh giá đầu vào, đề kiểm tra) đều **lấy câu từ đây**. Việc xây dựng và làm giàu ngân hàng câu là công việc nền tảng quan trọng nhất của module Câu hỏi.

## Vai trò

- **Nguồn** cho [Tiêu chí đề thi](./tieu-chi-de-thi) khi dựng đề random.
- **Nguồn** cho [Đề ôn khóa học](./de-on-khoa-hoc), [Đề mẫu Luyện thi](./de-mau-luyen-thi), [Đánh giá đầu vào](./danh-gia-dau-vao) khi chọn câu cố định.
- **Phân loại** theo môn / chương / chuyên đề / mức độ / dạng câu để tìm và dùng lại dễ.

## Danh sách câu hỏi

Cột chính:

| Cột | Ý nghĩa |
|---|---|
| ID | Mã câu hỏi (tự sinh) |
| Nội dung | Trích đầu của câu (50-100 ký tự) |
| Môn | Toán / Văn / Lý / Hóa / Sinh / Anh… |
| Chương / Chuyên đề | |
| Mức độ | Nhận biết / Thông hiểu / Vận dụng / Vận dụng cao |
| Dạng câu | (xem dưới) |
| Trích đoạn | Có / Không liên kết [Trích đoạn](./trich-doan-de-thi) |
| Người tạo | |
| Ngày tạo | |
| Số lần dùng | Đã dùng trong bao nhiêu đề |
| Trạng thái | Đang dùng / Ngưng |

### Bộ lọc

- Theo **Môn**, **Chương / Chuyên đề**.
- Theo **Mức độ** (Nhận biết / Thông hiểu / Vận dụng / Vận dụng cao).
- Theo **Dạng câu**.
- Theo **Kỳ thi áp dụng** (ĐGNL / ĐGTD / TNTHPT / Chung).
- Theo **Người tạo**, **Ngày tạo**.
- Tìm kiếm full-text trong nội dung câu hỏi.

## Các dạng câu hỏi hỗ trợ

| Dạng | Mô tả | Áp dụng |
|---|---|---|
| **Trắc nghiệm 1 đáp án (4 lựa chọn)** | Học viên chọn 1 trong 4 (A/B/C/D) | Phổ biến nhất, dùng cho HSA, TNTHPT |
| **Trắc nghiệm nhiều đáp án** | Chọn nhiều lựa chọn đúng | TSA, đề ôn nâng cao |
| **Đúng - Sai nhiều ý** | 1 câu gồm 4 ý nhỏ a/b/c/d, mỗi ý chọn Đúng/Sai | TNTHPT 2025+, TSA |
| **Trả lời ngắn / Điền số** | Học viên gõ đáp án dạng số hoặc chuỗi ngắn | HSA Tư duy định lượng, TNTHPT |
| **Điền vào chỗ trống** | Nhiều ô điền trong một câu | Ngữ pháp tiếng Anh, Văn |
| **Ghép cặp** | Nối cột A với cột B | Lịch sử, Địa, từ vựng |
| **Tự luận** | Học viên viết câu trả lời dài | Văn, Sử (THPT) - chấm thủ công |

## Tạo mới câu hỏi

1. Bấm **Thêm mới**.
2. Khai báo **phân loại**:
   - **Môn**.
   - **Chương / Chuyên đề** (dựa trên [Khung chương trình](./khung-chuong-trinh)).
   - **Mức độ**.
   - **Kỳ thi áp dụng**: tick chọn ĐGNL / ĐGTD / TNTHPT / Chung.
   - **Dạng câu**.
3. Nhập **Nội dung câu hỏi** trong trình soạn thảo:
   - Văn bản, định dạng, bảng, ảnh.
   - Công thức toán **LaTeX** (Toán/Lý/Hóa).
   - (Tùy chọn) liên kết [Trích đoạn](./trich-doan-de-thi) — chọn từ dropdown.
4. Nhập **Đáp án** theo dạng câu đã chọn:

   ### Trắc nghiệm 1 đáp án
   - 4 ô lựa chọn A, B, C, D.
   - Tick **1 đáp án đúng**.

   ### Trắc nghiệm nhiều đáp án
   - Số lựa chọn (mặc định 4, có thể tăng).
   - Tick **nhiều đáp án đúng**.

   ### Đúng - Sai nhiều ý
   - Nhập 4 ý a, b, c, d.
   - Mỗi ý chọn **Đúng** hay **Sai**.

   ### Trả lời ngắn / Điền số
   - Nhập **đáp án chuẩn** (vd "12.5" hoặc "x = 3").
   - (Tùy chọn) thêm **đáp án chấp nhận** (vd cho phép "12.5", "12,5", "25/2").
   - Cấu hình **so khớp**: chính xác / không phân biệt hoa thường / khoảng dao động số.

   ### Điền vào chỗ trống
   - Trong nội dung, dùng cú pháp `___` (3 dấu gạch dưới) để đánh dấu ô trống.
   - Liệt kê đáp án theo thứ tự ô.

   ### Ghép cặp
   - Cột A (n mục) và Cột B (n mục).
   - Khai báo cặp đúng.

   ### Tự luận
   - Gợi ý đáp án / barem điểm.
   - Bài làm sẽ được chấm thủ công sau khi học viên nộp.

5. Nhập **Lời giải / Giải thích đáp án** (hiển thị cho học viên nếu được phép xem).
6. (Tùy chọn) **Thẻ / Tag**: gắn tag để tìm nhanh sau này (vd "dễ", "đề mẫu 2023", "trắc nghiệm khó").
7. Bấm **Lưu**.

## Sửa câu hỏi

1. Tại danh sách, bấm **Sửa**.
2. Cập nhật nội dung, đáp án, phân loại.
3. Bấm **Lưu**.

::: warning
Sửa câu hỏi đã **dùng trong đề có lượt làm** sẽ tạo ra **không nhất quán** giữa bài làm cũ và đáp án mới. Khuyến nghị:
- Nếu sửa lỗi chính tả nhẹ → OK.
- Nếu thay đổi nội dung / đáp án → tạo **câu mới**, không sửa câu cũ. Câu cũ chuyển sang trạng thái **Ngưng**.
:::

## Xóa câu hỏi

1. Tại danh sách, bấm **Xóa**.
2. Xác nhận.

::: danger
Câu hỏi **đang dùng trong đề thi** không xóa được trực tiếp. Bạn cần:
- Gỡ câu khỏi tất cả đề đang dùng, **hoặc**
- Đặt trạng thái câu về **Ngưng** — câu sẽ không xuất hiện trong các đề mới dựng từ tiêu chí, nhưng vẫn giữ trong đề cũ.
:::

## Nhập Excel hàng loạt

Đây là cách hiệu quả nhất để xây ngân hàng câu hỏi.

1. Bấm **Nhập Excel** → tải xuống **Mẫu Excel** (Template).
2. Mẫu Excel có các cột chuẩn:

   | Cột | Mô tả |
   |---|---|
   | Môn | Toán / Văn / Lý… (đúng tên trong hệ thống) |
   | Chuyên đề | Đúng tên chuyên đề thuộc [Khung chương trình](./khung-chuong-trinh) |
   | Mức độ | Nhận biết / Thông hiểu / Vận dụng / Vận dụng cao |
   | Dạng | Trắc nghiệm 1 đáp án / Nhiều đáp án / Đúng-Sai / Trả lời ngắn / Điền vào chỗ trống / Ghép cặp / Tự luận |
   | Kỳ thi | ĐGNL / ĐGTD / TNTHPT / Chung (nhiều giá trị ngăn bằng dấu `,`) |
   | Nội dung | Nội dung câu hỏi (có thể chứa LaTeX: `$x^2$`) |
   | Đáp án A, B, C, D | Cho dạng trắc nghiệm |
   | Đáp án đúng | A / B / C / D (hoặc nhiều, vd "A,C") |
   | Lời giải | (tùy chọn) |
   | Tag | (tùy chọn) |

3. Điền dữ liệu vào mẫu.
4. Bấm **Tải file lên**.
5. Hệ thống xem trước: hiển thị số dòng hợp lệ, số dòng lỗi (kèm lý do).
6. Bấm **Nhập** để xác nhận.

::: tip
Mẹo nhập nhanh:
- Copy từ file Word có công thức? Hãy convert công thức sang **LaTeX** trước (dùng plugin MathType → LaTeX).
- Câu có ảnh? Tải ảnh trước qua trang nội bộ, lấy URL, dán vào ô nội dung dạng `<img src="URL"/>`. Hoặc nhập câu trước rồi vào sửa từng câu để chèn ảnh.
- Nhập theo từng môn / chuyên đề → dễ kiểm soát hơn là nhập 1 file 5000 câu.
:::

::: warning
Mỗi lần nhập tối đa **2000 câu/lần** để tránh quá tải. Chia file nếu cần thiết.
:::

## Xuất Excel

- **Xuất Excel danh sách câu hỏi**: tải toàn bộ hoặc theo bộ lọc.
- File xuất ra **đúng format** của mẫu nhập → có thể chỉnh sửa và import lại (sao lưu).

## Sao chép câu hỏi

Khi cần tạo câu tương tự (chỉ đổi số/dữ liệu):

1. Tại dòng câu, bấm **Nhân bản**.
2. Mở câu copy, sửa nội dung và đáp án.
3. Lưu.

## Gắn trích đoạn

Đối với các câu **đọc hiểu** (có chung 1 đoạn văn):

1. Tạo trước [Trích đoạn](./trich-doan-de-thi).
2. Trong câu hỏi, chọn trích đoạn ở dropdown **Trích đoạn**.
3. Khi học viên làm bài, đoạn văn và câu hỏi hiển thị bên cạnh nhau.

## Báo lỗi câu hỏi

Học viên/giáo viên có thể **báo lỗi** một câu (nội dung sai, đáp án không đúng, format hỏng):

1. Vào tab **Báo lỗi** trong trang danh mục câu.
2. Xem danh sách báo cáo + nội dung mô tả.
3. Mở câu, sửa hoặc đánh dấu **Đã xử lý**.

::: tip
Cấu hình ai được báo lỗi (Học viên / Giáo viên / Cả hai) ở [Phân quyền](./phan-quyen).
:::

## Thống kê câu hỏi

Trong trang chi tiết câu, xem:
- **Số lần xuất hiện** trong các đề.
- **Tỷ lệ học viên trả lời đúng** (độ khó thực tế).
- **Lựa chọn nào học viên chọn nhiều nhất** (phân tích đáp án nhiễu).

→ Dùng để **cân chỉnh** mức độ câu hỏi: nếu mức "Nhận biết" mà chỉ 30% trả lời đúng → có thể câu khó hơn dự kiến → đổi sang "Thông hiểu".

## Câu hỏi thường gặp

**Tôi nhập Excel báo lỗi "Chuyên đề không tồn tại" - sao?**
→ Tên chuyên đề trong Excel phải **trùng chính xác** với chuyên đề đã tạo trong [Khung chương trình](./khung-chuong-trinh). Kiểm tra dấu, chữ thường-hoa.

**Một câu có thể thuộc nhiều môn / nhiều chuyên đề không?**
→ Mỗi câu thuộc **1 môn + 1 chuyên đề chính**, nhưng có thể gắn nhiều **tag** để tham chiếu chéo (vd câu Hóa hữu cơ tag thêm "Tổng hợp").

**Công thức toán bị vỡ khi nhập Excel?**
→ Excel không hỗ trợ LaTeX trực tiếp. Hãy gõ LaTeX dạng `$x^2 + 2x - 1 = 0$` trong ô nội dung. Hệ thống tự render khi hiển thị cho học viên.

**Tôi đã có ngân hàng câu hỏi cũ trên file Word - làm sao chuyển?**
→ Copy từng câu vào Excel mẫu, hoặc dùng dịch vụ chuyển đổi (liên hệ quản trị). Không có cách import trực tiếp từ Word do format quá đa dạng.

**Câu hỏi cũ ai cũng đoán đúng - tôi muốn ngưng dùng?**
→ Đặt câu về **Ngưng**. Câu sẽ không xuất hiện trong tiêu chí random nữa, nhưng vẫn nằm trong các đề đã chốt câu cố định.

**Có giới hạn số câu trong ngân hàng?**
→ Không có giới hạn cứng. Hệ thống đã được thử nghiệm với trên 100.000 câu. Khuyến nghị nên phân loại tốt để dễ tìm.

**Học viên báo "câu này đáp án sai" - tôi xử lý sao?**
→ Vào tab **Báo lỗi**, kiểm tra. Nếu đúng là sai → sửa câu hoặc tạo câu mới + ngưng câu cũ. Nếu báo nhầm → đánh dấu **Đã xử lý + Không đổi**.

**Tôi không muốn giáo viên thấy lời giải - chỉ admin xem được.**
→ Cấu hình ở [Phân quyền](./phan-quyen): phân quyền "Xem lời giải câu hỏi" chỉ cho vai trò Admin.
