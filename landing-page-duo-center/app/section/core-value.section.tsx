"use client";

import React from "react";
import { FaBullseye, FaUserCheck } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

const VALUES = [
  {
    icon: FaBolt,
    title: "Speed (Nhanh)",
    desc: "Phương pháp học trọng tâm, giúp tăng điểm DET nhanh chóng",
  },
  {
    icon: FaBullseye,
    title: "Precision (Đúng format)",
    desc: "Lộ trình học bám sát đặc thù bài thi DET, giúp học viên hiểu rõ cách làm bài và cách tối ưu điểm số",
  },
  {
    icon: FaUserCheck,
    title: "Personalization (Cá nhân hóa)",
    desc: "Không học chung một lộ trình đại trà, học viên được góp ý 1-1 để sửa lỗi đúng trọng tâm",
  },
];

export default function CoreValueSection() {
  return (
    <section className="py-[96px] bg-primary text-white" id="core-value">
      <div className="max-w-7xl px-6 mx-auto px-margin-desktop">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <span className="text-[14px] font-bold uppercase tracking-wider">
              Lợi thế cạnh tranh
            </span>

            <h2 className="text-[35px] font-bold mb-4">
              Giá trị cốt lõi tối ưu hóa kết quả
            </h2>

            <p className="mb-8">
              Chúng tôi đồng hành cùng học viên bằng lộ trình tinh gọn, phương pháp hiện đại và chiến thuật làm bài phù hợp với mục tiêu điểm số

            </p>

            <div className="space-y-8">

             {VALUES.map((item, index) => {
  const Icon = item.icon;

  return (
    <div key={index} className="flex gap-6">
      <div className="w-14 h-14 shrink-0 bg-white/10 rounded-full flex items-center justify-center">
        <Icon size={24} />
      </div>

      <div>
        <h4 className="font-h3 text-[18px] font-bold mb-1">
          {item.title}
        </h4>

        <p className="font-body-md text-[15px] text-white">
          {item.desc}
        </p>
      </div>
    </div>
  );
})}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <img
              src="
              https://duolingocenter.edu.vn/wp-content/uploads/2026/01/IMG_4281-768x928.png
              "
              alt="Student studying for DET"
              className="rounded-2xl shadow-2xl"
            />

            {/* FLOAT CARD */}
            <div className="absolute -bottom-8 -left-8 bg-secondary text-on-secondary-fixed p-8 rounded-xl shadow-xl hidden sm:block">

              <p className="text-[35px] font-bold">125+</p>

              <p className="text-[14px]  tracking-wider font-bold">
                Điểm trung bình học viên
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}