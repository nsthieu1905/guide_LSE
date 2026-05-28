# Soạn chương / chuyên đề / bài giảng

Đây là **công đoạn quan trọng nhất** của giáo viên - quyết định chất lượng khóa học.

## Cấu trúc nội dung

```
Khóa học
└── Chương (1, 2, 3...)
    └── Chuyên đề
        ├── Bài giảng (video, văn bản, file)
        └── Đề kiểm tra cuối chuyên đề
```

## Bước 1 - Thêm chương

1. Vào chi tiết khóa → tab **Cấu trúc nội dung** (hoặc `https://lamsonedutech.vn/teacher/detail-course/:idCourse`).
2. Bấm **Thêm chương**.
3. Điền:
   - **Tên chương** (vd: "Chương 1 - Hàm số")
   - **Số thứ tự**
   - **Mô tả ngắn** (1-2 câu)
   - (Tùy chọn) **Yêu cầu hoàn thành chương trước mới mở chương này**
4. Lưu.

## Bước 2 - Thêm chuyên đề

1. Bấm vào tên chương → mở chi tiết chương.
2. Bấm **Thêm chuyên đề** (`https://lamsonedutech.vn/teacher/detail-chapter/:idChapter`).
3. Điền:
   - **Tên chuyên đề** (vd: "Bài 1.1 - Tập xác định")
   - **Số thứ tự**
   - **Mô tả**
   - **Mục tiêu học** (sau bài này học viên sẽ làm được gì)
4. Lưu.

## Bước 3 - Thêm bài giảng

Trong chuyên đề (`https://lamsonedutech.vn/teacher/module-detail/:idThematic`), bấm **Thêm bài giảng**.

### Loại nội dung bài giảng

#### a. Video
- Tải video lên (mp4 chuẩn H.264, ≤ 1-2GB tùy hệ thống).
- Hoặc nhúng URL (YouTube unlisted, Vimeo, hệ thống lưu trữ riêng).
- Thêm **timestamp - chương phụ** để học viên nhảy nhanh tới phần cần xem.

#### b. Văn bản (Rich text)
- Soạn bằng trình soạn thảo có:
  - Định dạng cơ bản (đậm, nghiêng, gạch chân)
  - Bullets, numbered list, bảng
  - Công thức toán LaTeX (vd: `$\frac{a}{b}$`)
  - Chèn ảnh, video nhúng
  - Code block

#### c. File / PDF / Slide
- Upload file (PDF, DOCX, PPTX).
- Chọn **cho phép tải về** hoặc **chỉ đọc online**.

#### d. Mix
- Kết hợp: video chính + văn bản tóm tắt + file PDF kèm.

### Cấu hình thêm
- **Số phút ước lượng** (hệ thống dùng để tính tổng thời lượng khóa).
- **Yêu cầu xem hết video mới đánh dấu hoàn thành?**
- **Cho phép comment dưới bài?** (mặc định Có).

### Lưu
- Bài giảng tự gắn vào chuyên đề hiện tại.
- Có thể dùng lại bài giảng đã có trong **Thư viện bài giảng** thay vì upload mới.

## Bước 4 - Đề kiểm tra cuối chuyên đề

Trong chuyên đề, bấm **Thêm đề kiểm tra**.

### Cách 1 - Chọn đề có sẵn
- Mở danh sách đề từ **kho đề** của khóa.
- Chọn 1 đề → cấu hình thời gian, số lần làm lại, hiển thị đáp án.

### Cách 2 - Tạo đề mới ngay
1. Chọn câu hỏi từ **Danh mục câu hỏi** (nếu bạn được Admin cấp quyền).
2. Hoặc dùng **Tiêu chí đề thi** để hệ thống random.
3. Sắp xếp thứ tự, đặt điểm cho từng câu.
4. Lưu.

### Cấu hình bài kiểm tra
- **Thời gian làm bài** (phút)
- **Số câu** / **Điểm tối đa**
- **Số lần làm lại** (vd: 3 lần, hoặc Không giới hạn)
- **Cho xem đáp án sau khi nộp?**
- **Có xáo trộn câu hỏi / đáp án giữa các lần làm?**
- **Điểm tối thiểu để mở chuyên đề kế** (nếu khóa yêu cầu)

## Đề ôn khóa học (toàn khóa)

Đề ôn khóa học = đề thi tổng kết, không gắn vào 1 chuyên đề cụ thể.

1. Vào chi tiết khóa → tab **Đề thi**.
2. Bấm **Thêm đề ôn**.
3. Cấu hình tương tự đề kiểm tra chuyên đề.
4. Học viên sẽ thấy ở mục **Đề ôn** trong khóa của họ.

## Mẹo soạn bài giảng tốt

::: tip Video ngắn, mục tiêu rõ
- Mỗi video 7-12 phút, chỉ tập trung 1 mục tiêu nhỏ.
- Mở đầu video nói rõ "sau bài này em sẽ làm được X".
- Kết thúc tóm tắt + đưa 1 câu hỏi để học viên kiểm tra hiểu.
:::

::: tip Đa dạng định dạng
- Video chính → văn bản tóm tắt → 5 câu hỏi tự luyện → bài kiểm tra cuối chuyên đề.
- Học viên có khẩu vị khác nhau.
:::

::: tip Đặt mục tiêu mở khóa
- Bật **yêu cầu xem hết video** + **điểm tối thiểu bài kiểm tra ≥ 5/10 mới mở chuyên đề kế**.
- Học viên sẽ học theo lộ trình thay vì nhảy cóc.
:::

## Câu hỏi thường gặp

**Tôi upload video bị lỗi giữa chừng.**
→ Kiểm tra dung lượng, định dạng (mp4 H264), đường truyền. Nếu vẫn lỗi, nén bằng HandBrake xuống ~720p.

**Học viên báo "không xem được video do nhà mạng chặn".**
→ Có thể video lưu trữ trên server bị chặn. Liên hệ Admin/IT đổi sang CDN.

**Tôi muốn copy 1 chuyên đề sang khóa khác.**
→ Vào chi tiết chuyên đề → **... → Sao chép vào khóa khác** (nếu hệ thống hỗ trợ).

**Học viên không thấy bài giảng mới?**
→ Kiểm tra trạng thái bài (Nháp / Công khai). Yêu cầu họ reload (Ctrl+F5).
