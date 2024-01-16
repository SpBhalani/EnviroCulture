export default function WasteManagement
() {
  return (
    <div>
      <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/contact-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>Waste Management</p>
          {/* <p className='text-xl font-light text-center text-white'>(As per Air Act:- 1981, Water Act: 1974 NOC, CC&A)</p> */}
        </div>
      </div>
      <div className=" my-20 mx-5 md:mx-40">
        <div className="font-lato my-8">
        <p className=" text-gray-600">As Per the Hazardous Waste Management Rules 2016(under Environment (Protection) Act 1986) for the Generation, Treatment, Storage, Transportation and Disposal of hazardous Waste( As listed in schedule I and II of the said notification) Authorization is Mandatory. For Obtaining Authorization application is required to make in a prescribed Format with required Documents.</p>
        </div>
        <div className="font-lato my-8">
        <p className=" text-gray-600">The waste can be of many types, such as liquids, sludge, gases, or solids which produced during any manufacturing or industrial activity.</p>
        </div>
        <div className="font-lato my-8">
        <p className=" text-gray-600">Government bodies are also closely attentive to waste management. Enviro culture provides waste management services to ensure proper handling and disposal of the waste from your project in a cost-effective manner.</p>
        </div>
      </div>
    </div>
  );
}
