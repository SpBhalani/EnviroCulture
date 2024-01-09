import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import { Separator } from './ui/separator';
const Footer = () => {
    return (
        <footer className="bg-black text-white p-5  rounded-tr-10xl bg-no-repeat bg-cover font-lato" style={{ backgroundImage: `url('/Mask_Group_24.png')` }}>
            <div className='flex flex-col md:mx-14'>
                <div className='flex md:space-x-7 md:flex-row flex-col space-y-5 '>
                    <div className='flex flex-col space-y-5 md:w-1/3 text-center md:p-20'>
                        <Image src={'/footer-logo.svg'} alt='logo' width={300} height={150} className='mb-10 mx-auto mt-4' />
                        Enviro Culture is a pollution control consultancy services provider to enhance and adhere to your business standards to stay under the compliance levied by your government to save the environment.
                    </div>
                    <div className='flex flex-col space-y-3 flex-1'>
                        <span className="font-bold">SERVICES</span>
                        <span className='hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm'>Statutory approvals</span>
                        <span className='hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm'>Laboratory</span>
                        <span className='hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm'>Third party Environmental Audit and Monitoring</span>
                        <span className='hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm'>EIA Studies</span>
                        <span className='hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm'>Waste Management</span>
                        <span className='hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm'>Scrubber Designing and Solution</span>
                    </div>
                    <div className='flex flex-col space-y-3 flex-1'>
                        <span className='font-bold'>COMPANY</span>
                        <Link href="/">
                            <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm">Home</p>
                        </Link>
                        <Link href="/services">
                            <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm">Services</p>
                        </Link>
                        <Link href="/about">
                            <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm">About Us</p>
                        </Link>
                        <Link href="/infrastructure">
                            <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm">Infrastructure</p>
                        </Link>
                        <Link href="/clients">
                            <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm">Clients</p>
                        </Link>
                        <Link href="/contact">
                            <p className="block text-white hover:text-[#23ae51] transition-colors duration-300 ease-in-out text-sm">Contact Us</p>
                        </Link>
                    </div>
                    <div className='flex flex-col space-y-4 flex-1'>
                        <span className='font-bold'>CONNECT WITH US</span>
                        <div className='text-sm flex items-center space-x-3'>
                            <span>
                                <img className='invert w-10' src={'/location.png'} alt='Location Icon'/>
                            </span>
                            <span>
                                <span className='font-semibold'>Corporate Office & Lab: </span><br />
                                342 & 234, &quot;Polaris&quot;, Opp. Bhaiya Nagar
                                BRTS, Parvat Patiya Canal Road,
                                Puna Gam, Surat - 395010
                            </span>
                        </div>
                        <div className='flex flex-col text-sm'>
                            <div className='flex items-center space-x-3'>
                                <span>
                                    <img className='invert' src={'/mail.png'} alt='Mail Icon' />
                                </span>
                                <span>
                                    info.enviroculture@gmail.com
                                    lab.enviroculture@gmail.com
                                </span>
                            </div>
                            {/* <div className='flex items-center'>
                                <span>
                                <img className='invert' src={'/mail.png'}/>
                                </span>
                                <span>
                                    lab.enviroculture@gmail.com
                                </span>
                            </div> */}
                        </div>
                        <div className='flex  space-x-5 text-sm'>
                            <div>
                                Corporate Office<br />
                                +91 90334 43485<br />
                                +91 99247 04478
                            </div>
                            <div>
                                Lab Office<br />
                                +91 90993 58575<br />
                                +91 86909 04188
                            </div>
                        </div>

                    </div>
                </div>
                {/* Separator */}
                <Separator className="my-4 bg-white opacity-40" />
                {/* Lower */}
                <div className='flex justify-evenly mx-5 flex-col space-y-4 md:flex-row'>
                    
                    <div className='flex space-x-5 flex-1 justify-center' >
                        <a className='p-2' href='https://www.instagram.com/enviro_culture_2018/' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 102 102" id="instagram"><defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#fa8f21"></stop><stop offset=".78" stopColor="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"></stop><stop offset="1" stopColor="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18" transform="translate(-422.637 -426.196)"></path></svg>
                        </a>
                        <a className='p-2' href='https://www.indiamart.com/enviroculturepollutioncontrol/' target='blank'>
                            <img src={'/indiamart.png'} alt='indiamart Icon' className='w-[30px] h-[30px]'/>
                        </a>
                        <a className='p-2' href='https://www.linkedin.com/in/enviro-culture-a70a74243/' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 72 72" id="linkedin"><g fill="none" fillRule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></g></svg>
                        </a>
                        <a className='p-2' href='https://www.instagram.com/enviro_culture_2018' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="Facebook" viewBox="0 0 512 512" width="30" height="30"><rect width="512" height="512" fill="#1877f2" rx="15%" className="color1877f2 svgShape"></rect><path fill="#ffffff" d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z" className="colorfff svgShape"></path></svg>
                        </a>

                    </div>
                </div>
                    <div className='flex-1 text-sm text-center mt-5'>
                        Copyright © 2024 Enviro Culture. All Rights Reserved.
                    </div>
            </div>
            <div className='text-xs text-center'>Website developed by <span className=' text-gray-500 p-1 rounded-full'>Smit Bhalani</span></div>
        </footer>
    )
};


export default Footer;
