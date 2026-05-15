"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const MENU = [
    { label: "Giới thiệu", href: "#infor" },

  { label: "Khóa học", href: "#courses" },
  { label: "Lộ trình", href: "#services" },
  { label: "Chuyên gia", href: "#tutors" },
  
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  /* ================= ACTIVE SECTION ================= */
  useEffect(() => {
    const sections = MENU.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* ================= SCROLL FUNCTION ================= */
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[80px]">

        {/* LOGO */}
        <div className="w-[120px]">
          <img src="/logo.png" alt="logo" className="w-full h-full object-contain" />
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-8 text-label-md font-label-md">
         {MENU.map((item) => {
  const isActive = active === item.href;

  return (
    <button
      key={item.href}
      onClick={() => handleScroll(item.href)}
      className={`
         transition-colors cursor-pointer
        ${
          isActive
            ? "text-primary font-semibold"
            : "text-on-surface-variant hover:text-primary"
        }
      `}
    >
      {item.label}
    </button>
  );
})}
        </div>

        {/* CTA Desktop */}
        <button className="hidden md:block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-container transition">
          Tư vấn ngay
        </button>

        {/* ================= HAMBURGER ================= */}
        <button
          className="md:hidden text-3xl text-primary"
          onClick={() => setOpen(true)}
        >
          <HiOutlineMenu />
        </button>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button
            className="text-3xl text-primary"
            onClick={() => setOpen(false)}
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-6 px-6">
          {MENU.map((item) => (
            <button
              key={item.href}
              onClick={() => handleScroll(item.href)}
              className={`text-left transition-colors
              ${
                active === item.href
                  ? "text-primary font-semibold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* CTA */}
          <button className="mt-4 bg-primary text-white py-3 rounded-lg">
            Tư vấn ngay
          </button>
        </div>
      </div>
    </header>
  );
}