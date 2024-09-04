import React from 'react'

const Feed = () => {
  return (

    <div className="bg-noise bg-center bg-cover h-screen"
      style={{ backgroundImage: "url(https://www.prsformusic.com/-/media/images/mmagazine/mm-article-images/news/equipment.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: "100vw" }}>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-6xl font-bold">Welcome to Buzzy Beats</h1>
          <p className="text-2xl mt-4">Your one stop shop for all things DJing</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">Get Started</button>
        </div>
    </div>  

    
  )
     

}
export default Feed