import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const page10 = () => {
  return (
    <div className='lg:px-52'>
       <Link to={"/"} className='text-2xl text-[#213c21]'><IoMdArrowRoundBack className=''/></Link>
        {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}

        <p className='flex justify-center text-center text-3xl font-serif font-bold bg-[#213c21] text-[#dbbf70] py-10'>
            
        Advanced Manufacturing Excellence
            
            </p>
        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Streamline, Improve, and Innovate your Production systems
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We implement lean methodologies and advanced manufacturing techniques to eliminate waste and
improve quality. Our systematic approach transforms operations through continuous improvement,
creating more efficient and responsive production systems
From lean implementation to advanced manufacturing technologies, we help you eliminate waste
while enhancing flexibility, quality, and responsiveness.
We combine lean expertise with technological innovation. We implement solutions that deliver
immediate efficiency gains while building long-term operational excellence

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Manufacturing diagnostics and performance assessment<br/>
• Identify production inefficiencies and constraint points<br/>
• Develop synchronized manufacturing systems<br/>
• Create continuous improvement frameworks and culture<br/>
• Utilize advanced technologies to enhance manufacturing capabilities<br/>
• Lean manufacturing implementation<br/>
• Production scheduling and flow optimization<br/>
• Advanced manufacturing technology integration.<br/>
</p>
    </div>
  )
}

export default page10