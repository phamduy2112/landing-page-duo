"use client";

import Image from "next/image";
import Link from "next/link";

const slide = {
  badge: "Mở lối tương lai",
  title: "Cùng Duo Center chinh phục DET",
  desc: (
    <>
      <strong>Duo Center</strong> đồng hành cùng học viên chinh phục{" "}
      <strong>Duolingo English Test</strong> bằng lộ trình tinh gọn,
      chiến thuật rõ ràng và mục tiêu điểm số cụ thể cho du học, xét tuyển
      và hồ sơ quốc tế.
    </>
  ),  benefits: [
    "Lộ trình cá nhân hóa theo mục tiêu điểm",
    "Chiến thuật làm bài DET chuẩn quốc tế",
    "Tăng band nhanh với luyện đề thực chiến",
  ],
  image: "/duo-banner-1.png",
  shape: "circle",
};

const getShapeClass = (shape: string) => {
  switch (shape) {
    case "circle":
      return "w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[500px] lg:h-[500px] rounded-full";
    default:
      return "w-full h-[300px] lg:h-[500px] rounded-3xl";
  }
};

const getBgClass = (shape: string) =>
  shape === "circle" ? "rounded-full" : "rounded-3xl";

export default function HeroSection() {
  return (
    <section
      id="infor"
      className="bg-gradient-to-b from-white to-[#faf7ff] py-14 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT */}
        <div className="mt-[40px] sm:mt-[0px] text-center lg:text-left">

          <span className="text-primary font-bold text-sm sm:text-base">
            {slide.badge}
          </span>

          <h1 className="
            font-bold leading-tight mt-2 mb-4
            text-3xl
            sm:text-4xl
            lg:text-5xl
          ">
            {slide.title}
          </h1>

          <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
            {slide.desc}
          </p>

          <div className="space-y-2 text-gray-700 text-sm sm:text-base mb-8">
            {slide.benefits.map((item, i) => (
              <p key={i}>✔ {item}</p>
            ))}
          </div>

          <Link
            href="#form-section"
            className="inline-block px-7 py-3 sm:px-8 sm:py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Đăng Ký Tư Vấn Ngay
          </Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center mt-6 lg:mt-20">

          {/* Background */}
          <div
            className={`absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[460px] lg:h-[460px] bg-primary/10 ${getBgClass(
              slide.shape
            )}`}
          />

          {/* Glow */}
          <div
            className={`absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] bg-primary/20 blur-3xl ${getBgClass(
              slide.shape
            )}`}
          />

          {/* Image */}
          <div className={`relative ${getShapeClass(slide.shape)}`}>
            <Image
              src={slide.image}
              alt="banner"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}