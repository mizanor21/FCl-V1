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
      </h1>
    </div>
  );
};

export default SubCompany;
