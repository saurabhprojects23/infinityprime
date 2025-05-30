import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const Page8 = () => {
const navigate = useNavigate()

  return (

                        <div className='lg:px-52 absolute'>
                        {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}
                        <div className='bg-[#213c21] py-10'>
                        <p onClick={()=>navigate(-1)} className='text-2xl text-[#dbbf70] relative '><IoMdArrowRoundBack className='-mb-6'/></p>
                        <p className='flex justify-center text-center text-3xl font-serif font-bold  text-[#dbbf70] '> 
                        Logistic and Transportaion
                            </p>
                        </div>


        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Plan, Execute, and Control your transportation Efficiently
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We optimize your movement of goods to reduce costs while improving service and visibility. Our
approach encompasses mode selection, carrier management, route optimization, and transportation
technology implementation to create seamless product flow.
From carrier selection to network optimization, we help you design transportation solutions that
reduce costs while improving service levels and environmental impact.
We combine analytical expertise with practical logistics knowledge. We implement solutions that
balance service requirements with cost optimization.

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Transportation network assessment and benchmarking<br/>
• Identify transportation inefficiencies and cost-saving opportunities<br/>
• Create visibility systems across your logistics network<br/>
• Utilise advanced analytics to continuously optimize routes and loads<br/>
• Carrier management and procurement strategies<br/>
• Freight audit and payment process optimization<br/>
• Last-mile delivery and omnichannel logistics design application<br/>
</p>
    </div>
  )
}

export default Page8