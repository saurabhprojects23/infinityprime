// import React from 'react';

// const Page1 = ({ onClose }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded shadow-lg w-96">
//       <h2 className="text-xl font-bold mb-4">Modal 1</h2>
//       <p>This is content for Modal 1.</p>
//       <button
//         onClick={onClose}
//         className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// export default Page1;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { RxCross2 } from 'react-icons/rx'; // Close icon

// const Page1Modal = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
//       <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 my-8 p-6">

//         {/* Close button */}
//         <button 
//           onClick={() => navigate(-1)} 
//           className="text-black text-2xl absolute top-1 right-1 hover:text-red-600 transition"
//           aria-label="Close"
//         >
//           <RxCross2 />
//         </button>

//         {/* Header */}
//         <div className="bg-[#213c21] py-6 rounded-t-lg text-center">
//           <h2 className="text-3xl font-serif font-bold text-[#dbbf70]">
//             Supply Chain Strategy and Transformation
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="py-4 text-[#213c21] h-96 overflow-y-scroll">
//           <p className="font-semibold text-xl py-4">
//             Align, Innovate, and Outperform your Industry
//           </p>

//           <p className="text-lg font-serif font-medium">
//             We craft comprehensive roadmaps that align your supply chain with overall business objectives.
//             By identifying strategic priorities and designing transformation initiatives, we help you evolve
//             from functional efficiency to competitive advantage.
//             <br /><br />
//             From reimagining existing supply chains to designing resilient, future-ready networks, we help you
//             transform operational necessity into strategic advantage.
//             <br /><br />
//             We bring decades of executive experience in supply chain transformation. We guide you through a
//             structured approach to reimagine your supply chain's strategic role while ensuring practical
//             implementation.
//           </p>

//           <ul className="list-disc pl-5 text-lg font-serif font-medium pt-4">
//             <li>Identify strategic misalignments and opportunities</li>
//             <li>End-to-end supply chain assessment</li>
//             <li>Design a supply chain that delivers on business objectives</li>
//             <li>Future-state vision and roadmap development</li>
//             <li>Prepare for market disruptions and future growth</li>
//             <li>Utilise advanced analytics to drive continuous strategic evolution</li>
//             <li>Transformation program governance</li>
//             <li>Strategic capability building and performance measurement</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page1Modal;

import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import services from '../../Assets/servicedata';

const ServiceModal = ({ service, onClose }) => {
  if (!service || !Array.isArray(service.key_areas)) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 my-8 p-6">

        {/* Close button */}
        <button 
          onClick={onClose} 
          className="text-black text-2xl absolute top-1 right-1 hover:text-red-600 transition"
          aria-label="Close"
        >
          <RxCross2 />
        </button>

        {/* Header */}
        
        {/* <div className="bg-[#213c21] py-6 rounded-t-lg text-center">
          <h2 className="text-3xl font-serif font-bold text-[#dbbf70]">
            {services.title}
          </h2>
        </div> */}

      {services.map(service => (
        <div className="py-4 text-[#213c21] h-96 overflow-y-scroll">
          <p className="font-semibold text-xl py-4">
            {service.main_message}
          </p>

          <p className="text-lg font-serif font-medium whitespace-pre-line">
            {service.content}
          </p>
        </div>
      ))}
      


      </div>
    </div>
  );
};

export default ServiceModal;
