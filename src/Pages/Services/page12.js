import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const Page12 = () => {
  const navigate = useNavigate()
  return (

<div className='lg:px-52 absolute'>
    {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}
    <div className='bg-[#213c21] py-10'>
    <p onClick={()=>navigate(-1)} className='text-2xl text-[#dbbf70] relative '><IoMdArrowRoundBack className='-mb-6'/></p>
    <p className='flex justify-center text-center text-3xl font-serif font-bold  text-[#dbbf70] '> 
    Supply Chain Talent Development
        </p>
    </div>

        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Assess, Enhance, and Empower your Supply Chain Team
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We build your team's capabilities through customized training programs and knowledge transfer. By
enhancing your organization's supply chain expertise, we ensure sustainable performance
improvement long after our engagement ends
From skill gap analysis to comprehensive development programs, we help you build the human
capabilities needed to execute and sustain your supply chain strategy.
We combine supply chain expertise with adult learning principles. We deliver programs that
transform technical knowledge into practical application.

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Identify capability gaps and development needs<br/>
• Design tailored training programs for all organizational levels<br/>
• Create learning paths that align with strategic objectives<br/>
• Utilize blended learning approaches for maximum retention and application<br/>
• Knowledge transfer and coaching<br/>
• Performance measurement and continuous development.<br/>
</p>
    </div>
  )
}

export default Page12