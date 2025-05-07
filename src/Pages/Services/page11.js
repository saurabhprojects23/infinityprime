import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const Page11 = () => {
  const navigate = useNavigate()
  return (
 <div className='lg:px-52 absolute'>
    {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}
    <div className='bg-[#213c21] py-10'>
    <p onClick={()=>navigate(-1)} className='text-2xl text-[#dbbf70] relative '><IoMdArrowRoundBack className='-mb-6'/></p>
    <p className='flex justify-center text-center text-3xl font-serif font-bold  text-[#dbbf70] '> 
    Quality Management & Improvement
        </p>
    </div>



        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Measure, Analyse, and Continuously Enhance Quality 
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We implement robust quality management systems that ensure consistency and excellence
throughout your supply chain. By establishing quality metrics, control processes, and improvement
methodologies, we help you deliver superior products and services while reducing defects, returns,
and waste. Our approach integrates quality into every aspect of your operations, transforming it from
a compliance function into a competitive differentiator
From quality control systems to culture transformation, we help you build quality into the DNA of
your supply chain, reducing defects while enhancing customer satisfaction.
We bring together technical expertise with change management capabilities. We implement systems
that transform quality from inspection to prevention.

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Quality management system design and implementation<br/>
• Identify quality gaps and root causes<br/>
• Create measurement systems that drive improvement<br/>
• Utilize advanced methodologies to eliminate waste and variation<br/>
• Process standardization and best practice development<br/>
• Quality metrics and performance management<br/>
</p>
    </div>
  )
}

export default Page11