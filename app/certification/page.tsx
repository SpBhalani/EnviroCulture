"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const params = useSearchParams()
  const [certyNumber, setCertyNumber] = useState(0)
  const  certynumber = params.get('certynumber')
  useEffect(() => {
    if (certynumber) {
      setCertyNumber(Number(certynumber))
    }
  }, [])
  return (
    <div>
      <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/about-banner.jpg")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>Certificates</p>
          <p className='text-xl font-light text-center text-white'>Discover my certification portfolio, a curated compilation of accomplishments spanning different disciplines and domains.</p>
        </div>
      </div>
      <div className="my-10">
        <div className="text-xl md:text-4xl font-bold text-center mb-10">
          <div className="flex justify-center ">
            <p className="relative font-serif">
              Our Certification
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" className="-ml-3 -mt-2" width="42" height="22" viewBox="0 0 42 22">
              <defs>
                <clipPath id="clip-title-leaf">
                  <rect width="42" height="22" />
                </clipPath>
              </defs>
              <g id="title-leaf" clipPath="url(#clip-title-leaf)">
                <g id="Group_5294" data-name="Group 5294" transform="translate(-288.214 -1059.171)">
                  <g id="Group_5081" data-name="Group 5081" transform="translate(307.558 1064.458)">
                    <path id="Path_11449" data-name="Path 11449" d="M200.33-536.924c11.579,0,12.464-6.55,18.662-12.7a12.638,12.638,0,0,0-6.47-1.553c-4.087,0-16.176,2.735-16.176,14.113a7.937,7.937,0,0,0,.34,2.6s3.887-6.295,10.618-8.186C207.3-542.644,202.555-539.786,200.33-536.924Z" transform="translate(-196.336 551.172)" fill="#23ae51" />
                  </g>
                  <g id="Group_5082" data-name="Group 5082" transform="translate(288.214 1059.171)">
                    <path id="Path_11450" data-name="Path 11450" d="M145.455-558.172c-8.936,0-9.619-5.055-14.4-9.8a9.753,9.753,0,0,1,4.994-1.2c3.154,0,12.484,2.11,12.484,10.892a6.127,6.127,0,0,1-.263,2.006s-3-4.858-8.195-6.317A23.984,23.984,0,0,1,145.455-558.172Z" transform="translate(-131.052 569.168)" fill="#23ae51" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex justify-center flex-wrap md:space-x-20">
          <div className={`bg-white p-4 drop-shadow-md m-5 cursor-pointer ${certyNumber === 0 ? ' drop-shadow-2xl' : ''}`} onClick={() => setCertyNumber(0)}>
            <Image src={'/GPCB-Recognized.png'} alt="GPCB-Recognized" height={200} width={150} />
          </div>
          <div className={`bg-white p-4 drop-shadow-md m-5 cursor-pointer ${certyNumber === 1 ? ' drop-shadow-2xl' : ''}`} onClick={() => setCertyNumber(1)}>
            <Image src={'/NABL-certificate-home.png'} alt="NABL-certificate" height={200} width={150} />
          </div>
          <div className={`bg-white p-4 py-10 drop-shadow-md m-5 cursor-pointer ${certyNumber === 2 ? ' drop-shadow-2xl' : ''}`} onClick={() => setCertyNumber(2)}>
            <Image src={'/iso_certy.png'} alt="iso-certificate" height={300} width={150} />
          </div>
          <div className="bg-white p-4 py-10 drop-shadow-xl m-5 cursor-pointer" >
            <Image src={'/rspcblogo.jpeg'} alt="iso-certificate" height={300} width={150} />
          </div>
        </div>
      </div>
      <div>
        {
          certyNumber === 1
            ?
            <div>
              <img src={'/certificates/NABL.png'} className="w-[70%] md:w-[30%] mx-auto my-10" alt="NABL Certificate"/>
            </div>
            :
            <></>
        }
        {
          certyNumber === 0
            ?
            <div className="md:flex md:justify-evenly">
              <img src={'/certificates/GPCB1.png'} className="w-[70%] md:w-[30%] mx-auto md:mx-0 my-10" alt="GPCB Certificate"/>
              <img src={'/certificates/GPCB2.png'} className="w-[70%] md:w-[30%] mx-auto my-10 md:mx-0" alt="GPCB Certificate"/>
            </div>
            :
            <></>
        }
        {
          certyNumber === 2
            ?

            <div>
              <img src={'/certificates/ISO.png'} className="w-[70%] md:w-[30%] mx-auto my-10" alt="ISO Certificate"/>
            </div>
            :
            <></>
        }
      </div>
    </div>
  );
}
