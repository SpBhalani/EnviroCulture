export default function PollutionControlAndTreatment() {
  return (
    <div>
      <div className="bg-cover bg-center py-40 relative after:bg-[#1111114d] before:bg-opacity-50" style={{ backgroundImage: `url("/contact-banner.png")` }}>
        {/* <div className="bg-cover bg-center absolute top-0 left-0 z-10" style={{ backgroundImage: `url("/banner-overlay.png")` }}></div> */}
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-25'  > </div> */}
        <div className=' mx-1 md:mx-20 p-4'>
          <p className='text-3xl font-bold text-center text-white'>Pollution Control and Treatment</p>
          {/* <p className='text-xl font-light text-center text-white'>(As per Air Act:- 1981, Water Act: 1974 NOC, CC&A)</p> */}
        </div>
      </div>
      <div className=" my-20 mx-5 md:mx-40">
        <div className="font-lato my-8">
          <p className=" text-gray-600">Enviro Culture provides management services to control and treat the pollution that may be a side-effect of your project. We deal in controlling and treating every possible contamination that are linked to air, water, and hazardous waste that are threats to the environment.</p>
        </div>
        <div className="font-lato my-8">
          <p className="text-2xl font-bold">Air Pollution Control and Treatment Services</p>
          <p className=" text-gray-600"><span className="font-bold text-black">Air Pollution Control Measurement Supplier:</span> The measures to minimize or remove the substances from the atmosphere that harm the environment or human health are known as air pollution control techniques. The air pollution control is one of the primary pollution control for which any government body is primarily concerned.</p><br />
          <p className=" text-gray-600">We also supply a range of products such as for APCM multi-cyclone separator, bag filter, water scrubber, teema cyclone separator, alkali scrubber, and other all possible outcomes to control or treat the pollution caused by your project.</p><br />
          <p className=" text-gray-600"><span className="font-bold text-black">Third party Audit & Monitoring:</span> The air pollution caused by the pollutants emitted from the industrial activities and manufacturing processes must always be controlled and treated.</p>
          <p className=" text-gray-600">Enviro Culture chimes in to assist you with pollution control and treatment services.</p>
        </div>
        <div className="font-lato my-8">
          <p className="text-2xl font-bold">Water Pollution Control and Waste Water Management</p>
          <p className=" text-gray-600">Enviro Culture provides assistance and products for wastewater management. Our solutions and products are efficient enough and most cost-effective and competitive ones in the current fast-paced market. We are leading providers of STP (Sewage Treatment Plants), ETP (Effluent Treatment Plants), and RO plants. Whether it be an water quality management or filtration and pollution control units that include sand filter, carbon filter, multi-effect evaporator or ultra-filtration units - we have it all!</p>
        </div>
        <div className="font-lato my-8">
          <p className="text-2xl font-bold">STP&apos;s (Sewage Treatment Plants)</p>
          <p className=" text-gray-600">Our solutions to wastewater management include the sewage treatment plants that can be utilized in any environment. This is to remove the solids, organic matters, and such pollutants from the wastewater that is released from STP. Whether they are involved in manufacturing, hospitality, etc. or the wastewater from residences. Our plants are very compact and can be operated easily by the clients. Our STP are manufactured by our team of experts, and they efficiently comply with the industrial norms and guidelines. The materials used in manufacturing are of high quality.</p>
        </div>
        <div className="font-lato my-8">
          <p className="text-2xl font-bold">ETP&apos;s (Effluent Treatment Plants)</p>
          <p className=" text-gray-600">The effluent treatment plants are manufactured to reduce the industrial waste in the water that is released by the process of manufacturing etc. The residues disbursed in the water by industries is also known as effluent. The effluent may include oils, gas, toxic materials such as cyanides, etc. Our ETP plants is included various physical and chemical processes to control and treat the wastewater from the industrial sectors.</p><br />
          <p className=" text-gray-600">There are four types of treatment involved in effluent treatment plants. The preliminary treatment is stationed to remove the contaminants that are large in terms of size. The process includes screening, sedimentation, grit chambers. The next stage is known as the primary treatment that provides for flocculation, coagulation, neutralizers, and primary clarifiers. The following is a biological treatment that accommodates the processes such as activated sludge process, aerated lagoons, trickling filters, and rotating biological contactor. The final stage is known as an advanced disinfection system that includes chemical coagulation and sedimentation, filtration, reverse osmosis, and ultraviolet disinfection.</p><br />
          <p className=" text-gray-600">The effluent treatment plants can help reduce the usage of freshwater in the industrial projects. The wastewater is treated and recycled for reuse in the same or other processes in the industries. Our experts built the effluent treatment plants to meet the standard emission of pollutants allowed in the water by government bodies.</p>
        </div>
        <div className="font-lato my-8">
          <p className="text-2xl font-bold">Operation and Maintenance</p>
          <p className=" text-gray-600">We also supply operation and maintenance services to the wastewater management plants and ETP treatment chemicals. We have range of products to fulfill your maintenance on the existing projects with pollution control plants.</p><br />
          <img src={'/services-contact.jpeg'} alt="Services Banner" className="md:w-1/2 mx-auto"/> <br />
          <p className=" text-gray-600">Get in touch with our experts to get the right deal in the market!</p>
        </div>
        <div className="font-lato my-8">
          <p className="text-2xl font-bold">RO Plants</p>
          <p className=" text-gray-600">RO Plants, also known as reverse osmosis plants, are an effective way to revert the taste, odor, and appearance of the water. This method of water purification is an efficient method in which the water is pressurized and passed through a semipermeable layer of membrane, sediment and carbon filter, etc. so that the impurities are separated from the water. This method has the capability of eliminating dissolved salts, fluorides, chlorine, chloramine, detergents, nitrates, sulfates, and microorganisms from the water.</p><br />
          <p className=" text-gray-600">The components and its quality used in the RO plant is the main factor that affects the quality of water since there are low-quality components that are cost-effective, along with compromises in the quality of water.</p>
        </div>
      </div>
    </div>
  );
}
