import React from "react";
import Graphics from "../assets/graphics.svg"
import Business from "../assets/business.svg"
import Marketing from "../assets/digitalmarketing.svg"
import Music from "../assets/musicaudio.svg"
import Programming from "../assets/programming.svg"
import Videoediting from "../assets/videoanimation.svg"
const Cards = () =>{
    return(
        <div className="w-full py-[10rem] px-4 bg-white">
            <h1 className="text-3xl font-bold text-center py-8">Explore the marketplace</h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8 mt-8">
                <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src={Graphics} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                    <h2 className="text-2xl font-bold text-center py-8">Graphics & Designing</h2>
                    <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">Logo & Brand Identity</p>
                    <p className="py-2 border-b mx-8">Web & App Design</p>
                    <p className="py-2 border-b mx-8">Art & Illustration</p>
                    <p className="py-2 border-b mx-8">Marketing Design</p>
                    </div>
                    <button className="bg-[#87CEEB] w-[150px] rounded-md font-medium my-16 p mx-auto md:mx-0  py-3 text-black">See Full Info</button>
                    
                </div>
                <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100">
                    <img src={Business} alt="/" className="w-20 mx-auto mt-[-3rem] bg-transparent"/>
                    <h2 className="text-2xl font-bold text-center py-8">Business</h2>
                    <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">Business</p>
                    <p className="py-2 border-b mx-8">General and Administrative</p>
                    <p className="py-2 border-b mx-8">Sales & Customer Care</p>
                    <p className="py-2 border-b mx-8">Miscellaneous</p>
                    </div>
                    <button className="text-[#87CEEB] w-[150px] rounded-md font-medium my-32 mx-auto md:mx-0 py-3 bg-black">See Full Info</button>
                </div>
                <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src={Marketing} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                    <h2 className="text-2xl font-bold text-center py-8">Digital Marketing</h2>
                    <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">Search</p>
                    <p className="py-2 border-b mx-8">Social</p>
                    <p className="py-2 border-b mx-8">Advertising</p>
                    <p className="py-2 border-b mx-8">Industry & Purpose-specific</p>
                    </div>
                    <button className="bg-[#87CEEB] w-[150px] rounded-md font-medium my-36 mx-auto md:mx-0 py-3 text-black">See Full Info</button>
                </div>
                <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100">
                    <img src={Music} alt="/" className="w-20 mx-auto mt-[-3rem] bg-transparent"/>
                    <h2 className="text-2xl font-bold text-center py-8">Music & Audio</h2>
                    <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">Music Production & Writing</p>
                    <p className="py-2 border-b mx-8">Audio Engineering & Post Production</p>
                    <p className="py-2 border-b mx-8">Voice Over & Streaming</p>
                    <p className="py-2 border-b mx-8">DJing</p>
                    </div>
                    <button className="text-[#87CEEB] w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">See Full Info</button>
                </div>
                <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img src={Programming} alt="/" className="w-20 mx-auto mt-[-3rem] bg-white"/>
                    <h2 className="text-2xl font-bold text-center py-8">Programming & Tech</h2>
                    <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">Website Development</p>
                    <p className="py-2 border-b mx-8">Application Development</p>
                    <p className="py-2 border-b mx-8">Support & Cybersecurity</p>
                    <p className="py-2 border-b mx-8">Miscellaneous</p>
                    </div>
                    <button className="my-28 bg-[#87CEEB] w-[150px] rounded-md font-medium mx-auto md:mx-0 py-3 text-black">See Full Info</button>
                </div>
                <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100">
                    <img src={Videoediting} alt="/" className="w-20 mx-auto mt-[-3rem] bg-transparent"/>
                    <h2 className="text-2xl font-bold text-center py-8">Video & Animation</h2>
                    <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">Social & Marketing Videos</p>
                    <p className="py-2 border-b mx-8">Video Editing & Post-Production</p>
                    <p className="py-2 border-b mx-8">Product & Explainer Videos</p>
                    <p className="py-2 border-b mx-8">Animation</p>
                    </div>
                    <button className="text-[#87CEEB] w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">See Full Info</button>
                </div>

            </div>
            
        </div>
    )
}

export default Cards;