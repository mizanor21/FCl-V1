import Link from "next/link";
import React from "react";

const SubCompany = () => {
  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2024/05/14/05/38/construction-8760339_640.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-30"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              {" "}
              M/S MAN ENTERPRISE{" "}
            </h1>
            <div className="text-sm text-white breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/sub-company">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Associate With
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
                M/S MAN ENTERPRISE
              </h2>
              <div className="text-justify">
                <p>
                  <strong>M/S MAN ENTERPRISE</strong> is an independent
                  engineering construction company with an objective to provide
                  complete and international standard technical approach in the
                  construction industry of Bangladesh. Man Enterprise ventured
                  into the construction area as early as 2012 and Farees
                  Construction Limited (FCL) was formed in 2017 to join the
                  venture. The company was created out of a vision of Brigadier
                  General AKM Mahfuzul Haque (Retd.), the CEO & MD of Farees
                  Construction Limited, to serve the nation with top-quality
                  professionals.
                </p>
                <br />
                <p>
                  <strong>FCL</strong> consists of a professionals, experts in
                  the development sectors, and experienced management. The
                  organization have launched country-wide nation-building
                  activities by completing several multi-storied buildings,
                  hydraulic structures, deep tube wells, water purification
                  plants, irrigation, flood control projects, etc.{" "}
                  <strong>FCL</strong> is also experienced in constructing
                  piling (situ/bored/caisson), pile cap & retaining structures
                  etc.
                </p>
              </div>
            </div>

            <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div className="relative w-full max-w-lg mt-4 mb-10 ml-auto">
                <img
                  className="ml-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                  alt=""
                />

                <img
                  className="absolute -top-4 -left-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                  alt=""
                />

                <div className="absolute -bottom-10 -left-16">
                  <div className="bg-green-800">
                    <div className="px-8 py-10">
                      <span className="block text-4xl font-bold text-white lg:text-5xl">
                        8+
                      </span>
                      <span className="block mt-2 text-base leading-tight text-white">
                        Years Of
                        <br />
                        Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-4 lg:px-16">
        <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
          <h1 className="text-center text-5xl pb-12 font-bold">
            Services We Provide
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16 mt-10">
            <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Automotive.png"
                      className="w-36 h-36 mt-6 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6 z-10 w-full">
                  <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                    Automotive
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Toys-and-Baby-Products.png"
                      className="w-36 h-36 mt-6 m-auto"
                      alt="Toys and Baby Products"
                      title="Toys and Baby Products"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6 z-10 w-full">
                  <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                    Toys and Baby Products
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/MEDICAL.png"
                      className="w-36 h-36 mt-6 m-auto"
                      alt="Medical"
                      title="Medical"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6 z-10 w-full">
                  <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                    Medical
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Glass.png"
                      className="w-36 h-36 mt-6 m-auto"
                      alt="Glass"
                      title="Glass"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6 z-10 w-full">
                  <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                    Glass
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Jewelry-coins-and-medallions.png"
                      className="w-36 h-36 mt-6 m-auto"
                      alt="Jewelry Coins and Medallions"
                      title="Jewelry Coins and Medallions"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6 z-10 w-full">
                  <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                    Jewelry Coins and Medallions
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Electric.png"
                      className="w-36 h-36 mt-6 m-auto"
                      alt="Electric"
                      title="Electric"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6 z-10 w-full">
                  <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                    Electric
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubCompany;
