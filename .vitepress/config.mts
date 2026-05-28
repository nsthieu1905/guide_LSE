import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LamSơn Edutech",
  description: "Tài liệu hướng dẫn sử dụng hệ thống LamSơn Edutech dành cho Quản trị viên, Giáo viên và Học viên",
  lang: 'vi-VN',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'LamSơn Edutech',
    outline: { level: [2, 3], label: 'Trên trang' },
    docFooter: { prev: 'Trang trước', next: 'Trang sau' },
    lastUpdatedText: 'Cập nhật lần cuối',
    darkModeSwitchLabel: 'Giao diện',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Lên đầu trang',

    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Giới thiệu', link: '/gioi-thieu/tong-quan' },
      {
        text: 'Theo vai trò',
        items: [
          { text: 'Quản trị viên', link: '/admin/' },
          { text: 'Giáo viên', link: '/giao-vien/' },
          { text: 'Học viên', link: '/hoc-vien/' },
        ],
      },
      {
        text: 'Theo kỳ thi',
        items: [
          { text: 'Đánh giá năng lực (HSA)', link: '/hoc-vien/thi-dgnl-hsa' },
          { text: 'Đánh giá tư duy (TSA)', link: '/hoc-vien/thi-dgtd-tsa' },
          { text: 'Tốt nghiệp THPT', link: '/hoc-vien/thi-tnthpt' },
          { text: 'Kiểm tra đầu vào', link: '/hoc-vien/kiem-tra-dau-vao' },
        ],
      },
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: {
      '/gioi-thieu/': [
        {
          text: 'Giới thiệu chung',
          items: [
            { text: 'Tổng quan hệ thống', link: '/gioi-thieu/tong-quan' },
            { text: 'Tài khoản và vai trò', link: '/gioi-thieu/tai-khoan-va-vai-tro' },
            { text: 'Đăng nhập / Đăng ký', link: '/gioi-thieu/dang-nhap' },
            { text: 'Các loại kỳ thi', link: '/gioi-thieu/cac-loai-ky-thi' },
          ],
        },
      ],

      '/admin/': [
        {
          text: 'Hướng dẫn Quản trị viên',
          items: [
            { text: 'Tổng quan vai trò Admin', link: '/admin/' },
            { text: 'Dashboard - Trang tổng quan', link: '/admin/dashboard' },
            { text: 'Thống kê & Báo cáo', link: '/admin/thong-ke' },
          ],
        },
        {
          text: 'Quản lý thành viên',
          items: [
            { text: 'Quản lý Học viên', link: '/admin/quan-ly-hoc-vien' },
            { text: 'Quản lý Giáo viên', link: '/admin/quan-ly-giao-vien' },
            { text: 'Quản lý Nhân viên', link: '/admin/quan-ly-nhan-vien' },
            { text: 'Phân quyền', link: '/admin/phan-quyen' },
          ],
        },
        {
          text: 'Đào tạo',
          items: [
            { text: 'Khung chương trình', link: '/admin/khung-chuong-trinh' },
            { text: 'Khóa học', link: '/admin/khoa-hoc' },
            { text: 'Chương học / Chuyên đề', link: '/admin/chuong-chuyen-de' },
            { text: 'Bài giảng', link: '/admin/bai-giang' },
          ],
        },
        {
          text: 'Đề thi & Câu hỏi',
          items: [
            { text: 'Tiêu chí đề thi', link: '/admin/tieu-chi-de-thi' },
            { text: 'Trích đoạn đề thi', link: '/admin/trich-doan-de-thi' },
            { text: 'Đề ôn khóa học', link: '/admin/de-on-khoa-hoc' },
            { text: 'Đề mẫu Luyện thi (HSA, TSA, THPT)', link: '/admin/de-mau-luyen-thi' },
            { text: 'Đánh giá đầu vào', link: '/admin/danh-gia-dau-vao' },
            { text: 'Danh mục câu hỏi', link: '/admin/danh-muc-cau-hoi' },
            { text: 'Bộ đề thi', link: '/admin/bo-de-thi' },
          ],
        },
        {
          text: 'Kinh doanh',
          items: [
            { text: 'Học viên - Khóa học', link: '/admin/hoc-vien-khoa-hoc' },
            { text: 'Mã khuyến mãi', link: '/admin/khuyen-mai' },
            { text: 'Chiết khấu', link: '/admin/chiet-khau' },
            { text: 'Đại lý', link: '/admin/dai-ly' },
            { text: 'Hóa đơn', link: '/admin/hoa-don' },
          ],
        },
        {
          text: 'Khác',
          items: [
            { text: 'Hỏi đáp', link: '/admin/hoi-dap' },
            { text: 'Banner & Menu', link: '/admin/banner-menu' },
            { text: 'Hệ thống (Bank, Footer, Liên hệ)', link: '/admin/he-thong' },
          ],
        },
      ],

      '/giao-vien/': [
        {
          text: 'Hướng dẫn Giáo viên',
          items: [
            { text: 'Tổng quan vai trò Giáo viên', link: '/giao-vien/' },
            { text: 'Dashboard - Trang tổng quan', link: '/giao-vien/dashboard' },
            { text: 'Hồ sơ cá nhân', link: '/giao-vien/ho-so-ca-nhan' },
          ],
        },
        {
          text: 'Quản lý đào tạo',
          items: [
            { text: 'Quản lý khóa học', link: '/giao-vien/quan-ly-khoa-hoc' },
            { text: 'Soạn chương / chuyên đề / bài giảng', link: '/giao-vien/soan-bai-giang' },
            { text: 'Quản lý lớp học', link: '/giao-vien/quan-ly-lop-hoc' },
          ],
        },
        {
          text: 'Đề thi & Điểm thi',
          items: [
            { text: 'Tiêu chí đề thi', link: '/giao-vien/quan-ly-tieu-chi' },
            { text: 'Quản lý điểm thi', link: '/giao-vien/quan-ly-diem-thi' },
          ],
        },
        {
          text: 'Tương tác',
          items: [
            { text: 'Hỏi đáp với học viên', link: '/giao-vien/hoi-dap' },
          ],
        },
      ],

      '/hoc-vien/': [
        {
          text: 'Bắt đầu',
          items: [
            { text: 'Tổng quan vai trò Học viên', link: '/hoc-vien/' },
            { text: 'Đăng ký & Đăng nhập', link: '/hoc-vien/dang-ky-dang-nhap' },
            { text: 'Hồ sơ cá nhân', link: '/hoc-vien/ho-so-ca-nhan' },
          ],
        },
        {
          text: 'Khóa học',
          items: [
            { text: 'Tìm & Mua khóa học', link: '/hoc-vien/mua-khoa-hoc' },
            { text: 'Giỏ hàng & Thanh toán', link: '/hoc-vien/gio-hang-thanh-toan' },
            { text: 'Khóa học của tôi', link: '/hoc-vien/khoa-hoc-cua-toi' },
            { text: 'Học bài giảng', link: '/hoc-vien/hoc-bai-giang' },
          ],
        },
        {
          text: 'Luyện tập & Thi thử',
          items: [
            { text: 'Luyện tập theo chuyên đề / module', link: '/hoc-vien/luyen-tap' },
            { text: 'Kiểm tra đầu vào', link: '/hoc-vien/kiem-tra-dau-vao' },
            { text: 'Thi ĐGNL (HSA)', link: '/hoc-vien/thi-dgnl-hsa' },
            { text: 'Thi ĐGTD (TSA)', link: '/hoc-vien/thi-dgtd-tsa' },
            { text: 'Thi thử Tốt nghiệp THPT', link: '/hoc-vien/thi-tnthpt' },
            { text: 'Bộ đề thi', link: '/hoc-vien/bo-de-thi' },
            { text: 'Học liệu, giáo trình', link: '/hoc-vien/hoc-lieu' },
          ],
        },
        {
          text: 'Sau khi thi',
          items: [
            { text: 'Xem lại bài thi', link: '/hoc-vien/xem-lai-bai-thi' },
            { text: 'Lịch sử & Bảng xếp hạng', link: '/hoc-vien/lich-su-xep-hang' },
            { text: 'Hỏi đáp với giáo viên', link: '/hoc-vien/hoi-dap' },
          ],
        },
      ],
    },

    search: { provider: 'local' },

    footer: {
      message: 'Tài liệu hướng dẫn sử dụng hệ thống LamSơn Edutech',
      copyright: 'Copyright © LamSơn Edutech',
    },
  },
})
