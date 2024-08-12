'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";

const EquipmentList = () => {
  const equipmentList = [
    {
      SNo: 1,
      Equipment: "50T Mobile Crane (wheel type)",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 2,
      Equipment: "25T Mobile Crane (wheel type)",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 2,
    },
    {
      SNo: 3,
      Equipment: "Trailer 28 wheels",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 4,
      Equipment: "Cat 320 Excavator- 0.9 cum",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 11,
    },
    {
      SNo: 5,
      Equipment: "Cat 320 Excavator- 0.7 cum",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 19,
    },
    {
      SNo: 6,
      Equipment: "Dump Truck – 10 wheel",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 27,
    },
    {
      SNo: 7,
      Equipment: "Dump Truck – 6 wheel",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 13,
    },
    {
      SNo: 8,
      Equipment: "Dozer 950",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 2,
    },
    {
      SNo: 9,
      Equipment: "Tafe Tractor",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 5,
    },
    {
      SNo: 10,
      Equipment: "Hammer Excavator 36 Ton",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 3,
    },
    {
      SNo: 11,
      Equipment: "13 Feet Motor Grader",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 12,
      Equipment: "9M sheet pile excavator 36 Ton",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 2,
    },
    {
      SNo: 13,
      Equipment: "Hyd. Rotary Rig MAIT HR180 60M",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 3,
    },
    {
      SNo: 14,
      Equipment: "Hyd. Rotary Rig MAIT HR260 70M",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 15,
      Equipment: "New Zoomlion130 ton crawler crane",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 16,
      Equipment: "Wheel Loader 3 Ton & 5 Ton",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 5,
    },
    {
      SNo: 17,
      Equipment: "Fiori Concrete mixture",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 2,
    },
    {
      SNo: 18,
      Equipment: "Batching plant",
      Ownership: "Own/Rent",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 19,
      Equipment:
        "Reverse Circulation Rotary Drilling Rig capable to Drill 28’’ x 24’’, 22” dia & bore hole upto 1200ft below Ground Level in Alluvium soils by 6’’/150mm dia drill pipes",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 4,
    },
    {
      SNo: 20,
      Equipment: "Water Jetting Set with Compressor (800 PSI)",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 2,
    },
    {
      SNo: 21,
      Equipment: "Generator Capacity 350 KVA",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 4,
    },
    {
      SNo: 22,
      Equipment: "Geo-Logger",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 23,
      Equipment:
        "BS 410 or ASTM Standard Set/Sand Testing Sieves ASTM 8” dia Mesh No. 4 8 10 16 18 35 60 100 pan and lid.",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 24,
      Equipment: "Burner/Heater",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 25,
      Equipment: "Accurate Weighing balance complete set",
      Ownership: "Own",
      Unit: "Set",
      Quantity: 1,
    },
    {
      SNo: 26,
      Equipment: "Pipe Jointing Equipment (butt fusion/electro fusion machine)",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 4,
    },
    {
      SNo: 27,
      Equipment: "Pressure Testing Equipment for supply Network installed",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 4,
    },
    {
      SNo: 28,
      Equipment: "Asphalt Cutter",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 3,
    },
    {
      SNo: 29,
      Equipment: "De-watering Pump",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 2,
    },
    {
      SNo: 30,
      Equipment: "Compaction Machine",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 4,
    },
    {
      SNo: 31,
      Equipment: "Air Compressor 283/Liter/second",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 2,
    },
    {
      SNo: 32,
      Equipment: "Generator Capacity 550 KVA",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 33,
      Equipment: "Generator for Welding",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 3,
    },
    {
      SNo: 34,
      Equipment: "Submersible pumps 3.0 Cusec 110m Head",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 2,
    },
    {
      SNo: 35,
      Equipment: "Welding Plant",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 2,
    },
    {
      SNo: 36,
      Equipment: "Complete set of Gas Cutter Equipments",
      Ownership: "Own",
      Unit: "Set",
      Quantity: 2,
    },
    {
      SNo: 37,
      Equipment: "150mm dia Drilling Pipe with threat/Flange",
      Ownership: "Own",
      Unit: "Meter",
      Quantity: 1100,
    },
    {
      SNo: 38,
      Equipment: "150mm dia Column Pipe",
      Ownership: "Own",
      Unit: "Meter",
      Quantity: 400,
    },
    {
      SNo: 39,
      Equipment: "Vertically Test Equipments",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: 1,
    },
    {
      SNo: 40,
      Equipment: "Necessary Vehicles (L.S)",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: "L.S",
    },
    {
      SNo: 41,
      Equipment:
        "Other related equipments (HDD Machine, Pipe Busting Machine, Water Tanker, Pickup, Crane Truck, Drum Truck, Sedan Car, Pajero Jeep, Haval Jeep)",
      Ownership: "Own",
      Unit: "Nos",
      Quantity: "",
    },
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(equipmentList.length / itemsPerPage);

  const paginatedEquipmentList = equipmentList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <Image
            src={img1}
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-40"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              List Of Equipments
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
                    Equipments
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-x-auto container mx-auto py-10">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead className="bg-gradient-to-r from-green-500 to-purple-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Serial No</th>
              <th className="py-3 px-6 text-left">Equipment Type & Characteristics</th>
              <th className="py-3 px-6 text-left">Ownership</th>
              <th className="py-3 px-6 text-left">Unit</th>
              <th className="py-3 px-6 text-left">Quantity</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {paginatedEquipmentList.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100 hover:bg-blue-100" : "hover:bg-blue-100"}
              >
                <td className="py-3 px-6">{item.SNo.toString().padStart(2, '0')}</td>
                <td className="py-3 px-6">{item.Equipment}</td>
                <td className="py-3 px-6">{item.Ownership}</td>
                <td className="py-3 px-6">{item.Unit}</td>
                <td className="py-3 px-6">{item.Quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentList;
