"use client"
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Enviro Culture | Services</title>
        <meta name="description" content="Know more about the Services to get rid of your problem regarding pollution management."></meta>
      </Head>
      <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/service-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-50' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-5xl font-bold text-center text-white'>Services</p>
          <p className='text-xl font-light text-center text-white'>GPCB recognized schedule 2 Auditor & NABL Accreditation laboratory</p>
        </div>
      </div>
      <div className='md:flex md:items-center '>
        <img className='my-5 px-10 md:px-40' src={'/city-graphics.svg'} alt="City Graphics for Services"/>
        <div className='text-center md:text-left p-4 md:pl-10 md:pr-40'>
        <p className=' text-4xl font-extrabold font-sans '>We provide excellent solutions to save the environment.</p><br />
          <p className='font-xs font-light'>Modernization and development of new projects are indeed a way to prosperity in the current fast-paced decade. Still, it is equally very crucial to control and negative impacts on the environment. We have a robust team and laboratory to take care of each requirement. We also supply products to control any type of pollution and manage the waste from your projects and industries.</p><br />
          <p className='font-xs font-light'>Our laboratory is a hi-tech solution for monitoring and assessing the impacts on the environment from your projects. We serve your business in legal compliance of environments levied by the government in any part of the country.</p>
        </div>
      </div>
      <div className="md:px-10 my-10 ">

        {/* header part */}
        {/* Title */}
        <div className="text-xl md:text-4xl font-bold text-center">
          <div className="flex justify-center ">
            <p className="relative font-serif">
              Our Services
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

        {/* Box part */}
        <div className="flex md:p-24 flex-wrap justify-center font-lato">
          <div onClick={() => router.push('/services/statutory-approvals')} className="w-full md:basis-[30%] shadow-lg group hover:shadow-xl m-5 flex flex-col items-center space-y-2 p-6 hover:cursor-pointer">
            <Image className="invert-[20%] group-hover:invert-0" src={'/ic_statutory_approvals.svg'} alt="ic_statutory_approvals" height={100} width={100} />
            <div className="text-center text-2xl font-semibold group-hover:text-[#23ae51]">
              Statutory approvals <br />
              <span className="text-sm -mt-3">
                (As per Air Act:- 1981, Water Act: 1974 NOC, CC&A)
              </span>
            </div>
            <p className="text-center">
              As per Water Act :1974 & Air Act:1981 it is mendatory to obtain Consent to Establish for new and expansion industries from respective State Pollution Control Board.
            </p>
          </div>
          <div onClick={() => router.push('/services/laboratory')} className="w-full md:basis-[30%] shadow-lg group hover:shadow-xl m-5 flex flex-col items-center space-y-2 p-6 hover:cursor-pointer">
            <Image className="invert-[20%] group-hover:invert-0" src={'/ic_laboratory.svg'} alt="ic_laboratory" height={100} width={100} />
            <div className="text-center text-2xl font-semibold group-hover:text-[#23ae51]">
              Laboratory
            </div>
            <p className="text-center">
              We have a robust squad of experts that are at your services in any business challenges. We promise the most accurate results in our services that are carefully driven under the supervision of environmental experts.
            </p>
          </div>
          <div onClick={() => router.push('/services/pollution-control-and-treatment')} className="w-full md:basis-[30%] shadow-lg group hover:shadow-xl m-5 flex flex-col items-center space-y-2 p-6 hover:cursor-pointer">
            <Image className="invert-[20%] group-hover:invert-0" src={'/ic_pollution_control_and_treatment.svg'} alt="ic_pollution_control_and_treatment" height={100} width={100} />
            <div className="text-center text-2xl font-semibold group-hover:text-[#23ae51]">

              Pollution Control and Treatment<br />
              <span className="text-sm -mt-3">
                TURN KEY PROJECT LIKE ETP, STP, RO MANUFACTURER AND SUPPLIER
              </span>
            </div>
            <p className="text-center">
              You don&apos;t need to worry about any significant or organic pollutants coming in the way of the environmental compliance of your business. We have a dedicated team to take care of such worries.
            </p>
          </div>
          <div onClick={() => router.push('/services/eia-studies')} className="w-full md:basis-[30%] shadow-lg group hover:shadow-xl m-5 flex flex-col items-center space-y-2 p-6 hover:cursor-pointer">
            <Image className="invert-[20%] group-hover:invert-0" src={'/ic_EIA_studies.svg'} alt="ic_EIA_studies" height={100} width={100} />
            <div className="text-center text-2xl font-semibold group-hover:text-[#23ae51]">
              EIA Studies
            </div>
            <p className="text-center">
              Due to our streamlined processes and global team, our technical support, communication, and turnaround time is unparalleled.
            </p>
          </div>
          <div onClick={() => router.push('/services/waste-management')} className="w-full md:basis-[30%] shadow-lg group hover:shadow-xl m-5 flex flex-col items-center space-y-2 p-6 hover:cursor-pointer">
            <Image className="invert-[20%] group-hover:invert-0" src={'/ic_waste_management.svg'} alt="ic_waste_management" height={100} width={100} />
            <div className="text-center text-2xl font-semibold group-hover:text-[#23ae51]">
              Waste Management
            </div>
            <p className="text-center">
              We are capable of delivering innovative one-stop solutions to your wastewater management and treatment, sewerage management, solid waste, and hazardous waste management or sludge management.
            </p>
          </div>
          <div onClick={() => router.push('/services/scrubber-designing-and-solution')} className="w-full md:basis-[30%] shadow-lg group hover:shadow-xl m-5 flex flex-col items-center space-y-2 p-6 hover:cursor-pointer">
            <Image className="invert-[20%] group-hover:invert-0" src={'/ic_scrubber_designing_and_solution.svg'} alt="ic_scrubber_designing_and_solution" height={100} width={100} />
            <div className="text-center text-2xl font-semibold group-hover:text-[#23ae51]">
              Scrubber Designing and Solution
            </div>
            <p className="text-center">
              We are made up of scrubber design for HCL,CL2, HBR, Br2 , SO2 and we are giving recommendation/ Solution for the scrubber designing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
