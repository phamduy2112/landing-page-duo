"use client";

import React from "react";

const SERVICES = [
  {
    title: "Luyện thi Chuyên sâu",
    desc: "Chiến thuật làm bài bám sát format mới nhất của DET",
    img: "./dab67b76-3947-42cf-85ef-c3c2faed5e9e.png",
  },
  {
    title: "Lộ trình 1:1",
    desc: "Feedback ngay lập tức từ đội ngũ chuyên gia tại Duo Center",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhd7bfbCWltChufOE4EzifaGPSOyjXoN9OwMcsg0KxycT7_jOEBQhPhGLntzJKaCXauUepFu7Osf6uHjwghapH8gLkI9iWtcN_KvRC3qu2v2gSAj_OB6WLT20Hbjos7ylJdczwBu61aRHQQRNo6aZKNBAEYy298qa03tEPeYURSizUX5Tel0oMTl9XF9NpPm_dPE2E2_HyeKk4fFOEQYDsB5vl2JSXKpi9Ydbx9vqDNlRBLUvYkc5WZADh_3Vpg-JiD63YfjcAJ_o",
  },
  {
    title: "Chấm bài Chi tiết",
    desc: "Feedback ngay lập tức từ đội ngũ chuyên gia hàng đầu",
    img: "./course-83.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-[96px] bg-surface" id="services">
      <div className="max-w-7xl px-6 mx-auto px-margin-desktop">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="2xl:text-[35px] text-3xl font-bold">
            Hệ sinh thái đào tạo toàn diện
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {SERVICES.map((item, index) => (
            <div
              key={index}
              className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">

                <h3 className="font-h3 text-h3 mb-2">
                  {item.title}
                </h3>

                <p className="font-body-sm opacity-80">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}