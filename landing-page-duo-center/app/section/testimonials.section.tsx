"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const TESTIMONIALS = [
  {
    score: 135,
    name: "Lê Khánh Linh",
    img:"./360_F_531422204_Cqh3LXcugGWhkvr8uvTicqNQAR2ivAO8-removebg-preview-150x150.png",
    role: "Đạt 100 DET",
    text:
      "Mình học khóa cấp tốc 1-1 và thấy cực kỳ hiệu quả! Lịch học linh hoạt, giáo viên giàu kinh nghiệm, lại còn được luyện tập với đề thi thử sát thực tế. Rất đáng để đầu tư!",
  },
  
  {
    score: 135,
    name: "Trần Gia Bảo",
    img:"./video-6-150x150.webp",
    role: "Đạt 110 DET",
    text:
      "Trước đây mình khá lo lắng về kỹ năng nói và viết, nhưng sau khóa học tại Duo Center, mình tự tin hơn rất nhiều. Đặc biệt, giáo viên luôn hỗ trợ chỉnh sửa chi tiết từng lỗi sai!",
  },
  
  {
    score: 135,
    name: "Minh Tú",
    img:"./asian-female-university-student-isolated-transparent-background_177659-194-150x150.avif",
    role: "Đạt 135 DET",
    text:
      "Em cần 120 để đi du học Mỹ nhưng chỉ còn 1 tháng. Nhờ lộ trình cấp tốc 1:1 tại Duo Center, em đã đạt 135 ngay lần đầu thi. Cảm ơn thầy cô rất nhiều!",
  },
  {
    score: 95,
    name: "Phạm Hoàng Nam ",
    img:"./images-150x150.jpeg",
    role: "Đạt 95 DET",
    text:
    "Điều mình ấn tượng nhất tại Duo Center là giáo trình rõ ràng và phương pháp học cực kỳ thực tế. Sau khóa học, mình không chỉ đạt 95 DET mà còn tự tin sử dụng tiếng Anh trong học tập",
  },
  
];

const Stars = () => (
  <div className="flex gap-1 text-tertiary mb-4 text-amber-300">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} size={18} />
    ))}
  </div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50" id="testimonials">

      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-8">
          <h2 className="2xl:text-[35px] text-3xl font-bold">
            Học viên đạt điểm cao (100+, 120+, 130+)
          </h2>
          <p className="text-gray-500 mt-2">
            Kết quả thực tế từ học viên Duo Center
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="h-[300px]"
        >

          {TESTIMONIALS.map((item, index) => (
            <SwiperSlide key={index} >

              <div className="
              
              bg-white p-6 rounded-xl shadow-sm h-[250px] border border-gray-200 hover:shadow-md transition flex flex-col justify-between">

                {/* TEXT */}
                <div>

                  <Stars />

                  <p className="text-gray-600 italic leading-relaxed">
                    “{item.text}”
                  </p>

                </div>

                {/* USER */}
                <div className="flex items-center gap-4 mt-6">

                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                      {item.score}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}