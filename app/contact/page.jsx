import Image from 'next/image';
import React from 'react';

const ContactPage = () => {
  return (
    <div className=' bg-slate-50 py-10 md:py-20 relative md:z-10'>
      <div className='lg:w-[45%] md:w-[50%] w-[90%] m-auto'>
        <h1 className='md:text-3xl text-2xl font-heading font-bold text-center text-black py-5'>Get in Touch</h1>
        <p className='md:text-base text-sm text-gray text-center'>
          Contact us to publish your content and show ads to our website and get a good reach.        </p>
      </div>
      <div className='w-[80%] m-auto py-10 flex flex-col md:flex-row gap-5'>
        <div className='flex flex-col md:w-[30%] space-y-4 items-center rounded-xl bg-white py-8'>
          <div className=' rounded-full bg-purple p-3 md:p-5 w-fit'>
            <Image src='/office.png' alt='' height={20} width={20} />
          </div>
          <p className='text-sm md:text-base font-semibold text-purple font-heading'>Office</p>
          <p className='text-xs md:text-sm text-gray'>Victoria Street, London, UK</p>
        </div>
        <div className='flex flex-col md:w-[30%] space-y-4 items-center rounded-xl bg-white py-8'>
          <div className=' rounded-full bg-purple p-3 md:p-5 w-fit'>
            <Image src='/email.png' alt='' height={20} width={20} />
          </div>
          <p className='text-sm md:text-base font-semibold text-purple font-heading'>email</p>
          <p className='text-xs md:text-sm text-gray'>hello@zarrin.com</p>
        </div>
        <div className='flex flex-col md:w-[30%] space-y-4 items-center rounded-xl bg-white py-8'>
          <div className=' rounded-full bg-purple p-3 md:p-5 w-fit'>
            <Image src='/office.png' alt='' height={20} width={20} />
          </div>
          <p className='text-sm md:text-base font-semibold text-purple font-heading'>Office</p>
          <p className='text-xs md:text-sm text-gray'>Victoria Street, London, UK</p>
        </div>
      </div>
      <div className='relative md:h-[400px] h-[250px] w-full'>
        <Image src='/contact.png' alt='' fill />
      </div>

      <div className='m-auto md:w-[35%] w-full flex items-center relative md:bottom-32'>
        <form className=" m-auto py-10 bg-white w-full rounded-lg shadow-md font-heading text-gray">
          <div className='flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center'>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" className="md:w-full px-4 py-2 border-lightGray border rounded-lg" required />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" className="md:w-full px-4 py-2 border-lightGray border rounded-lg" required />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" name="phone" className="md:w-full px-4 py-2 border-lightGray border rounded-lg" required />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
              <input type="text" name="subject" className="md:w-full px-4 py-2 border-lightGray border rounded-lg" required />
            </div>
            <div className="mb-4 md:w-[80%]">
              <label className="block mb-2 text-sm w-full font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" className="md:w-full h-36 px-4 py-2 border-lightGray border rounded-lg" required></textarea>
            </div>
          </div>


          <button type="submit" className="py-3 px-6 font-heading m-auto flex items-center justify-center text-white bg-purple rounded-lg border hover:border-purple hover:bg-transparent hover:text-purple transition ease-in delay-150">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
