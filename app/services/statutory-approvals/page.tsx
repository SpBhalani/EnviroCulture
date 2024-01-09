import Head from "next/head";

export default function StatutoryApprovals() {

  return (
    <div>
      <Head>
        <title>Enviro Culture | Statutory approvals</title>
        <meta name="description" content="We at Enviro culture (Polution Control agency) giving recommendation/ Solution for the Statutory approvals."></meta>
      </Head>
      <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/contact-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>Statutory approvals</p>
          <p className='text-xl font-light text-center text-white'>(As per Air Act:- 1981, Water Act: 1974 NOC, CC&A)</p>
        </div>
      </div>
      <div className=" my-20 mx-5 md:mx-40">
        <div className="font-lato my-8">
        <p className="text-2xl font-bold">CTE</p>
        <p className=" text-gray-600">As per Water Act :1974 & Air Act:1981 it is mendatory to obtain Consent to Establish for new and expansion industries from respective State Pollution Control Board.</p>
        </div>
        <div className="font-lato my-8">
        <p className="text-2xl font-bold">CTO</p>
        <p className=" text-gray-600">As per Water Act :1974 & Air Act:1981 it is mendatory to obtain Consent to Operate for new and expansion industries from respective State Pollution Control Board.</p>
        </div>
        <div className="font-lato my-8">
        <p className="text-2xl font-bold">CGWA (Central Ground Water Authority)</p>
        <p className=" text-gray-600">As per Honab&apos;le NGT has been constituted of the Environment Act 1986 to get prior permission for extract ground water.</p>
        </div>
        <div className="font-lato my-8">
        <p className="text-2xl font-bold">Form IV, V, Environmental compliance report:</p>
        <p className=" text-gray-600">: Every year industries have to submit the annual data to Pollution Control Committee.</p>
        </div>
        <div className="font-lato my-8">
        <p className="text-2xl font-bold">Half Yearly EC Compliance Report:</p>
        <p className=" text-gray-600">As per the EIA notification 2006 to submit six monthly compliance report to concern regulatory authority (SEIAA).</p>
        </div>
      </div>
    </div>
  );
}
