import grainImage from "@/assets/images/grain.jpg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-6 rounded-3xl text-center relative overflow-hidden md:text-left z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s Create Something Amazing Together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Let&apos;s connect and start building your dream website.
                I&apos;m excited to hear from you!
              </p>
            </div>
            <div className="">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900 transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold">
                  <Link href="mailto:buildwithraffi@gmail.com">Contact Me</Link>
                </span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
