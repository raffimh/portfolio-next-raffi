"use client";

import { useState, useEffect } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLinks = [
  {
    title: "Youtube",
    url: "#",
  },
  {
    title: "Twitter/X",
    url: "#",
  },
  {
    title: "Instagram",
    url: "#",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/raffimaulana",
  },
];

export const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setShowButton(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative z-1 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <Link
                key={link.title}
                href={link.url}
                className="inline-flex items-center gap-1.5 group"
                target="_blank"
              >
                <span className="font-semibold group-hover:underline">
                  {link.title}
                </span>
                <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {showButton && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative p-6 text-white rounded-full shadow-lg transition-colors"
          >
            <svg className="w-10 h-10" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                strokeDasharray="100, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="text-emerald-500"
                strokeDasharray={`${scrollProgress}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center">
              ↑
            </span>
          </button>
        </div>
      )}
    </footer>
  );
};
