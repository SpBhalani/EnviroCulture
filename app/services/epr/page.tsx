export default function EPR
    () {
    return (
        <div>
            <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/contact-banner.png")` }}>
                {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
                <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
                <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
                {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
                <div className=' mx-1 md:mx-20 p-4'>
                    <p className='text-3xl font-bold text-center text-white'>EPR</p>
                    <p className='text-xl font-light text-center text-white'>Extended Producer Responsibility</p>
                </div>
            </div>
            <div className=" my-20 mx-5 md:mx-40">
                <div className="font-lato my-8">
                    <p className=" text-gray-600">The responsibility of the Producer/Brand
                        Owner/Importer is to ensure the processing
                        of plastic waste generated due to plastic
                        packaging of products introduced by them in
                        the market.</p>
                </div>
                <div className="font-lato my-8">
                    <p className=" text-gray-600">TYPES OF PLASTICS COVERED UNDER EPR FOR PLASTIC PACKAGING</p>
                    <ol>
                        <li>Category I: Rigid plastic packaging</li>
                        <li>Category II: Flexible plastic packaging of single layer or multilayer (more than one layer with different types of plastic), plastic sheets or like and covers made of plastic sheets, carry bags, plastic sachet or pouches;</li>
                        <li>Category III: Multilayered plastic packaging (at least one layer of plastic and at least one layer of material other than plastic)</li>
                        <li>Category IV: Plastic sheet or like used for packaging as well as carry bags made of compostable plastics.</li>
                    </ol>
                </div>
                <div className="font-lato my-8">
                    <p className=" text-gray-600">ENTITY COVER UNDER EPR</p>
                    <ol>
                        <li>Producer: Manufacturer of Plastic Packaging.</li>
                        <li> Brand Owner: A person or company who sales any commodities under a Registered Brand Label/ Trade Mark (Note*: Micro and Small Scale Brand Owners are Exempted).</li>
                        <li>Importer: Importer of Plastic Packaging or Products with plastic packaging.</li>
                    </ol>
                </div>
                <div className="font-lato my-8">
                    <p className=" text-gray-600">EPR TARGET OF PIBO</p>
                    <ol>
                        <li>EPR Target Calculation Formula for Producers and Importers is</li>
                        <li> A+B-C</li>
                        <li>EPR Target Calculation Formula for Brand Owners is</li>
                        <li>A+B</li>
                    </ol>
                    Where<br />
                    A: Average quantity of post-consumer plastic
                    packaging waste (Category-wise) in the last two F.Y <br />
                    B: Average quantity of pre-consumer plastic packaging
                    waste (Category-wise) in the last two F.Y <br />
                    C: Quantity supplied to the registered entities in the
                    last two F.Y
                </div>
            </div>
        </div>
    );
}
