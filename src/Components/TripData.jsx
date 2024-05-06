import React from 'react'

function TripData(props) {
  return (
   
    <div className="container mx-auto p-8">
    <h1 className="text-4xl font-bold mb-8 text-center font-serif">{props.h1}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={props.image1} className="w-full h-64 object-cove transition-transform duration-700  transform hover:scale-110"/>
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4 font-serif">{props.trip1}</h2>
                <p className="text-gray-700 font-mono">{props.para}</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={props.image2} className="w-full h-64 object-cover transition-transform duration-700  transform hover:scale-110" />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4 font-serif">{props.trip2}</h2>
                <p className="text-gray-700 font-mono">{props.para}</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={props.image3} alt="Trip 3" className="w-full h-64 object-cover transition-transform duration-700  transform hover:scale-110" />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4 font-serif">{props.trip3}</h2>
                <p className="text-gray-700 font-mono">{props.para}</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default TripData