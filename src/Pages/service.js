import React, { useState } from 'react'
import cards from "../Assets/data.js";
import { FaAngleDown } from "react-icons/fa6";
import { RxCross2 } from 'react-icons/rx';
import services from '../Assets/servicedata.js';

const Services = () => {


  const [selectedId, setSelectedId] = useState(null);

  const openModal = (id) => {
    setSelectedId(id);
  }

  const closeModal = (id) => {
    setSelectedId(null);
  }

  return (
    <div>
      <>
        {/* OUR SERVICES */}

        <div className="py-10">
          <div className="p-6 " id="services">
            <p className="lg:text-4xl text-2xl font-serif text-[#213c21] flex justify-self-center items-center pb-3 pt-3">
              Our Services
            </p>
            <div className="flex justify-center items-center pb-4">
              <div className="lg:w-20 md:w-16 w-12 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-6 gap-3 lg:px-40 px-2 pb-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="rounded-lg hover:scale-105 transition-all overflow-hidden shadow-xl bg-white"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:p-6 p-2 flex flex-col font-sans text-[#213c21]">
                  <h2 className="lg:text-lg text-base font-bold mb-2 line-clamp-2 h-14">
                    {card.title}
                  </h2>
                  <p className="text-sm font-semibold mb-4 h-12 line-clamp-2">
                    {card.description}
                  </p>
                  <button
                    onClick={() => openModal(card.id)}
                    className="mt-auto font-semibold text-sm lg:px-4 py-2 hover:scale-105 border rounded-md bg-slate-200 transition flex justify-center items-center gap-3"
                  >
                    <p>Learn more</p>{" "}
                    <span className="">
                      <FaAngleDown />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}

        {/* Show modal if a service is selected */}
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
            <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 my-8 p-6">
              <button
                onClick={closeModal}
                className="text-black text-2xl absolute top-1 right-1 hover:text-red-600 transition"
                aria-label="Close"
              >
                <RxCross2 />
              </button>
              <div className="bg-[#213c21] py-6 rounded-t-lg text-center">
                <h2 className="text-3xl font-serif font-bold text-[#dbbf70]">
                  {services[selectedId - 1].title}
                </h2>
              </div>
              <div className="py-4 text-[#213c21] h-96 overflow-y-scroll">
                <p className="font-semibold text-xl py-4">
                  {services[selectedId - 1].main_message}
                </p>

                <p className="text-lg font-serif font-medium whitespace-pre-line">
                  {services[selectedId - 1].content}
                </p>

               <ul className="list-disc pl-5 text-lg font-serif font-medium pt-4">
                    {services[selectedId - 1].key_areas.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Services