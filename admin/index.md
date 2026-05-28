# Hướng dẫn cho Quản trị viên

Khu vực Admin (`https://lamsonedutech.vn/admin/...`) là trung tâm điều hành toàn bộ hệ thống LamSơn Edutech. Trang này tóm tắt **những việc một quản trị viên cần làm** và link tới hướng dẫn chi tiết.

## Sơ đồ menu Admin

Sau khi đăng nhập tại `https://lamsonedutech.vn/auth/admin`, bạn sẽ thấy menu bên trái với các nhóm chức năng:

| Nhóm | Mục con | Đường dẫn |
| --- | --- | --- |
| **Dashboard** | Trang tổng quan | `https://lamsonedutech.vn/admin/dashboard` |
| **Thống kê** | Khóa học, Giáo viên, Học viên, Kết quả thi | `https://lamsonedutech.vn/admin/statistic/...` |
| **Thành viên** | Học viên, Giáo viên, Nhân viên, Quản lý quyền | `https://lamsonedutech.vn/admin/account/...` |
| **Đào tạo** | Khung chương trình, Khóa học, Chương, Chuyên đề, Bài giảng, Thông tin khóa học | `https://lamsonedutech.vn/admin/thematic/...`, `https://lamsonedutech.vn/admin/lesson/...`, `https://lamsonedutech.vn/admin/educate/...` |
| **Danh mục đề thi** | Tiêu chí, Trích đoạn, Đề ôn, Đề mẫu luyện thi, Đánh giá, Câu hỏi, Bộ đề thi | `https://lamsonedutech.vn/admin/question/...` |
| **Kinh doanh** | Học viên - Khóa học, Khuyến mãi, Chiết khấu, Hóa đơn, Đại lý | `https://lamsonedutech.vn/admin/business/...` |
| **Hỏi đáp** | Quản lý câu hỏi của học viên | `https://lamsonedutech.vn/admin/reply` |
| **Banner** | Quảng cáo, Menu | `https://lamsonedutech.vn/admin/banner/...` |
| **Hệ thống** | Ngân hàng, Footer, Liên hệ | `https://lamsonedutech.vn/admin/system/...` |

## Quy trình thiết lập hệ thống lần đầu

Nếu bạn vừa được giao một hệ thống trống, hãy thực hiện theo thứ tự sau để tránh thiếu dữ liệu phụ thuộc:

1. **Cấu hình hệ thống** (Hệ thống → Ngân hàng / Footer / Liên hệ).
   → Xem [Hệ thống](./he-thong).

2. **Tạo phân quyền & nhân viên nội bộ** (Thành viên → Quản lý quyền, sau đó Thành viên → Nhân viên).
   → Xem [Phân quyền](./phan-quyen), [Quản lý nhân viên](./quan-ly-nhan-vien).

3. **Tạo tài khoản giáo viên** (Thành viên → Giáo viên).
   → Xem [Quản lý giáo viên](./quan-ly-giao-vien).

4. **Tạo khung chương trình & danh mục đào tạo** (Đào tạo → Khung chương trình → Khóa học → Chương → Chuyên đề → Bài giảng).
   → Xem [Khung chương trình](./khung-chuong-trinh), [Khóa học](./khoa-hoc), [Chương / Chuyên đề](./chuong-chuyen-de), [Bài giảng](./bai-giang).

5. **Tạo ngân hàng câu hỏi & đề thi** (Danh mục đề thi → Câu hỏi → Tiêu chí → Đề ôn / Đề mẫu / Bộ đề).
   → Xem [Danh mục câu hỏi](./danh-muc-cau-hoi), [Tiêu chí đề thi](./tieu-chi-de-thi), [Đề mẫu luyện thi](./de-mau-luyen-thi).

6. **Cấu hình kinh doanh** (Kinh doanh → Khuyến mãi, Chiết khấu, Đại lý).
   → Xem [Khuyến mãi](./khuyen-mai), [Chiết khấu](./chiet-khau).

7. **Trang chủ & truyền thông** (Banner → Quảng cáo, Menu).
   → Xem [Banner & Menu](./banner-menu).

## Việc thường ngày của Admin

- **Sáng:** kiểm tra Dashboard, xem hóa đơn mới, học viên mới đăng ký.
- **Theo dõi tuần/tháng:** vào Thống kê để xem doanh thu, số học viên hoạt động, kết quả thi.
- **Hỗ trợ:** trả lời / chuyển tiếp Hỏi đáp; tra cứu hóa đơn khi học viên khiếu nại.
- **Định kỳ:** mở bộ đề thi mới, tạo mã khuyến mãi, cập nhật banner.

## Lưu ý quan trọng

::: warning Bảo mật
- Không chia sẻ tài khoản admin. Tạo riêng tài khoản nhân viên với quyền vừa đủ.
- Đăng xuất khi rời máy.
- Đổi mật khẩu định kỳ.
:::

::: tip Sao lưu dữ liệu
- Trước khi xóa hàng loạt (học viên, khóa học, đề thi), hãy yêu cầu IT **backup dữ liệu**.
- Việc xóa nội dung đã có học viên đang học có thể làm hỏng tiến độ học của họ.
:::

## Tiếp theo

→ Bắt đầu với [Dashboard](./dashboard) hoặc đi thẳng đến nhóm chức năng bạn cần ở menu bên trái.
