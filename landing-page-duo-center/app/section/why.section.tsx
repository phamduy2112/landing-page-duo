"use client";

import React from "react";
import {
  FaCheckCircle,
  FaGlobe,
  FaBolt,
  FaLaptop,
  FaAward,
  FaSmile,
  FaChalkboardTeacher,
  FaUserGraduate,
} from "react-icons/fa";

const STATS = [
  {
    icon: FaUserGraduate,
    value: "2.2K",
    label: "Học viên đã đăng ký",
  },
  {
    icon: FaChalkboardTeacher,
    value: "3.8K",
    label: "Lớp học đã hoàn thành",
  },
  {
    icon: FaSmile,
    value: "99%",
    label: "Tỷ lệ hài lòng",
  },
  {
    icon: FaAward,
    value: "8+",
    label: "Năm kinh nghiệm",
  },
];

export default function WhyDETSection() {
  return (
    <section className="py-[96px] bg-primary text-white rounded-3xl" id="why-det">
      <div className="max-w-7xl px-6 mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="2xl:text-[35px] text-3xl mb-4 font-bold">
              Tại sao chọn DET?
            </h2>

            <p className=" opacity-90 mb-8">
              Lựa chọn thông minh cho hồ sơ du học hiện đại với lợi thế vượt trội
            </p>

        <div className="space-y-4">
{[
  {
    title: "Tiết kiệm chi phí",
    desc: "Lệ phí dễ tiếp cận, phù hợp nhiều nhu cầu hồ sơ",
  },
  {
    title: "Thi linh hoạt 24/7",
    desc: "Thi online tại nhà, không cần đặt lịch phức tạp",
  },
  {
    title: "Có kết quả nhanh",
    desc: "Nhận kết quả trong khoảng 48 giờ",
  },
  {
    title: "Bài thi tinh gọn",
    desc: "Thời gian thi chỉ khoảng 1 giờ",
  },
  {
    title: "Tạo dấu ấn cá nhân",
    desc: "Video Interview giúp thể hiện cá tính với ban tuyển sinh",
  },
  {
    title: "Được công nhận quốc tế",
    desc: "Được nhiều trường tại Anh, Úc, Canada và các quốc gia khác chấp nhận",
  },
].map((item, i) => (
  <div key={i} className="flex items-start gap-4">
    <FaCheckCircle className="text-white  text-[20px] mt-[4px] shrink-0" />

    <div>
      <p className="font-semibold text-white text-[17px]">
        {item.title}
      </p>
      <p className="opacity-80 text-[15px]">
        {item.desc}
      </p>
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