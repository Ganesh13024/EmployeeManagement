import React from "react";
import Sample from "../assets/sample.mp4"

const Analystics =()=>{
    return(
        <div className="w-full bg-white py-16 px-6">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <video src={Sample} controls width='500px' className="mx-auto my-4"></video>
                <div className="flex flex-col justify-center">
                    <h1 className="text-[#87CEEB] font-bold md:text-4xl sm:text-3xl text-2xl py-2">A whole world of freelance talent at your fingertips</h1>
                    <ul className="list-disc">
                        <li className="p-2 font-bold md:text-3xl sm:text-2xl text-xl">The best for every budget</li>
                        <p className="text-gray-500">Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                        <li className="p-2 font-bold lis md:text-3xl sm:text-2xl text-xl">Quality work done quickly</li>
                        <p className="text-gray-500">Find the right freelancer to begin working on your project within minutes.</p>
                        <li className="p-2 font-bold md:text-3xl sm:text-2xl text-xl">Protected payments, every time</li>
                        <p className="text-gray-500">Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                        <li className="p-2 font-bold md:text-3xl sm:text-2xl text-xl">24/7 support</li>
                        <p className="text-gray-500">Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </ul>
                    <button className="text-[#87CEEB] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">Get Started</button>
                </div>
            </div>
        
        </div>
    )
}

export default Analystics;