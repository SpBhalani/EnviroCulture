"use client"
import ClientCarousel from "@/components/ClientSliderComponent";
import SliderComponent from "@/components/SliderComponent";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import InfraGallary from "@/components/InfrastructureGallary";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Head from "next/head";


export default function Home() {

  const router = useRouter()
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    scrollToTop()
  }, [])
  return (
    <div>
      <Head>
        <title>Enviro Culture | Home</title>
        <meta name="description" content="Enviro Culture is a pollution control consultancy services provider to enhance and adhere to your business standards."></meta>
      </Head>
      {/* Slider */}
      <SliderComponent />

      {/* About Us  */}
      <div className="px-5 md:px-10 py-20 -mt-5 flex flex-col md:flex-row justify-center bg-cover bg-no-repeat w-full text-white space-y-10 md:space-y-0" style={{ backgroundImage: `url('/bg-about-us.jpg')` }}>
        <div className="relative text-xl md:text-4xl font-bold md:basis-1/4 mx-auto text-center ">
          <div className="h-10 w-10 rounded-full absolute -top-3 md:-top-3 -left-4 md:left-1/4" style={{ backgroundColor: 'rgba(35, 174, 81, 0.22)' }}></div>
          <p className="font-serif font-bold">
            About Us
          </p>
          <Image className="absolute -right-7 md:right-1/4 -top-2" src={'/title-leaf-white.svg'} alt="Enviro Culture Logo" height={30} width={42} />
        </div>
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

      {/* Services */}
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
              You don't need to worry about any significant or organic pollutants coming in the way of the environmental compliance of your business. We have a dedicated team to take care of such worries.
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

      {/* Clients */}
      <div className="mb-3">
        <div className="text-xl md:text-4xl font-bold text-center mb-3">
          <div className="flex justify-center ">
            <p className="relative font-serif">
              Our Clients
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
        <ClientCarousel />
      </div>

      {/* Why Us */}
      <div className=" relative bg-cover bg-no-repeat p-10 w-full flex flex-col-reverse md:flex-row justify-center" style={{ backgroundImage: `url('/bg-why.jpg')` }}>
        <div className="basis-1/3 relative ">
          <Image className="hidden md:block" src={'/dots-pattern.png'} alt="dot" height={100} width={260} />
          <Image className="md:hidden" src={'/dots-pattern.png'} alt="dot" height={100} width={160} />
          <Image className="absolute  top-32 md:left-20 rounded-xl" src={'/why-video-img.jpg'} alt="Play Icon" height={100} width={400} />
          <Dialog>
            <DialogTrigger>
              <Image className="absolute top-[53%] md:top-[22rem] left-[8rem] md:left-[16rem] hover:cursor-pointer" src={'/play-icon.png'} alt="Play Icon" height={100} width={50} />
            </DialogTrigger>
            <DialogContent className="border-none min-w-[80%] min-h-[40%] md:min-h-[80%]">
              <iframe id="video" className={`w-[100%] h-[100%]`} src="//www.youtube.com/embed/9h7P8gWpolQ?rel=0&autoplay=1" allowFullScreen></iframe>
            </DialogContent>
          </Dialog>
        </div>

        <div className="basis-2/3 text-white space-y-8 md:pl-40 md:pr-72 md:pt-32 font-lato">
          <p className=" text-3xl md:text-5xl font-bold font-sans">Why Enviro Culture</p>
          <p className="text-lg">With our global team of experts, we work round the
            clock to deliver best in market solutions related to:
          </p>
          <ul className="list-disc font-semibold space-y-2">
            <li>
              <p>Statutory approvals</p>
              <span className="text-xs opacity-90" > (As per Air Act:- 1981, Water Act: 1974 NOC, CC&A)Pollution Control and Treatment)</span>
            </li>
            <li>
              <span>Environmental Testing Laboratory</span>
            </li>
            <li>
              <span>Turn key project like manufacturing and supplier of Air & water pollution control technologies and treatment plant</span>
            </li>
            <li>
              <span>Third Party Audit & Monitoring</span>
            </li>
            <li>
              <span>Environment Impact Assessment</span>
            </li>
            <li>
              <span>Waste Management</span>
            </li>
          </ul>
          <Separator className="my-4 bg-white opacity-40" />
          <div className="flex space-x-3">
            <Image className="bg-white rounded-full p-1" src={'/client-profile.png'} alt="client" height={100} width={50} />
            <div>
              <span className="block text-xs opacity-90">Interested in our values?</span>
              <span className="cursor-pointer" onClick={() => router.push('/about')}>
                Learn more about company
                <Image className="inline ml-5 invert " src={'/right-arrow.png'} alt="arrow" height={10} width={25} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Certification */}
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
        <div className="flex justify-center md:space-x-20">
          <div className="bg-white p-4 drop-shadow-xl m-5 cursor-pointer" onClick={() => router.push('/certification?certynumber=0')}>
            <Image src={'/GPCB-Recognized.png'} alt="GPCB-Recognized" height={200} width={150} />
          </div>
          <div className="bg-white p-4 drop-shadow-xl m-5 cursor-pointer" onClick={() => router.push('/certification?certynumber=1')}>
            <Image src={'/NABL-certificate-home.png'} alt="NABL-certificate" height={200} width={150} />
          </div>
          <div className="bg-white p-4 py-10 drop-shadow-xl m-5 cursor-pointer" onClick={() => router.push('/certification?certynumber=2')} >
            <Image src={'/iso_certy.png'} alt="iso-certificate" height={300} width={150} />
          </div>
        </div>
      </div>

      {/* Meet the team */}
      <div>
        <div className="text-xl md:text-4xl font-bold text-center mb-10">
          <div className="flex justify-center ">
            <p className="relative font-serif">
              Meet the Team
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
        <div className="flex flex-wrap md:mx-20 justify-center md:py-10 md:h-[30rem] space-x-2 md:space-x-0">
          <div className="basis-1/4  text-center ">
            <img className=" rounded-full shadow-2xl w-28 md:w-80 peer mx-auto" src={'/team/piyush.png'} alt="Team Member Piyush Bhalani Pic" />
            <div className="opacity-0 peer-hover:opacity-100 md:mt-4 transition-opacity ease-in-out duration-300">
              <p className="text-[11px] md:text-xl font-bold font-lato">Mr. Piyush Bhalani</p>
              <p className="text-[8px] md:text-sm font-light">Project Consultant</p>
            </div>
          </div>
          <div className="basis-1/4 text-center ">
            <img className=" rounded-full shadow-2xl w-28 md:w-80 peer mx-auto" src={'/team/divyesh.png'} alt="Team Member Divyesh Rokad Pic" />
            <div className="opacity-0 peer-hover:opacity-100 md:mt-4 transition-opacity ease-in-out duration-300">
              <p className="text-[11px] md:text-xl font-bold font-lato">Mr. Divyesh Rokad </p>
              <p className=" text-[8px] md:text-sm font-light">Chem Engineer Cum Quality Manager</p>
            </div>
          </div>
          <div className="basis-1/4 text-center ">
            <img className=" rounded-full shadow-2xl w-28 md:w-80 peer mx-auto" src={'/team/paras.png'} alt="Team Member Paras Suvagiya Pic" />
            <div className="opacity-0 peer-hover:opacity-100 md:mt-4 transition-opacity ease-in-out duration-300">
              <p className="text-[11px] md:text-xl font-bold font-lato">Mr. Paras Suvagiya</p>
              <p className=" text-[8px] md:text-sm font-light">Sales & Marketing</p>
            </div>
          </div>
          <div className="basis-1/4 text-center ">
            <img className=" rounded-full shadow-2xl w-28 md:w-80 peer mx-auto" src={'/team/vishal.png'} alt="Team Member Vishal Vaghasiya Pic" />
            <div className="opacity-0 peer-hover:opacity-100 md:mt-4 transition-opacity ease-in-out duration-300">
              <p className="text-[11px] md:text-xl font-bold font-lato">Mr. Vishal Vaghasiya</p>
              <p className=" text-[8px] md:text-sm font-light">Lab Head Cum Technical Manager</p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div>
        <div className="text-xl md:text-4xl font-bold text-center flex justify-center">
          <p className="relative font-serif">
            Testimonials
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
        <div className="flex space-x-3 my-3 flex-col md:flex-row font-lato">
          <div className="basis-1/4 bg-gray-900 text-white flex flex-col justify-center rounded-full md:rounded-r-full md:rounded-l-none mb-3 mx-1">
            <Image src={'/footer-logo.svg'} alt='logo' width={300} height={150} className='mb-5 md:mb-10 mx-auto mt-4' />
            <p className="text-center text-lg md:text-2xl font-semibold font-serif mb-10">
              What our Clients have to say...
            </p>
          </div>
          <div className="basis-3/4 flex flex-wrap justify-center gap-3">
            <div className="bg-white md:basis-[30%] mr-3 md:mr-0 p-4 rounded-tr-10xl rounded-bl-10xl relative shadow-lg">
              <div className="w-full h-full bg-[#23ae51] -z-10 top-0 left-0 absolute rounded-bl-3xl rounded-tr-3xl"></div>
              <Image src={'/quotes-icon.png'} alt='quotes Icon' width={40} height={50} className="" />
              <p className="text-sm md:text-base">
                The staff is the best to work with! They are very talented and patient to work with. They have enhanced technologies in the field of Environmental Services in ETP, STP, Scrubber Designing modification and recommendation for us for the last 2 years and we will continue to use them in the future. I would recommend them to anyone looking for a good Environmental Consultancy partner!
              </p>
              <p className="text-right font-semibold">- HITESH RANA</p>
              <p className="text-right text-xs font-thin">EHS OFFICER - SUBHASRI PIGMENT PVT LTD</p>
            </div>
            <div className="bg-white md:basis-[30%] mr-3 md:mr-0 p-4 rounded-tr-10xl rounded-bl-10xl relative shadow-lg">
              <div className="w-full h-full bg-[#23ae51] -z-10 top-0 left-0 absolute rounded-bl-3xl rounded-tr-3xl"></div>
              <Image src={'/quotes-icon.png'} alt='quotes Icon' width={40} height={50} />
              <p className="text-sm md:text-base">
                We have used Perfect Pollution Services Environmental on several occasions they have always delivered a professional yet simplistic service with knowledgeable and friendly staff at a competitive price.                  </p>
              <p className="text-right font-semibold  ">- Mr. RABINDRA RANA</p>
              <p className="text-right text-xs font-thin ">KRISHNA MARUTI LTD - UNIT OF MARUTI SUZUKI</p>
            </div>
            <div className="bg-white md:basis-[30%] mr-3 md:mr-0 p-4 rounded-tr-10xl rounded-bl-10xl relative shadow-lg">
              <div className="w-full h-full bg-[#23ae51] -z-10 top-0 left-0 absolute rounded-bl-3xl rounded-tr-3xl"></div>
              <Image src={'/quotes-icon.png'} alt='quotes Icon' width={40} height={50} />
              <p className="text-sm md:text-base">
                The entire ECPCCS team is outstanding. Their professionalism & competency is evident from the minute they answer our call. We have a great working relationship with them and look forward to working with them in the years to come.                 </p>
              <p className="text-right font-semibold">- Mr. Nishikant Tayde</p>
              <p className="text-right text-xs font-thin">BANSWARA SYNTEX LTD - GM of Surat Division</p>
            </div>
            <div className="bg-white md:basis-[30%] mr-3 md:mr-0 p-4 rounded-tr-10xl rounded-bl-10xl relative shadow-lg">
              <div className="w-full h-full bg-[#23ae51] -z-10 top-0 left-0 absolute rounded-bl-3xl rounded-tr-3xl"></div>
              <Image src={'/quotes-icon.png'} alt='quotes Icon' width={40} height={50} />
              <p className="text-sm md:text-base">
                I received full support to implement of Effluent Treatment Scheme and project consulting of streamline. I was greatly impressed with the team's efficient, friendly and informative approach.              </p>
              <p className="text-right font-semibold">- Mr. Rajesh Patel</p>
              <p className="text-right text-xs font-thin">EHS Head - Chemie Synth Group</p>
            </div>
            <div className="bg-white md:basis-[30%] mr-3 md:mr-0 p-4 rounded-tr-10xl rounded-bl-10xl relative shadow-lg">
              <div className="w-full h-full bg-[#23ae51] -z-10 top-0 left-0 absolute rounded-bl-3xl rounded-tr-3xl"></div>
              <Image src={'/quotes-icon.png'} alt='quotes Icon' width={40} height={50} />
              <p className="text-sm md:text-base">
                We have carry out wastewater design and other environmental work for us for the last number of years and have found them to be very professional and easy to work with. ECPCCS provides a high quality and detailed service. I would have no hesitation in recommending their services                 </p>
              <p className="text-right font-semibold">- Mr. Harsh Bhavsar</p>
              <p className="text-right text-xs font-thin">EHS Head - Mr. Evonic Specialty Silica India Pvt Ltd</p>
            </div>

          </div>
        </div>
      </div>

      {/* Infrastructure */}
      <div id="infrastructure" className="my-5">
        <div className="text-xl md:text-4xl font-bold text-center flex justify-center mb-4">
          <p className="relative font-serif">
            Infrastructure Gallary
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
        <InfraGallary />
      </div>
    </div>
  );
}
