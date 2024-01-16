export default function Laboratory() {

  return (
    <div>
      <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/contact-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>Laboratory</p>
          {/* <p className='text-xl font-light text-center text-white'>(As per Air Act:- 1981, Water Act: 1974 NOC, CC&A)</p> */}
        </div>
      </div>
      <div className=" my-20 mx-5 md:mx-40">
        <div className="font-lato my-8">
        <p className=" text-gray-600">We all know that the measurement is the primary stage for a change, which means that if something is measurable, then it is changeable. The Enviro Culture has a single-site laboratory stationed for environmental testing services.</p>
        </div>
        <div className="font-lato my-8">
        <p className=" text-gray-600">We have expanded ourselves in multiple tests to analyze the environment, and our team is clubbed with experienced scientific professionals. They help us prevail in the competitive market of environmental care services to the government and non-government sectors. We have been leading the environmental industry throughout the last decade.</p>
        </div>
        <div className="font-lato my-8">
        <p className=" text-gray-600">We provide a range of analyses and tests on the air, water, soil, solid, and toxic waste. Our labs follow the methods that are approved and in place for monitoring and analyzing the defined above categories. We also provide risk assessment and mitigation services to comply with your project with environmental standards.</p>
        </div>
        <div className="font-lato my-8">
        <p className=" text-gray-600">Due to environmental testing & analyzing experience, we can guide you with accurate measures along with perfect sample safety. Experienced professionals handle our strategies and methods to provide the most accurate results. We also assign a dedicated manager for communication and coordination.</p>
        </div>
        <div className="font-lato my-8">
        <p className=" text-gray-600">Our laboratory is having latest analytical and testing instruments, and we also follow all the regulatory requirements. Furthermore, all your test results stay confidential.</p>
        </div>
      </div>
    </div>
  );
}
