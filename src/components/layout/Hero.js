import { Span } from 'next/dist/trace'
import RightIcon from '../icons/RightIcon'

const Hero = () => {
  return (
    <section className="grid grid-cols-2 gap-8 items-center mb-16">
        <div className="py-4">
            <h1 className='text-4xl font-semibold leading-normal'>Renting your <br />
                 <span className="text-secondary"> Dreamed Home</span> <br />  is Clicks Away</h1>
            <p className='text-gray-500 my-6'>
            Welcome! Are You In Urgent Need of Home to Rent, or Looking for a Better Location to Rent Home? We are here to help you find the perfect home that suits your needs and preferences.
             </p>
             <div className='flex items-center gap-4 mt-4'>
                <button className='flex  gap-2 text-white uppercase bg-primary px-4 py-2 rounded-full text-xl'>
                    Order Now 
                    <RightIcon className='w-6 h-6' />
                </button>
                <button className='flex gap-2 text-primary border-2 border-primary px-4 py-2 rounded-full'>
                    Learn More
                    <RightIcon className='w-6 h-6' />
                 </button>
             </div>
        </div>
        <div className='relative w-76 h-76'>
            <img src={"/heroimage.png"} alt={"house-img"} objectFit={"contain"} layout={"fill"}  />
        </div>

    </section>
  )
}

export default Hero