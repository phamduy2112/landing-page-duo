"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const teachers = [
  {
    name: "Ms. Nhi Trương",
    region: "Academic Director",
    desc: [
      "Thạc sĩ giáo dục Đại học Glasgow, UK",
      "English Proficiency Level: CEFR C1",
    ],
    img: "./Profile-Picture-15-x-20-cm-1.png",
  },
  {
    name: "Ms. Tú Quỳnh",
    region: "Head Teacher",
    desc: [
      "Thạc sĩ giáo dục - Arizona State University USA",
      "Thủ khoa ngành ngôn ngữ Anh 2021 - ĐH Sư Phạm HCM",
      "CEFR: C1 (IELTS 8.0)",
    ],
    img: "./Profile-Picture-15-x-20-cm-2.png",
  },
  {
    name: "Ms. Bảo Châu",
    region: "Teacher",
    desc: [
      "Cử nhân Sư phạm Anh - ĐH Sư Phạm",
      "CEFR: C1 IELTS: 7.5 (8.5 Reading)",
    ],
    img: "./Profile-Picture-15-x-20-cm-4.png",
  },
  {
    name: "Nguyễn Khánh Linh",
    region: "Teacher",
    desc: [
      "Cử nhân Đại học Ngoại Thương HCM",
      "IELTS: 7.5 (8.5 Reading)",
    ],
    img: "./Screen-Shot-2026-01-20-at-10.38.48.png",
  },
  {
    name: "Mr. Hoàng Quân",
    region: "Teacher",
    desc: [
      "Cử nhân Biên Phiên Dịch - Đại học RMIT",
      "IELTS 8.0",
    ],
    img: "./Screen-Shot-2026-01-20-at-15.30.09.png",
  },
];

export default function TeamSection() {

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section
      className="max-w-7xl px-6 m-auto py-10 container scroll-mt-30"
      id="tutors"
    >

      {/* HEADER */}
      <div className="flex justify-between items-end mb-8">

        <div>
          <h2 className="text-3xl font-bold">
            Giảng Viên Hàng Đầu
          </h2>
          <p className="text-gray-500 mt-2">
            Tài năng, cá tính và tâm huyết trong từng bài giảng
          </p>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex gap-3">

         <button
  className={`teacher-prev cursor-pointer w-10 h-10 rounded-full border border-primary flex items-center justify-center transition
  ${isBeginning
    ? "opacity-30 pointer-events-none text-primary"
    : "hover:bg-primary text-primary hover:text-white"}`}
>
  <GrFormPrevious />
</button>

          <button
            className={`teacher-next cursor-pointer w-10 h-10 rounded-full border border-primary flex items-center justify-center transition
            ${isEnd
              ? "opacity-30 pointer-events-none"
    : "hover:bg-primary text-primary hover:text-white"}`}
          >
            <MdOutlineNavigateNext />

          </button>

        </div>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".teacher-prev",
          nextEl: ".teacher-next",
        }}
        onBeforeInit={(swiper) => {
          // Fix NextJS mount timing
          // @ts-ignore
          swiper.params.navigation.prevEl = ".teacher-prev";
          // @ts-ignore
          swiper.params.navigation.nextEl = ".teacher-next";
        }}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="h-[470px]"
      >
        {teachers.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-[430px] hover:shadow-xl transition">

              {/* TOP */}
              <div className="bg-gradient-to-b from-primary to-secondary p-5 text-white text-center">
                <div className="flex justify-center mt-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white"
                  />
                </div>

                <div className="mt-3 bg-white text-primary px-3 py-1 rounded-full inline-block text-sm font-semibold">
                  {t.name}
                </div>

                <div className="text-xs mt-1">
                  {t.region || "Giáo viên"}
                </div>
              </div>

              {/* BOTTOM */}
              <div className="p-4 text-sm text-gray-700">
                <h3 className="font-semibold text-primary mb-2">
                  {t.name} - {t.region || "Giáo viên"}
                </h3>

                <ul className="list-disc ml-5 space-y-1">
                  {t.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}