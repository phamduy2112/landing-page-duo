"use client";

import Link from "next/link";
import React from "react";

const VIDEOS = [
  {
    title: "Lớp học thực tế",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    title: "Lớp học Online",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    title: "Hoạt động ngoại khóa",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
  },
  {
    title: "Hoạt động ngoại khóa",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
  },
];

export default function IntroVideoSection() {
  return (
    <section className="py-16 bg-primary text-on-primary-fixed rounded-4xl">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="2xl:text-[35px] text-3xl font-bold mb-8 text-center text-white">
          Giới Thiệu Trung Tâm Duo Center
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* MAIN VIDEO */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden aspect-video">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="w-full h-full object-cover"
              alt="Intro video"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-xl">
                ▶
              </div>
            </div>

            {/* caption */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm italic">Giới thiệu trung tâm</p>
              <p className="text-xs mt-1">Duo Center</p>
            </div>

          </div>

          {/* VIDEO LIST */}
          <div className="space-y-4">

            {VIDEOS.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={item.img}
                  className="w-16 h-16 rounded object-cover"
                  alt={item.title}
                />

                <div>
                  <p className="text-sm font-medium line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    Duo Center
                  </p>
                </div>

              </div>
            ))}

            {/* BUTTON */}
            <div className="mt-2">
              <Link
              
              href={"https://www.tiktok.com/@duolingo_center?fbclid=IwY2xjawRwxShleHRuA2FlbQIxMABicmlkETFWRUphNjF6cGVFcUxXaHE1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmEyQgJYK8LW9-YGexjd33PEBVvfcBvPgmEd59aAKfw11Xkesi_Es37mh6O8_aem_YWdncwAnPcOwoHVw-8fcM9BZRKy8&brid=YWdncwFlJLXeqBtibylR8Uo9XnRx"}
              className="bg-secondary block w-full text-center text-on-secondary px-6 py-4 rounded-[15px] font-label-md hover:bg-secondary-container transition-all">
                Xem thêm
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}