"use client";
const getEffectClass = (shape: string) => {
  switch (shape) {
    case "circle":
      return "rounded-full";
    case "square":
      return "rounded-none";
    default:
      return "rounded-[3rem]";
  }
};

const slides = [
{
  badge: "Mở lối tương lai",
  title: "Cùng Duo Center chinh phục DET",
  desc: "Duolingo Center đồng hành cùng học viên chinh phục Duolingo English Test bằng lộ trình tinh gọn, chiến thuật rõ ràng và mục tiêu điểm số cụ thể cho du học, xét tuyển và hồ sơ quốc tế.",
  benefits: [
    "Lộ trình cá nhân hóa theo mục tiêu điểm",
    "Chiến thuật làm bài DET chuẩn quốc tế",
    "Tăng band nhanh với luyện đề thực chiến",
  ],
  image: "/duo-banner-1.png",
  shape: "circle",
}
  // {
  //   badge: "LỘ TRÌNH HỌC IELTS CÙNG SMARTKIDS",
  //   title: "CÁ NHÂN HÓA LỘ TRÌNH HỌC IELTS CÙNG SMARTKIDS",
  //   desc: "Giúp trẻ tự tin giao tiếp và thể hiện bản thân",
  //   benefits: [
  //     "Lộ trình được cá nhân hóa - Phù hợp với mỗi học viên",
  //     "Giáo viên tận tâm - Hỗ trợ từng bước tiến bộ",
  //     "Học đúng trọng tâm - Bứt phá điểm số",
  //     "Theo dõi & đánh giá tiến độ liên tục ",
  //   ],
  //   image: "/tuyensinh.png",
  //       shape: "square", // 👈 vuông

  // },
  // {
  //   badge: "GIỚI THIỆU SMARTKIDS",
  //   title: "SMARTKIDS HỌC THÔNG MINH  - VỮNG CHẮC TƯƠNG LAI",
  //   desc: "Giúp trẻ tự tin giao tiếp và thể hiện bản thân",
  //   benefits: [
  //     "Trung tâm giáo dục chất lượng cao",
  //     "Đa môn học: Toán – Lý – Hóa – Văn – Anh – Năng khiếu",
  //     "Lớp nhóm nhỏ (~6 học sinh) - theo sát từng học viên",
  //     "Hệ thống camera minh bạch – phụ huynh an tâm theo dõi",
  //   ],
  //   image: "/tuyensinh.png",
  //       shape: "square", // 👈 vuông

  // },
];

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const getShapeClass = (shape: string) => {
  switch (shape) {
    case "circle":
      return "w-[500px] h-[500px] rounded-full";
    case "square":
      return "w-full h-[500px] rounded-3xl";
    default:
      return "w-full h-[500px] rounded-3xl";
  }
};

const getBgClass = (shape: string) => {
  return shape === "circle" ? "rounded-full" : "rounded-3xl";
};
export default function HeroSection() {
  return (
    <section className=" bg-gradient-to-b from-white to-[#faf7ff]">
      <Swiper
        modules={[ Pagination, Autoplay]}
        autoplay={{ delay: 100000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="max-w-7xl h-[800px] banner-smartkids"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center h-full">

              {/* LEFT */}
              <div>
                <span className="text-primary font-bold">
                  {slide.badge}
                </span>

                <h1 className="text-5xl font-bold leading-tight mb-3">
                  {slide.title}
                </h1>

                <p className="text-lg text-gray-600 mb-4">
                  {slide.desc}
                </p>

                <div className="space-y-2 text-gray-700 text-sm mb-8">
                  {slide.benefits.map((item, i) => (
                    <p key={i}>✔ {item}</p>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-105 transition">
                    Đăng Ký Tư Vấn Ngay
                  </button>

                
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative flex justify-center items-center mt-20">

  {/* Background */}
  <div
    className={`
      absolute w-[460px] h-[460px] bg-primary/10
      ${getBgClass(slide.shape)}
    `}
  />

  {/* Glow */}
  <div
    className={`
      absolute w-[500px] h-[500px]
      bg-primary/20 blur-3xl
      ${getBgClass(slide.shape)}
    `}
  />

  {/* Image */}
  <div
    className={`
      relative 
      ${getShapeClass(slide.shape)}
    `}
  >
    <Image
      src={slide.image}
      alt="banner"
      fill
      className="object-contain"
    />
  </div>

</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}