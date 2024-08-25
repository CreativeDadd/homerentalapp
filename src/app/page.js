import Image from "next/image";
import Link from "next/link";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeader from "../components/layout/SectionHeader";
import menuItem from "../components/PropertyMenu/MenuItem";

export default function Home() {
  return (
    <>

    <Hero /> 
    <HomeMenu  subHeader={"Check Out"}
      mainHeader={"Properties for Rents"} />

      <menuItem />
    <section>
      <SectionHeader 
      subHeader={"Our Story"}
      mainHeader={" About Us"}
      />
      <div className="text-gray-500 max-w-md mx-auto mt-4 text-xl  p-4 text-center flex-col gap-4">
        <p>Welcome to Orange-Sun Homes Limited, where we redefine the meaning of luxurious living. With a strong commitment to excellence and a passion for creating dream homes, we have emerged as a leading real estate company. </p><br/>
        <p>Our mission is to provide exceptional real estate services that go beyond expectations. We are dedicated to helping you find the ideal property that suits your lifestyle and needs. With a focus on personalized service.</p>
      </div>
    </section>
    <section className='text-center mt-12'>
      <SectionHeader subHeader={"Don't Hesitate"} mainHeader={"Contact Us"} />
      

      <div className='mt-8'>
      <a href='+2347035391488' className='underline text-4xl py-2 font-semibold' >
      +234 703 539 1488
      </a>
      </div>
    </section>
    
    </>
  );
}
