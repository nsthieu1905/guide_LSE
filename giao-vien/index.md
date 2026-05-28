# Hướng dẫn cho Giáo viên

Khu vực Giáo viên (`https://lamsonedutech.vn/teacher/...`) là không gian làm việc dành cho giáo viên: tạo khóa học, soạn bài giảng, ra đề thi, quản lý lớp học và chấm điểm.

## Sơ đồ menu Giáo viên

Sau khi đăng nhập tại `https://lamsonedutech.vn/auth/giaovien`, bạn sẽ thấy menu bên trái:

| Mục | Đường dẫn | Mô tả |
| --- | --- | --- |
| **Tổng quan** | `https://lamsonedutech.vn/teacher/dashboard` | Số liệu nhanh: số khóa, học viên, đề thi |
| **Quản lý khóa học** | `https://lamsonedutech.vn/teacher/course-management` | Tạo & quản lý khóa do bạn phụ trách |
| **Quản lý lớp học** | `https://lamsonedutech.vn/teacher/class-management/:courseId` | Quản lý từng lớp (vào từ chi tiết khóa) |
| **Quản lý điểm thi** | `https://lamsonedutech.vn/teacher/score-exam` | Xem & xuất điểm của học viên |
| **Quản lý tiêu chí** | `https://lamsonedutech.vn/teacher/criteria` | Tạo tiêu chí ra đề ngẫu nhiên |
| **Hỏi đáp** | `https://lamsonedutech.vn/teacher/reply` | Trả lời câu hỏi của học viên |
| **Tài khoản cá nhân** | `https://lamsonedutech.vn/teacher/profile` | Sửa hồ sơ, đổi mật khẩu |

## Một ngày làm việc điển hình

1. **Sáng sớm**:
   - Mở Dashboard, kiểm tra học viên mới đăng ký lớp / khóa.
   - Vào Hỏi đáp, trả lời các câu hỏi qua đêm.

2. **Trong ngày**:
   - Cập nhật bài giảng / chỉnh đề thi nếu có nội dung mới.
   - Theo dõi tiến độ học của các lớp.

3. **Cuối tuần**:
   - Xuất điểm thi → gửi phụ huynh / báo cáo.
   - Tổng kết các vấn đề học viên hay mắc → ghi note cho khóa sau.

## Quy trình tạo một khóa học mới

Nếu bạn được giao tạo một khóa từ đầu, theo trình tự:

1. **Tạo khóa**: [Quản lý khóa học](./quan-ly-khoa-hoc).
2. **Tạo cây nội dung**: chương → chuyên đề → bài giảng tại [Soạn bài giảng](./soan-bai-giang).
3. **Tạo tiêu chí đề thi** (nếu dùng đề ngẫu nhiên) tại [Tiêu chí đề thi](./quan-ly-tieu-chi).
4. **Tạo đề kiểm tra cuối chuyên đề** + **đề ôn khóa học**.
5. (Tùy chọn) Tạo lớp học và mời học viên vào: [Quản lý lớp học](./quan-ly-lop-hoc).
6. Khi khóa hoàn thiện, báo Admin **Công khai** để học viên thấy.

## Khác biệt vai trò Giáo viên vs Admin

| | Giáo viên | Admin |
| --- | --- | --- |
| Tạo / sửa khóa của mình | ✅ | ✅ (toàn bộ) |
| Tạo / sửa khóa của giáo viên khác | ❌ | ✅ |
| Xem điểm học viên trong khóa mình | ✅ | ✅ |
| Xem điểm học viên ngoài khóa mình | ❌ | ✅ |
| Quản lý tài khoản học viên (sửa/khóa/xóa) | ❌ | ✅ |
| Quản lý hóa đơn | ❌ | ✅ |
| Phát mã giảm giá | ❌ | ✅ |

## Lưu ý đầu tiên cho giáo viên mới

::: tip Đổi mật khẩu lần đầu
Tài khoản giáo viên do Admin cấp. **Vào ngay [Tài khoản cá nhân](./ho-so-ca-nhan) đổi mật khẩu** sau lần đăng nhập đầu tiên.
:::

::: tip Hoàn thiện hồ sơ trước khi dạy
Ảnh đại diện, giới thiệu ngắn, bằng cấp hiển thị **công khai** ở trang khóa học. Học viên sẽ tin tưởng và đăng ký nhiều hơn khi hồ sơ chuẩn.
:::

::: warning Khi gặp lỗi quyền
Một số mục có thể không hiển thị nếu Admin chưa cấp đủ quyền. Liên hệ Admin để được hỗ trợ.
:::

## Tiếp theo

→ Bắt đầu với [Dashboard](./dashboard) hoặc đi thẳng đến [Quản lý khóa học](./quan-ly-khoa-hoc).
