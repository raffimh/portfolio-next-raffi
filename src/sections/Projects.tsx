import rafsakaos from "@/assets/images/rafsakaos.png";
import kinex from "@/assets/images/kinex.png";
import indomas from "@/assets/images/indomas.png";
import rfa from "@/assets/images/rfa.png";
import Link from "next/link";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Konveksi Rafsakaos",
    year: "2022",
    title: "Company Profile Konveksi Rafsakaos",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 90%" },
      { title: "Increased mobile traffic by 55%" },
    ],
    link: "https://rafsakaos.com/",
    image: rafsakaos,
  },
  {
    company: "PT. RIKSA FAJAR ASIA",
    year: "2022",
    title: "Company Profile RIKSA FAJAR ASIA",
    results: [
      { title: "Enhanced user experience by 50%" },
      { title: "Improved site speed by 60%" },
      { title: "Increased mobile traffic by 45%" },
    ],
    link: "https://rfa.co.id/",
    image: rfa,
  },
  {
    company: "PT. KIANA NUSANTARA EXPRESS",
    year: "2024",
    title: "Company Profile Kinex Logistics",
    results: [
      { title: "Enhanced user experience by 60%" },
      { title: "Improved site speed by 70%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://kinexlogistics.com/",
    image: kinex,
  },
  {
    company: "PT. INDOMAS NIAGA LESTARI",
    year: "2024",
    title: "Company Profile Indomas Niaga",
    results: [
      { title: "Boosted sales by 30%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 25%" },
    ],
    link: "https://indomasniagalestari.co.id/",
    image: indomas,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed businesses and helped them achieve their goals."
        />
        <div className="flex md:mt-20 flex-col mt-10 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={resultIndex}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center md:w-auto px-6 gap-2 mt-8 transition-transform transform hover:scale-105 hover:bg-gray-200 duration-300">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="relative ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
