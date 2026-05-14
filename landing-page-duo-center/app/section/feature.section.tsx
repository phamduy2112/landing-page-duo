"use client";

import React from "react";
import { FaBolt, FaBullseye, FaRocket, FaUserCheck } from "react-icons/fa";

const FEATURES = [
  {
    icon: FaRocket,
    title: "Tốc độ",
    desc: "Lộ trình cá nhân hóa theo năng lực, giúp học viên học đúng trọng tâm và tối ưu kết quả DET",
  },
  {
    icon: FaBolt,
    title: "Hiệu quả",
    desc: "Phương pháp học tối ưu giúp tiết kiệm thời gian và đạt mục tiêu nhanh.",
  },
  {
    icon: FaBullseye,
    title: "Chính xác",
    desc: "Kho bài luyện mô phỏng sát trải nghiệm làm bài DET thực tế",
  },
  {
    icon: FaUserCheck,
    title: "Đặc quyền",
    desc: "Feedback 1-1 từ chuyên gia cho từng kỹ năng"
    
    
    ,
  },
];

export default function FeaturesSection() {
  
  return (
    <section className="py-[96px] bg-[#f2f4f6]">
      <div className="max-w-7xl mx-auto px-margin-desktop px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

       {FEATURES.map((item, index) => {
  const Icon = item.icon;

  return (
    <div
      key={index}
      className="p-8 rounded-3xl bg-white flex flex-col items-center text-center hover:shadow-lg transition-all"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Icon className="text-primary text-[32px]" />
      </div>

      <h3 className="text-[24px] font-bold mb-3">
        {item.title}
      </h3>

      <p className="text-[17px] text-[#474747] opacity-90">
        {item.desc}
      </p>
    </div>
  );
})}

        </div>
      </div>
    </section>
  );
}