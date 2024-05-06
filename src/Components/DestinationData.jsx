import React from 'react'

function DestinationData(props) {
    return (
        <div>
            <p className="text-2xl mb-6 font-mono">{props.para1}</p>
            <h2 className="text-3xl font-bold mb-4 font-serif">{props.heading}</h2>
            <p className="text-2xl mb-20 my-5 font-mono">{props.para}</p>
            <div className="grid grid-cols-2 gap-10">
                <img src={props.image1} alt="Image 1" className="rounded-lg" />
                <img src={props.image2} alt="Image 2" className="rounded-lg -translate-y-8" style={{ marginTop: '-20px' }} />
            </div>
        </div>
    )
}

export default DestinationData