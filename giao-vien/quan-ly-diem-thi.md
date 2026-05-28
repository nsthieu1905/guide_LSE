# Quản lý điểm thi

**Đường dẫn:** `https://lamsonedutech.vn/teacher/score-exam`

Nơi bạn xem và quản lý kết quả thi của tất cả học viên trong các khóa do bạn phụ trách.

## Bảng điểm

Cột chính:
- **Học viên** (tên, SĐT)
- **Khóa học / Lớp**
- **Tên đề thi**
- **Loại** (Đề ôn khóa / Đề chuyên đề / Đề mẫu HSA-TSA-THPT / Kiểm tra đầu vào)
- **Ngày làm**
- **Thời gian làm bài thực tế**
- **Tổng điểm** / Tổng điểm tối đa
- **Số lần làm**
- **Trạng thái** (Đã chấm tự động / Đang chờ chấm tay / Đã xác nhận)

## Bộ lọc

- Theo **Khóa học** / **Lớp**
- Theo **Đề thi**
- Theo **Khoảng thời gian**
- Theo **Học viên** (tên/SĐT)
- Theo **Mức điểm** (vd: dưới trung bình / từ X-Y điểm)
- Theo **Loại đề**

## Xem chi tiết bài làm

Bấm vào dòng → mở trang chi tiết:
- Từng câu hỏi: đáp án học viên, đáp án đúng, đúng/sai.
- Tổng điểm theo phần / chuyên đề.
- Thời gian làm từng câu (nếu hệ thống ghi nhận).

Hữu ích khi:
- Học viên khiếu nại "câu này em làm đúng mà sao bị sai".
- Phân tích lỗi để chỉ ra trong buổi học sau.

## Chấm tay (đối với câu tự luận)

Đối với câu hỏi không thể chấm tự động (tự luận, vẽ hình):
1. Mở chi tiết bài.
2. Đến câu cần chấm.
3. Đọc bài làm (text / ảnh / file).
4. Nhập điểm + nhận xét.
5. Lưu.
6. Tổng điểm sẽ được cộng lại tự động.

## Phân tích điểm

Tab **Phân tích** / **Báo cáo**:

### Phân phối điểm
- Biểu đồ histogram số học viên theo khoảng điểm.
- Xác định: lớp đang ở mức nào? Có quá nhiều người < trung bình?

### Câu sai nhiều nhất
- Top 10 câu hỏi mà nhiều học viên làm sai.
- Sử dụng để biết **chủ đề nào cần dạy lại**.

### So sánh giữa các lớp
- Nếu cùng 1 đề thi được làm bởi nhiều lớp, so điểm trung bình từng lớp.

### Xu hướng học viên
- Tiến bộ theo thời gian: học viên có cải thiện không?
- Học viên cần được hỗ trợ.

## Xuất Excel / PDF

- Bấm **Xuất Excel** để tải bảng điểm theo bộ lọc.
- Bấm **Xuất PDF** cho từng học viên (báo cáo cá nhân, có thể gửi phụ huynh).

## Các xử lý đặc biệt

### Hủy bài thi
- Khi học viên báo "mạng lag mất bài" hoặc gian lận:
- Mở chi tiết → bấm **Hủy bài** → ghi lý do.
- Học viên có thể làm lại nếu đề cho phép.

### Cho phép làm lại
- Một số đề mặc định chỉ 1 lần. Nếu muốn cho học viên làm lại:
- Mở chi tiết bài → **Cấp lượt làm thêm**.

### Cộng điểm thủ công
- Khi có câu lỗi đề và bạn quyết định cộng điểm cho tất cả:
- Vào **Hành động hàng loạt → Cộng điểm**.
- Nhập số điểm + lý do.

## Câu hỏi thường gặp

**Bài thi của học viên ở trạng thái "Đang chấm" mãi không xong?**
→ Có thể có câu tự luận chờ chấm tay. Mở chi tiết → tìm câu chưa có điểm.

**Học viên báo điểm không đúng?**
→ Mở chi tiết, đối chiếu từng câu. Nếu có sai sót, sửa thủ công.

**Tôi cần báo cáo điểm cho phụ huynh.**
→ Lọc theo học viên → **Xuất PDF báo cáo cá nhân**.

**Muốn so sánh kết quả của 2 đợt thi thử HSA?**
→ Lọc theo tên đề + khoảng thời gian, xuất Excel rồi pivot. Hoặc dùng tab **Phân tích → So sánh** nếu hệ thống có.
