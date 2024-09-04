import React from 'react'

const Pricing = () => {
  return (
    <div className="container mx-auto p-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://source.unsplash.com/200x200/?music,recording" alt="recording" className="w-full h-32 object-cover" />
        <h2 className="text-2xl font-bold">Song Recording</h2>
        <p className="text-lg mt-2">Record your song with our professional equipment and software.</p>
        <p className="text-lg mt-2">Price: $200</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://source.unsplash.com/200x200/?music,beatmaking" alt="beatmaking" className="w-full h-32 object-cover" />
        <h2 className="text-2xl font-bold">Beat Productions</h2>
        <p className="text-lg mt-2">Get an exclusive beat made by our professional producers.</p>
        <p className="text-lg mt-2">Price: $100</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://source.unsplash.com/200x200/?music,mixing" alt="mixing" className="w-full h-32 object-cover" />
        <h2 className="text-2xl font-bold">Mixing</h2>
        <p className="text-lg mt-2">We also offer additional services such as mixing and mastering.</p>
        <p className="text-lg mt-2">Price: Custom Quote</p>
      </div>
    </div>
  )

}

export default Pricing