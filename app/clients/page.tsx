import Head from "next/head";

export default function Clients() {

  const LOGOS = [
    <img key='1' src={'/clients/image2.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='2' src={'/clients/image3.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='3' src={'/clients/image4.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='4' src={'/clients/image5.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='5' src={'/clients/image6.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='6' src={'/clients/image7.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='7' src={'/clients/image8.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='8' src={'/clients/image9.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='9' src={'/clients/image10.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='10' src={'/clients/image11.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='11' src={'/clients/image12.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='12' src={'/clients/image13.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='13' src={'/clients/image14.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='14' src={'/clients/image15.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='15' src={'/clients/image16.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='16' src={'/clients/image17.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='17' src={'/clients/image18.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='18' src={'/clients/image19.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='19' src={'/clients/image20.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='20' src={'/clients/image21.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='21' src={'/clients/image22.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
    <img key='22' src={'/clients/image23.png'} alt="Our Clients Logo" className="w-40 p-3 md:w-80 md:p-6"/>,
  ];
  return (
    <div id="infrastructure" className="">
      <Head>
        <title>Enviro Culture | Clients</title>
        <meta name="description" content="Know our clients who all got benefits of Polution controll services provided by Enviroculture."></meta>
      </Head>
        <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50 mb-10" style={{ backgroundImage: `url("/client-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className='mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>Clients</p>
          <p className='text-xl font-light text-center text-white'>Trust the reviews and see what our clients say about us.</p>
        </div>
      </div>
        <div className="m-5 flex flex-wrap justify-center">
            {LOGOS.map((logo, index) => {
              return(
                <div key={index} className="md:mx-6 mx-1 my-3 bg-white shadow-xl rounded-3xl flex items-center">
                  {logo}
                </div>
              )
            })}
        </div>
      </div>
  );
}
