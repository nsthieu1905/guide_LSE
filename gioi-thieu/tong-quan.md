# Tổng quan hệ thống LamSơn Edutech

LamSơn Edutech là hệ thống học tập trực tuyến (Learning Management System) chuyên sâu cho **luyện thi Đại học tại Việt Nam**, bao gồm:

- Kỳ thi **Đánh giá năng lực (ĐGNL/HSA)** của ĐHQG Hà Nội
- Kỳ thi **Đánh giá tư duy (ĐGTD/TSA)** của ĐH Bách Khoa Hà Nội
- Kỳ thi **Tốt nghiệp THPT**
- Các bài **kiểm tra đầu vào**, **ôn thi THCS/THPT**
- **Học liệu, giáo trình** và **bộ đề thi**

## Hệ thống có gì?

Hệ thống gồm 3 nhóm người dùng chính, mỗi nhóm có khu vực làm việc riêng:

### 1. Khu vực Học viên (`https://lamsonedutech.vn/luyen-tap/...` hoặc `https://lamsonedutech.vn/home`)
- Đăng ký tài khoản, mua khóa học, tham gia học.
- Học bài giảng video, làm bài luyện tập theo chuyên đề/module.
- Làm bài thi thử ĐGNL, ĐGTD, Tốt nghiệp THPT, bài kiểm tra đầu vào.
- Xem lại bài thi, lịch sử làm bài, bảng xếp hạng.
- Đặt câu hỏi cho giáo viên (Hỏi đáp).

### 2. Khu vực Giáo viên (`https://lamsonedutech.vn/teacher/...`)
- Tạo và quản lý khóa học, chương học, chuyên đề, bài giảng.
- Quản lý lớp học và danh sách học viên trong lớp.
- Tạo tiêu chí đề thi, ra đề và chấm điểm thi.
- Trả lời câu hỏi của học viên.

### 3. Khu vực Quản trị (`https://lamsonedutech.vn/admin/...`)
- Quản lý toàn bộ thành viên (học viên, giáo viên, nhân viên) và phân quyền.
- Quản lý khung chương trình, khóa học, đề thi mẫu, câu hỏi.
- Quản lý kinh doanh: khuyến mãi, chiết khấu, đại lý, hóa đơn.
- Cấu hình hệ thống: banner, menu, footer, thông tin ngân hàng, liên hệ.
- Xem thống kê tổng thể: khóa học, giáo viên, học viên, kết quả thi.

## Các loại chương trình đào tạo

Hệ thống phân loại các chương trình thành những nhóm sau:

| # | Loại chương trình | Mô tả |
| --- | --- | --- |
| 1 | **Kiểm tra đầu vào** | Bài test phân loại trình độ trước khi vào khóa học chính |
| 2 | **Thi thử ĐGNL** | Mô phỏng kỳ thi HSA của ĐHQG Hà Nội |
| 3 | **Thi thử ĐGTD** | Mô phỏng kỳ thi TSA của ĐH Bách Khoa Hà Nội |
| 4 | **Thi tốt nghiệp THPT** | Đề thi thử tốt nghiệp THPT từng môn |
| 5 | **Luyện thi ĐGNL, ĐGTD** | Khóa học luyện chuyên sâu cho HSA & TSA |
| 6 | **Ôn thi TN THCS, THPT** | Khóa ôn luyện cho học sinh THCS, THPT |
| 7 | **Học liệu, giáo trình** | Tài liệu, sách điện tử dùng cho học tập |
| 8 | **Bộ đề thi** | Tổng hợp các đề thi theo bộ để luyện đều |

## Cấu trúc một khóa học

Mỗi khóa học trên LamSơn Edutech được tổ chức theo cây phân cấp:

```
Khóa học
└── Chương học
    └── Chuyên đề
        └── Bài giảng (video, tài liệu)
        └── Bài luyện tập / Đề kiểm tra
```

- **Khóa học** thuộc về một **Khung chương trình** (do Admin quản lý).
- Mỗi **Chương / Chuyên đề** có thể chứa nhiều **bài giảng** và **đề kiểm tra cuối chuyên đề**.
- Học viên hoàn thành chuyên đề trước mới mở khóa được chuyên đề sau (tùy cấu hình khóa học).

## Yêu cầu hệ thống

- Trình duyệt: **Google Chrome, Microsoft Edge, Firefox, Safari** phiên bản mới (khuyên dùng Chrome ≥ 100).
- Kết nối Internet ổn định, đặc biệt khi làm bài thi online có thời gian giới hạn.
- Máy tính, laptop hoặc tablet có màn hình ≥ 10 inch để hiển thị đề thi đầy đủ.
- Trên điện thoại vẫn dùng được nhưng khuyến nghị máy tính khi thi.

## Tiếp theo

- [Tài khoản và vai trò](./tai-khoan-va-vai-tro) - phân biệt 3 vai trò chính
- [Đăng nhập / Đăng ký](./dang-nhap) - bắt đầu sử dụng
- [Các loại kỳ thi](./cac-loai-ky-thi) - tìm hiểu kỳ thi phù hợp với bạn
