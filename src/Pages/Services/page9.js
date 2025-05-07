import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const Page9 = () => {

  const navigate = useNavigate()

  return (
                      <div className='lg:px-52 absolute'>
                        {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}
                        <div className='bg-[#213c21] py-10'>
                        <p onClick={()=>navigate(-1)} className='text-2xl text-[#dbbf70] relative '><IoMdArrowRoundBack className='-mb-6'/></p>
                        <p className='flex justify-center text-center text-3xl font-serif font-bold  text-[#dbbf70] '> 
                        Digital Transformation & Technology
                            </p>
                        </div>

        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Strategize, Implement, and Optimize your Technology Ecosystem
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We guide your journey toward a digitally enabled supply chain. From technology assessment and
selection to implementation and change management, we help you leverage innovations that deliver
measurable business outcomes
From technology road-mapping to solution implementation, we help you navigate the complex
landscape of supply chain technologies to create measurable business impact.
We bridge the gap between IT and operations. We guide you through the entire transformation
journey from strategy to solution selection to implementation

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Digital maturity assessment and roadmap development<br/>
• Develop technology strategies aligned with business objectives<br/>
• Create integrated systems that enable end-to-end visibility<br/>
• Utilize advanced analytics to unlock data-driven insights<br/>
• Technology selection and business case development<br/>
• Implementation planning and project governance<br/>
• Change management and capability building<br/>
</p>
    </div>
  )
}

export default Page9