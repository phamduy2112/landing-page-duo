"use client";

import Link from "next/link";
import React, { useState } from "react";

const VIDEOS = [
  {
    title: "Giới thiệu Duo Center",
    src: "/video5.mp4",
  },
  {
    title: "Lớp học thực tế",
    src: "/video2.mp4",
        poster: "/video2.png",

  },
  {
    title: "Điểm Det là gì",
    src: "/video3.mp4",
  },
  {
    title: "Thi online tại nhà",
    src: "/video4.mp4",
  },
  {
    title: "So sánh Det",
    src: "/video1.mp4",
  },
];

export default function IntroVideoSection() {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(VIDEOS[0].src);

  const openVideo = (src: string) => {
    setCurrentVideo(src);
    setOpen(true);
  };

  return (
    <section className="py-16 bg-primary text-on-primary-fixed rounded-4xl">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="2xl:text-[35px] text-3xl font-bold mb-8 text-center text-white">
          Giới Thiệu Trung Tâm Duo Center
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* MAIN VIDEO */}
        <div
  onClick={() => openVideo(VIDEOS[0].src)}
  className="lg:col-span-2 relative rounded-xl overflow-hidden aspect-video cursor-pointer group"
>
  <video
    src={VIDEOS[0].src}
    muted
    preload="metadata"
    className="w-full h-full object-cover"
    onLoadedMetadata={(e) => {
      e.currentTarget.currentTime = 1;
    }}
  />

  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-xl text-black group-hover:scale-110 transition">
      ▶
    </div>
  </div>

  <div className="absolute bottom-4 left-4 text-white">
    <p className="text-sm italic">{VIDEOS[0].title}</p>
    <p className="text-xs mt-1">Duo Center</p>
  </div>
</div>

          {/* VIDEO LIST */}
          <div className="space-y-4">
           {VIDEOS.slice(1).map((item, index) => (
  <div
    key={index}
    onClick={() => openVideo(item.src)}
    className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition"
  >
   <video
  src={item.src}
    {...(item.poster ? { poster: item.poster } : {})}

  muted
  preload="metadata"
  playsInline
  className="w-16 h-16 rounded object-cover"
  onLoadedData={(e) => {
    e.currentTarget.currentTime = 4;
  }}
  onMouseEnter={(e) => {
    e.currentTarget.play().catch(() => {});
  }}
  onMouseLeave={(e) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 4;
  }}
/>

    <div>
      <p className="text-sm font-bold line-clamp-1">
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
                href="https://www.tiktok.com/@duolingo_center?fbclid=IwY2xjawRwxShleHRuA2FlbQIxMABicmlkETFWRUphNjF6cGVFcUxXaHE1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmEyQgJYK8LW9-YGexjd33PEBVvfcBvPgmEd59aAKfw11Xkesi_Es37mh6O8_aem_YWdncwAnPcOwoHVw-8fcM9BZRKy8&brid=YWdncwFlJLXeqBtibylR8Uo9XnRx"
                target="_blank"
                className="bg-secondary block w-full text-center text-on-secondary font-bold px-6 py-4 rounded-[15px] font-label-md hover:bg-secondary-container transition-all"
              >
                Xem thêm
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <video
              key={currentVideo}
              src={currentVideo}
              controls
              autoPlay
              className="w-full h-full rounded-xl bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}