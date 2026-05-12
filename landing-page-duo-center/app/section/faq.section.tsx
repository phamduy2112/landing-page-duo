"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [ { q: "Trường nào chấp nhận chứng chỉ Duolingo?", a: "Hiện có hơn 4500 trường đại học tại Mỹ, Úc, Canada và Việt Nam chấp nhận DET thay thế cho IELTS/TOEFL.", }, { q: "Khóa học kéo dài bao lâu?", a: "Tùy vào trình độ đầu vào và mục tiêu, thông thường từ 4 đến 8 tuần để đạt được kết quả bứt phá.", }, { q: "Duolingo English Test (DET) là gì?", a: "Duolingo English Test (DET) là một bài kiểm tra tiếng Anh trực tuyến được phát triển bởi Duolingo.", }, { q: "Kết quả của bài thi DET có giá trị trong bao lâu?", a: "Kết quả DET có giá trị trong 2 năm kể từ ngày thi.", }, { q: "Mất bao lâu để nhận được kết quả bài thi DET?", a: "Bạn sẽ nhận được kết quả trong vòng 48 giờ qua email.", }, ];

export default function FAQSection() {

  // ✅ mở mặc định câu đầu
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f2f4f6] w-full rounded-[40px] py-24">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

        {/* LEFT */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Thắc Mắc Thường Gặp
          </h2>

          <p className="text-gray-500">
            Giải đáp những câu hỏi phổ biến nhất trước khi học.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 space-y-4">

          {FAQS.map((item, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >

                {/* HEADER */}
                <div
                  onClick={() =>
    setOpenIndex(openIndex === index ? null : index)
  }
                  className={`flex justify-between items-center p-5 cursor-pointer transition
                  ${
                    isOpen
                      ? "bg-primary text-white"
                      : "bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.q}

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                     layout
                      className="px-5 py-5 text-sm text-gray-600 overflow-hidden"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}