"use client";

import React from "react";

const SERVICES = [
  {
    img: "./DUO CENTER THUMBNAIL WEBSITE-04.jpg",
  },
  {
    img: "./DUO CENTER THUMBNAIL WEBSITE-05.jpg",
  },
  {
    img: "./DUO CENTER THUMBNAIL WEBSITE-06.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-[96px] bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-6 px-margin-desktop">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="2xl:text-[35px] text-3xl font-bold">
            Giải pháp luyện thi DET chuẩn quốc tế
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {SERVICES.map((item, index) => (
            <div
              key={index}
              className="group h-[450px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}