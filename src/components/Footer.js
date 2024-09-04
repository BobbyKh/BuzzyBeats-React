import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-96 flex flex-col justify-center py-12 px-6 md:px-12">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center">
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook-f text-3xl text-blue-600 mr-6" />
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram text-3xl text-red-600 mr-6" />
          </a>
          <a href="https://www.twitter.com/">
            <i className="fab fa-twitter text-3xl text-blue-500 mr-6" />
          </a>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center text-center mt-6">
        <p className="text-lg">2022 Buzzy Beats. All rights reserved.</p>
        <p className="text-sm">1234 Some Street, City, State 12345</p>
      </div>
    </footer>

  )
}

export default Footer