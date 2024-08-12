import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import buildings from "@/public/assets/BuildConstruction/buildings.png";
import highway from "@/public/assets/BuildConstruction/highway.png";
import road from "@/public/assets/BuildConstruction/road.png";
import bgImage from "@/public/assets/BuildConstruction/bgImg.png";

import "@/app/components/Home/WeBuild/Build.css";

const homeAbout = [
  {
    id: 1,
    cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
    title: "Online Courses",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/diploma.png",
    title: "Earn A Certificates",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 1,
    cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    title: "Learn with Expert",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const ConstructionBuild = () => {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto max-w-[1300px] ">
        <section class="py-10  sm:py-16 lg:py-24">
          <div>
            <h2
              class="text-3xl font-bold leading-tight mb-10 text-black
             sm:text-4xl lg:text-4xl"
            >
              What We Build
            </h2>
          </div>
          <div class="">
            <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
              <div className="bg-white p-6 rounded-md">
                <div class="relative flex items-center justify-center mx-auto">
                  <svg
                    class="text-blue-100"
                    width="72"
                    height="75"
                    viewBox="0 0 72 75"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                  </svg>
                  <svg
                    class="absolute text-blue-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                Highway Expansion

                </h3>
                <p class="mt-4 text-base text-gray-600 text-justify">
                Expansion of the main highway with two additional lanes to improve traffic flow and include updated signals and sound barriers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md">
                <div class="relative flex items-center justify-center mx-auto">
                  <svg
                    class="text-blue-100"
                    width="72"
                    height="75"
                    viewBox="0 0 72 75"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                  </svg>
                  <svg
                    class="absolute text-blue-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                Bridge Construction
                </h3>
                <p class="mt-4 text-base text-gray-600 text-justify">
                Completion of a 500-meter suspension bridge, enhancing connectivity over the river and providing a crucial link for the local transportation network.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md">
                <div class="relative flex items-center justify-center mx-auto">
                  <svg
                    class="text-blue-100"
                    width="72"
                    height="75"
                    viewBox="0 0 72 75"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                  </svg>
                  <svg
                    class="absolute text-blue-600 w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">
                Building Construction
                </h3>
                <p class="mt-4 text-base text-gray-600 text-justify">
                Our construction services are designed to create beautiful, functional, and sustainable homes with a high level of safety and comfort.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConstructionBuild;
