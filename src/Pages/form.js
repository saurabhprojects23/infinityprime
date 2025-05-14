import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaWhatsappSquare } from 'react-icons/fa'
import { MdOutlineDateRange } from 'react-icons/md'

const Form = () => {

     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_a0ihvki",
      "template_3itpz1d",
      form.current,
      "Ge8vCM5WRVbc7jQmt"
    ).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        alert("Message failed to send.");
      }
    );
  };



    const openWhatsApp = () => {
  const phone = '+971507239458'; // your phone number with country code
  const message = 'Hello, I want to know more about your services';
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
};

  return (
    <div className='pb-16 pt-10 bg-slate-50'>
       <div className='p-6' id="contact">
            <p className='lg:text-4xl text-2xl font-medium text-[#213c21] font-serif flex justify-self-center items-center pb-2 pt-3'>Book An Appointment</p>
            <div className='flex justify-center items-center lg:pb-4'><div className='lg:w-28 md:w-20 w-16 h-1 bg-[#dbbf70] rounded-3xl flex justify-center items-center'></div></div>
        </div>
        {/* <p className='text-5xl font-bold flex flex-col justify-center items-center p-10'>FORM<br/><span className='text-2xl'>(Work In Progress)</span></p> */}
        <div className='py-6 shadow-xl bg-white rounded-md lg:mx-40 lg:p-10 px-4 flex lg:flex-row flex-col'>
          <div className='bg-[#213c21] flex flex-col justify-center items-center lg:gap-6 gap-4 py-10 lg:px-14 px-5 lg:w-1/2'>
          <MdOutlineDateRange className='text-[200px] text-[#dbbf70]'/>
          <p className='text-white text-4xl font-bold'>Let's Talk</p>
          <div className='text-white text-lg flex flex-col gap-1'>
          <p>Email: rachid@primerinfinity.com</p>
          <p>Mobile: +97150723945</p>
          <p onClick={openWhatsApp} className='flex items-center gap-2'>Chat with Us on Whatsapp <FaWhatsappSquare className='text-[#dbbf70] text-4xl cursor-pointer'/></p>
          </div>
          <p className='text-white text-center'>Ready to transform your Supply Chain form Operational Burdens
          to Promise keeping Engines? <br/>Book a call with us</p>
          </div>
          <div className='py-3 px-10 lg:w-1/2'>
          <p className='text-2xl font-[500 pb-3 font-serif text-[#213c21] w-full'>Request a Consultation</p>
            <form className='flex flex-col gap-2 font-sans' ref={form} onSubmit={sendEmail}>
              <p>Name</p>
              <input placeholder='Your Name' name='user_name' type="text" required className='border p-1 rounded-md px-2 mb-1 shadow-sm'/>
              <p>Email</p>
              <input placeholder='You@company.com' name='user_email' type="email" required className='border p-1 rounded-md px-2 mb-1 shadow-sm'/>
              <p>Mobile Number</p>
              <input placeholder='Your Mobile Number' name='user_mobile' type="number" required className='border p-1 rounded-md px-2 mb-1 shadow-sm'/>
              <p>Company</p>
              <input placeholder='Your Company' name='user_company' type="text" required className='border p-1 rounded-md px-2 mb-1 shadow-sm'/>
              <p>How can we help ?</p>
              <textarea placeholder='Your Message' name='user_message' required rows="5" className='border p-1 rounded-md px-2 shadow-sm'/>
              <button className='bg-[#dbbf70] text-[#213c21] p-3 rounded-md mt-2' type="submit">Request Now</button>
            </form>
          </div>
        </div>
       </div>
    
  )
}

export default Form