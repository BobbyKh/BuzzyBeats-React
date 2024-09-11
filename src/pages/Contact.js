import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      subject,
      message,
    };
    setLoading(true);
    fetch('http://127.0.0.1:8000/api/contactus/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setShowPopup(true);
        setLoading(false);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-12 flex justify-center">
      <div className="bg-inherit bg-black rounded-lg shadow-lg p-12 w-full md:w-1/2">
        <h2 className="text-5xl font-bold text-center text-white">Contact Us</h2>
        <p className="text-2xl mt-4 text-center text-white">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <label className="block">
            <span className="text-white">Name</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-inherit bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            " placeholder="John Doe" />
          </label>
          <label className="block mt-4">
            <span className="text-white">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-inherit bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            " placeholder="john@example.com" />
          </label>
          <label className="block mt-4">
            <span className="text-white">Subject</span>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-inherit bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            " placeholder="General Enquiry" />
          </label>
          <label className="block mt-4">
            <span className="text-white">Message</span>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-inherit bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            " rows="3" placeholder="Type your message here..."></textarea>
          </label>
          <button type="submit" className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <div className="flex justify-between items-center border-b border-gray-300 pb-4">
              <p className="text-3xl font-bold">Message Sent</p>
              <button onClick={() => setShowPopup(false)} className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <p className="mt-4 text-lg">Your message has been sent successfully. We will get back to you soon.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact


