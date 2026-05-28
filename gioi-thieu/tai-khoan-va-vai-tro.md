# Tài khoản và vai trò

Hệ thống LamSơn Edutech có **3 vai trò chính**, mỗi vai trò có cổng đăng nhập và khu vực làm việc riêng biệt.

## 1. Học viên (Student)

**Đối tượng:** Học sinh THCS, THPT, thí sinh ôn thi đại học, người tự học.

**Có thể làm:**
- Đăng ký tài khoản miễn phí.
- Mua / nhận miễn phí khóa học, học liệu.
- Học bài giảng, làm bài luyện tập.
- Làm bài thi thử ĐGNL, ĐGTD, Tốt nghiệp THPT, kiểm tra đầu vào.
- Xem lại đáp án, lịch sử và bảng xếp hạng.
- Đặt câu hỏi cho giáo viên trong khóa học.

**Cổng đăng nhập:** trang chủ hệ thống (`https://lamsonedutech.vn/auth/hocvien` hoặc nút **Đăng nhập** ở góc phải).

## 2. Giáo viên (Teacher)

**Đối tượng:** Giáo viên chuyên môn, gia sư cộng tác.

**Có thể làm:**
- Tạo và quản lý các khóa học do mình phụ trách.
- Soạn chương học → chuyên đề → bài giảng (video, văn bản, file).
- Tạo tiêu chí đề thi, ra đề luyện tập / đề kiểm tra cuối chuyên đề.
- Quản lý lớp học và học viên trong lớp.
- Chấm và xem điểm thi của học viên.
- Trả lời câu hỏi của học viên (Hỏi đáp).

**Cổng đăng nhập:** `https://lamsonedutech.vn/auth/giaovien` hoặc liên kết được quản trị viên cung cấp.

## 3. Quản trị viên (Admin / Staff)

**Đối tượng:** Người quản lý hệ thống. Có thể chia thành nhiều cấp quyền (Quản trị, Nhân viên kinh doanh, Nhân viên nội dung…) qua **Quản lý quyền**.

**Có thể làm:**
- Quản lý toàn bộ tài khoản: học viên, giáo viên, nhân viên.
- Quản lý đào tạo: khung chương trình, khóa học, chương, chuyên đề, bài giảng.
- Quản lý đề thi: tiêu chí, trích đoạn, đề ôn khóa học, đề mẫu luyện thi, đánh giá, câu hỏi, bộ đề.
- Quản lý kinh doanh: khuyến mãi, chiết khấu, đại lý, hóa đơn, học viên - khóa học.
- Cấu hình hệ thống: banner, menu, footer, ngân hàng, liên hệ.
- Xem thống kê tổng thể của toàn hệ thống.

**Cổng đăng nhập:** `https://lamsonedutech.vn/auth/admin` (riêng cho quản trị).

## So sánh nhanh quyền hạn

| Tính năng | Học viên | Giáo viên | Admin |
| --- | :---: | :---: | :---: |
| Học bài giảng, làm bài thi | ✅ | ✅ (xem trước) | ✅ |
| Tạo khóa học, soạn bài giảng | ❌ | ✅ (khóa do mình phụ trách) | ✅ (toàn bộ) |
| Tạo / sửa đề thi | ❌ | ✅ (theo khóa) | ✅ (toàn bộ) |
| Quản lý lớp học | ❌ | ✅ (lớp được giao) | ✅ |
| Chấm / xem điểm thi học viên | Bản thân | ✅ | ✅ |
| Quản lý tài khoản người khác | ❌ | ❌ | ✅ |
| Quản lý kinh doanh, hóa đơn | Hóa đơn của mình | Chiết khấu của mình | ✅ |
| Cấu hình hệ thống (banner, menu...) | ❌ | ❌ | ✅ |

## Phân quyền chi tiết (chỉ Admin)

Trong vai trò **Admin**, hệ thống còn cho phép tạo nhiều **chức vụ (position)** với từng quyền cụ thể như:
`student`, `teacher`, `staff`, `course`, `lesson`, `exam`, `examSet`, `program`, `modun`, `thematic`, `comment`, `discountCode`, `dealerDiscount`, `invoice`, `footer`, `contact`, …

Xem chi tiết tại [Phân quyền (Admin)](/admin/phan-quyen).

## Một người có thể có nhiều vai trò không?

Có. Hệ thống cho phép 1 cá nhân có thể đăng ký nhiều tài khoản khác nhau cho từng vai trò (ví dụ một giáo viên có thể tạo thêm tài khoản học viên để thử trải nghiệm khóa học). Tuy nhiên, **mỗi tài khoản chỉ thuộc một vai trò** và đăng nhập ở cổng tương ứng.

## Tiếp theo

- [Cách đăng nhập / đăng ký](./dang-nhap)
- [Các loại kỳ thi](./cac-loai-ky-thi)
