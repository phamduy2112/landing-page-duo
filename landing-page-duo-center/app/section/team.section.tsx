"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";

import { Navigation, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import "swiper/css/navigation";
const teachers = [
  {
    name: "Ms. Nhi Trương",
    region: "Academic Director",
    desc: [
      "Thạc sĩ giáo dục Đại học Glasgow, UK",
      "⁠English Proficiency Level: CEFR C1",
    ],
    img: "./Profile-Picture-15-x-20-cm-1.png",
  },
  {
    name: "Ms. Tú Quỳnh",
    region: "Head Teacher",
    desc: [
      "Thạc sĩ giáo dục- Arizona State University USA",
      "Thủ khoa ngành ngôn ngữ Anh 2021- Đại Học Sư Phạm HCM",
      "⁠CEFR: C1(IELTS 8.0) ",
    ],
    img: "./Profile-Picture-15-x-20-cm-2.png",
  },
  {
    name: "Ms. Bảo Châu",
    region: "Teacher",
    desc: [
      "⁠⁠Cử nhân Sư phạm Anh - ĐH Sư Phạm",
      "CEFR: C1 IELTS: 7.5 (8.5 Reading)",
    ],
    img: "./Profile-Picture-15-x-20-cm-4.png",
  },
  {
    name: "Nguyễn Khánh Linh",
    region: "Miền Bắc",
    score: "8.5",
    desc: [
      "⁠Cử nhân Đại học Ngoại Thương HCM",
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
  // thêm data...
];

export default function TeamSection() {
  return (
    <section className="max-w-7xl m-auto py-10 container scroll-mt-30" id="tutors">
      <h2 className="text-3xl font-bold text-center mb-2">
        500+ giáo viên truyền cảm hứng
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Tài năng, cá tính và tâm huyết trong từng bài giảng
      </p>

<Swiper
  modules={[Pagination, Navigation]}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  pagination={{ clickable: true }} // ✅ dots mặc định
  navigation
  className=" h-[470px]"
>
        {teachers.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-[430px]">
              
              {/* Card top (gradient) */}
              <div className="bg-gradient-to-b from-primary to-secondary p-5 text-white text-center relative">
                {/* <div className="text-2xl font-bold">{t.score}</div> */}
                {/* <div className="text-sm">IELTS OVERALL</div> */}

                <div className="flex justify-center mt-4">
                  <img
                    src={t.img}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white"
                  />
                </div>

                <div className="mt-3 bg-white text-primary px-3 py-1 rounded-full inline-block text-sm font-semibold">
                  {t.name}
                </div>
                <div className="text-xs mt-1">{t.region || "Giáo viên"}</div>
              </div>

              {/* Card bottom */}
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