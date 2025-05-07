import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const page7 = () => {
  return (
    <div className='lg:px-52'>
       <Link to={"/"} className='text-2xl text-[#213c21]'><IoMdArrowRoundBack className=''/></Link>
        {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}

        <p className='flex justify-center text-center text-3xl font-serif font-bold bg-[#213c21] text-[#dbbf70] py-10'>
            
        Sustainability & ESG Solutions
            
            </p>
        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Measure, Improve, and Showcase your Sustainability
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We design supply chains that balance economic, environmental, and social considerations. Our
approach helps you reduce your environmental footprint, ensure ethical practices, and create
transparent, responsible operations.
From carbon footprint reduction to ethical sourcing practices, we help you build environmental and
social responsibility into the core of your supply chain operations.
We bridge environmental science with practical business realities. We implement approaches that
create positive impact while enhancing your competitive position.
</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Identify sustainability gaps and improvement opportunities<br/>
• Develop comprehensive ESG strategies for your supply chain<br/>
• Utilise science-based targets to drive meaningful progress<br/>
• Supply chain carbon footprint assessment<br/>
• Circular economy and waste reduction initiatives<br/>
• Ethical sourcing and supplier sustainability programs<br/>
• ESG reporting and stakeholder engagement.<br/>
</p>
    </div>
  )
}

export default page7