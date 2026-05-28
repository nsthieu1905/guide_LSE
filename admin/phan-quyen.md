# Phân quyền

**Đường dẫn:** `https://lamsonedutech.vn/admin/account/permission`

Phân quyền (Position / Permission) cho phép bạn tạo các **chức vụ** với từng quyền cụ thể, rồi gán cho nhân viên. Đây là cách an toàn nhất để chia sẻ quyền truy cập admin mà không "trao chìa khóa" toàn bộ.

## Khái niệm

- **Position (Chức vụ)** = một nhóm quyền có tên, ví dụ: "Quản trị cao cấp", "Nhân viên CSKH".
- **Permission (Quyền)** = từng tính năng cụ thể, ví dụ: `student`, `course`, `exam`, `invoice`, …
- Một **nhân viên** được gán đúng **1 chức vụ**, từ đó suy ra quyền.

## Danh sách quyền có sẵn

| Mã quyền | Cho phép truy cập |
| --- | --- |
| `student` | Quản lý học viên |
| `teacher` | Quản lý giáo viên |
| `staff` | Quản lý nhân viên |
| `position` | Quản lý chức vụ / phân quyền |
| `program` | Khung chương trình |
| `course` | Khóa học |
| `modun` | Chương học (module) |
| `thematic` | Chuyên đề |
| `lesson` | Bài giảng |
| `courseDescription` | Thông tin khóa học (trang chi tiết, mô tả) |
| `syntheticCriteria` | Tiêu chí đề thi |
| `exceprt` | Trích đoạn đề thi |
| `exam` | Đề ôn / đề mẫu |
| `examSet` | Bộ đề thi |
| `evaluate` | Đánh giá đầu vào |
| `question` | Danh mục câu hỏi |
| `courseStudent` | Học viên - Khóa học |
| `discountCode` | Mã khuyến mãi |
| `dealerDiscount` | Chiết khấu / Đại lý |
| `invoice` | Hóa đơn |
| `comment` | Hỏi đáp |
| `menu` | Menu (banner) |
| `footer` | Footer hệ thống |
| `contact` | Liên hệ hệ thống |

> ⚠️ Một số mục như **Dashboard, Thống kê, Banner Quảng cáo, Ngân hàng** hiện có thể mặc định bật cho mọi nhân viên - hãy test sau khi cấu hình.

## Tạo chức vụ mới

1. Vào `https://lamsonedutech.vn/admin/account/permission` → bấm **Thêm chức vụ**.
2. Đặt **Tên chức vụ** (rõ ràng, ví dụ "NV Kinh doanh khu vực Bắc").
3. (Tùy chọn) Mô tả ngắn.
4. Tick các **quyền** muốn bật.
5. Bấm **Lưu**.

## Sửa chức vụ

- Bấm **Sửa** trên dòng → chỉnh quyền → **Lưu**.
- Mọi nhân viên đang giữ chức vụ này **sẽ áp dụng quyền mới ngay lần đăng nhập tiếp theo**.

## Xóa chức vụ

::: warning Chú ý
Không thể xóa chức vụ nếu vẫn còn nhân viên đang gán. Hãy chuyển những nhân viên đó sang chức vụ khác trước.
:::

## Áp dụng cho nhân viên

1. Vào [Quản lý Nhân viên](./quan-ly-nhan-vien).
2. Bấm **Sửa** một nhân viên → mục **Chức vụ** → chọn chức vụ vừa tạo.
3. Bấm **Lưu**.

## Mẹo thực hành

::: tip Nguyên tắc tối thiểu quyền
Chỉ bật **đúng những quyền cần thiết** cho công việc. Ví dụ NV CSKH không cần quyền `course` hay `exam`.
:::

::: tip Tạo chức vụ "Sandbox"
Tạo một chức vụ "Thử nghiệm" để test giao diện trước khi tạo cho người thật. Có thể xóa sau khi đã chốt mẫu chức vụ.
:::

::: tip Xem audit trail
Nếu hệ thống có log thao tác, đối soát định kỳ ai đã sửa gì. Đặc biệt với quyền `invoice` và `student`.
:::

## Câu hỏi thường gặp

**Nhân viên báo "không vào được menu Khóa học".**
→ Vào chức vụ của họ, bật quyền `course`. Yêu cầu họ đăng nhập lại.

**Tôi muốn cho 1 nhân viên CHỈ XEM mà không sửa được.**
→ Hệ thống hiện chia quyền theo module chứ chưa có view-only chi tiết cho từng module. Có thể chờ giải pháp nâng cấp, hoặc thay bằng việc để nhân viên đó **xem qua màn hình của người có quyền**.

**Có cách nào tạo nhân viên Super Admin không?**
→ Tạo chức vụ "Super Admin" → bật **toàn bộ quyền** → gán cho nhân viên đó. Tuy nhiên hạn chế số người ở mức này.
