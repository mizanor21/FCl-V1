import React from "react";

const Blog = () => {
  return (
    <div className="bg-state-50 mt-20 mb-20">
      <h2 class="text-3xl text-center mt-10 mb-10 font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
        Recent Articles
      </h2>
      <div className="container mx-auto max-w-[1300px]">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://html.themeori.net/buildkon/assets/img/blog-1.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                 
                </a>
                <span className="text-gray-600">28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
              Facilitate Collaboration in Value
              </a>
              <p className="mb-2 text-gray-700">
              Enhance project outcomes by fostering effective teamwork and shared value creation.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://html.themeori.net/buildkon/assets/img/blog-2.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                </a>
                <span className="text-gray-600">28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Lean Design The 12 Fundamentals
              </a>
              <p className="mb-2 text-gray-700">
              Master 12 principles to streamline design, cut waste, and boost efficiency.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://html.themeori.net/buildkon/assets/img/blog-3.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                </a>
                <span className="text-gray-600">28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Why Construction Matters
              </a>
              <p className="mb-2 text-gray-700">
              Construction drives progress, shapes communities, and  development.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
