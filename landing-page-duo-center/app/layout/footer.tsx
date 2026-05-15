import { FaGlobe, FaFacebookMessenger } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white border-t border-white/5">

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="md:col-span-2">

            {/* LOGO */}
            <img
              src="/logo-footer.png"
              alt="Duo Center Logo"
              className="w-[130px] mb-4"
            />

            {/* DESCRIPTION */}
            <p className="text-sm opacity-90 max-w-sm mb-4">
              Đơn vị đào tạo chứng chỉ DET hàng đầu với phương pháp cá nhân hóa,
              giúp học viên đạt mục tiêu trong thời gian ngắn nhất.
            </p>

            {/* CONTACT */}
            <div className="text-sm opacity-90 space-y-2 leading-relaxed mb-6">
              <p>
                <span className="font-semibold">Địa chỉ:</span>{" "}
                222 Điện Biên Phủ, Võ Thị Sáu, Quận 3, Hồ Chí Minh
              </p>

              <p>
                <span className="font-semibold">F:</span> +84 91101 9996
              </p>

              <p>
                <span className="font-semibold">E:</span> study@duolingocenter.edu.vn
              </p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4">
              <a 
                target="_blank"
              href="https://duolingocenter.edu.vn/"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                <FaGlobe size={18} />
              </a>

              <a 
                target="_blank"
                // href="https://www.facebook.com/duolingocenter"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                <FaFacebookMessenger size={18} />
              </a>
            </div>

          </div>

          {/* COURSES */}
          <div>
            <h4 className="font-semibold mb-6 uppercase">
              Khóa học
            </h4>

            <ul className="space-y-3 text-sm opacity-90">
              <li><a 
                            // target="_blank"

              href="#courses" className="hover:text-white">Luyện thi Det</a></li>
              <li><a 
              target="_blank"
              href="https://duolingocenter.edu.vn/purchase-guide/" className="hover:text-white">Hướng Dẫn Đăng Kí Khoá Học</a></li>
              <li><a target="_blank" href="#tutors" className="hover:text-white">Giáo viên của Duolingo Center</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-6 uppercase">
              Công ty
            </h4>

            <ul className="space-y-3 text-sm opacity-90">
              <li><a target="_blank" href="https://duolingocenter.edu.vn/about-us-duocenter/" className="hover:text-white">Về chúng tôi</a></li>
              <li><a  href="#FAQ" className="hover:text-white">FAQ's</a></li>
              <li><a  href="#FAQ" className="hover:text-white">Chính sách bảo mật</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm opacity-90">
          © {new Date().getFullYear()} Duolingo Center. Designed with Executive Precision.
        </div>
      </div>

    </footer>
  );
};

export default Footer;