"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full mx-auto flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto">

                  <div className="absolute inset-0 -z-10">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlaaSIoG2OocLbOkoRsYgGl6xeHWy7j2wWxicuoSKmWDw9WMvikc_JESt0_TqcArmv2X0U6sv2b4Tqaajh_ABXvygECvv0UIPAWP7NbrTmzkyBAErBYUdl2m7F7zCG-smAm4lnmw_-AIX-sThwDY79Fc1ouapzl4-bh9ZTc5j0Gh4v8Bhwg00UVN7NDaf_5MX-bVrB9L6dMmLIwlImald0mZdMLUwWk5ZvudjCs1dSDNqhtNnlR3wfM7cq1MxXJl57i14Sa8pWvI8"
          alt="Modern Learning Space"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003441]/90 to-[#003441]/40" />
      </div>

      {/* Content */}
      <div className="w-full px-6 pt-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">

        {/* LEFT */}
        <div className="max-w-2xl text-white text-center lg:text-left">
          <h1 className="text-[48px] font-bold mb-4 leading-tight">
            Chinh phục DET.
            <br />
            Mở cửa tương lai.
          </h1>

          <p className=" text-[18px] mb-8 opacity-90 w-full lg:w-[90%]">
            Luyện thi Duolingo English Test chuyên sâu với lộ trình cá nhân hóa,
            cam kết đầu ra nhanh nhất cho du học và xét tuyển.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-primary text-white cursor-pointer px-8 py-3 rounded-xl shadow-xl hover:brightness-105 transition">
              Bắt đầu ngay
            </button>

            <button className="border-2 border-white/30 cursor-pointer px-8 py-3 rounded-xl hover:bg-white/10 transition">
              Xem lộ trình
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src="./duo-banner-1.png"
            alt="Tuyển sinh"
            className="w-[320px] sm:w-[420px] lg:w-[520px]"
          />
        </div>
      </div>
        </div>
      {/* Background */}

    </section>
  );
}