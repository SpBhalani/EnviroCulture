import Image from "next/image";


const LOGOS = [
  <Image src={'/clients/image2.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image3.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image4.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image5.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image6.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image7.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image8.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image9.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image10.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image11.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image12.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image13.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image14.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image15.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image16.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image17.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image18.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image19.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image20.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image21.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image22.png'} alt="Client Logo" height={100} width={100}/>,
  <Image src={'/clients/image23.png'} alt="Client Logo" height={100} width={100}/>,
];
const ClientCarousel = () => {

  return (
    <div className=" shadow-2xl md:opacity-60 relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*30)] space-x-16 py-10">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ClientCarousel;

