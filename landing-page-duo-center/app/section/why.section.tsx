"use client";

import React from "react";
import {
  FaCheckCircle,
  FaGlobe,
  FaBolt,
  FaLaptop,
} from "react-icons/fa";

const STATS = [
  {
    icon: FaCheckCircle,
    value: "4500+",
    label: "Trường chấp nhận",
  },
  {
    icon: FaGlobe,
    value: "Toàn cầu",
    label: "Độ nhận diện",
  },
  {
    icon: FaBolt,
    value: "1 Giờ",
    label: "Thời gian làm bài",
  },
  {
    icon: FaLaptop,
    value: "Online",
    label: "Hình thức thi",
  },
];

export default function WhyDETSection() {
  return (
    <section className="py-[96px] bg-primary text-white" id="why-det">
      <div className="max-w-7xl px-6 mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-[35px] text-h1 mb-4 font-bold">
              Tại sao chọn DET?
            </h2>

            <p className="text-[18px] opacity-90 mb-8">
              Lựa chọn thông minh cho hồ sơ du học hiện đại với lợi thế vượt trội
            </p>

            <div className="space-y-8">

              {[
                {
                  title: "Chi phí tiết kiệm (Chỉ $59)",
                  percent: "Tiết kiệm 80%",
                },
                {
                  title: "Thời gian có kết quả (48h)",
                  percent: "Nhanh hơn 7 ngày",
                },
                {
                  title: "Mức độ linh hoạt (Thi tại nhà)",
                  percent: "Tối ưu 100%",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[16px] font-bold">
                    <span>{item.title}</span>
                    <span>{item.percent}</span>
                  </div>

                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F9D616] w-full opacity-90" />
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white/10 p-6 rounded-2xl flex flex-col items-center text-center"
                >
                  <Icon className="text-[40px] mb-4" />

                  <span className="text-[24px] font-bold">
                    {item.value}
                  </span>

                  <span className="text-[14px] opacity-70">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}