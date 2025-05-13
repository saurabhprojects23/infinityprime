import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import case1 from "../Assets/SUPPLY CHAIN STRATEGY.jpg"
import case2 from "../Assets/Supply Chain Technology .jpg"
import case3 from "../Assets/SUSTAINABILITY (1).jpg"
import casestudy from "../Assets/casestudies"
import casestudydetail from '../Assets/casestudydetail'
import { RxCross2 } from 'react-icons/rx'


const CaseStudies = () => {

     const [selectedId, setSelectedId] = useState(null);
    
      const openModal = (id) => {
        setSelectedId(id);
      }
    
      const closeModal = (id) => {
        setSelectedId(null);
      }

  return (
    <div>
        <div className='pb-16 pt-10 bg-[#213c21]' id="case">
           <div className='pb-6 '>
                <p className='lg:text-3xl xl:text-4xl text-2xl font-serif text-[#dbbf70] flex justify-self-center items-center pb-2 pt-3'>Case Studies</p>
                <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-5 lg:px-20 2xl:px-40 px-4'>
        
        {casestudy.map((cases) => (

            <div className="rounded-lg overflow-hidden shadow-xl bg-white hover:scale-105 transition-all">
              <div className="h-40 w-full overflow-hidden">
                <img src={case1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="lg:p-4 p-2 flex flex-col gap-2 font-sans text-[#2e4e29]">
                <div className='flex pb-2'><p className='text-[11px] p-[2px] bg-slate-100 rounded-full px-4 font-serif'>{cases.head}</p></div>
                <h2 className="text-lg font-bold mb-1 font-sans line-clamp-2">{cases.title}</h2>
                <p className="text-sm line-clamp-3 h-14">{cases.descrip}</p>
                      <p className='text-xs text-black py-2'>
                              Key Results:<br/>
                             <ul className="list-disc pl-5">
                        {cases.keys.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                      </p>
                     
                <button className="text-sm pb-2 font-bold transition flex justify-start items-center gap-3" onClick={() => openModal(cases.id)}>
                  <p >View full case study</p> <span className=''><FaAngleRight/></span>
                </button>
              </div>
            </div>
        ))}
            </div>
           </div>


            {/* Modal */}


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
                              {casestudydetail[selectedId - 1].head}
                            </h2>
                          </div>
                          <div className="py-4 text-[#213c21] h-96 overflow-y-scroll font-serif">
                            <p className="font-semibold text-xl py-4">
                              {casestudydetail[selectedId - 1].subhead}
                            </p>

                            <h2 className='text-xl font-semibold py-2'>The Challenges</h2>
            
                            <p className="text-lg font-serif font-medium whitespace-pre-line">
                              {casestudydetail[selectedId - 1].descrip1}
                            </p>
            
                           <ul className="list-disc pl-5 text-lg font-serif font-medium pt-4">
                                {casestudydetail[selectedId - 1].keys1.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h2 className='text-xl font-semibold py-2'>Our Approach</h2>
            
                            <p className="text-lg font-serif font-medium whitespace-pre-line">
                              {casestudydetail[selectedId - 1].descrip2}
                            </p>
            
                           <ul className="list-disc pl-5 text-lg font-serif font-medium pt-4">
                                {casestudydetail[selectedId - 1].keys2.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h2 className='text-xl font-semibold py-2'>The Results</h2>
            
                            <p className="text-lg font-serif font-medium whitespace-pre-line">
                              {casestudydetail[selectedId - 1].descrip3}
                            </p>
            
                           <ul className="list-disc pl-5 text-lg font-serif font-medium pt-4 pb-2">
                                {casestudydetail[selectedId - 1].keys3.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h2 className='text-xl font-semibold py-2'>Key Takeaway</h2>

                            <p className="text-lg font-serif font-medium whitespace-pre-line py-2">
                              {casestudydetail[selectedId - 1].final}
                            </p>

                          </div>
                        </div>
                      </div>
                    )}



    </div>
  )
}

export default CaseStudies