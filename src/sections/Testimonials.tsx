import memojiAvatar1 from "@/assets/images/rafsakaos-icon.png";
import memojiAvatar2 from "@/assets/images/kinexicon.png";
import memojiAvatar3 from "@/assets/images/indomasicon.png";
import memojiAvatar4 from "@/assets/images/rfaicon.png";
import memojiAvatar5 from "@/assets/images/monazLogo.png";

import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Rafsa Kaos",
    position: "Company Profile Website",
    text: "Working with Raffi was a fantastic experience. His expertise and dedication to the project were evident from start to finish. We are thrilled with the final product and look forward to future collaborations.",
    avatar: memojiAvatar1,
  },
  {
    name: "Kinex Logistics",
    position: "Company Profile Website",
    text: "Creating our company profile website was exceptional. He understood our vision perfectly and delivered a site that exceeded our expectations. The design is sleek, and the functionality is seamless. Highly recommended!",
    avatar: memojiAvatar2,
  },
  {
    name: "Indomas Niaga Lestari",
    position: "Company Profile Website & E-Commerce",
    text: "Raffi is a highly skilled developer who can take a project from concept to completion with ease. He is a great communicator and always delivers on time. I would highly recommend him to anyone looking for a talented frontend developer.",
    avatar: memojiAvatar3,
  },
  {
    name: "Riksa Fajar Asia",
    position: "Company Profile Website",
    text: "Raffi did an outstanding job on our company profile website. His attention to detail and ability to understand our requirements made the process smooth and efficient. We highly recommend his services.",
    avatar: memojiAvatar4,
  },
  {
    name: "Monaz Interior",
    position: "Company Profile Website",
    text: "Raffi is a true professional who is passionate about his work. He created a stunning website for our company that has helped us attract new clients and grow our business. We are extremely satisfied with the results.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Here are some testimonials from my clients who have experienced firsthand the quality of my work and dedication to their projects."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center ">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full rounded-full"
                        />
                      </div>
                      <div className="">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
