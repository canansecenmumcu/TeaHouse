"use client"
import React, { useRef, useState } from 'react';
//import emailjs from '@emailjs/browser';
import { Poppins } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  }

  return (
    <div className='bg-red-50  ' >
      {/* Contact Title */}
      <div className="flex flex-col items-center justify-center gap-3 m-14 " >
        <h2 className={`text-3xl uppercase font-semibold text-darkBrown ${poppins.className} mt-10 `} >contact us</h2>
        <div className="h-1 w-10 bg-darkBrown " />
      </div>
      {/* Contact Container */}
      <div className='flex flex-col md:flex-row mx-10 gap-14  ' >
        {/* Contact Info */}
        <div className='h-1/2 md:h-full md:w-1/2 flex flex-col items-center ' >
          {/* title */}
          <h1 className={`my-10 text-3xl md:text-4xl ${poppins.className} `} >Get in touch with us</h1>
          {/* Contact Icons & TEXT */}
          <div className='flex flex-col gap-10' >
            <div className='flex flex-row items-center gap-5 justify-start' >
              <FontAwesomeIcon icon={faEnvelope} className='h-8 text-green ' />
              <span className='text-start' >teahouse@macaron.com</span>
            </div>
            <div className='flex flex-row items-center gap-5' >
              <FontAwesomeIcon icon={faPhone} className='h-8 text-green ' />
              <span className='text-start' >+1 415 123 4567</span>
            </div>
            <div className='flex flex-row items-center gap-5 mb-10' >
              <FontAwesomeIcon icon={faMapMarkerAlt} className='h-8 text-green ' />
              <span className='text-start ml-2 ' >Pariser Platz 10117 Berlin, Germany</span>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className='h-1/2 md:h-full md:w-1/2 bg-white rounded-3xl text-base p-6 mb-10 flex-wrap ' >
          <div className='flex flex-col md:flex-row w-full gap-3 ' >
            {/* First Name */}
            <div className='flex flex-col gap-4 mb-10 w-full md:w-1/2 '>
              <span>First Name</span>
              <input type="text" name="user_firstName" className='rounded-lg p-4 shadow-md shadow-red-50' />
            </div>
            {/* Last Name */}
            <div className='flex flex-col gap-4 mb-10 w-full md:w-1/2 '>
              <span>Last Name</span>
              <input type="text" name="user_lastName" className='rounded-lg  p-4 shadow-md shadow-red-100' />
            </div>
          </div>
          {/* Email  */}
          <div className='flex flex-col gap-4 mb-10  ' >
            <span>Email (privacy policy)</span>
            <input
              name="user_email"
              type="email"
              className='rounded-lg  p-4 shadow-md shadow-red-100 w-full'
            />
          </div>
          {/* Message */}
          <div className='flex flex-col gap-4 mb-10  ' >
            <span>Message</span>
            <textarea
              name="user_message"
              rows={4}
              className='rounded-lg  p-4 shadow-md shadow-red-100 resize-none w-full '
              placeholder="I'm interested in learning more about..."
            />
          </div>
          {/* Button */}
          <div className='w-full ' >
            <button className='bg-pink-200 p-5 rounded-2xl text-white transform hover:scale-105 transition duration-300 ease-in-out ' >Send Message</button>
          </div>
          {success && <span className='text-green' >Message sent successfully!</span>}
          {error && <span className='text-red-500' >Message failed to send!</span >}
        </form>
      </div>
    </div>
  )
}

export default ContactPage;