"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaClock, FaUser } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const courses = [
  {
    title: "Level 1: DET Kickstart (56 - 65 DET Score Target)",
    level: "All Levels",
    price:"3.000.000 VND",
    buoi: "24 buổi",
    user:"6 học viên",
    desc: "Xây dựng nền tảng tiếng Anh vững chắc để chuẩn…",
  
    img: "./istockphoto-1165150697-612x612-1-590x430.jpg",
    link:"https://duolingocenter.edu.vn/courses/level-1-det-kickstart-56-65-score-target/"
  },
    {
    title: "Level 2: Level Up (66 - 75 DET Score Target)",
    level: "All Levels",
    price:"6.000.000 VND",
    buoi: "24 buổi",
    user:"6 học viên",
    desc: "Mục tiêu: Nâng cao sự tự tin, giúp học viên sử…",
  
    img: "./asian-girl-student-online-learning-class-study-online-video-call-zoom-teacher-happy-asian-girl-learn-english-language-online-with-computer-laptop_49553-2579-590x417.avif",
    link:"https://duolingocenter.edu.vn/courses/level-2-level-up66-75-score-target/"
  },
    {
    title: "Level 3: Power Up (76 - 85 DET Score Target)",
    level: "All Levels",
    price:"6.500.000 VND",
    buoi: "24 buổi",
    user:"6 học viên",
    desc: "Mục tiêu: Phát triển kỹ năng sử dụng tiếng Anh thành…",
  
    img: "./DET-Bai-Kiem-Tra-Tieng-Anh-Tien-Loi-Nhat-Hien-Nay-590x430.jpg",
    link:"https://duolingocenter.edu.vn/courses/level-3-power-up-76-85-score-target/"
  },
    {
    title: "Level 4: Peak Performer (86 - 95 DET Score Target)",
    level: "All Levels",
    price:"6.500.000 VND",
    buoi: "24 buổi",
    user:"6 học viên",
    desc: "Đẩy mạnh kỹ năng và tối ưu hóa chiến…",
  
    img: "./asian-female-student-study-online-class-study-online-wearing-headphones-watching-video-call-zooming-happy-asian-female-learning-language-online-with-computer-laptop_1077198-1436-590x417.avif",
    link:"https://duolingocenter.edu.vn/courses/level-4-peak-performer-86-95-score-target/"
  },
    {
    title: "Level 5: Professional (96 - 105 DET Score Target)",
    level: "All Levels",
    price:"7.500.000 VND",
    buoi: "24 buổi",
    user:"12 học viên",
    desc: "Thành thạo bài thi DET, đạt điểm 96-105.",
  
    img: "./istockphoto-1438185814-612x612-1-590x402.jpg",
    link:"https://duolingocenter.edu.vn/courses/level-5-professional-96-105-score-target/"
  },
    {
    title: "Level 6: Legendary (106-115+ DET Score Target)",
    level: "All Levels",
    price:"7.500.000 VND",
    buoi: "24 buổi",
    user:"6 học viên",
    desc: "Đạt điểm tối đa trong kỳ thi DET (106 - 115+). ",
  
    img: "./young-asian-female-student-sitting-table-writing-notebook-young-female-student-studying-library_44344-5762-590x379.avif",
    link:"https://duolingocenter.edu.vn/courses/level-6-legendary-106-115-score-target/"
  },
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="max-w-7xl m-auto py-12 container scroll-mt-30 px-6"
    >
      {/* TITLE */}
      <div className="flex justify-between items-end mb-8">
        
<div>
<span className="text-primary text-[14px] font-[600] uppercase tracking-wider">Kiến thức chuyên sâu</span>
<h2 className="text-[36px] mt-2 font-bold">Các khóa học</h2>
</div>
<a className="text-primary font-label-md flex items-center gap-2 hover:underline" 
target="_blank"

href="https://duolingocenter.edu.vn/luyen-thi-det/">Xem tất cả 

  <BsArrowRight/>
</a>
</div>

      {/* SWIPER */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation
        className="pb-10 h-[600px]"
      >
        {courses.map((item, index) => (
          <SwiperSlide key={index}>
              <div
    key={index}
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition h-[550px]"
  >
    {/* IMAGE */}
    <Link 
    href={item.link}
    target="_blank"
    className="h-60 bg-gray-100">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-70 object-cover"
      />
    </Link>

    {/* CONTENT */}
    <div className="p-5">

      {/* LEVEL */}
      <div className="text-sm text-primary font-semibold mb-1">
        {item.level}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-bold mb-2 leading-snug ]">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-600 mb-3">
        {item.desc}
      </p>

      {/* PRICE */}
      <div className="text-primary font-bold mb-4">
        {item.price}
      </div>

      {/* BUỔI + USER (CÙNG 1 HÀNG + ICON) */}
      <div className="flex items-center gap-4 text-sm text-gray-700">

        <div className="flex items-center gap-2">
          <FaClock className="text-primary" />
          <span>{item.buoi}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaUser className="text-primary" />
          <span>{item.user}</span>
        </div>

      </div>

      {/* BUTTON */}
      <Link
      href={item.link}
      target="_blank"
        className="mt-4 block w-full bg-primary text-white py-2 rounded-lg text-center hover:opacity-90"
>
        Xem chi tiết
      </Link>

    </div>
  </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}