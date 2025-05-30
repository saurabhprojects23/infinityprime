import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
// import img from "../../Assets/STRATEGIC SOURCING.jpg"

const Page5 = () => {

  const navigate = useNavigate()

  return (

          <div className='lg:px-52 absolute'>
                  
                    {/* <img src={img} alt="" className='w-full h-96 rounded-lg shadow-lg'/> */}
            
            
                    <div className='bg-[#213c21] py-10'>
                    <p onClick={()=>navigate(-1)} className='text-2xl text-[#dbbf70] relative '><IoMdArrowRoundBack className='-mb-6'/></p>
                    <p className='flex justify-center text-center text-3xl font-serif font-bold  text-[#dbbf70] '>
                        
                    Inventory Management
            
                        </p>
                    </div>






        <p className='font-semibold text-xl py-6 text-[#213c21]'>
            
        Balance, Synchronize, and Leverage your Inventory
            
            </p>
<p className='text-lg font-serif font-medium text-[#213c21]'>
    
We develop strategies to maintain optimal inventory levels while meeting service requirements. By
integrating demand planning, supply planning, and financial alignment, we help you deploy working
capital efficiently while maximizing availability
From reducing excess stock to strategically positioning inventory across your network, we help you
meet service levels while minimizing working capital requirements.
We bring together the science of inventory management with practical business reality. We
implement solutions that balance mathematical precision with operational flexibility.

</p>
<p className='text-lg font-serif font-medium text-[#213c21] pt-4'>
• Identify inventory imbalances and opportunities<br/>
• Develop optimal stocking strategies by SKU and location<br/>
• Align demand and supply planning processes<br/>
• Utilize advanced forecasting to anticipate market changes<br/>
• Inventory segmentation and policy setting<br/>
• S&OP/IBP process design and implementation<br/>
• Inventory performance metrics and dashboards<br/>
</p>
    </div>
  )
}

export default Page5