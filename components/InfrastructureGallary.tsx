"use client"
import { useState } from "react";

const InfraGallary = () => {
    const [lab, setLab] = useState(true)

    return (
        <div>
            <div className="flex justify-center mx-2">
                <div onClick={() => setLab(true)} className={`hover:cursor-pointer shadow-md hover:shadow-lg px-16 py-2 text-xl font-semibold rounded-3xl transition-colors ease-in-out delay-200 ${lab ? 'bg-[#23ae51]' : 'bg-white'}`}>Lab</div>
                <div onClick={() => setLab(false)} className={`hover:cursor-pointer shadow-md hover:shadow-lg px-16 py-2 mx-2 text-xl font-semibold rounded-3xl transition-colors ease-in-out delay-200 ${!lab ? 'bg-[#23ae51]' : 'bg-white'}`}>Office</div>
            </div>
            {
                lab
                    ?
                    <div className="grid grid-cols-3 m-10">
                        <div className="p-1 space-y-2">
                            <img src={'/infrastructure/lab1.jpeg'} alt="Lab" className="md:opacity-70 md:hover:opacity-100" />
                            <img src={'/infrastructure/lab2.jpeg'} alt="Lab" className="md:opacity-70 md:hover:opacity-100" />
                            <img src={'/infrastructure/lab6.jpeg'} alt="Lab" className="md:opacity-70 md:hover:opacity-100" />
                        </div>
                        <div className="p-1 space-y-2">
                            <img src={'/infrastructure/lab8.jpeg'} alt="Lab" className="md:opacity-70 md:hover:opacity-100" />
                            <img src={'/infrastructure/lab5.jpeg'} alt="Lab" className="md:opacity-70 md:hover:opacity-100" />
                            <img src={'/infrastructure/lab3.jpeg'} alt="Lab" className="md:opacity-70 md:hover:opacity-100" />
                        </div>
                        <div className="p-1 space-y-2">
                            <img src={'/infrastructure/lab7.jpeg'} alt="Lab" className="md:opacity-70 md:hover:opacity-100" />
                            <img src={'/infrastructure/lab4.jpeg'} alt="Lab" className="md:opacity-70 md:hover:opacity-100" />
                            <img src={'/infrastructure/lab9.jpeg'} alt="Lab" className="md:opacity-70 md:hover:opacity-100" />
                        </div>
                    </div>
                    :
                    <div className="grid grid-cols-5 gap-2 m-10">
                        <img src={'/infrastructure/office1.jpeg'} alt="Office" className="md:opacity-70 md:hover:opacity-100" />
                        <img src={'/infrastructure/office2.jpeg'} alt="Office" className="md:opacity-70 md:hover:opacity-100" />
                        <img src={'/infrastructure/office4.jpeg'} alt="Office" className="md:opacity-70 md:hover:opacity-100" />
                        <img src={'/infrastructure/office5.jpeg'} alt="Office" className="md:opacity-70 md:hover:opacity-100" />
                        <img src={'/infrastructure/office6.jpeg'} alt="Office" className="md:opacity-70 md:hover:opacity-100" />
                    </div>
            }
        </div>
    );
};

export default InfraGallary;

