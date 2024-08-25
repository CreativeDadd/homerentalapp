import React from 'react'

const SectionHeader = ({subHeader, mainHeader}) => {
  return (
    <>
     <div className="text-center mt-16">
            <h3 className="text-gray-500 leading-3 uppercase font-semibold mb-2">{subHeader} </h3>
            <h2 className="text-primary text-4xl font-bold">{mainHeader}</h2>
        </div>
    </>
  )
}

export default SectionHeader