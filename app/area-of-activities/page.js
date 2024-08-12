"use client";
import img1 from "@/public/assets/banner/constraction.jpeg";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Activities = () => {
  const activities = [
    {
      title: "Building and Infrastructure, Energy, Gas and Power",
      description: "Farees Construction Limited's services are comprehensive. The staff includes engineers, architects, quantity surveyors, project managers, Construction experts & supervisors, material specialists, accountants, estimators, attorneys, and other experienced Construction professionals and skilled/semi-skilled/fresh workers to provide Construction services and value engineering.",
      imageURL: "https://i.postimg.cc/CMCpM21c/building-and-infrastructure-energy-gas-and-power.webp"
    },
    {
      title: "Water Supply & Water Resources Management",
      description: "Farees Construction Limited provides the full complement of engineering, Construction, and operations services in drinking water, wastewater, and water resources management to serve the needs of our public and private-sector clients.",
      imageURL: "https://i.postimg.cc/yNJzVYgR/water-supply.webp"
    },
    {
      title: "Flood Control, Drainage and Irrigation",
      description: "Farees Construction Limited is a full-service Construction firm offering comprehensive planning, design and Construction works including supervision, economic and financial analysis, environmental impact analysis, management of operation and maintenance under this sector.",
      imageURL: "https://i.postimg.cc/Njdgszd3/food-control-drainage.webp"
    },
    {
      title: "Urban and Rural Development",
      description: "Farees Construction Limited’s services are dedicated to providing disadvantaged urban and rural communities with sustainable development.",
      imageURL: "https://i.postimg.cc/fyfGHVFG/urban-and-rural-development.jpg"
    },
    {
      title: "Transportation and Communication",
      description: "Farees Construction Limited is a full-service engineering construction firm specializing in traffic engineering, transportation planning & modeling, traffic impact analysis, environmental and planning regulations, and municipal civil engineering construction. The company emphasizes site selection and land use, geotechnical investigations, improvement and reconstruction of roads, design and engineering of new roads, bridges and appurtenant structures, financial analysis, costing and tariffs, quality control of construction, and overall supervision.",
      imageURL: "https://i.postimg.cc/7Lprb80W/Transportation-and-communication.jpg"
    },
    {
      title: "Port, Harbor and River Training",
      description: "The firm has a focus on the port, harbor, and river training sector. Areas of specialization include surveying, monitoring, and mapping of rivers; flood/river control works, erosion control/soil conservation, dredging works; economic and financial analysis, among others.",
      imageURL: "https://i.postimg.cc/qqrfXsmc/port-harbor-and-river.jpg"
    },
    {
      title: "Industrial Development",
      description: "Having extensive technology management and business development experience in this field Farees Construction Limited offers Construction services in the areas of development strategy and functions and new product development, corporate venturing and technology planning.",
      imageURL: "https://i.postimg.cc/QNch9t6k/Industrial-development.webp"
    },
    {
      title: "Information and Communication Technology",
      description: "Farees Construction Limited provides appropriately skilled man-power such as web designers, e-commerce specialists, analysts, designers, programmers, engineers, network administrators, communication experts, database administrators, project managers and many other IT related individuals.",
      imageURL: "https://i.postimg.cc/mDCfHXS2/Information-and-Communication-Technology.webp"
    }
  ];

  const [selectedActivity, setSelectedActivity] = useState(null);

  const openModal = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src='https://t3.ftcdn.net/jpg/04/10/63/10/360_F_410631090_ahJmJdMc32H3f3VRQ8i6JsKQ9tBsRjNs.jpg'
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-30"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              Area of Activities
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
                    Area of Activities
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-[1400px]">
          <h1 className="text-4xl font-bold mb-5">Introduction</h1>
          <p className="text-justify">
            Bangladesh being a predominantly rural economy, the priority need calls for balanced development, covering the whole gamut of socio-economic life. The scope for economic development, especially in the rural and allied fields, is almost unlimited. But, the development programs require comprehensive planning including study of social, economic, institutional, environmental and physical factors.
          </p>
          <p className="text-justify">
            The talents and expertise of in-house professional staff of Farees Construction Limited offers a complete package of services for survey/study/design, Construction works, management and supervision and, also for development projects of the country. From the start, Farees Construction Limited aimed at providing Construction services in different fields. Areas of activities are briefly mentioned underneath.
          </p>
        </div>

        <div className="mt-10">
          <div className="container mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-5">
            {activities.map((activity, index) => (
              <div key={index} className="transition-all duration-200 bg-white hover:shadow-xl rounded-xl">
                <div className="py-10 px-9">
                  <img
                    className="relative object-cover w-full h-64"
                    src={activity.imageURL}
                    alt={activity.title}
                  />
                  <h3 className="mt-8 text-lg font-semibold text-black">{activity.title}</h3>
                  <button
                    className="btn mt-4 w-full rounded-full"
                    onClick={() => openModal(activity)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedActivity && (
        <dialog open className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <img
              className="relative object-cover w-full h-64 mb-4 mt-4"
              src={selectedActivity.imageURL}
              alt={selectedActivity.title}
            />
            <h3 className="font-bold text-lg">{selectedActivity.title}</h3>
            <p className="py-4">{selectedActivity.description}</p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Activities;
