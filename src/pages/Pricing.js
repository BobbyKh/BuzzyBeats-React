import React from 'react'

const Pricing = () => {
  return (
    <div className="container mx-auto p-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://images.pexels.com/photos/38107/pexels-photo-38107.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="recording" className="w-full h-32 object-cover" />
        <h2 className="text-2xl font-bold">Song Recording</h2>
        <p className="text-lg mt-2">Record your song with our professional equipment and software.</p>
        <p className="text-lg mt-2">Price: $200</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Book Now</button>

      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://images.pexels.com/photos/38107/pexels-photo-38107.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="beatmaking" className="w-full h-32 object-cover" />
        <h2 className="text-2xl font-bold">Beat Productions</h2>
        <p className="text-lg mt-2">Get an exclusive beat made by our professional producers.</p>
        <p className="text-lg mt-2">Price: $100</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Book Now</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://images.pexels.com/photos/38107/pexels-photo-38107.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="mixing" className="w-full h-32 object-cover" />
        <h2 className="text-2xl font-bold">Mixing</h2>
        <p className="text-lg mt-2">We also offer additional services such as mixing and mastering.</p>
        <p className="text-lg mt-2">Price: Custom Quote</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Book Now</button>
      </div>
    </div>
  )

}

export default Pricing
