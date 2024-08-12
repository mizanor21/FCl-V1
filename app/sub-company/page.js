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
    </div>
  );
};

export default SubCompany;
