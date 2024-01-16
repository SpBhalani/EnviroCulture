export default function EIAStudies
() {
  return (
    <div>
      <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/contact-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>EIA Studies</p>
          {/* <p className='text-xl font-light text-center text-white'>(As per Air Act:- 1981, Water Act: 1974 NOC, CC&A)</p> */}
        </div>
      </div>
      <div className=" my-20 mx-5 md:mx-40">
        <div className="font-lato my-8">
        <p className=" text-gray-600">Enviro Culture is one of the most renowned consultancy services that offers the high-quality impact assessment of the environment. We guide our clients to get legal approvals from the authorities that are responsible for levying restrictions and prohibitions to save the environment from pollutions toxic wastes.</p>
        </div>
        <div className="font-lato my-8">
        <p className=" text-gray-600">Our environmental impact services are carried out by scientific experts and professional team in a short time. So that you can take mitigation measures against the impacts that may come in the way of clearances. We also provide products and management services on your proposed project.</p>
        </div>
        <div className="font-lato my-8">
        <p className=" text-gray-600">We also perform frequent audits on the environment at regular intervals to ensure the environmental compliance of your project with the laws and enforcements. Not only this, but we also provide assistant to mitigate the risks and control the harm caused to the environment as a result of your project.</p>
        </div>
        <div className="font-lato my-8">
        <p className=" text-gray-600">Based on the testing, audits, and analysis, our team also takes the responsibility to form a standard guide of measures to be followed in the project. This can be through the duration of the project or after the accomplishment.</p>
        </div>
      </div>
    </div>
  );
}
