"use client";

import { useEffect, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { SiZalo } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";

export default function FloatingCTA() {
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setShowTop(scrollTop > 300);

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / height) * 100;
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* ===== SVG CALC ===== */
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* ZALO */}
      <a
        href="https://zalo.me/0911019996"
        target="_blank"
        className="cta-btn bg-sky-500 hover:bg-sky-600"
      >
        <SiZalo className="w-6 h-6 text-white" />
        <span className="cta-ping bg-sky-400"></span>
      </a>

      {/* FACEBOOK */}
      <a
        href="https://www.facebook.com/people/Duolingo-Center-Chinh-Ph%E1%BB%A5c-DET-C%C3%B9ng-Chuy%C3%AAn-Gia/61572647327932/"
        target="_blank"
        className="cta-btn bg-blue-600 hover:bg-blue-700"
      >
        <FiFacebook className="w-6 h-6 text-white" />
        <span className="cta-ping bg-blue-500"></span>
      </a>

      {/* TIKTOK */}
      <a
        href="https://www.tiktok.com/@duolingo_center?fbclid=IwY2xjawRwxShleHRuA2FlbQIxMABicmlkETFWRUphNjF6cGVFcUxXaHE1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmEyQgJYK8LW9-YGexjd33PEBVvfcBvPgmEd59aAKfw11Xkesi_Es37mh6O8_aem_YWdncwAnPcOwoHVw-8fcM9BZRKy8&brid=YWdncwFlJLXeqBtibylR8Uo9XnRx"
        target="_blank"
        className="cta-btn bg-black hover:bg-zinc-800"
      >
        <IoLogoTiktok className="w-6 h-6 text-white" />
        <span className="cta-ping bg-pink-500"></span>
      </a>

      {/* PHONE */}
      <a
        href="tel:0911019996"
        className="cta-btn bg-emerald-500 hover:bg-emerald-600"
      >
        <BiPhone className="w-6 h-6 text-white" />
        <span className="cta-ping bg-emerald-400"></span>
      </a>

      {/* SCROLL TOP */}
      <button
  onClick={scrollTopPage}
  className={`
    relative w-14 h-14 flex items-center justify-center
    transition-all duration-500
    ${
      showTop
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6 pointer-events-none"
    }
  `}
>
  {/* SVG Progress */}
  <svg className="absolute w-full h-full -rotate-90">
    {/* background */}
    <circle
      cx="28"
      cy="28"
      r={radius}
      stroke="#e5e7eb"
      strokeWidth="4"
      fill="transparent"
    />

    {/* progress */}
    <circle
      cx="28"
      cy="28"
      r={radius}
      stroke="#0DB02B"
      strokeWidth="4"
      fill="transparent"
      strokeDasharray={circumference}
      strokeDashoffset={offset}
      strokeLinecap="round"
      className="transition-all duration-200"
    />
  </svg>

  {/* Arrow */}
  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0DB02B] via-[#F9D616] to-[#F7FFF9] flex items-center justify-center shadow-xl">
    <IoIosArrowUp className="text-white text-xl drop-shadow" />
  </div>
</button>

      {/* STYLE */}
      <style jsx>{`
  .cta-btn {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }

  @media (min-width: 768px) {
    .cta-btn {
      width: 56px;
      height: 56px;
    }
  }

  .cta-btn:hover {
    transform: translateY(-4px) scale(1.05);
  }

  .cta-ping {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    opacity: 0.4;
    animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
`}</style>
    </div>
  );
}