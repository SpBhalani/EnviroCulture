import InfraGallary from "@/components/InfrastructureGallary";
import Head from "next/head";

export default function Infrastructure() {


  return (
    <div id="infrastructure" className="">
        <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50 mb-10" style={{ backgroundImage: `url("/infrastructure-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>Infrastructure Photos</p>
          <p className='text-xl font-light text-center text-white'>Get in touch and let us know how can we help.</p>
        </div>
      </div>
        <InfraGallary />
      </div>
  );
}
