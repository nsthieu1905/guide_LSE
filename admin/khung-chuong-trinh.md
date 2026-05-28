# Khung chương trình

**Đường dẫn:** `https://lamsonedutech.vn/admin/thematic/program`

**Khung chương trình** (Program) là tầng phân loại cao nhất của hệ thống đào tạo. Mỗi khóa học phải thuộc một khung chương trình.

## Khái niệm

Khung chương trình tương ứng với **một định hướng học** lớn, ví dụ:

- "Luyện thi ĐGNL HSA 2026"
- "Luyện thi ĐGTD Bách Khoa 2026"
- "Tốt nghiệp THPT 2026 - Khối A"
- "Học liệu giáo trình lớp 12"
- "Kiểm tra đầu vào toàn trường"

Một khung chương trình có thể chứa **nhiều khóa học** (cùng chủ đề nhưng khác cấp độ, khác giáo viên).

## Thuộc tính

| Trường | Mô tả |
| --- | --- |
| **Tên khung** | Tên hiển thị (vd "Luyện thi ĐGNL 2026") |
| **Mã khung** | Mã duy nhất dùng cho URL & báo cáo |
| **Loại chương trình** | Một trong 8 loại: Kiểm tra đầu vào / Thi thử ĐGNL / Thi thử ĐGTD / Thi TNTHPT / Luyện thi ĐGNL-ĐGTD / Ôn thi THCS-THPT / Học liệu / Bộ đề |
| **Ảnh bìa** | Hiển thị ở trang chủ và trang khóa học |
| **Mô tả ngắn** | Dùng cho SEO và preview |
| **Mô tả chi tiết** | Rich text (có hình, video) cho trang chi tiết |
| **Trạng thái** | Công khai / Ẩn |
| **Thứ tự hiển thị** | Số thứ tự trên trang chủ |

## Tạo khung chương trình

1. Bấm **Thêm khung chương trình**.
2. Nhập đầy đủ thông tin (xem bảng trên).
3. **Chọn loại chương trình** - đây là quyết định quan trọng vì ảnh hưởng đến:
   - Loại đề thi sử dụng (đề ĐGNL khác đề ĐGTD).
   - Cách hiển thị kết quả thi.
   - Cách học viên truy cập từ trang chủ.
4. Bấm **Lưu**.

## Sửa khung chương trình

- Có thể đổi tên, ảnh, mô tả bất cứ lúc nào.
- **Không nên đổi "Loại chương trình"** sau khi đã có khóa học và học viên - sẽ gây sai lệch loại đề thi sử dụng.

## Ẩn / Xóa khung

- **Ẩn**: gắn cờ "Đã ẩn" → không hiển thị trên trang chủ, nhưng học viên đã mua khóa thuộc khung vẫn vào học được.
- **Xóa**: chỉ xóa được khi **không còn khóa học** nào nằm trong khung.

## Quan hệ với các phần khác

```
Khung chương trình
  └── Khóa học (mua từ đây)
        └── Chương học
              └── Chuyên đề
                    └── Bài giảng
                    └── Đề kiểm tra cuối chuyên đề
```

→ Bước tiếp: tạo [Khóa học](./khoa-hoc) trong khung.

## Thực hành chuẩn

- Đặt tên khung **có năm thi** (vd "ĐGNL 2026") để học sinh các năm sau không bị lẫn.
- Khi sang năm mới, **clone khung cũ** thay vì tạo mới hoàn toàn (nếu hệ thống có nút clone), để tiết kiệm thời gian nhập liệu.
- **Ảnh bìa** nên đồng nhất kích thước (ví dụ 1200×630) để trang chủ hiển thị đẹp.
