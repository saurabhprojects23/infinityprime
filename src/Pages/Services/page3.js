import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const page3 = () => {
  return (
    <div className='lg:px-52'>
       <Link to={"/"} className='text-2xl text-[#213c21]'><IoMdArrowRoundBack className=''/></Link>
        {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}

        <p className='flex justify-center text-center text-3xl font-serif font-bold bg-[#213c21] text-[#dbbf70] py-10'>
            
        Strategic Sourcing and Procurement
            
            </p>
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

export default page3