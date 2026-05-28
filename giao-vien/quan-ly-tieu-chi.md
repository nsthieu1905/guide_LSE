# Quản lý tiêu chí đề thi

**Đường dẫn:** `https://lamsonedutech.vn/teacher/criteria`

Tiêu chí đề thi (Criteria) cho phép bạn cấu hình **"công thức"** để hệ thống **tự sinh đề ngẫu nhiên** từ ngân hàng câu hỏi. Mỗi lần học viên làm bài, đề có thể khác nhau (tránh truyền tay đáp án).

## Khái niệm

Một tiêu chí mô tả:
- **Lấy bao nhiêu câu hỏi**?
- **Từ chuyên đề / chủ đề nào**?
- **Mức độ khó như thế nào**?
- **Thuộc dạng nào** (lý thuyết, vận dụng, vận dụng cao)?

Ví dụ:
> "Đề kiểm tra Toán chương Hàm số, 30 câu, 10 câu nhận biết + 15 câu thông hiểu + 5 câu vận dụng."

## Danh sách tiêu chí

Cột chính:
- Tên tiêu chí
- Khóa học áp dụng
- Tổng số câu / Tổng điểm
- Người tạo
- Trạng thái

## Tạo tiêu chí

1. Bấm **Thêm tiêu chí**.
2. Điền:
   - **Tên tiêu chí** (vd: "Đề KT chuyên đề Hàm số")
   - **Khóa học / chuyên đề** liên kết
   - **Tổng số câu**, **Tổng điểm**
3. **Thêm dòng tiêu chí con**:
   - **Chương / Chuyên đề** (chọn từ danh mục)
   - **Mức độ** (Nhận biết / Thông hiểu / Vận dụng / Vận dụng cao)
   - **Loại câu hỏi** (Trắc nghiệm 4 đáp án / Điền số / Đúng-sai / ...)
   - **Số câu cần lấy**
   - **Điểm mỗi câu**
4. Có thể thêm nhiều dòng tiêu chí (vd 3 mức khó × 4 chuyên đề).
5. **Tổng số câu các dòng phải = Tổng số câu của đề**.
6. Lưu.

## Sử dụng tiêu chí khi tạo đề thi

1. Vào tạo **Đề kiểm tra cuối chuyên đề** hoặc **Đề ôn khóa học**.
2. Chọn cách **Tạo theo tiêu chí** thay vì chọn câu thủ công.
3. Chọn **Tiêu chí** từ danh sách.
4. (Tùy chọn) **Random mới mỗi lần học viên làm bài** - hệ thống tự rút câu mới.
5. Lưu đề.

## Tiêu chí cho các kỳ thi đặc thù

### ĐGNL (HSA)
- Tạo 3 nhóm tiêu chí cho 3 phần: Tư duy định lượng, Tư duy định tính, Khoa học.
- Mỗi phần cấu hình số câu, mức khó.

### ĐGTD (TSA)
- Tạo tiêu chí cho từng phần: Toán học, Đọc hiểu, Giải quyết vấn đề.

### TNTHPT từng môn
- Cấu hình theo cấu trúc đề minh họa Bộ GD&ĐT.
- VD Toán 50 câu: 15 nhận biết + 20 thông hiểu + 10 vận dụng + 5 vận dụng cao.

> 💡 Các tiêu chí mẫu sẵn có cho HSA / TSA / TNTHPT thường do Admin tạo và chia sẻ. Hãy hỏi Admin trước khi tự xây từ đầu.

## Kiểm tra tiêu chí

Sau khi tạo, bấm **Xem thử** để hệ thống sinh thử 1 đề ngẫu nhiên dựa trên tiêu chí. Kiểm tra:
- Số câu có đúng không?
- Câu hỏi lấy có đúng chuyên đề / mức khó không?
- Có câu trùng / câu lỗi không?

## Sửa / Xóa

- **Sửa**: thay đổi áp dụng cho **đề tạo mới**. Các đề đã có vẫn giữ nguyên câu hỏi đã rút.
- **Xóa**: chỉ xóa được khi không có đề thi nào đang dùng.

## Câu hỏi thường gặp

**Học viên báo "đề chỉ có 28 câu thay vì 30".**
→ Có thể ngân hàng câu hỏi thiếu câu thỏa điều kiện. Mở tiêu chí, giảm yêu cầu (vd: vận dụng cao chỉ 3 thay vì 5) hoặc bổ sung thêm câu vào ngân hàng.

**Tôi muốn cùng 1 đề cho mọi học viên, không random.**
→ Không dùng tiêu chí. Chọn cách **Tạo đề thủ công** và chọn từng câu cụ thể.

**Có cách nào "chỉ lấy câu mà học viên chưa từng làm" không?**
→ Tùy phiên bản hệ thống. Một số hệ thống bật **Adaptive testing** để loại câu đã xuất hiện gần đây. Hỏi Admin.
