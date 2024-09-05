import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto p-12 flex justify-center">
      <div className="bg-inherit bg-black rounded-lg shadow-lg p-12 w-full md:w-1/2">
        <h2 className="text-5xl font-bold text-center text-white">Contact Us</h2>
        <p className="text-2xl mt-4 text-center text-white">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
        <form className="mt-12">
          <label className="block">
            <span className="text-white">Name</span>
            <input type="text" className="mt-1 block w-full px-3 py-2 bg-inherit bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            " placeholder="John Doe" />
          </label>
          <label className="block mt-4">
            <span className="text-white">Email</span>
            <input type="email" className="mt-1 block w-full px-3 py-2 bg-inherit bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            " placeholder="john@example.com" />
          </label>
          <label className="block mt-4">
            <span className="text-white">Message</span>
            <textarea className="mt-1 block w-full px-3 py-2 bg-inherit bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            " rows="3" placeholder="Type your message here..."></textarea>
          </label>
          <button type="submit" className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
