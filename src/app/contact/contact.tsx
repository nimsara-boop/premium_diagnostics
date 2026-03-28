"use client"
import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from "lucide-react";
import Link from 'next/link'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "a060a502-a729-48dd-8dbd-33f446956011");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
      className='min-h-screen bg-cover bg-center px-4 sm:px-6 md:px-10 py-40 flex items-center justify-center'
      style={{ backgroundImage: `url('/labpic_7.png')` }}
      >

      <div className='w-full max-w-4xl bg-gray-300/80 rounded-2xl p-6 sm:p-8 md:p-10'>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* TITLE */}
          <h1 className='text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center'>
            Contact <span className='underline font-light'>Us</span>
          </h1>

          <p className='text-blue-800 text-center mt-3 mb-8 text-sm sm:text-base max-w-md mx-auto'>
            We’re just a Call, Email, or a WhatsApp message away.
          </p>

          {/* FORM */}
          <form onSubmit={onSubmit} className='text-blue-800 space-y-6'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

              <div className='text-left'>
                <label className='text-sm sm:text-base'>Your Name</label>
                <input
                  className='w-full border-2 border-gray-300 rounded py-3 px-4 mt-2'
                  type='text'
                  name="Name"
                  placeholder='Your Name'
                  required
                />
              </div>

              <div className='text-left'>
                <label className='text-sm sm:text-base'>Your Email</label>
                <input
                  className='w-full border-2 border-gray-300 rounded py-3 px-4 mt-2'
                  type="email"
                  name='Email'
                  placeholder='Your Email'
                  required
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div className='text-left'>
              <label className='text-sm sm:text-base'>Message</label>
              <textarea
                className='w-full border-2 border-gray-300 rounded py-3 px-4 mt-2 h-40 sm:h-48 resize-none'
                name='Message'
                placeholder='Message'
                required
              />
            </div>

            {/* BUTTON */}
            <div className='flex justify-center'>
              <button className='bg-blue-900 text-white py-2 px-8 sm:px-12 rounded cursor-pointer text-sm sm:text-base'>
                {result ? result : "Send Message"}
              </button>
            </div>

            <hr />

            {/* QUICK CONTACT */}
            <div className='flex flex-col items-center gap-4'>

              <p className='text-sm sm:text-base'>OR</p>

              <div className="flex flex-col sm:flex-row gap-4">

                {/* CALL */}
                <a
                  href="tel:+94753103639"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition text-sm sm:text-base"
                >
                  <Phone size={18} /> Call Us
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/947753103639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition text-sm sm:text-base"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>

              </div>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact