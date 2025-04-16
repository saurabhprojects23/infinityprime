import React from 'react'
import logo from "../Assets/logo.png"
import bg from "../Assets/bgpic.png"
import rachid from "../Assets/rachidPic.png"
import { GrShieldSecurity } from "react-icons/gr";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoBulbOutline } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { BsRecycle } from "react-icons/bs";
import cards from "../Assets/data.js";
import { FaAngleDown } from "react-icons/fa6";
import testimonials from "../Assets/testimonialData.js"
import { FaAngleRight } from "react-icons/fa6";
import img1 from "../Assets/INVENTORY.jpg";
import img2 from "../Assets/SUPPLY CHAIN STRATEGIES.jpg";
import img3 from "../Assets/DIGITAL TRANSFORMATION.jpg";
import { TbWorld } from "react-icons/tb";






const LandingPage = () => {
  return (
    <div className='ovo-regular'>
        <div className='flex justify-between px-16 p-3 text-white bg-green-900 z-50 sticky top-0'>
            <div className='flex justify-center items-center gap-3'>
                <img src={logo} alt='' className='h-7' />
                <p className='text-[#dbbf70] lg:text-2xl text-xl font-medium ovo-regular'>INFINITY PRIME</p>
            </div>
            <div className='lg:flex hidden gap-16 items-center'>
            <p className='cursor-pointer'>Home</p>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer'>Services</p>
                <p className='cursor-pointer'>Case Studies</p>
                <p className='cursor-pointer'>Insights</p>
                <button className='px-2 p-1 border border-white rounded-sm'>Book an Appointment</button>
            </div>
        </div>
        <div className='relative'>
  <div className='w-full h-[500px] object-cover bg-[#213c21]  flex justify-center items-center' >
    <img src={bg} alt='' className='w-full lg:h-[500px] md:h-[450px] h-[200px]'/>
  </div>

  <div className='absolute top-0 left-0 w-full h-full bg-[#213c21] bg-opacity-65 flex flex-col justify-center items-center text-center px-4'>
    <div className='max-w-2xl flex flex-col justify-center items-center '>
      <img src={logo} alt='' className='lg:h-24 md:h-20 h-16 pb-5'/>
      <p className='lg:text-5xl md:text-4xl text-3xl font-bold mb-4 text-[#dbbf70] ovo-regular'>INFINITY PRIME</p>
      <div className='flex justify-center items-center pb-4'><div className='w-28 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
      <p className='mb-6 text-white text-xl'>
      “Excellence is never an accident; it is a result of high intention”
      </p>
      <p className='mb-6 text-white'>Supply Chain isn't your back-office, It's your battleground.</p>
     <div className='flex justify-center items-center gap-6 pt-3'>
     <button className='p-1 px-3 text-green-950 bg-[#dbbf70] rounded-md font-semibold hover:scale-110 transition-all'>
        Our Services
      </button>
      <button className='p-1 px-3 text-white rounded-md border border-white hover:scale-110 transition-all'>
        Contact Us
      </button>
     </div>
    </div>
  </div>
</div>

{/* ABOUT */}

<div className='py-5'>
    <div className='p-4'>
        <p className='lg:text-3xl text-2xl font-bold text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>About Us</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>

    <div className='flex lg:flex-row flex-col gap-7 lg:px-14 md:px-10 px-6'>
        <div className='flex flex-col gap-2 lg:w-1/2 justify-center items-center'>
            <img src={rachid} alt="" className='h-36 shadow-xl rounded-full'/>
            <p className='text-xl font-semibold text-[#213c21]'>Rachid Maliki</p>
            <p className='text-sm text-[#213c21]'>Founder and CEO</p>
        </div>
        <div className='flex lg:w-1/2 flex-col gap-2 lg:pr-24 text-center lg:text-start'>
            <p className='text-xl text-[#213c21]'>“We don't simply solve problems; we architect futures.”</p>
            <p className='text-sm'>“At INFINITY PRIME, we believe that every supply chain
                    exists at the intersection of challenge and possibility.
                    Where these forces meet, we discover the infinite
                    potential waiting to be unleashed. Like astronomers
                    mapping constellations across endless skies, we identify
                    the critical points where strategic intervention creates
                    transformative impact. We don t just optimize your supply
                    chain—we expand its horizons, turning finite resources
                    into boundless opportunities."</p>
        </div>
    </div>

</div>


{/* CORE VALUES */}

    <div className='bg-gray-100 pb-7'>
    <div className='p-4 '>
        <p className='lg:text-3xl text-2xl font-bold text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>Core Values</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>

    <div className='flex gap-3 justify-around items-center overflow-x-scroll hide-scrollbar lg:px-40 px-6'>
        <div className='text-center'>
            <div className='h-40 w-40  bg-[#dbbf70] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
                <div className='text-3xl text-white'><AiOutlineSafetyCertificate/></div>
                <p className='text-white text-base text-center font-medium px-6'>Strategic Excellence</p>
            </div>
            <p className='w-40 text-sm text-gray-800 pt-1'>Execute with precision. Think
            ahead.</p>
        </div>
        <div className='text-center'>
            <div className='h-40 w-40 bg-[#213c21] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
            <div className='text-3xl text-white'><GrShieldSecurity/></div>
            <p className='text-white text-base text-center font-medium px-6'>Unwavering Integrity</p>
            </div>
            <p className='w-40 text-sm text-gray-800 pt-1'>Practice radical honesty. Be
            transparent.</p>
        </div>
        <div className='text-center'>
            <div className='h-40 w-40 bg-[#dbbf70] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
            <div className='text-3xl text-white'><IoBulbOutline/></div>
            <p className='text-white text-base text-center font-medium px-6'>Boundless Innovation</p>
            </div>
            <p className='w-40 text-sm text-gray-800 pt-1'>Imagine boldly. Deliver
            practically.</p>
        </div>
        <div className='text-center'>
            <div className='h-40 w-40 bg-[#213c21] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
                <div className='text-3xl text-white'><RiTeamFill/></div>
                <p className='text-white text-base text-center font-medium px-6'>Authentic Partnership</p>
            </div>
            <p className='w-40 text-sm text-gray-800 pt-1'>Collaborate deeply. Solve
            together.</p>
        </div>
        <div className='text-center'>
            <div className='h-40 w-40 bg-[#dbbf70] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
            <div className='text-3xl text-white'><BsRecycle/></div>
            <p className='text-white text-base text-center font-medium px-6'>Sustainable Impact</p>
            </div>
            <p className='w-40 text-sm text-gray-800 pt-1'>Drive meaningful, lasting
            value</p>
        </div>
    </div>
    </div>

    {/* OUR SERVICES */}

    <div>
    <div className='p-4 '>
        <p className='lg:text-3xl text-2xl font-bold text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>Our Services</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3 lg:px-40 px-2 pb-6">
  {cards.map(card => (
    <div key={card.id} className="rounded-lg hover:scale-105 transition-all overflow-hidden shadow-xl bg-white">
      <div className="h-40 w-full overflow-hidden">
        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col font-sans text-[#213c21]">
        <h2 className="lg:text-lg text-base font-semibold mb-2">{card.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{card.description}</p>
        <button className="mt-auto text-sm lg:text-base lg:px-4 py-1 hover:scale-105 border rounded-md bg-slate-200 transition flex justify-center items-center gap-1">
          <p >Learn More</p> <span className=''><FaAngleDown/></span>
        </button>
      </div>
    </div>
  ))}
</div>
    </div>

    {/* What Customers say-- testimonial */}

   <div className='bg-slate-100 pb-16'>
   <div className='p-4 '>
        <p className='lg:text-3xl text-2xl font-bold text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>What Our Clients Say</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:px-40 px-4">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-lg shadow-md p-6 space-y-2">
            <div className='flex flex-row gap-5 px-5'>
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className='text-start'>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.position}</p>
            </div>
            </div>
            <p className="text-sm text-gray-700 italic">“{t.feedback}”</p>
            <div className="flex justify-start text-yellow-500 text-lg">
              {"★".repeat(t.stars)}
            </div>
          </div>
        ))}
      </div>
   </div>

   {/* LATEST INSIGHTS */}

   <div className='pb-10'>
   <div className='p-4 '>
        <p className='lg:text-3xl text-2xl font-bold text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>Latest Insights</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>
    <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-5 lg:px-40 px-4'>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white h-96 hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={img1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-xs p-1 border border-[#213c21] rounded-full px-4'>Strategy</p></div>
        <h2 className="lg:text-lg text-sm font-semibold mb-1 line-clamp-2">Supply Chain Resiliency in the Post-Pandemic Era</h2>
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">Explore strategies for building robust supply chains
that can withstand global disruptions and market
volatility.</p>
        <button className="text-sm lg:text-base font-medium transition flex justify-start items-center gap-3">
          <p >Read article</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white h-96 hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={img3} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-xs p-1 border border-[#213c21] rounded-full px-4'>Technology</p></div>
        <h2 className="lg:text-lg text-sm font-semibold mb-1 line-clamp-2">The Digital Supply Chain: Leveraging AI and
        Machine Learning</h2>
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">How advanced technologies are transforming
forecasting, inventory management, and decision
making processes.</p>
        <button className="text-sm lg:text-base font-medium transition flex justify-start items-center gap-3">
          <p >Read article</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white h-96 hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={img2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-xs p-1 border border-[#213c21] rounded-full px-4'>Sustainability</p></div>
        <h2 className="lg:text-lg text-sm font-semibold mb-1 line-clamp-2">ESG Compliance: Building Sustainable Supply
        Chains</h2>
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">Practical approaches to integrating environmental, social, and governance principles into supply chain operations.</p>
        <button className="text-sm lg:text-base font-medium transition flex justify-start items-center gap-3">
          <p >Read article</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    </div>
   </div>


   {/* Case Studies */}

   <div className='pb-10 bg-[#213c21]'>
   <div className='p-4 '>
        <p className='lg:text-3xl text-2xl font-bold text-[#dbbf70] flex justify-self-center items-center pb-2 pt-3'>Case Studies</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>
    <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-5 lg:px-40 px-4'>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={img1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-xs p-1 border border-[#213c21] rounded-full px-4'>Strategy</p></div>
        <h2 className="lg:text-lg text-sm font-semibold mb-1 line-clamp-2">Global Retailer Supply Chain
        Transformation</h2>
        <p className="text-sm text-gray-600 line-clamp-3 h-14">22% operational cost reduction through strategic
        network redesign and process optimization</p>
              <p className='text-xs text-black py-2'>
                      Key Results:<br/>
                      &nbsp; &nbsp; ◉ 22% operational cost reduction<br/>
                      &nbsp; &nbsp; ◉ 98.7% on time deliver<br/>
                      &nbsp; &nbsp; ◉ 15% inventory reduction
              </p>
        <button className="text-sm pb-2 lg:text-base font-medium transition flex justify-start items-center gap-3">
          <p >View full case study</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={img3} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-xs p-1 border border-[#213c21] rounded-full px-4'>Technology</p></div>
        <h2 className="lg:text-lg text-sm font-semibold mb-1 line-clamp-2">Pharmaceutical Manufacturer s Digital
        Transformation</h2>
        <p className="text-sm text-gray-600 line-clamp-3 h-14">End to end visibility implementation reducing
        order to delivery time by 35%</p>
<p className='text-xs text-black py-2'>
                      Key Results:<br/>
                      &nbsp; &nbsp; ◉ 35% reduced order to delivery time<br/>
                      &nbsp; &nbsp; ◉ 99.9% product traceability<br/>
                      &nbsp; &nbsp; ◉ $4.2M annual savings
              </p>
        <button className="text-sm pb-2 lg:text-base font-medium transition flex justify-start items-center gap-3">
          <p >View full case study</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={img2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-xs p-1 border border-[#213c21] rounded-full px-4'>Sustainability</p></div>
        <h2 className="lg:text-lg text-sm font-semibold mb-1 line-clamp-2">Automotive Supplier s Sustainable Supply
        Chain</h2>
        <p className="text-sm text-gray-600 line-clamp-3 h-14">Implementing ESG principles while improving
        operational efficiency and supplier relationships</p>
        <p className='text-xs text-black py-2'>
                      Key Results:<br/>
                      &nbsp; &nbsp; ◉ 42% carbon footprint reduction<br/>
                      &nbsp; &nbsp; ◉ 28% supplier ontime improvement<br/>
                      &nbsp; &nbsp; ◉ 18% total cost reduction
              </p>
          <button className="text-sm pb-2 lg:text-base font-medium transition flex justify-start items-center gap-3">
          <p >View full case study</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    </div>
   </div>

   {/* BOOK AN APPOINTMENT */}

   <div>
   <div className='p-4 '>
        <p className='lg:text-3xl text-2xl font-bold text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>Book An Appointment</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>
    <p className='text-5xl font-bold flex flex-col justify-center items-center p-10'>FORM<br/><span className='text-2xl'>(Work In Progress)</span></p>
   </div>

   {/* GLOBAL REACH */}

   <div className='pb-10 bg-[#213c21]'>
   <div className='p-4 '>
        <p className='lg:text-3xl text-2xl font-bold text-[#dbbf70] flex justify-self-center items-center pb-2 pt-3'>Global Reach</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>
    <div className='flex lg:flex-row flex-col gap-10 lg:pl-40 px-4'>
      <div className='flex flex-col gap-6 lg:w-1/2 text-white justify-center text-center md:text-start items-center text-xl'>
        <p>INFINITY PRIME is based in Ras Al-Khaimah, United Arab
            Emirates, and offers global consultancy services to
            businesses across industries.</p>
            <p>Our strategic location at the crossroads of Europe, Asia,
            and Africa allows us to serve clients worldwide with local
            expertise and global perspectives.</p>
      </div>
      <div className='flex justify-center items-center lg:w-1/2 relative'>
        <div className='text-[280px] text-green-950'><TbWorld/></div>
        <p className='absolute flex flex-col justify-center items-center text-4xl font-bold text-white'>UAE<br/><span className='text-lg'><br/>& Beyond</span></p>
      </div>
    </div>
    </div>

    {/* Partners LOGOS */}

    <div>
      <p className='text-sm text-gray-500 flex justify-self-center items-center pt-5'>Trusted by 4,000+ companies</p>
      <div className='lg:flex grid grid-cols-3 lg:justify-around items-center'>
        <img src="https://brandlogos.net/wp-content/uploads/2021/10/coinbase-logo-300x300.png" alt="" className='h-28'/>
        <img src="https://brandlogos.net/wp-content/uploads/2015/09/spotify-logo-vector-download-300x300.jpg" alt="" className='h-28'/>
        <img src="https://brandlogos.net/wp-content/uploads/2020/09/zoom-logo-300x300.png" alt="" className='h-28'/>
        <img src="https://brandlogos.net/wp-content/uploads/2019/01/slack_2019-logo_brandlogos.net_vc8uu-300x300.png" alt="" className='h-28'/>
        <img src="https://brandlogos.net/wp-content/uploads/2022/10/dropbox-logo_brandlogos.net_mm6rr-300x300.png" alt="" className='h-28'/>
        <img src="https://brandlogos.net/wp-content/uploads/2022/10/webflow-logo_brandlogos.net_bsbdq-300x300.png" alt="" className='h-28'/>
      </div>
    </div>

    <div className='lg:px-40 px-10 flex lg:flex-row flex-col gap-6 justify-between py-10 bg-[#213c21]'>
      <div className='flex flex-col gap-2'>
      <div className='flex justify-start items-center gap-3'>
                <img src={logo} alt='' className='h-7' />
                <p className='text-[#dbbf70] lg:text-2xl text-xl font-medium ovo-regular '>INFINITY PRIME</p>
            </div>
            <p className='text-white text-sm lg:text-start text-center'>Excellence is never an accident; it is a result of high intention.</p>
      </div>
      <div className='text-white'>
        <p className='text-sm'>© 2025 INFINITY PRIME. All rights reserved.</p>
        <p className='text-xs text-gray-300'>Based in Ras Al-Khaimah, UAE</p>
      </div>
    </div>

    </div>
  )
}

export default LandingPage