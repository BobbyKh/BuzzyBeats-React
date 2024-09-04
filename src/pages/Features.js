import React from 'react'

const Features = () => {
  return (
    <div className="container mx-auto p-12 bg-white rounded-lg shadow-lg">
      <h2 className="text-5xl font-bold">Music Production Features</h2>
      <ul className="list-disc mt-6 ml-6 space-y-2">
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Beat Production
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Mixing and Mastering
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Recording Studio Services
        </li>
      </ul>
    </div>
  )

}

export default Features