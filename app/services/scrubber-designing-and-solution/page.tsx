import Head from "next/head";

export default function ScrubberDesigningAndSolution
() {
  return (
    <div>
      <Head>
        <title>Enviro Culture | Scrubber Designing and Solution</title>
        <meta name="description" content="We at Enviro culture (Polution Control agency) giving recommendation/ Solution for the scrubber designing."></meta>
      </Head>
      <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/contact-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className='mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>Scrubber Designing and Solution</p>
          {/* <p className='text-xl font-light text-center text-white'>(As per Air Act:- 1981, Water Act: 1974 NOC, CC&A)</p> */}
        </div>
      </div>
      <div className=" my-20 mx-5 md:mx-40">
        <div className="font-lato my-8">
        <p className=" text-gray-600">We are made up of scrubber design for HCL,CL2, HBR, Br2 , SO2 and we are giving recommendation/ Solution for the scrubber designing.</p>
        </div>
      </div>
    </div>
  );
}
