import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const Page2 = () => {

  const navigate = useNavigate()

  return (
    <div className='lg:px-52 absolute'>
          
            {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}
    
    
            <div className='bg-[#213c21] py-10'>
            <p onClick={()=>navigate(-1)} className='text-2xl text-[#dbbf70] relative '><IoMdArrowRoundBack className='-mb-6'/></p>
         <p className='flex justify-center text-center text-3xl font-serif font-bold  text-[#dbbf70] '>
                
            Network Design
    
                </p>
            </div>

        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Model, Optimize, and Future-proof your Network
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We analyse and redesign your supply chain network to balance service levels, costs, and resilience.
Through advanced modelling and optimization techniques, we create the ideal footprint for your
operations across facilities, transportation, and inventory positioning
From optimizing existing networks to designing completely new supply chain configurations, we
help you create the optimal balance of facilities, inventory, and transportation to drive competitive
advantage.
We combine advanced analytical techniques with practical operational knowledge. We translate
complex data into clear recommendations that deliver measurable improvements to your bottom line.<br/>

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Identify network inefficiencies and bottlenecks<br/>
• Optimize facility locations and capacity<br/>
• Balance inventory positioning across the network<br/>
• Utilise scenario modelling to adapt to changing market conditions<br/>
• Advanced network modelling and simulation<br/>
</p>
    </div>
  )
}

export default Page2