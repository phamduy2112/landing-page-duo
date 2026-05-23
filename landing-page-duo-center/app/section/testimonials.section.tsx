"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const TESTIMONIALS = [
  { img: "/review-01.jpg" },
  { img: "/review-02.jpg" },
  { img: "/review-03.jpg" },
  { img: "/review-05.png" },
  { img: "/review-06.png" },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === 0
        ? TESTIMONIALS.length - 1
        : activeIndex - 1
    );
  };

  const handleNext = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === TESTIMONIALS.length - 1
        ? 0
        : activeIndex + 1
    );
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* SLIDER */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="h-[300px]"
        >
          {TESTIMONIALS.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[260px] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MODAL */}
        {/* MODAL */}
{activeIndex !== null && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    onClick={() => setActiveIndex(null)}
  >

    {/* CLOSE */}
    <button
      onClick={() => setActiveIndex(null)}
      className="absolute top-5 right-5 text-white text-5xl z-50 cursor-pointer"
    >
      ×
    </button>

    {/* IMAGE WRAPPER */}
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()}
    >

      {/* PREV */}
      <button
        onClick={handlePrev}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          bg-black/40
          hover:bg-black/60
          text-white
          w-12
          h-12
          rounded-full
          flex
          items-center
          justify-center
          text-3xl
          z-50
          transition
          cursor-pointer
        "
      >
        <GrFormPrevious />
      </button>

      {/* IMAGE */}
      <img
        src={TESTIMONIALS[activeIndex].img}
        alt=""
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
      />

      {/* NEXT */}
      <button
        onClick={handleNext}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          bg-black/40
          hover:bg-black/60
          text-white
          w-12
          h-12
          rounded-full
          flex
          items-center
          justify-center
          text-3xl
          z-50
          transition
          cursor-pointer
        "
      >
        <MdNavigateNext />
      </button>

    </div>
  </div>
)}
      </div>
    </section>
  );
}