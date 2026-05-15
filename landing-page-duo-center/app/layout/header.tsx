"use client";

import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const MENU = [
  { label: "Khóa học", href: "#courses" },
  { label: "Giới thiệu", href: "#why-det" },
  { label: "Chuyên gia", href: "#tutprs" },
  { label: "Lộ trình", href: "#core-value" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50 ">
      <nav className="max-w-7xl px-6 mx-auto px-margin-desktop flex justify-between items-center h-[80px]">

        {/* LOGO */}
        <div className="w-[120px]">
          <img src="./logo.png" alt="" className="w-full h-full object-contain" />
        </div>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center gap-8 text-label-md font-label-md">
          {MENU.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Desktop */}
        <button className="hidden md:block bg-primary text-white cursor-pointer px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all">
          Tư vấn ngay
        </button>

        {/* ===== Hamburger ===== */}
        <button
          className="md:hidden text-3xl text-primary"
          onClick={() => setOpen(true)}
        >
          <HiOutlineMenu />
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-surface shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-3xl text-primary"
            onClick={() => setOpen(false)}
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-col gap-6 px-6 text-label-md font-label-md">
          {MENU.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}

          {/* CTA Mobile */}
          <button className="mt-4 bg-primary text-white py-3 rounded-lg">
            Tư vấn ngay
          </button>
        </div>
      </div>
    </header>
  );
}