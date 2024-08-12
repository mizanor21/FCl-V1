import Link from "next/link";
import React from "react";

const SubCompany = () => {
  return (
    <div>
      <h1>
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
                Explore Us
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
                      Explore Us
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
                  Farees Construction Limited (FCL)
                </h2>
                <div className="text-justify">
                  <p>
                    <strong>FAREES CONSTRUCTION LIMITED (FCL)</strong> is an
                    independent engineering construction company with an
                    objective to provide complete and international standard
                    technical approach in the construction industry of
                    Bangladesh. Man Enterprise ventured into the construction
                    area as early as 2012 and Farees Construction Limited (FCL)
                    was formed in 2017 to join the venture. The company was
                    created out of a vision of Brigadier General AKM Mahfuzul
                    Haque (Retd.), the CEO & MD of Farees Construction Limited,
                    to serve the nation with top-quality professionals.
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
                  <br />
                  <p>
                    Over the short period after its establishment,{" "}
                    <strong>FCL</strong> gathered experience in different
                    fields, working with local and foreign experts and
                    management professionals in both government & foreign funded
                    projects and delivered mentionable construction services.
                    Combining experience with quality, <strong>FCL</strong>{" "}
                    emerged as one of the top construction firms in Bangladesh.
                    With workmanship and refinement, it earned a reputation in
                    several sectors involving engineering and technological
                    inputs.
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
      </h1>
    </div>
  );
};

export default SubCompany;
