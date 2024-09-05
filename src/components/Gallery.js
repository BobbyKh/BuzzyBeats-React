import React from 'react'

const Gallery = () => {
  return (
    <>
    <h2 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-500 font-bold text-center mt-12 mb-10  rounded-lg px-6">Studio Gallery</h2>
    
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 responsive  ">
      {[1, 2, 3, 4, 5, 6 , 7, 8].map((i) => (
        <div key={i} className="relative w-full h-64 transition duration-500 ease-in-out">
          <img
            className="w-full h-full object-cover absolute inset-0 filter drop-shadow-md hover:scale-110 transition duration-500 ease-in-out"
            src={`https://picsum.photos/id/${i * 10}/800/600?grayscale&blur=2`}
            alt=""
          />
          <img
            className="w-full h-full object-cover absolute inset-0 filter drop-shadow-md hover:scale-110 transition duration-500 ease-in-out"
            src={`https://picsum.photos/id/${i * 10 + 5 }/800/600?grayscale&blur=2`}
            alt=""
          />
          <img
            className="w-full h-full object-cover absolute inset-0 filter drop-shadow-md hover:scale-110 transition duration-500 ease-in-out"
            src={i % 2 === 0 ? `https://source.unsplash.com/1600x900/?${i * 10},music,vinyl` : `https://source.unsplash.com/1600x900/?${i * 10 + 5 },music,cd`}
            alt=""
          />
        </div>
      ))}
    </div>

    </>
  )
}

export default Gallery