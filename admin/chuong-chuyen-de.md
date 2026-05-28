# Chương học & Chuyên đề

Chương học (Module) và Chuyên đề (Thematic) là 2 cấp tổ chức nội dung **bên trong** một khóa học.

**Đường dẫn (danh mục):**
- Danh mục chương học: `https://lamsonedutech.vn/admin/thematic/cate`
- Danh mục chuyên đề: `https://lamsonedutech.vn/admin/thematic/thematic`
- Trong khóa: vào chi tiết khóa → tab Nội dung.

## Khái niệm

```
Khóa học
└── Chương 1
    ├── Chuyên đề 1.1
    │   ├── Bài giảng a
    │   └── Đề kiểm tra
    └── Chuyên đề 1.2
└── Chương 2
    ...
```

- **Chương học** = nhóm chuyên đề lớn (vd "Hàm số bậc 2", "Đọc hiểu văn bản").
- **Chuyên đề** = bài học nhỏ trong chương (vd "Tìm tập xác định", "Đỉnh parabol").

## Tạo chương trong khóa

1. Vào chi tiết khóa học → tab **Nội dung**.
2. Bấm **Thêm chương**.
3. Điền:
   - **Tên chương**
   - **Số thứ tự** (định vị trên cây nội dung)
   - **Mô tả ngắn**
   - (Tùy chọn) **Có yêu cầu hoàn thành chương trước mới mở khóa chương này?**
4. Lưu.

## Tạo chuyên đề trong chương

1. Bấm vào chương vừa tạo → **Thêm chuyên đề**.
2. Điền:
   - **Tên chuyên đề**
   - **Số thứ tự**
   - **Mô tả**
   - **Loại chuyên đề** (Lý thuyết / Bài tập / Luyện đề / Tổng ôn …) — tùy hệ thống.
3. Lưu.

## Thêm nội dung vào chuyên đề

Trong chuyên đề có 2 loại nội dung chính:

### Bài giảng
- Bấm **Thêm bài giảng**.
- Có thể chọn:
  - Bài giảng đã có trong [Danh mục bài giảng](./bai-giang) → liên kết.
  - Tạo bài mới ngay tại đây.
- Bài giảng có thể là video, văn bản, file PDF, slide.

### Đề kiểm tra cuối chuyên đề
- Bấm **Thêm đề kiểm tra**.
- Có thể:
  - Chọn đề từ [Đề ôn khóa học](./de-on-khoa-hoc).
  - Tạo đề mới ngay (chọn câu hỏi từ [Danh mục câu hỏi](./danh-muc-cau-hoi)).
- Cấu hình:
  - Thời gian làm bài
  - Số câu, điểm tối đa
  - Số lần làm lại
  - Có hiển thị đáp án sau khi nộp?

## Quản lý danh mục Chương / Chuyên đề

Trong các trang `https://lamsonedutech.vn/admin/thematic/cate` và `https://lamsonedutech.vn/admin/thematic/thematic`, bạn có:
- Bảng danh sách toàn hệ thống.
- Lọc theo khóa học, theo khung chương trình.
- Cho phép tạo các **chương / chuyên đề "dùng chung"** rồi gán vào nhiều khóa khác nhau.

## Sắp xếp / Đổi thứ tự

- Trong trang chi tiết khóa, kéo-thả mục cần đổi vị trí.
- Hoặc chỉnh trường **Số thứ tự** ở từng mục.

## Khóa / Mở khóa chuyên đề theo lộ trình

Tùy cấu hình khóa, học viên có thể bị **buộc học theo thứ tự**:

- Phải xem hết bài giảng → mới làm được bài kiểm tra.
- Phải đạt điểm tối thiểu của bài kiểm tra → mới mở chuyên đề tiếp theo.
- Phải hoàn thành chương → mới mở chương kế.

Cấu hình ở cấp khóa hoặc cấp chuyên đề.

## Xóa

- **Xóa chuyên đề:** học viên sẽ mất tiến độ liên quan. Hạn chế khi đã có người học.
- **Xóa chương:** kéo theo xóa chuyên đề con. Cẩn trọng cao.

## Câu hỏi thường gặp

**Tôi đổi tên chuyên đề - học viên có thấy ngay không?**
→ Có, hệ thống đồng bộ ngay. Lịch sử làm bài vẫn giữ ID nội bộ nên không bị mất.

**Có thể copy chuyên đề từ khóa này sang khóa khác?**
→ Có (nếu hệ thống bật chức năng). Dùng nút **Sao chép → Vào khóa…**.

**Học viên báo "không mở được chuyên đề 3 dù đã học chuyên đề 2".**
→ Có thể là yêu cầu đạt điểm tối thiểu của bài kiểm tra chuyên đề 2 chưa thỏa. Kiểm tra cấu hình mở khóa.
