import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const Page3 = () => {

  const navigate = useNavigate()

  return (

          <div className='lg:px-52 absolute'>
            <div className='bg-[#213c21] py-10'>
            <p onClick={()=>navigate(-1)} className='text-2xl text-[#dbbf70] relative '><IoMdArrowRoundBack className='-mb-6'/></p>
            <p className='flex justify-center text-center text-3xl font-serif font-bold  text-[#dbbf70] '>
                
            Strategic Sourcing and Procurement

                </p>
            </div>

        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Source, Negotiate, and Collaborate Strategically
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We transform your procurement function from transactional purchasing to strategic value creation.
Our methodologies optimize supplier relationships, category management, and purchasing processes
to drive cost savings and innovation
From tactical buying to strategic category management, we help you leverage your spend to drive
cost savings, innovation, and competitive advantage.
We combine analytical rigor with negotiation expertise. We implement approaches that go beyond
price reduction to create sustainable value from your supply base.

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Identify sourcing opportunities and supply risks<br/>
• Develop category strategies that align with business objectives<br/>
• Create supplier partnerships that drive mutual value<br/>
• Utilize data-driven negotiations to optimize total cost of ownership<br/>
• Supply market development and new source identification<br/>
• Procurement organization design and transformation.<br/>
</p>
    </div>
  )
}

export default Page3