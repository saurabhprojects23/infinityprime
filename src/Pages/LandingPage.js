import React from 'react'
import logo from "../Assets/logo.png"
import bg from "../Assets/bgpic.png"
import { GrShieldSecurity } from "react-icons/gr";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoBulbOutline } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { BsRecycle } from "react-icons/bs";
import cards from "../Assets/data.js";
import { FaAngleDown } from "react-icons/fa6";
import testimonials from "../Assets/testimonialData.js"
import { FaAngleRight } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
// import PrintButton from "../Pages/PrintTest.js"
import insight1 from "../Assets/ESG Compliance- Building Sustainable Supply Chains.jpg"
import insight2 from "../Assets/Supply Chain Resiliency in the Post-Pandemic Era.jpg"
import insight3 from "../Assets/The Digital Supply Chain.jpg"
import case1 from "../Assets/SUPPLY CHAIN STRATEGY.jpg"
import case2 from "../Assets/Supply Chain Technology .jpg"
import case3 from "../Assets/SUSTAINABILITY (1).jpg"
import rachidpic from "../Assets/IMG_655723.jpg"
import partner1 from "../Assets/photonLogo.png"
import partner2 from "../Assets/nathanlogo.jpeg"
import partner3 from "../Assets/cccslogo.png"


const LandingPage = () => {


  // const scrollToSection = (id) => {
  //   document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  // };

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -60; // Adjust this based on your fixed header height
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};


  return (
    <div className='ovo-regular'>
        <div className='flex justify-between lg:px-16 xl:px-24 p-3 lg:py-4 text-white bg-[#2e4e29] z-50 sticky top-0'>
            <div className='flex justify-center items-center gap-3'>
                <img src={logo} alt='' className='h-5' />
                <p className='text-[#dbbf70] text-xl font-medium ovo-regular'>INFINITY PRIME</p>
            </div>
            <div className='lg:flex hidden lg:gap-16 items-center'>
            <p className='cursor-pointer' onClick={() => scrollToSection('home')}>Home</p>
                <p className='cursor-pointer' onClick={() => scrollToSection('about')}>About</p>
                <p className='cursor-pointer' onClick={() => scrollToSection('services')}>Services</p>
                <p className='cursor-pointer' onClick={() => scrollToSection('case')}>Case Studies</p>
                <p className='cursor-pointer' onClick={() => scrollToSection('insights')}>Insights</p>
                <button className='px-2 p-1 border border-white rounded-sm' onClick={() => scrollToSection('contact')}>Book an Appointment</button>
            </div>
        </div>
        <div className='relative'>
  <div className='w-full h-[550px] object-cover bg-[#213c21]  flex justify-center items-center' >
    <img src={bg} alt='' className='w-full lg:h-[550px] md:h-[450px] h-[200px]'/>
  </div>

  <div id='home' className='absolute top-0 left-0 w-full h-full bg-[#213c21] bg-opacity-65 flex flex-col justify-center items-center text-center px-4'>
    <div className='max-w-2xl flex flex-col justify-center items-center '>
      <img src={logo} alt='' className='lg:h-24 md:h-20 h-16 pb-5 mb-5'/>
      <p className='lg:text-5xl xl:text-6xl 2xl:text-7xl md:text-4xl text-3xl font-bold mb-4 text-[#dbbf70] ovo-regular'>INFINITY PRIME</p>
      <div className='flex justify-center items-center pb-4'><div className='w-28 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
      <p className='mb-6 text-white text-xl font-sans'>
      “Excellence is never an accident; it is a result of high intention”
      </p>
      <p className='mb-6 text-white'>Supply Chain isn't your back-office, It's your battleground.</p>
     <div className='flex justify-center items-center gap-6 pt-8 '>
     <button onClick={() => scrollToSection('services')} className='p-1 px-3 text-lg lg:px-3 lg:py-2  text-green-950 bg-[#dbbf70] rounded-md hover:scale-110 transition-all'>
        Our Services
      </button>
      <button onClick={() => scrollToSection('contact')} className='p-1 px-3 text-lg lg:px-3 lg:py-2 text-white rounded-md border border-white hover:scale-110 transition-all'>
        Contact Us
      </button>
                      {/* <PrintButton/> */}
     </div>
    </div>
  </div>
</div>

{/* ABOUT */}

<div className='py-5 xl:py-16' id='about'>
    <div className='p-6'>
        <p className='lg:text-3xl xl:text-4xl 2xl:text-5xl text-2xl font-bold text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>About Us</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-20 md:w-16 w-12 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>

    <div className='flex lg:flex-row flex-col gap-7 lg:px-14 md:px-10 px-6'>
        <div className='flex flex-col gap-2 lg:w-1/2 justify-center items-center'>
            <img src={rachidpic} alt="" className='border-[7px] border-[#dbbf70] h-44 w-44 xl:h-60 xl:w-60 shadow-2xl rounded-full'/>
            <p className='text-xl lg:text-3xl text-[#213c21] font-[600] pt-3'>Rachid Maliki</p>
            <p className='text-sm lg:text-xl text-[#213c21] pt-1'>Founder and CEO</p>
        </div>
        <div className='flex lg:w-1/2 flex-col gap-2 lg:pr-24 text-center lg:text-start'>
            <p className='text-xl xl:text-2xl 2xl:text-3xl text-[#213c21]'>“We don't simply solve problems; we architect futures.”</p>
            <p className='text-sm xl:text-lg 2xl:text-xl'>“At INFINITY PRIME, we believe that every supply chain
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

    <div className='bg-slate-50 lg:py-10 lg:pb-16' id="corevalues">
    <div className='p-4 pb-8 '>
        <p className='lg:text-3xl xl:text-4xl 2xl:text-5xl text-2xl font-serif font-normal text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>Core Values</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-20 md:w-16 w-12 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>

    <div className='flex gap-3 justify-around items-center overflow-x-scroll hide-scrollbar lg:px-40 px-6'>
        <div className='text-center'>
            <div className='h-40 w-40 xl:h-48 xl:w-48 bg-[#dbbf70] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
                <div className='text-3xl lg:text-4xl text-white'><AiOutlineSafetyCertificate/></div>
                <p className='text-white text-lg text-center font-sans font-semibold px-6'>Strategic Excellence</p>
            </div>
            <div className=' flex items-center justify-center text-center pt-2'><p className='w-40 text-sm text-gray-800 pt-1 font-sans'>Execute with precision. Think
            ahead.</p></div>
        </div>
        <div className='text-center'>
            <div className='h-40 w-40 xl:h-48 xl:w-48 bg-[#213c21] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
            <div className='text-3xl lg:text-4xl text-white'><GrShieldSecurity/></div>
            <p className='text-white text-lg text-center font-sans font-semibold px-6'>Unwavering Integrity</p>
            </div>
            <div className=' flex items-center justify-center text-center pt-2'><p className='w-40 text-sm text-gray-800 pt-1 font-sans'>Practice radical honesty. Be
            transparent.</p></div>
        </div>
        <div className='text-center'>
            <div className='h-40 w-40 xl:h-48 xl:w-48 bg-[#dbbf70] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
            <div className='text-3xl lg:text-4xl text-white'><IoBulbOutline/></div>
            <p className='text-white text-lg text-center font-sans font-semibold px-6'>Boundless Innovation</p>
            </div>
            <div className=' flex items-center justify-center text-center pt-2'><p className='w-40 text-sm text-gray-800 pt-1 font-sans'>Imagine boldly. Deliver
            practically.</p></div>
        </div>
        <div className='text-center'>
            <div className='h-40 w-40 xl:h-48 xl:w-48 bg-[#213c21] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
                <div className='text-3xl lg:text-4xl text-white'><RiTeamFill/></div>
                <p className='text-white text-lg text-center font-sans font-semibold px-6'>Authentic Partnership</p>
            </div>
            <div className=' flex items-center justify-center text-center pt-2'><p className='w-40 text-sm text-gray-800 pt-1 font-sans'>Collaborate deeply. Solve
            together.</p></div>
        </div>
        <div className='text-center'>
            <div className='h-40 w-40 xl:h-48 xl:w-48 bg-[#dbbf70] shadow-md rounded-lg flex flex-col gap-2 justify-center items-center'>
            <div className='text-3xl lg:text-4xl text-white'><BsRecycle/></div>
            <p className='text-white text-lg text-center font-sans font-semibold px-6'>Sustainable Impact</p>
            </div>
            <div className=' flex items-center justify-center text-center pt-2'><p className='w-40 text-sm text-gray-800 pt-1 font-sans'>Drive meaningful, lasting
            value</p></div>
        </div>
    </div>
    </div>

    {/* OUR SERVICES */}

    <div className='py-10'>
    <div className='p-6 ' id='services'>
        <p className='lg:text-4xl text-2xl font-serif text-[#213c21] flex justify-self-center items-center pb-3 pt-3'>Our Services</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-20 md:w-16 w-12 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-6 gap-3 lg:px-40 px-2 pb-6">
  {cards.map(card => (
    <div key={card.id} className="rounded-lg hover:scale-105 transition-all overflow-hidden shadow-xl bg-white">
      <div className="h-40 w-full overflow-hidden">
        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-6 p-2 flex flex-col font-sans text-[#213c21]">
        <h2 className="lg:text-lg text-base font-bold mb-2 line-clamp-2 h-14">{card.title}</h2>
        <p className="text-sm font-semibold mb-4 h-12 line-clamp-2">{card.description}</p>
        <button className="mt-auto font-semibold text-sm lg:px-4 py-2 hover:scale-105 border rounded-md bg-slate-200 transition flex justify-center items-center gap-3">
          <p >Learn more</p> <span className=''><FaAngleDown/></span>
        </button>
      </div>
    </div>
  ))}
</div>
    </div>

    {/* What Customers say-- testimonial */ }

   <div className='bg-slate-50 pt-14 pb-20' id='review'>
   <div className='pb-8 '>
        <p className='lg:text-3xl xl:text-4xl text-2xl font-serif text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>What Our Clients Say</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:px-10 px-4">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-lg shadow-md p-5">
            <div className='flex flex-row gap-5 h-16'>
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className='text-start'>
              <h3 className="text-base font-sans font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.position}</p>
            </div>
            </div >
            <p className="text-sm text-gray-700 italic h-16 font-sans font-semibold">“{t.feedback}”</p>
            <div className="flex justify-start text-[#dbbf70] text-lg">
              {"★".repeat(t.stars)}
            </div>
          </div>
        ))}
      </div>
   </div>

   {/* LATEST INSIGHTS */}

   <div className='pb-14 pt-10' id="insights">
   <div className='pb-8 '>
        <p className='lg:text-3xl xl:text-4xl text-2xl font-bold text-[#213c21] flex justify-self-center items-center pb-2 pt-3'>Latest Insights</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>
    <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-5 lg:px-20 2xl:px-40 px-4'>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white h-96 hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={insight2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col gap-2 font-sans text-[#213c21]">
        <div className='flex pb-2 '><p className='text-[10px] p-[2px] border border-[#213c21] rounded-full px-4'>Strategy</p></div>
        <h2 className=" text-sm font-bold mb-1 line-clamp-2 h-10">Supply Chain Resiliency in the Post-Pandemic Era</h2>
        <p className="text-sm mb-2 line-clamp-3 h-16">Explore strategies for building robust supply chains
that can withstand global disruptions and market
volatility.</p>
        <button className="text-sm font-bold transition flex justify-start items-center gap-3">
          <p >Read article</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white h-96 hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={insight3} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col gap-2 font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-[10px] p-[2px] border border-[#213c21] rounded-full px-4'>Technology</p></div>
        <h2 className="text-sm font-bold mb-1 line-clamp-2 h-10">The Digital Supply Chain: Leveraging AI and
        Machine Learning</h2>
        <p className="text-sm mb-2 line-clamp-3 h-16">How advanced technologies are transforming
forecasting, inventory management, and decision
making processes.</p>
        <button className="text-sm font-bold transition flex justify-start items-center gap-3">
          <p >Read article</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white h-96 hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={insight1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col gap-2 font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-[10px] p-[2px] border border-[#213c21] rounded-full px-4'>Sustainability</p></div>
        <h2 className="text-sm font-bold mb-1 line-clamp-2 h-10">ESG Compliance: Building Sustainable Supply
        Chains</h2>
        <p className="text-sm mb-2 line-clamp-3 h-16">Practical approaches to integrating environmental, social, and governance principles into supply chain operations.</p>
        <button className="text-sm font-bold transition flex justify-start items-center gap-3">
          <p >Read article</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    </div>
   </div>


   {/* Case Studies */}

   <div className='pb-16 pt-10 bg-[#213c21]' id="case">
   <div className='pb-6 '>
        <p className='lg:text-3xl xl:text-4xl text-2xl font-serif text-[#dbbf70] flex justify-self-center items-center pb-2 pt-3'>Case Studies</p>
        <div className='flex justify-center items-center pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>
    <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-5 lg:px-20 2xl:px-40 px-4'>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={case1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col gap-2 font-sans text-[#2e4e29]">
        <div className='flex pb-2'><p className='text-[11px] p-[2px] bg-slate-100 rounded-full px-4 font-serif'>Retail</p></div>
        <h2 className="text-lg font-bold mb-1 font-sans line-clamp-2">Global Retailer Supply Chain
        Transformation</h2>
        <p className="text-sm line-clamp-3 h-14">22% operational cost reduction through strategic
        network redesign and process optimization</p>
              <p className='text-xs text-black py-2'>
                      Key Results:<br/>
                      &nbsp; &nbsp; ◉ 22% operational cost reduction<br/>
                      &nbsp; &nbsp; ◉ 98.7% on time deliver<br/>
                      &nbsp; &nbsp; ◉ 15% inventory reduction
              </p>
        <button className="text-sm pb-2 font-bold transition flex justify-start items-center gap-3">
          <p >View full case study</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={case2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col gap-2 font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-[11px] p-[2px] bg-slate-100 rounded-full px-4 font-serif'>Healthcare</p></div>
        <h2 className="text-lg font-bold mb-1 font-sans line-clamp-2">Pharmaceutical Manufacturer s Digital
        Transformation</h2>
        <p className="text-sm line-clamp-3 h-14">End to end visibility implementation reducing
        order to delivery time by 35%</p>
<p className='text-xs text-black py-2'>
                      Key Results:<br/>
                      &nbsp; &nbsp; ◉ 35% reduced order to delivery time<br/>
                      &nbsp; &nbsp; ◉ 99.9% product traceability<br/>
                      &nbsp; &nbsp; ◉ $4.2M annual savings
              </p>
        <button className="text-sm pb-2 font-bold transition flex justify-start items-center gap-3">
          <p >View full case study</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-xl bg-white hover:scale-105 transition-all">
      <div className="h-40 w-full overflow-hidden">
        <img src={case3} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="lg:p-4 p-2 flex flex-col gap-2 font-sans text-[#213c21]">
        <div className='flex pb-2'><p className='text-[11px] p-[2px] bg-slate-100 rounded-full px-4 font-serif'>Automotive</p></div>
        <h2 className="text-lg font-bold mb-1 font-sans line-clamp-2">Automotive Supplier s Sustainable Supply
        Chain</h2>
        <p className="text-sm line-clamp-3 h-14">Implementing ESG principles while improving
        operational efficiency and supplier relationships</p>
        <p className='text-xs text-black py-2'>
                      Key Results:<br/>
                      &nbsp; &nbsp; ◉ 42% carbon footprint reduction<br/>
                      &nbsp; &nbsp; ◉ 28% supplier ontime improvement<br/>
                      &nbsp; &nbsp; ◉ 18% total cost reduction
              </p>
          <button className="text-sm pb-2 font-bold transition flex justify-start items-center gap-3">
          <p >View full case study</p> <span className=''><FaAngleRight/></span>
        </button>
      </div>
    </div>

    </div>
   </div>

   {/* BOOK AN APPOINTMENT */}

   <div className='pb-16 pt-10 bg-slate-50'>
   <div className='p-6' id="contact">
        <p className='lg:text-4xl text-2xl font-medium text-[#213c21] font-serif flex justify-self-center items-center pb-2 pt-3'>Book An Appointment</p>
        <div className='flex justify-center items-center lg:pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
    </div>
    {/* <p className='text-5xl font-bold flex flex-col justify-center items-center p-10'>FORM<br/><span className='text-2xl'>(Work In Progress)</span></p> */}
    <div className='py-6 shadow-xl bg-white rounded-md lg:mx-40 lg:p-10 px-4 flex lg:flex-row flex-col'>
      <div className='bg-[#213c21] flex flex-col justify-center items-center lg:gap-10 gap-4 py-10 lg:px-14 px-5 lg:w-1/2'>
      <MdOutlineDateRange className='text-[200px] text-[#dbbf70]'/>
      <p className='text-white text-4xl font-bold'>Let's Talk</p>
      <p className='text-white text-center'>Ready to explore your supply chain transformation?<br/>
      Book a call with us.</p>
      </div>
      <div className='py-3 px-10 lg:w-1/2'>
      <p className='text-2xl font-[500 pb-3 font-serif text-[#213c21] w-full'>Request a Consultation</p>
        <form className='flex flex-col gap-2 font-sans'>
          <p>Name</p>
          <input placeholder='Your Name' type='name' className='border p-1 rounded-md px-2 mb-1 shadow-sm'/>
          <p>Email</p>
          <input placeholder='You@company.com' type='email' className='border p-1 rounded-md px-2 mb-1 shadow-sm'/>
          <p>Mobile Number</p>
          <input placeholder='Your Mobile Number' type='number' className='border p-1 rounded-md px-2 mb-1 shadow-sm'/>
          <p>Company</p>
          <input placeholder='Your Company' type='text' className='border p-1 rounded-md px-2 mb-1 shadow-sm'/>
          <p>How can we help ?</p>
          <textarea placeholder='Your Message' rows="5" className='border p-1 rounded-md px-2 shadow-sm'/>
          <button className='bg-[#dbbf70] text-[#213c21] p-3 rounded-md mt-2'>Schedule Now</button>
        </form>
      </div>
    </div>
   </div>

   {/* GLOBAL REACH */}

   <div className='pb-16 pt-10 bg-[#213c21]'>
   <div className='pb-6 '>
        <p className='lg:text-3xl xl:text-4xl text-2xl font-bold text-[#dbbf70] flex justify-self-center items-center pb-2 pt-3'>Global Reach</p>
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

    <div className='py-10'>
      <p className='text-base text-gray-500 flex justify-self-center items-center py-5'>Trusted by Companies</p>
      <div className='lg:flex grid grid-cols-3 lg:justify-between items-center pb-5 lg:px-40 font-serif text-gray-800'>
        <div className='flex flex-col gap-2 lg:text-xl text-sm items-center'><img src={partner1} alt="" className='lg:h-16 h-10 rounded-xl'/><p>Photon Softwares</p></div>
        <div className='flex flex-col gap-2 lg:text-xl text-sm items-center lg:pl-20'><img src={partner2} alt="" className='lg:h-16 h-10'/><p>Nathan Digital</p></div>
        <div className='flex flex-col gap-2 lg:text-xl text-sm items-center'><img src={partner3} alt="" className='lg:h-14 h-10 rounded-xl'/><p>Cross Culture Consulting</p></div>
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