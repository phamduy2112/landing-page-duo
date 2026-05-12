import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div className="md:col-span-2">

            <div className="text-2xl font-bold mb-6">
              Duolingo Center
            </div>

            <p className="text-sm opacity-90 max-w-sm mb-8">
              Đơn vị đào tạo chứng chỉ DET hàng đầu với phương pháp cá nhân hóa,
              giúp học viên đạt mục tiêu trong thời gian ngắn nhất.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
              >
                <span className="material-symbols-outlined">public</span>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
              >
                <span className="material-symbols-outlined">chat</span>
              </a>

            </div>

          </div>

          {/* COURSES */}
          <div>

            <h4 className="font-semibold mb-6 uppercase">
              Khóa học
            </h4>

            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Luyện thi Cấp tốc
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lộ trình 1 kèm 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hệ thống Mock-test
                </a>
              </li>
            </ul>

          </div>

          {/* COMPANY */}
          <div>

            <h4 className="font-semibold mb-6 uppercase">
              Công ty
            </h4>

            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 text-center text-sm opacity-90">
          © 2024 Duolingo Center. Designed with Executive Precision.
        </div>

      </div>
    </footer>
  );
}