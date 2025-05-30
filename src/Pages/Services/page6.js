import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const Page6 = () => {

  const navigate = useNavigate()

  return (

          <div className='lg:px-52 absolute'>

                    <div className='bg-[#213c21] py-10'>
                    <p onClick={()=>navigate(-1)} className='text-2xl text-[#dbbf70] relative '><IoMdArrowRoundBack className='-mb-6'/></p>
                    <p className='flex justify-center text-center text-3xl font-serif font-bold  text-[#dbbf70] '>
                        
                    Warehouse Design
            
                        </p>
                    </div>





        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Design, Optimize, and Future-proof your Facilities
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We improve your warehousing and distribution operations to enhance efficiency and accuracy. From
facility design and layout to process improvement and automation, we help you maximize
throughput while minimizing costs.
From layout redesign to full automation implementation, we help you create warehouse operations
that balance efficiency, accuracy, and flexibility to meet evolving business needs.
We combine operational expertise with design innovation. We deliver practical solutions that drive
measurable improvements in throughput, accuracy, and cost.

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Warehouse assessment and performance benchmarking<br/>
• Identify operational bottlenecks and improvement opportunities<br/>
• Develop warehouse designs that optimize space and workflow<br/>
• Create scalable solutions that accommodate growth<br/>
• Utilize data-driven approaches for continuous performance enhancement<br/>
• Automation evaluation and implementation<br/>
• Labor management and productivity improvement position<br/>
</p>
    </div>
  )
}

export default Page6