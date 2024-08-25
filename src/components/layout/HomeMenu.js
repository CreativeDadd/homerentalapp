import MenuItem from "../PropertyMenu/MenuItem"

const HomeMenu = ( {subHeader, mainHeader} ) => {
  return (
    <section>
        {/* <div className='absolute w-26 h-16 '>
            <div className='absolute right-0 w-16 h-16 '>
                <img src={"/deal8.jpg"} alt={"house-img"}  layout={"fill"} objectFit={"contain"}   />
            </div>
            <div className='absolue left-0 w-16 h-16 '>
                <img src={"/deal6.jpg"} alt={"house-img"}  layout={"fill"} objectFit={"contain"}   />
            </div>
        </div> */}

        <div className="text-center my-4">
            <h3 className="text-gray-500 leading-3 uppercase font-semibold pb-2">{subHeader}</h3>
            <h2 className="text-primary text-4xl font-bold">{mainHeader}</h2>
        </div>

        {/* Property listings grid */}
        <div className='grid grid-cols-3 gap-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          
         </div>
        
    </section>
  )
}

export default HomeMenu