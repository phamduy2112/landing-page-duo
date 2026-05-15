"use client";

import React, { useEffect, useState } from "react";

export default function FormSection() {
    const TARGET_TIME = new Date().getTime() + 60 * 60 * 1000; // 1 giờ

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = TARGET_TIME - now;

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main 
    id="form-section"
    className="max-w-7xl my-12 mx-auto w-full bg-white rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-lg">

      {/* ================= LEFT: SOCIAL PROOF ================= */}
      <section className="w-full md:w-1/2 relative bg-brandLightBlue">

        <img
          src="
          Screen-Shot-2026-03-26-at-14.31.23.png
          "
          alt="Successful students studying together"
          className="w-full h-full object-cover min-h-[300px] md:min-h-[700px]"
        />

    

      </section>

      {/* ================= RIGHT: FORM ================= */}
      <section className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center bg-white">

        {/* HEADER */}
        <div className="text-center mb-8">

          <h1 className="2xl:text-[35px] text-3xl md:text-4xl font-bold text-red-600 mb-2">
            Ưu đãi hôm nay
          </h1>

          <div className="flex items-center justify-center gap-2 text-orange-500 font-bold uppercase tracking-wider text-sm">
            <span>🔥</span>
            <span>5 suất học đang được giữ chỗ</span>
          </div>

        </div>

        {/* COUNTDOWN */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6 md:mb-8">

            {[
              { label: "Ngày", value: timeLeft.days },
              { label: "Giờ", value: timeLeft.hours },
              { label: "Phút", value: timeLeft.minutes },
              { label: "Giây", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">

                <div className="bg-red-600 text-white text-lg sm:text-2xl font-bold w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg shadow-md transition-all duration-300 active:scale-110">
                  {item.value}
                </div>

                <span className="text-[10px] text-gray-500 mt-1 uppercase">
                  {item.label}
                </span>

              </div>
            ))}

          </div>


        {/* FORM */}
      <form className="w-full space-y-4 max-w-lg mx-auto">

            {/* NAME + PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Họ và tên
                </label>

                <input
                  type="text"
                  placeholder="Họ và tên"
  className="w-full mt-1 h-11 sm:h-12 rounded-lg border border-gray-300 px-4 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Số điện thoại
                </label>

                <input
                  type="tel"
                  placeholder="Số điện thoại"
  className="w-full mt-1 h-11 sm:h-12 rounded-lg border border-gray-300 px-4 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                  required
                />
              </div>

            </div>

            {/* GOAL */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Mục tiêu DET
              </label>

              <select
                 className="w-full mt-1 h-11 sm:h-12 rounded-lg border border-gray-300 px-4 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
>
                <option>Dưới 100</option>
                <option>100 - 115</option>
                <option>120 - 130</option>
                <option>Trên 130</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Lời nhắn (Nếu có)
              </label>

              <textarea
                placeholder="Em muốn tìm hiểu lộ trình cấp tốc..."
                className="w-full mt-1 h-28 sm:h-32 rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full 
              animate-zoom
              bg-primary text-white 
              cursor-pointer
              font-bold py-3 sm:py-4 rounded-full shadow-lg uppercase tracking-wide hover:scale-[1.02] active:scale-[0.98] transition"
            >
              Nhận Tư Vấn Ngay
            </button>

          </form>

      </section>

    </main>
  );
}