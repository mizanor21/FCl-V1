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
            <h1 className="text-white text-4xl font-extrabold"> Our Company</h1>
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
                    Associate with
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
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl mb-4">
                M/S MAN ENTERPRISE
              </h2>
              <div className="text-justify">
                <p>
                  MAN Enterprise, and our group of companies, are formed by a
                  collective of talented and unique individuals committed to
                  inventing their own future by delivering excellence in the
                  present.
                </p>
                <br />
                <p>
                  We're experts with over 50 years experience in technology &
                  engineering, construction, and operations that are active
                  across nine regions throughout the Middle East, Europe and
                  Africa.
                </p>
                <br />
                <p>
                  We collaborate with dreamers, forward-thinkers and innovators
                  in the private and public sector to plan, build, and manage
                  solutions that drive their growth and success.
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
                  <div className="bg-yellow-300">
                    <div className="px-8 py-10">
                      <span className="block text-4xl font-bold text-black lg:text-5xl">
                        8+
                      </span>
                      <span className="block mt-2 text-base leading-tight text-black">
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

      {/* service section  */}

      <section class="bg-white  py-24 px-4 lg:px-16">
        <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
          <h1 class="text-center text-5xl pb-12">Industries we serve</h1>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKVjRhoA8ibXKiWtyoU_E4qo9GPH5X-DvwfO19CgawlsF6vxLA"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Fire Safety
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Toys-and-Baby-Products.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Toys and Baby Products"
                      title="Toys and Baby Products"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Toys and Baby Products
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/MEDICAL.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Medical"
                      title="Medical"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Medical
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Glass.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Glass"
                      title="Glass"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Glass
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Jewelry-coins-and-medallions.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Jewelry Coins and Medallions"
                      title="Jewelry Coins and Medallions"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Jewelry Coins and Medallions
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Electric.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Electric"
                      title="Electric"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Electric
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Packaging-FMCG.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Packaging / FMCG"
                      title="Packaging / FMCG"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Packaging / FMCG
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Footwear.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Footwear"
                      title="Footwear"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Footwear
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Backpacks-and-umbrella.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Backpacks and Umbrella"
                      title="Backpacks and Umbrella"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Backpacks and Umbrella
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Caps-and-Closures.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Caps and Closures"
                      title="Caps and Closures"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Caps and Closures
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="@" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Confectionery.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Confectionery"
                      title="Confectionery"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Confectionery
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Cosmetics.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Cosmetics"
                      title="Cosmetics"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Cosmetics
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Electronics.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Electronics"
                      title="Electronics"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Electronics
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Mobile.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Consumer Electronics"
                      title="Consumer Electronics"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Consumer Electronics
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Promotional.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Promotional"
                      title="Promotional"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Promotional
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Sports.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Sports"
                      title="Sports"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Sports
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Stationery.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Stationery"
                      title="Stationery"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Stationery
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Tools.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Tools"
                      title="Tools"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Tools
                  </p>
                </div>
              </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href=" " class="block">
                <div class="h-28">
                  <div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-green-800 rounded-xl justify-items-center align-middle">
                    <img
                      src="https://epicpadprinting.com/public/img/indus/Utensils.png"
                      class="w-36 h-36  mt-6 m-auto"
                      alt="Utensils"
                      title="Utensils"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                  <p class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Utensils
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
