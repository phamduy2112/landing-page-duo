"use client";

import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Đánh giá",
    desc: "Kiểm tra trình độ đầu vào với đề thi mô phỏng 100%.",
  },
  {
    step: "02",
    title: "Thiết lập",
    desc: "Xây dựng lộ trình cá nhân theo điểm mục tiêu và thời gian.",
  },
  {
    step: "03",
    title: "Rèn luyện",
    desc: "Học tập trung, luyện đề và nhận feedback chi tiết hàng ngày.",
  },
  {
    step: "04",
    title: "Bứt phá",
    desc: "Sẵn sàng bước vào kỳ thi thật và đạt chứng chỉ mơ ước.",
  },
];

export default function PathSection() {
  return (
    <section className="py-[96px] bg-surface-container-low" id="path">
      <div className="max-w-7xl mx-auto px-margin-desktop">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-h1 text-h1">
            Hành trình 4 bước
          </h2>
        </div>

        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2" />

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {STEPS.map((item, index) => (
              <div
                key={index}
                className="relative bg-surface-container-low z-10 text-center"
              >

                {/* STEP NUMBER */}
                <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-6 text-h3 font-bold shadow-lg">
                  {item.step}
                </div>

                {/* TITLE */}
                <h4 className="font-h3 text-h3 mb-2">
                  {item.title}
                </h4>

                {/* DESC */}
                <p className="font-body-sm text-on-surface-variant px-4">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}