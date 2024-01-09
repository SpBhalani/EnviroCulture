import Head from "next/head";

export default function AboutUs() {



  return (
    <div>
      <Head>
        <title>Enviro Culture | About Us</title>
        <meta name="description" content="Enviro Culture is a pollution control consultancy services provider to enhance and adhere to your business standards."></meta>
      </Head>
     <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/about-banner.jpg")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>About Us</p>
          <p className='text-xl font-light text-center text-white'>Get in Touch and let us know how can we help.</p>
        </div>
      </div>
      <div className="px-5 text-center md:px-10 py-20 -mt-5 flex flex-col justify-center bg-cover bg-no-repeat w-full text-white space-y-10 md:space-y-0" style={{ backgroundImage: `url('/bg-about-us.jpg')` }}>
        <div className="basis-3/4 md:px-28 font-lato">
          <p>
            Our company was established in the year 2018 by Enviro Culture Pollution Control Consultant Services. We are into the market as manufacturer, supplier and service provider for the environment-related concerns. The product and services that we offer accommodate using materials of high quality and advanced technology using proper observation with fixed international standards. We also offer attractive features with low maintenance and supreme quality. Our services are user-friendly, trustworthy, and consume less space and energy. They have solid designs, which are of high demand in the market.
          </p>
          <br />
          <p>
            We accept the client's challenges and help them to better services. We build the modern India with better environment to next generation.
          </p>
        </div>
      </div>
      <div className="flex flex-col m-5 md:mr-20 md:my-5 md:ml-0 md:flex-row">
        <img className="md:basis-1/2 md:w-1/2" src={'/about-page-pic.jpeg'} alt="Vision and Mission Page Image"/>
        <div className="md:basis-1/2 p-5 bg-gray-300 md:px-20 md:py-40">
          <p className="text-2xl font-bold md:text-4xl md:font-extrabold mb-6">Our Vision and Mission</p>
          <p className="text-sm text-gray-700 font-light mb-3 ">Our vision is to achieve international recognition as, supplier and the services provider for environment-related concerns for the industrial, commercial, and governmental projects. We look forward to introducing and providing technology-enabled green solutions for controlling any pollution on the earth planet.</p>
          <p className="text-sm text-gray-700 font-light mb-3">Adapting professional management and leadership in business by bringing change. We committed to deliver best services to better environment for us and next generation.</p>
          <p className="text-sm text-gray-700 font-light mb-3">Provide minimum use of natural resource and to give maximum utilization of resources.</p>
        </div>
      </div>
      <div className="flex flex-col m-5 md:ml-20 md:my-5 md:mr-0 md:flex-row">
        <img className="md:basis-1/2 md:w-1/2 md:order-last" src={'/about-page-pic.jpeg'} alt="Strength Image"/>
        <div className="md:basis-1/2 p-5 bg-gray-300 md:px-20 md:py-40">
          <p className="text-2xl font-bold md:text-4xl md:font-extrabold mb-6">Our Strength</p>
          <p className="text-sm text-gray-700 font-light mb-3 ">Our approach to completion of the project by deep analysis and superior services is one of our greatest strengths. We believe in conserving our nature. All this is based on one single anthem: We want our involvement in saving the earth from any pollution and make it a green place for any living being existing on this planet.</p>
          <p className="text-sm text-gray-700 font-light mb-3">This does not mean that we hamper our progress in industrialization but instead, get pieces of technology involved and implemented in the process of reducing and controlling any threat to the environment.</p>
        </div>
      </div>
    </div>
  );
}
