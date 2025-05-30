import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import {useNavigate } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const Page4 = () => {

  const navigate = useNavigate()

  return (


        <div className='lg:px-52 absolute'>
              
                {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}
        
        
                <div className='bg-[#213c21] py-10'>
                <p onClick={()=>navigate(-1)} className='text-2xl text-[#dbbf70] relative '><IoMdArrowRoundBack className='-mb-6'/></p>
                <p className='flex justify-center text-center text-3xl font-serif font-bold  text-[#dbbf70] '>
                    
                Compliance Risk and Due diligence
        
                    </p>
                </div>




        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Identify, Mitigate, and Manage Risks Strategically
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We identify, assess, and mitigate risks across your supply chain ecosystem. Through proactive
planning and robust governance frameworks, we help you navigate regulatory requirements while
building resilience against disruptions.
From regulatory compliance to supply disruption planning, we help you build robust processes that
protect your business while maintaining operational flexibility.
We bring together regulatory expertise with practical operational knowledge. We implement
frameworks that balance protection with performance.

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Identify compliance gaps and vulnerability points<br/>
• Develop risk mitigation strategies across your supply chain<br/>
• Create transparent monitoring and early warning systems<br/>
• Business continuity and disruption response planning<br/>
• Regulatory compliance program development<br/>
• Supplier due diligence and monitoring systems.<br/>
</p>
    </div>
  )
}

export default Page4