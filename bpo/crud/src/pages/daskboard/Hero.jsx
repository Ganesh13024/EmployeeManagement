import React from "react";
import Typed from "react-typed";

const Hero = () =>{
    return(
        <div className="text-white bg-black">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#87CEEB] font-bold md:text-4xl sm:text-3xl text-xl p-2">Find The Perfect <i>Freelance</i></p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">services for your business</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        Fast , Secure ,Best Outsourcing site for 
                    </p>
                    <Typed className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-600" strings={['MultiMedia','Poster Designing','Programming&Technical','Photo Editing','Digital Marketing','Video Editing']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 mt-10">Find the talent needed to get your business growing.</p>
                <button className="bg-[#87CEEB] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
            </div>
        </div>
    )
}

export default Hero;