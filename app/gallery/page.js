"use client";

import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/public/assets/Gallery/BUP-Pic/1.jpg";
import img2 from "@/public/assets/Gallery/BUP-Pic/2.jpg";
import img3 from "@/public/assets/Gallery/BUP-Pic/3.jpg";
import img4 from "@/public/assets/Gallery/BUP-Pic/4.jpg";
import img5 from "@/public/assets/Gallery/BUP-Pic/5.jpg";
import img6 from "@/public/assets/Gallery/BUP-Pic/6.jpg";
import img7 from "@/public/assets/Gallery/BUP-Pic/7.jpg";
import img8 from "@/public/assets/Gallery/BUP-Pic/8.jpg";
import img9 from "@/public/assets/Gallery/BUP-Pic/9.jpg";
import Link from "next/link";

const imagesData = [
  { id: 1, src: 'https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75', alt: "Image 1" },
  { id: 2, src: 'https://i.postimg.cc/C5mGPJxj/Bulldozer.jpg', alt: "Image 2" },
  { id: 3, src: 'https://i.postimg.cc/vB68Sm8X/Motor-grader.jpg', alt: "Image 3" },
  { id: 4, src: 'https://i.postimg.cc/NjwsCtZk/Dump-Truck-10-wheel.jpg', alt: "Image 4" },
  { id: 5, src: 'https://i.postimg.cc/rp82rCPS/1.jpg', alt: "Image 5" },
  { id: 6, src: 'https://i.postimg.cc/7Y0L19mc/9.jpg', alt: "Image 6" },
  { id: 7, src: 'https://i.postimg.cc/FF2RJ8g3/8.jpg', alt: "Image 7" },
  { id: 8, src: 'https://i.postimg.cc/x8tZvvrZ/Vibro-roller.jpg', alt: "Image 8" },
  { id: 9, src: 'https://i.postimg.cc/c1BG13zw/Excavator-0-7cum.webp', alt: "Image 9" },
  { id: 10, src: 'https://i.postimg.cc/rp7MWLG4/Road-Roller.jpg', alt: "Image 10" },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  const totalPages = Math.ceil(imagesData.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = imagesData.slice(startIndex, startIndex + imagesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
     <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src='https://png.pngtree.com/thumb_back/fh260/background/20230515/pngtree-construction-site-with-cranes-in-the-field-image_2541656.jpg'
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-30"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              {" "}
             Choose Your Gallery
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
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {currentImages.map((image) => (
            <section
              key={image.id}
              className="py-6 dark:bg-gray-100 dark:text-gray-900"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
              />
            </section>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
