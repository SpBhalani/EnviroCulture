"use client"
import { useState } from "react";
import axios from "axios"
interface ContactFormInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  description: string;
}
interface ErrorType {
  email: string;
  phone: string;
  description: string
}
export default function ContactUs
  () {
  const [formData, setFormData] = useState<ContactFormInput>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    description: '',
  });
  const [errors, setErrors] = useState<ErrorType>();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    let tempErrors = {
      email: "",
      phone: "",
      description: ""
    };
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Email is not valid.';
    tempErrors.phone = /^[0-9]{10}$/.test(formData.phoneNumber) ? '' : 'Phone number is not valid.';
    tempErrors.description = formData.description.length > 10 ? '' : 'Description must be at least 10 characters.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return
    }
    // Here you would handle form submission, e.g., sending data to an API
    setIsLoading(true)
    try {
      const res = await axios.post('/api/send-mail', {
        text: `
          <h2> Message from User </h2>
          <p>
          <b>Client Name:</b > ${formData.firstName} ${formData.lastName}
          </p>
          <p>
          <b>Contact No.:</b > ${formData.phoneNumber}
          </p>
          <p>
          <b>Email:</b > ${formData.email}
          </p>
          <p>
          <b>Message:</b > ${formData.description}
          </p>
        `
      })
      if (res.data === "Success") {
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          description: '',
        })
        window.alert("We recieved your message. Team will reach you out soon!")
      }
      else {
        console.log(res.data)
        window.alert("Something went wrong")
      }
    }
    catch (e) {
      console.log(e)
    }
    setIsLoading(false)
  };


  return (
    <div>
      <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/contact-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>Contact Us</p>
          <p className='text-xl font-light text-center text-white'>Why wait! Get in touch right away, and we will assist you in solving your queries and concerns.</p>
        </div>
      </div>

      {/* title */}

      <div className="text-xl md:text-4xl font-bold text-center mt-5 -mb-5">
        <div className="flex justify-center ">
          <p className="relative font-serif">
            Information
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

      {/* form */}

      <div className=" my-20 flex flex-col space-y-3 md:flex-row w-full">
        <div className="md:basis-1/2 px-5 md:px-40">
          <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-md shadow">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-green-700">First Name</label>
              <input type="text" name="firstName" id="firstName" required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange} value={formData.firstName} />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-green-700">Last Name</label>
              <input type="text" name="lastName" id="lastName" required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange} value={formData.lastName} />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-green-700">Phone Number</label>
              <input type="tel" name="phoneNumber" id="phoneNumber" required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange} value={formData.phoneNumber} />
              {errors?.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-700">Email</label>
              <input type="email" name="email" id="email" required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange} value={formData.email} />
              {errors?.email && <p style={{ color: 'red' }}>{errors.email}</p>}

            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-green-700">Description</label>
              <textarea name="description" id="description" required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                onChange={handleChange} value={formData.description}></textarea>
              {errors?.description && <p style={{ color: 'red' }}>{errors.description}</p>}
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer">
              {isLoading ? "Sending..." : "Contact Us"}
            </button>
          </form>
        </div>
        <div className="basis-1/2 flex justify-center">

          <img className="p-4" src={"/contact-img.png"} alt="Contact Page Banner Image" />
        </div>
      </div>

      {/* title */}

      <div className="text-xl md:text-4xl font-bold text-center mt-5">
        <div className="flex justify-center ">
          <p className="relative font-serif">
            Get in touch
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
      {/* contact Info */}
      <div className="flex flex-col items-center space-y-5 md:flex-row md:justify-center mb-5">
        <div className="basis-[30%] text-center">
          <img src={'/phone.svg'} alt="phone Icon" className="mx-auto mb-3" />
          <p className="font-bold">+91 90334 43485 , +91 99247 04478</p>
          <p className="font-bold">+91 90993 58575 , +91 86909 04188</p>
        </div>
        <div className="basis-[30%]">
          <img src={'/location.svg'} alt="Location Icon" className="mx-auto mb-3" />
          <p className="text-center font-bold"> 342 & 234, &quot;Polaris&quot;, Opp. Bhaiya Nagar
            BRTS, Parvat Patiya Canal Road,
            Puna Gam, Surat - 395010</p>
        </div>
        <div className="basis-[30%]">
          <img src={'/email.svg'} alt="Email Icon" className="mx-auto mb-3" />
          <p className="text-center font-bold">info.enviroculture@gmail.com<br />
            lab.enviroculture@gmail.com</p>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19238.345125617852!2d72.874737!3d21.200068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa379727861%3A0x7630343fc14d5ee9!2sEnviro%20Culture%20Pollution%20Control%20Consultant%20Services!5e1!3m2!1sen!2sin!4v1704201719896!5m2!1sen!2sin" className="w-full h-96 mb-5" allowFullScreen style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      {/* <Map lat={0} lng={0}/> */}
    </div>
  );
}
